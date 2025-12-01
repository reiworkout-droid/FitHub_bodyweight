    
    // 日付のセレクトボックス
    function selectBoxCreate(start, end) {
    let str ="";
    for(let i=start; i<end; i++){
        str += `<option>${i}</option>`;
    }
    return str;
}

    const year = selectBoxCreate(2025,2030);
    const month = selectBoxCreate(1,13);
    const date = selectBoxCreate(1,32);

    $('#year').html(year);
    $('#month').html(month);
    $('#day').html(date); 

const set =
`<div class="maintext">
    <div class="weight-wrap">
        <textarea class="weight"></textarea>
        <p class="kg">kg</p>
    </div>
    <div class="rep-wrap">
        <textarea class="rep"></textarea>
        <p class="count">回</p>
    </div>
    <p class="max">RM<span class="maxcal">0</span>kg</p>
</div>`;


// 動的追加：イベントデリゲーションで対応
$(document).on('click', '.addset', function(){
    $(this).closest('.setbutton').before(set);
});

    
// ------ 種目追加（ID→class） ------
const form =
`<div class="textarea">
    <div class="SBD">
        <div class="sbd">
            <select name="menu" class="menu">
                <option value="" disabled selected>選択してください</option>
                <option value="sq">スクワット</option>
                <option value="bp">ベンチプレス</option>
                <option value="dl">デッドリフト</option>
            </select>
        </div>
    </div>

    <div class="maintext">
        <div class="weight-wrap">
            <textarea class="weight"></textarea>
            <p class="kg">kg</p>
        </div>
        <div class="rep-wrap">
            <textarea class="rep"></textarea>
            <p class="count">回</p>
        </div>
        <p class="max">RM<span class="maxcal">0</span>kg</p>
    </div>

    <div class="setbutton">
        <button class="addset">＋</button>
    </div>
</div>`;

$('.addform').on('click',function(){
    $('.addform').before(form);
});


// ---------- 保存処理（複数フォーム対応） ----------
$('#save').on('click',function(){
    const y = $('#year').val();
    const m = $('#month').val();
    const d = $('#day').val();

    const dateSelect = `${y}-${m}-${d}`;
    const memories = [];

    $('.textarea').each(function() {
        const menu = $(this).find('.menu').val();

        // この textarea 内の全てのセットを取得
        $(this).find('.maintext').each(function() {
            const weight = $(this).find('.weight').val();
            const rep = $(this).find('.rep').val();
            if(weight && rep){
                const w = Number(weight);
                const r = Number(rep);
                const max = w * r / 40 + w;

                // RM表示も更新
                $(this).find('.maxcal').text(max);

                memories.push({
                    date: dateSelect,
                    menu,
                    weight,
                    rep,
                    max
                });
            }
        });
    });


    // // ボタンクリックでセットを追加
    // const set = '<div id="maintext"><div id="weight"><textarea class="weight"></textarea><p class="kg">kg</p></div><div id="rep"><textarea class="rep"></textarea><p class="count">回</p></div><p class="max">RM<span id="maxcal">0</span>kg</p></div>'
    
    // $('.addset').on('click', '.addset', function(){
    //     $('.addset').before(set);
    // });

    // // ボタンクリックで種目を追加
    // const form = '<div class="textarea"><div id="sbd"><select name="menu" class="menu"><option value="" disabled selected>選択してください</option><option value="sq">スクワット</option><option value="bp">ベンチプレス</option><option value="dl">デッドリフト</option></select></div><div id="maintext"><div id="weight"><textarea class="weight"></textarea><p class="kg">kg</p></div><div id="rep"><textarea class="rep"></textarea><p class="count">回</p></div><p class="max">RM<span id="maxcal">0</span>kg</p></div><div align="center" id="setbutton"><button class="addset">＋</button></div></div>'

    // $('#addform').on('click',function(){
    //     $('#addform').before(form);
    // });

    // 数値を保存する箱
    // const dates =[];
    // const menus =[];
    // const weights =[];
    // const reps =[];
    // const rm =[];

    // // セーブのクリックアクション
    // $('#save').on('click',function(){
    //     const y = $('#year').val();
    //     const m = $('#month').val();
    //     const d = $('#day').val();

    //     const dateSelect = `${y}-${m}-${d}`;
    //     const memory = {
    //         date: dateSelect,
    //         menu: $('.menu').val(),
    //         weight: $('.weight').val(),
    //         rep: $('.rep').val()
    //     }
    //     console.log(memory);



        // const w = Number(memory.weight);
        // const r = Number(memory.rep);

        // // RM計算
        // const max = (w)*(r)/40+(w)
        // console.log(max);

        // // RM表示
        // $('#maxcal').html(max);

        // // ログを追加
        // dates.push(memory.date);
        // menus.push(memory.menu);
        // weights.push(memory.weight);
        // reps.push(memory.rep);
        // rm.push(max);


        // json
        const json = JSON.stringify(memories);
        console.log(json);

        // localStrageに追加
        localStorage.setItem('memory',json);
        alert("保存しました");
    });

    $('#clear').on('click',function(){
        localStorage.removeItem("memory");
        localStorage.removeItem("rm");
        alert("削除しました");

        $('#menu').val('');
        $('#weight').val('');
        $('#rep').val('');
        $('#year').val('');
        $('#month').val('');
        $('#day').val('');


        $('#menu2').val('');
        $('#weight2').val('');
        $('#rep2').val('');

        $('#menu3').val('');
        $('#weight3').val('');
        $('#rep3').val('');

    });
