// 履歴を残す箱
const history = [];

// saveクリックで保存
$('#save').on('click',function(){
    const body_weight = {
        date: $('#date').val(),
        weight: $('#weight').val(),
    };
    console.log(body_weight);
});