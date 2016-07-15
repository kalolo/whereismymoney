module.exports = function (grunt) {

    grunt.registerTask('sometask', 'Just checking grunt', function () {

        grunt.log.write(">> I am running!!!").ok();
    });


    grunt.initConfig({
        connect: {
            server: {
                options: {
                    protocol: 'https',
                    port: 9000,
                    hostname: '*',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};