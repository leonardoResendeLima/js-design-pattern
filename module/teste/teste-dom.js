var testeDom = (function () {

	(function init() {
		$("#botao").on('click', function () {
			_aplicarValorDeInputNoDom();
		})
	})();

	function metodoPublico() {
		return ""
	}

	function _aplicarValorDeInputNoDom() {
		var valor = $("#input").val();
		var valorAlterado = gateway.testeController.adicionarFrase(valor)
		$("#texto").append(valorAlterado);
	}

	return {
		metodoPublico: metodoPublico
	}
}());