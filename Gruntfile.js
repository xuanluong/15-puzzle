module.exports = function(grunt) {

	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    concat: {
			options: {
				separator: '\n'
			},
			js: {
		      	src: [
					'src/js/board.js',
					'src/js/controllers.js',
					'src/js/filters.js',
					'src/js/directives.js',
					'src/js/app.js'
				],
				dest: 'build/js/<%= pkg.name %>.js'
		    },
		},
		cssmin: {
			add_banner: {
				options: {
				  banner: '/* My minified css file */'
				},
				files: {
				  'build/css/style.min.css': 'src/css/style.css',
				  'build/css/bootstrap.min.css': 'lib/css/bootstrap.css'
				}
			}
		},
		jshint: {
			files: ['gruntfile.js', 'src/js/*.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true
				}
			}
		},
		qunit: {
			all: {
				options: {
					urls: [
						'http://localhost:8888/test/js/test.html',
						'http://localhost:8888/test/js/testBoard.html'
					]
				}
		    }
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.registerTask('default', ['jshint','qunit','concat','cssmin']);
};