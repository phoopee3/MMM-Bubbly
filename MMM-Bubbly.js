'use strict';

Module.register("MMM-Bubbly", {

	jsonData: null,

	// Default module config.
	defaults: {
		
	},

	start: function () {
		bubbly(this.config);
	},

	// Override dom generator.
	getDom: function () {
		
	},

	getScripts: function () {
		return [
			'https://cdn.jsdelivr.net/npm/bubbly-bg@1.0.0/dist/bubbly-bg.js',  // this file will be loaded from the jquery servers.
		]
	},

	getStyles: function() {
		return [
			'bubbly-style.css',
		]
	}



});