'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllRun: {
                command: 'bundle exec jekyll serve'
            }
        },

        // Clean Dist dirs before build
        clean: {
            dist: {
                js: ['dist/js/*', '!dist/js/*.min.js'],
                css: ['dist/css/*', '!dist/css/*.min.css']
            }
        },

        // Concatenate all JS and CSS files
        concat: {
            options: {
                stripBanners: {
                    options: {
                        block: true,
                        line: true
                        },
                    }
                },
            js: {
                src: ['assets/js/*.js'],
                dest: 'dist/js/bundle.js'
            },

            css: {
                src: ['assets/css/*.css'],
                dest: 'dist/css/bundle.css'
            }
        },

        // JS Uglify Plugins
        uglify: {
            target: {
              files: {
                'dist/js/bundle.min.js': ['dist/js/bundle.js']
              }
            }
          },

        // CSS Min Plugins
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'dist/css',
              src: ['bundle.css'],
              dest: 'dist/css',
              ext: '.min.css'
            }]
          }
        }

    });

    // Register the grunt serve only task
    grunt.registerTask('serve', [
        'shell:jekyllRun'
    ]);

    // Register the grunt run task
    grunt.registerTask('run', [
        'concat',
        'uglify',
        'cssmin',
        'clean',
        'shell:jekyllRun'
    ]);

    // Register run as the default task fallback
    grunt.registerTask('default', 'serve');

    // Load Grunt Tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};