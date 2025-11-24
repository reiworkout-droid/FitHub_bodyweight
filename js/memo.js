    $('#save').on('click',function(){
        const m = $('#menu1').val();
        localStorage.setItem("menu",m);
        const w = $('#weight1').val();
        localStorage.setItem("weight",w);
        const r = $('#rep1').val();
        localStorage.setItem("rep",r);

        const m2 = $('#menu2').val();
        localStorage.setItem("menu2",m2);
        const w2 = $('#weight2').val();
        localStorage.setItem("weight2",w2);
        const r2 = $('#rep2').val();
        localStorage.setItem("rep2",r2);

        const m3 = $('#menu3').val();
        localStorage.setItem("menu3",m3);
        const w3 = $('#weight3').val();
        localStorage.setItem("weight3",w3);
        const r3 = $('#rep3').val();
        localStorage.setItem("rep3",r3);

        alert("保存しました");
        console.log(m)
    });

    $('#clear').on('click',function(){
        localStorage.removeItem("menu");
        localStorage.removeItem("weight");
        localStorage.removeItem("rep");

        localStorage.removeItem("menu2");
        localStorage.removeItem("weight2");
        localStorage.removeItem("rep2");

        localStorage.removeItem("menu3");
        localStorage.removeItem("weight3");
        localStorage.removeItem("rep3");

        alert("削除しました");
        $('#menu1').val('');
        $('#weight1').val('');
        $('#rep1').val('');

        $('#menu2').val('');
        $('#weight2').val('');
        $('#rep2').val('');

        $('#menu3').val('');
        $('#weight3').val('');
        $('#rep3').val('');

    });
