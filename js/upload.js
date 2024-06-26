$(document).ready(function(){
    var fileArr = [];
    $("#images").change(function(){
    
       if (fileArr.length > 0) fileArr = [];
     
        $('#output').html("");
        var total_file = document.getElementById("images").files;
        if (!total_file.length) return;
        for (var i = 0; i < total_file.length; i++) {
          /*if (total_file[i].size > 1048576) {
            return false;
          } else {*/
            fileArr.push(total_file[i]);
            $('#output').append('<div class="item w3" id="img-div'+i+'"><div class="itemr item-cont"><div class="image-block"><div class="preview-image opt" style="background-image: url('+URL.createObjectURL(event.target.files[i])+');"></div></div></div></div>');
          /*}*/
        }
        console.log(fileArr);
    });

    function FileListItem(file) {
        file = [].slice.call(Array.isArray(file) ? file : arguments)
        for (var c, b = c = file.length, d = !0; b-- && d;) d = file[b] instanceof File
        if (!d) throw new TypeError("expected argument to FileList is File or array of File objects")
        for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(file[c])
        return b.files
    }

    /*submit form sending begin*/
    /*
    $('#add-event-submit').click(function(e){
    var form_data = new FormData();
      var totalfiles = document.getElementById('images').files.length;
      console.log(document.getElementById('images').files);
      for (var index = 0; index < totalfiles; index++) {
           form_data.append("files[]", document.getElementById('images').files[index]);
      }
      
      form_data.append('user_id', $('#current-user-id').val()); //other fields
    });*/
    /*submit form end*/
  });