'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});

	require('load-grunt-tasks')(grunt);
    require('load-grunt-config')(grunt);

//	grunt.registerTask('prod', ['requirejs:prod']);
	grunt.registerTask('prod', ['clean','copy:dev']);
	grunt.registerTask('dev', ['clean','requirejs:dev']);
//	grunt.registerTask('watch', ['copy:dev','serve','watch']);

};
