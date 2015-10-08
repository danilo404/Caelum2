
$("#pegaInfo").click(function(){
        $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",function(res){

        	console.log(res);


        })


 });
