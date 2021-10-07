Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'cyberpunk-red-babele-es',
			lang: 'es',
			dir: 'compendium'
		});
	}
});
