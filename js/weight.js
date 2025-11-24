// 1.履歴を残す箱
const labels = [];//日付
const weights = [];//体重
const BMI = [];//BMI

// 体重の推移
const ctx = document.getElementById("mychart");   
console.log(ctx);

const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets:[{
        label: '体重（kg）',
        data: weights,
        borderColor: '#0000FF',
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMin: 60,
                suggestedMax: 90,
                ticks: {
                    stepSize: 5,
                }
            }

        }
    }
});

// BMIの推移
const ctx2 = document.getElementById("mybmi");   
console.log(ctx2);

const lineChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: labels,
        datasets:[{
        label: 'BMI（%）',
        data: BMI,
        borderColor: '#00CC00',
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMin: 18,
                suggestedMax: 25,
                ticks: {
                    stepSize: 0.5,
                }
            }

        }
    }
});


// saveクリックで保存
$('#save').on('click',function(){
    const bodyWeight = { 
        date: $('#date').val(), //id=dateのデータを取得
        weight: $('#weight').val(), //id=weightのデータを表示   
        height: $('#height').val(), //id=heightのデータを表示
    };
    console.log(bodyWeight);

    // 2.履歴を残す
    labels.push(bodyWeight.date);
    weights.push(bodyWeight.weight);

    // // 3.履歴を画面に表示するためのタグを入れる配列を用意する
    // const bodyWeightHtml= [];

    // // 4.繰り返し処理を用いて1の配列からデータを取り出し、タグに入れて2の配列に追加する。繰り返しの回数には配列の長さを活用する
    // for (let i = 0; i < labels.length; i++){
    //     bodyWeightHtml.push('<p>' + labels[i] + ':' + weights[i] + 'kg' + '</p>');
    // };

    // // 箱の中を表示
    // $('#history').html(bodyWeightHtml);

    // グラフ更新
    lineChart.update();

    // jsonに変換
    const json = JSON.stringify(bodyWeight);
    console.log(json);

    // ローカルストレージに残す
    localStorage.setItem('memo',json);

    // データを数値に変換
    const w = Number(bodyWeight.weight);
    const h = Number(bodyWeight.height);

    // BMIの計算
    const bmi = w / (h/100) **2;
    // BMIの表示
    $('#BMI').html('<p>BMI:' + bmi.toFixed(2) + '%</p>');
    
    //BMIの履歴を残す
    BMI.push(bmi);

    //グラフに表示
    lineChart2.update();

});

    // クリアボタン押したらローカルストレージから削除、画面からも消す
$('#clear').on('click',function(){
    localStorage.removeItem('memo');
    $('#date').val('');
    $('#weight').val('');
});

    // 読み込み時にデータ取得
if(localStorage.getItem('memo')){
    const json = localStorage.getItem('memo');
    console.log(json);

    // オブジェクトに戻す
    const bodyWeight = JSON.parse(json);
    $('#date').val(bodyWeight.date);
    $('#weight').val(bodyWeight.weight);
    console.log(bodyWeight);
}

