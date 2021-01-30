//= require 'spree/backend/codemirror/codemirror'
//= require 'spree/backend/codemirror/ruby'
//= require 'spree/backend/codemirror/selection-pointer'
//= require 'spree/backend/codemirror/show-hint'
//= require 'spree/backend/codemirror/markdown'
//= require 'spree/backend/codemirror/fullscreen'
//= require 'spree/backend/codemirror/closetag'
//= require 'spree/backend/codemirror/closebrackets'
//= require 'spree/backend/codemirror/matchtags'

//= require 'spree/backend/codemirror/css'
//= require 'spree/backend/codemirror/css-hint'

//= require 'spree/backend/codemirror/javascript'
//= require 'spree/backend/codemirror/javascript-hint'

//= require 'spree/backend/codemirror/htmlmixed'
//= require 'spree/backend/codemirror/html-hint'

//= require 'spree/backend/codemirror/vbscript'
//= require 'spree/backend/codemirror/xml'
//= require 'spree/backend/codemirror/xml-fold'

function SpreeCodeMirror(target_id) {
  this.init = function() {
    this.initializeEditor();
  }

  this.initializeEditor = function() {
    var codeMirror = CodeMirror.fromTextArea(document.getElementById(target_id), {
      lineNumbers: true,
      htmlMode: true,
      autoCloseTags: true,

      matchTags: {
        bothTags: true
      },

      extraKeys: {
        "Ctrl-J": "toMatchingTag",
        "Ctrl-Enter": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
      },

      mode: {
        name: "htmlmixed",
        globalVars: true
      }

    });
    codeMirror.setSize($('.admin-editor-section').height(), 500);
  }
}
