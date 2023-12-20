// This function adds a new task when the user presses the enter key
$(".txtd").on("keyup",function(e){
    // 13 means enter button
    if(e.keyCode==13 && $(".txtd").val() != "" ){
      var task = $("<div class='task'></div>").text($(".txtd").val());
      $(".notcomp").append(task);
      $(".txtd").val("");
    }
  });
  
     // This function adds a new task when the user clicks on the button
  $(".btn").click(function(){
    // Check if the input field is not empty
    if($(".txtd").val() != "" ){
      var task = $("<div class='task'></div>").text($(".txtd").val());
      var del =$("<i class='fas fa-trash-alt'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
            p.remove();
        })
      });
      var check =$("<i class='fas fa-check'></i>").click(function(){
        var p = $(this).parent();
        p.fadeOut(function(){
            $(".comp").append(p);
            p.fadeIn();
        });
$(this).remove()
      });
      task.append(del,check);

      $(".notcomp").append(task);
      $(".txtd").val("");
    }
  });
  