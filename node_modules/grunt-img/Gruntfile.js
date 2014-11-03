module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        img: {
            dir: {
                src: 'tests/img',
                dest: 'tests/optimg'
            }
        },
        watch: {
            files: '<config:lint.grunt>',
            tasks: 'lint:grunt'
        },
        jshint: {
            files: ['Gruntfile.js', 'tasks/*.js'],
            options: {
                es5: true,
                node: true,
                curly: false,
                eqeqeq: true,
                immed: true,
                latedef: false,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true
            }
        },
        // create version tag and push it
        release: {
          options: {
            npm: false,
            tagName: 'v<%= version %>',
            commitMessage: 'bump version <%= version %>',
            tagMessage: 'create tag v<%= version %>'
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-release');
    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['jshint','img']);
};
