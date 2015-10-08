var controladorDeCartoes = (function(){

           "use strict" 
           


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
                                            .attr("contenteditable", true)
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

 return {


           adicionaCartao: adicionaCartao
           ,idUltimoCartao: function(){

            return contador;

          }

        })();


var intervaloSyncEdicao;

  function editaCartaoHandler(event){


          clearTimeout(intervaloSyncEdicao);
          intervaloSyncEdicao = setTimeout(function(){


            $(document).trigger("precisaSincronizar");
          }, 1000);


        }
