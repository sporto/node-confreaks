'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		simplemocha: {
			options: {
				globals: [],
				timeout: 3000,
				ignoreLeaks: false,
				grep: '*_test',
				ui: 'bdd'
				// reporter: 'tap'
			},
			all: { src: 'test/**/*.js' }
		},

		jshint: {
			jshintrc: ".jshintrc",
			files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('test', ['simplemocha']);
	grunt.registerTask('default', ['lint', 'test']);

};