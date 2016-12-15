module.exports = function(grunt){
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Compiling Less into CSS
        less:{
            compile:{
                files:{
                    //Destination   :   Source
                    'css/jada.css' : 'less/jada.less'
                }
            }
        },
        //Minify the CSS
        cssmin:{
            target:{
                files:{
                    //Destination      :   Source
                    'css/jada.min.css' : 'css/jada.css'
                }
            }
        },
		
		//Minify the JS
		uglify:{
			my_target:{
				files:{
                    //Destination    :  Source
					'js/jada.min.js' : ['js/panel.js','js/library.js','js/onload.js','js/jada2.js']
				}
			}
		}
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

    //This Tasks will be done
    grunt.registerTask('default',['less','cssmin','uglify']);
};