module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      target: {
        command: 'svgo -f original/serie-a/ -o compressed/serie-a --multipass -p 2 && svgo -f original/serie-b/ -o compressed/serie-b --multipass -p 2 && svgo -f original/europa/ -o compressed/europa --multipass -p 2' 
      },
      options: {
        stdout: true
      }
    },

    svgstore: {
      dist: {
        files: {
          'build/serie-a-defs.svg': ['compressed/serie-a/*.svg'],
          'build/serie-b-defs.svg': ['compressed/serie-b/*.svg'],
          'build/europa-defs.svg': ['compressed/europa/*.svg']
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
          src: ['**/*.svg'], 
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