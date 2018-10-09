//Load incomplete assignments info & task form without page reload
// $(function(){
//    $("a.assignment_page").on("click", function(e){
//
//      e.preventDefault();
//
//      $.ajax({
//        method: "GET",
//         url: this.href
//       }).done(function(data) {
//         //get response here
//         $("div.assignments").html(response)
//         //load data into the DOM(add to current page)
//       });
//     });
//   });

//hide task form until clicked
// $(function() {
//   $('#new_task').hide();
//
//   $('#add_task').click(function() {
//     $('#new_task').show();
//   });
// });
// }

//Submit task using Ajax
$(function(){
  $("#new_task").on("submit", function(e){
    e.preventDefault();

    $.ajax({
      type: this.method,
      url: this.action,
      data: $(this).serialize(),
        error: function(xhr, ajaxOptions, thrownError){
          alert(xhr.status);
          alert(thrownError);
        },
       success: function() {
         $("input[name=commit]").removeAttr('disabled');
//debugger
         var $ol = $("#task_name");
         //debugger
          $ol.append($("#task_name").val());
           $("#task_name").val("");
             //e.preventDefault();
       }
    });
  });
});
