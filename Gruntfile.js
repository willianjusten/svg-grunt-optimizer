module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      target: {
        command: 'svgo -f original/ -o compressed/ --multipass -p 2'
      },
      options: {
        stdout: true
      }
    },

    svgstore: {
      dist: {
        files: {
          'build/svg-defs.svg': ['compressed/*.svg']
        },
      },
      options: {
        cleanup: true
      }
    },
    svg2png: {
      dist: {
        files: [{ 
          flatten: true,
          cwd: 'compressed/', 
          src: ['*.svg'], 
          dest: 'png' }
        ]
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-svg2png');

  // svg tasks
  grunt.registerTask('svg', ['shell', 'svgstore', 'svg2png']);
};