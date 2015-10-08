document.querySelector("#mudaLayout").addEventListener("click", function(){

	//pega o elemento com a classe="mural"
	var mural = document.querySelector(".mural");



	//Tira ou coloca a classe
	mural.classList.toggle("mural--linhas");

	if(mural.classList.contains("mural--linhas")){
						this.textContent = "Blocos";

	}	else {
		this.textContent = "Linhas";
	}
});



var botoes = document.querySelectorAll(".opcoesDoCartao-remove");

for(var i = 0;i < botoes.length;i++){
	botoes[i].addEventListener("click", removeCartao);
};

function adicionaCartao(conteudo, cor) {


          contador++;

          var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
                                         .attr("data-ref", contador)
                                         .text("Remover")
                                         .click("removeCartao");


           		var opcoes = $("<div>").addClass("opcoesDoCartao")
           							.append(botaoRemove);

           			var tipoCartao = decideTipoCartao(conteudo);

           				var conteudoTag = $("<p>").addClass("cartao-conteudo")
           										.append(conteudo);

           				$("<div>").attr("id","cartao_" + contador)
           				          .addClass("cartao")
           				          .addClass(tipoCartao)
           				          .append(opcoes)
           				          .append(conteudoTag)
           				          .css("background-color", cor)
           				          .prependTo(".mural");

	return adicionaCartao;

}


      function removeCartao(){
      var cartao = document.querySelector("#cartao_" + this.dataset.id);
      cartao.classList.add("cartao--some");


 			//Tira da página depois da animação
          setTimeout(function(){
                cartao.remove();
                  },400);
        }


        //Pega os botões
        var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
        for (var i = 0; i < botoes.length; i++){

        		//adiciona o evento em cada botão
        		botoes[i].addEventListener("click", removeCartao);


        			};


$(".novoCartao").submit(function(event){
           		var campoConteudo = $(".novoCartao-conteudo");
           		   	var conteudo = campoConteudo.val().trim();

           		   	if(conteudo){


           		   		var conteudoTag = $("<p>").addClass("cartao-conteudo")
           		   									.append(conteudo);


           		   					$("<div>").addClass("cartao")
           		   							.append(conteudoTag)
           		   							.prependTo(".mural");

           		   						}


           		   						campoConteudo.val("");
 										event.preventDefault();

 									});




$(".novoCartao").submit(function(event){
	 		var campoConteudo = $(".novoCartao-conteudo");
	 		  	var conteudo = campoConteudo.val().trim();

	 		  	if(conteudo){

	 		  		//cria o botão de remover 
	 		  		var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
	 		  										.text("Remover")
	 		  										.click(removeCartao);



	 		  		//cria a div de opcoes
	 		  		 var opcoes = $("<div>").addClass("opcoesDoCartao")
	 		  		 						.append(botaoRemove);

	 		  		 						var conteudoTag = $("<p>").addClass("cartap-conteudo")
	 		  		 												.append(conteudo);



	 		  		 			//acrescenta o append para colocar a div opcoes no cartão

	 		  		 		$("<div>").addClass("cartao")
	 		  		 					.append(opcoes)
	 		  		 					.append(conteudoTag)
	 		  		 					prependTo(".mural");


	 		  		 				}


	 		  		 				campoConteudo.val("");

	 		  		 				event.preventDefault();

	 		  		 			});





$("#pegaInfo").click(function(){
        $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",function(res){

        	console.log(res);


        })


 });


$("pegaInfo").click(function(){
	 $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes",function(res){

	 	  console.log(res);

	 	  res.instrucoes.foreach(function(instrucao){
                adicionaCartao(instrucao.conteudo, instrucao.cor);

            			});
	}	

	);

  });




$("sync").click(function(){


     var usuario = "seu.email@exemplo.com.br";
	var cartoes = [];

	          $(".cartao").each(function(){


	           var cartao = {};

	           cartao.conteudo = $(this).find(".cartao-conteudo").html();
	           cartao.push(cartao);

	       });

//escolha seu nome de usuario aqui

       var mural = {

       	            usuario: usuario
       	            ,cartoes: cartoes

       	        }


       	     $.ajax({

       	     	     url: "https://ceep.herokuapp.com/cartoes/salvar"
       	     	     ,method: "POST"
       	     	     ,data: mural
       	     	     ,sucess: function(res){
       	     	     	console.log(res.quantidade + "cartoes salvos em  " + res.usuario);

       	     	     }

       	     	   ,error: function(){


       	     	   	      console.log("Não foi possível salvar o mural");

       	     	   	  }

       	     	   	});


       	 });






$("#sync").click(function(){

	         $("#sync").removeClass("botaoSync--sincronizacao");
	         $("#sync").addClass("botaoSync--esperando");

	         //código posterior comentado

	     });

	




$.getJSON( 
	    "https://ceep.herokuapp.com/cartoes/carregar?callback=?",

	 	{usuario: usuario},

		 function(res){

	 			var cartoes = res.cartoes;
	 			console.log(cartoes.length + " carregados em " + res.usuario);
	 			cartoes.forEach(function(cartao)
	 			{
	 			adicionaCartao(cartao.conteudo);
	 		});

	       }

	 );
