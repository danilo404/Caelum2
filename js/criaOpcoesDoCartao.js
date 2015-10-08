var CriaOpcoesDoCartao = (function(){

	"use strict"

	//função remove e Toggle

	function opcoesDeCoresDoCartao(idDoCartao)

	 var cores = [
 				
 				{nome: "Padrão", codigo:"#EBEF40"}
 				,{nome: "Importante", codigo:"#F05450"}
 				,{nome: "Tarefa", codigo:"#92C4EC"}
 				,{nome: "Inspiração", codigo:"92C4EC"}

 				];


 				var opcoesDeCor = $("<>").addClass("opcoesDoCartao-cores");
 				 	cores.forEach(function(cor){


 				 		var idInputCor = "cor" + cor.nome + "-cartao" + idDoCartao;
 				 		var inputCor = $("<input>").attr("type","radio")
 				 								 	.attr("name","corDoCartao" + idDoCartao)
 				 								 	.val(cor.codigo)
 				 								 	.attr("id", idInputCor)
 				 								 	.addClass("opcoesDoCartao-radioCor");


 									var labelCor = $("<label>").css("color", cor.codigo)
 																.attr("for" idInputCor)
 																.attr("tabindex", 0)
 																.addClass("opcoesDoCartao-cor")
 																.addClass("opcoesDoCartao-opcao")
 																.text(cor.nome);


 								opcoesDeCor.data("id",idDoCartao).append(inputCor).append(labelCor);


 							});


 				 	return opcoesDeCor;

 				 }




 				 return function(idNovoCartao){


 				 	//código de criação dos botões remove e edita

 				 	var opcoesDeCor = opcoesDeCoresDoCartao(idNovoCartao);

 				 	return $("<div>").addClass("opcoesDoCartao")
 				 					.append(botaoRemove)
 				 					.append(botaoEdita)
 				 					.append(opcoesDeCor);


 				 				}



 				 			})();









var CriaOpcoesDoCartao = (function(){


	      "use strict"

	      function removeCartao(){

	      	var cartao = document.querySelector("#cartao_" +this.dataset.id);
	      		cartao.ClassList.add("cartao--some");
	      		setTimeout(function(){

	      			cartao.remove();
	      			$(document).trigger("precisaSincronizar");
	      		},400;
	      	}

	      	return function(idNovoCartao){

	      		var botaoRemove = $("<button>").addClass("opcoesDoCartao-remove")
	      										.addClass("opcoesDoCartao-opcao")
	      										.attr("data-ref",idNovoCartao)
	      										.text("Remover")
	      										.click(removeCartao);


	      							var opcoes = $("<p>").addClass("opcoesDoCartao")
	      												.appen(botaoRemove);


	      												return opcoes

	      											}

	      										})();

 var criaOpcoesDoCartao = (function(){

  "use strict"

      function removeCartao(){
      var cartao = document.querySelector("#cartao_" + this.dataset.id);
      cartao.classList.add("cartao--some");


 			//Tira da página depois da animação
          setTimeout(function(){
                cartao.remove();
                  },400);
        }

var ehPraEditar = false;
function toggleEdicao(){

	 			var cartao = $("#cartao_" + this.dataset.id);
	 			var conteudo = cartao.find(".cartao-conteudo");


	 			if(ehPraEditar){

	 				ehPraEditar = false;
	 				conteudo.attr("contenteditable",false);
	 				conteudo.blur();
	 			}else {
	 				ehPraEditar = true;
	 				conteudo.attr("contenteditable",true);
	 				conteudo.focus();
	 			}

	 		}

	 		return function(idNovoCartao) {

	 			var botaoRemove = //código do botaoRemove

	 			var botaoEdita = $("<button>").addClass("opcoesDoCartao-edita")
	 										.addClass("opcoesDoCartao-opcao")
	 										.attr("data-ref", idNovoCartao)
	 										.text("Editar")
	 										.click("toggleEdicao");


	 							var opcoes = $("<p>").addClass("opcoesDoCartao")
	 												 .append(botaoRemove)
	 												 .append(botaoEdita);


	 												 return opcoes
	 											}



	 						} ) ();



