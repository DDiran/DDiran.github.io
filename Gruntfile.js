'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);
    // Require mozjpeg
    // const mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configurable paths | <%= ddlawson.app %>/
        ddlawson: {
            app: 'app',
            dist: 'dist'
        },

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuildNServe: {
                command: 'bundle exec jekyll serve'
            },
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        // Watch for file changes
        watch: {
            any: {
                files: ['assets/**/*', '_layouts/*', '_includes/*'],
                tasks: ['build'],
                options: { livereload: true }
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
          }
        },

        // Clean Dist dirs before build
        clean: {
            assets: ['dist/**/*'],
            site: ['docs/**/*'],
        },

        // JS Uglify Plugins
        uglify: {
            target: {
              files: {
                'dist/js/bundle.min.js': [
                'assets/js/jquery-3.1.1.min.js',
                'assets/js/popper.min.js',
                'assets/js/mdb.min.js',
                'assets/js/*.js'
                ],
              }
            }
          },

        // CSS Min Plugins
        cssmin: {
          target: {
            files: [{
              'dist/css/bundle.min.css': [
                'assets/css/bootstrap.min.css',
                'assets/css/mdb.min.css',
                'assets/css/font-awesome.min.css',
                'assets/css/*.css'
                ],
            }]
          }
        },

        // Image compression
        imagemin: {
            options: {
                progressive: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/img',
                    src: '**/*.{jpg,jpeg,png,gif}',
                    dest: 'dist/img',
                }]
            }
        },

        // SVG Compression
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/img',
                    src: '**/*.svg',
                    dest: 'dist/img',
                }]
            }
        },


        // Minify HTML
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: [{
                  expand: true,
                  cwd: 'docs',
                  src: ['**/*.html', '!perf/**/*.html'],
                  dest: 'docs'
        }]
            }
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },

        // uncss: {
        //     dist: {
        //         files: [{
        //             nonull: true,
        //             src: ['http://localhost:8080/'],
        //             dest: 'dist/css/tidy.css'
        //         }]
        //     }
        // }

    });

    // Register the grunt serve only task
    grunt.registerTask('serve-only', [
        'shell:jekyllServe'
    ]);

    // Register the grunt development task
    grunt.registerTask('serve', [
        'build',
        'shell:jekyllBuild',
        'shell:jekyllServe',
    ]);

    // TESTING UNCSS
    grunt.registerTask('test', [
        'shell:jekyllBuild'
    ]);

    // Register the grunt run task
    grunt.registerTask('build', [
        'clean',
        'uglify',
        'cssmin',
        'copy',
        'imagemin',
        'svgmin',
        'htmlmin'
        
    ]);

    // Register run as the default task fallback
    grunt.registerTask('default', 'serve');

    // Load Grunt Tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin')

};