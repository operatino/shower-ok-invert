module.exports = function(grunt) {
    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // measuring processing time
    require('time-grunt')(grunt);

    // Tasks
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'styles/screen.css': 'styles/screen.scss',
                    'styles/screen_43.css': 'styles/screen_43.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    // Init server-side
    grunt.registerTask('default', ['sass']);
};