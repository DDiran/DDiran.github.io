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
            },
            jekyllBuild: {
                command: 'bundle exec'
            }
        },

        // Watch for file changes
        watch: {
            any: {
                files: ['assets/*'],
                tasks: ['']
            }
        },

        // Copy files from assets to dist
        copy: {
          font: {
              expand: true,
              cwd: 'assets/font',
              src: '**',
              dest: 'dist/font/'
          },
          fontawesome: {
              expand: true,
              cwd: 'assets/fonts',
              src: '**',
              dest: 'dist/fonts/',
          },
          images: {
              expand: true,
              cwd: 'assets/img',
              src: '**',
              dest: 'dist/img/',
          }
        },

        // Clean Dist dirs before build
        clean: {
            js: ['dist/js/*', '!dist/js/*.min.js'],
            css: ['dist/css/*', '!dist/css/*.min.css']
            assets: ['dist/font/*', 'dist/fonts/*', 'dist/img/*']
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
                src: [
                'assets/js/jquery-3.1.1.min.js',
                'assets/js/popper.min.js',
                'assets/js/mdb.min.js',
                'assets/js/*.js'
                ],
                dest: 'dist/js/bundle.js'
            },

            css: {
                src: [
                'assets/css/bootstrap.min.css',
                'assets/css/mdb.min.css',
                'assets/css/font-awesome.min.css',
                'assets/css/*.css'
                ],
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
        },

        uncss: {
            dist: {
                files: [{
                    nonull: true,
                    src: ['http://localhost:8080/'],
                    dest: 'dist/css/tidy.css'
                }]
            }
        }

    });

    // Register the grunt serve only task
    grunt.registerTask('serve', [
        'shell:jekyllRun'
    ]);

    // TESTING UNCSS
    grunt.registerTask('test', [
        'shell:jekyllBuild',
        'uncss'
    ]);

    // Register the grunt development task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'shell:jeky'
    ]);

    // Register the grunt run task
    grunt.registerTask('build-production', [
        'copy',
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
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');
};