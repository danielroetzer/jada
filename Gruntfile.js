module.exports = function(grunt){
    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Compiling Less into CSS
        less:{
            compile:{
                files:{
                    //Destination   :   Source
                    'public/css/jada.css' : 'src/less/jada.less'
                }
            }
        },
        //Minify the CSS
        cssmin:{
            target:{
                files:{
                    //Destination      :   Source
                    'public/css/jada.min.css' : 'public/css/jada.css'
                }
            }
        },
		
		//Minify the JS
		uglify:{
			my_target:{
				files:{
                    //Destination    :  Source
					'public/js/jada.min.js' : ['src/js/panel.js','src/js/library.js','src/js/onload.js','src/js/thumbnail.js']
				}
			}
        },
        

        //Zip compiled- & source-files for download
        compress: {
            "compiled-files": {
                options: {
                    archive: 'public/media/downloads/compiled-files.zip'
                },
                files: [
                    {
                        src: ['css/jada.min.css', 'css/jada.css', 'js/jada.min.js'],
                        dest: "",
                        filter: "isFile",
                        cwd: "public/",
                        expand: true
                    }
                ]
            },
            'source-files': {
                options: {
                    archive: 'public/media/downloads/source-files.zip'
                },
                files: [
                    {
                        src: ['js/*', 'less/*'],
                        dest: "",
                        cwd: "src/",
                        expand: true
                    }
                ]
            }
        }
    });

    //Load plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-zip-directories');

    //Default tasks
    grunt.registerTask('default',['less','cssmin','uglify','compress']);
};