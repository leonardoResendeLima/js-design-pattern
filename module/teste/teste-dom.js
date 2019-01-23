var testeDom = (function () {

	var aplicarValorDeInputNoDom = function () {
		var valor = $("#input").val();
		var valorAlterado = gateway.teste.controller.htmlzar(valor)
		$("#texto").append(valorAlterado);
	}

	return {
		aplicarValorDeInputNoDom: aplicarValorDeInputNoDom
	}
}());