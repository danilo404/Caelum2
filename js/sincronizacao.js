$("#sync").click(function(){

	   //código omitido. Apenas adicione as novidades abaixo

	   $.ajax({

	   	    url:"https://ceep.herokaup.com/cartoes/salvar"
	   	    ,method: "POST"
	   	    ,data: mural,success: function(res){

	   	    	 //novidade aqui
	   	    	 $("#sync").addClass("botaoSync--sincronizado")
                      console.log(res.quantidade + "cartoes salvos em " + resultado);

                  }

                  ,error: function(){



                   //novidade aqui
                   $("#sync").addClass("botaoSync--deuRuim");
                   console.log("Não foi possível salvar o mural");

              							 }


               ,complete: function(){

                       $("#sync").removeClass("botaoSync--esperando");


                   }

               });

	});