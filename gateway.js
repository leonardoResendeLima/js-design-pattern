var gateway = (function () {

	return {
		analytics: {
			inserirAnalytics: analyticsController.inserirAnalytics,
		},
		teste: {
			dom: {
				aplicarValorDeInputNoDom: testeDom.aplicarValorDeInputNoDom
			},
			controller: {
				htmlzar: testeController.htmlzar
			},

		}
	}
})();