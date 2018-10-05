//Load/show Assignments without page reload
/*$(function(){
 $("a.assignments").on("click", function(e){
  $.ajax({
    url: this.href,
    dataType: 'script'
  })
    e.preventDefault();
  });
 });
 */

//Submit task using Ajax
$(function(){
  $("#new_task").on("submit", function(e){
 // (this) is where the URL is submitting POST request to
  e.preventDefault();

   $.ajax({
     type: this.method,
     url: this.action,
     data: $(this).serialize(),
       error: function(xhr, ajaxOptions, thrownError){
       alert(xhr.status);
       alert(thrownError);
   },

     success: function(response){
       $("input[name=commit]").removeAttr('disabled');

        var $ol = $(".tasks");
         $ol.append("<p>" + $("#task_name").val() + "</p>");
          $("#task_name").val("");
      }
   });
    //e.preventDefault();
  });
});
