var testeController = (function () {

	var adicionarFrase = function (valor) {
		return "Você digitou o valor : " + valor + "! <br>";
	};

	return {
		adicionarFrase: adicionarFrase
	}
}());