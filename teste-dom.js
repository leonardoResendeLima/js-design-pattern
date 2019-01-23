(function TesteDom() {

	$("#botao").on('click', function () {
		_aplicarValorDeInputNoDom();
	})

	function _aplicarValorDeInputNoDom() {
		var valor = $("#input").val();
		var valorAlterado = gateway.teste.htmlzar(valor)
		$("#texto").append(valorAlterado);
	}

}());