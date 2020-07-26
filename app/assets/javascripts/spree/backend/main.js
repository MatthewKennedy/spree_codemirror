
    function Main() {

      this.init = function() {
        this.initializeEditor();
      }

      this.initializeEditor = function() {
        var codeMirror = CodeMirror.fromTextArea(document.getElementById("code"), {
          lineNumbers: true,
          htmlMode: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
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
        codeMirror.setSize($('.admin-editor-section').width(), 800);
        codeMirror.setSize($('.admin-editor-section').height(), 600);
      }
    }

    $(document).ready(function() {
      new Main().init();
    });
