module.exports = function(grunt) {
  require('time-grunt')(grunt);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            name: 'lq',
            width: "100px",
            quality: 2,
          },{
            name: 'small',
            width: 320,
            height: 240
          },{
            name: 'large',
            width: 640
          },{
            name: "x2",
            width: 1024,
            suffix: "_x2",
            quality: 60
          }] 
        },
        files: [{
          expand: true,
          src: ['**.png'],
          cwd: 'img/orig',
          custom_dest: 'img/{%= name %}'
        }]
      }
    },

    img: {
      task1: {
        src: 'img',
        dest: 'dist/compressed'
      },
    },

    /*
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**.jpg'],
          dest: 'dist/compressed',
          ext: '.jpg'
        }]
      }
    }
   */
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-img');

  grunt.registerTask('default', ['responsive_images']);
  grunt.registerTask('img', ['img']);
};
