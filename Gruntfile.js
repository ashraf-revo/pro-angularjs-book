module.exports = function(grunt) {

    grunt.initConfig({
        replace: {
            readme: {
                src: ['README.md'],
                overwrite: true,
                replacements: [{
                    from: 'app',
                    to: 'project'
                }]
            }
        },
        shell: {
            gitAdd: {
                command: 'git add README.md'
            },
            gitCommit: {
                command: "git commit README.md -m 'Updated readme'"
            }
        },
        jshint: {
            files: [
                'app/chapter-19/*.js' // Only apply tests to angular scripts for now
            ],
            options: {
                jshintrc: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', function() {
        grunt.task.run('replace', 'shell:gitAdd', 'shell:gitCommit');
    });

    grunt.registerTask('validatejs', ['jshint']);
};