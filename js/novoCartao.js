$(".novoCartao").submit(function(event){

	var campoConteudo = $(".novoCartao-conteudo");
	 var conteudo = campoConteudo.val().trim();
	
	}

	if(conteudo){

		var conteudoTag = $("<p>").addClass("cartao-conteudo");
		 	var conteudo = campoConteudo.val().trim();
		                        

		 	if(conteudo){
                	//cria o botão de remover
                	var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
                				       .text("Remover")
                				       .click(removeCartao);

              		//cria a div de opcoes
              		var opcoes = $("<div>").addClass("opcoesDoCartao")
              					.append(botaoRemove);
              					
              		var conteudoTag = $("<p>").addClass("cartao-conteudo")
              		 			  .append(conteudo);


                //acrescenta o append para colocar a div opcoes no cartao
		$("<div>").addClass("cartao")
		 	  .append(opcoes)
		          .append(conteudoTag)
		          .prepenTo(".mural");

		
	}

	campoConteudo.val("");

	event.preventDefault();
});