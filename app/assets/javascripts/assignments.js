//ES6 way of declaring an object using class constructor
class Task {
  constructor(data) {
  //  this.userName = data.user.name
  //  this.assignmentId = data.assignment_id
  //  this.userId = data.user_id
    this.name = data.name
    this.completed_at = data.completed_at;
  }
  //Sets a method on object prototype to save memory
    renderTask(){
      const $ol = $("#tasks ol");
      $ol.append("<li>" + this.name + "</li>");
      $("#task_name").val("");
      }

  }

// $(document).on('turbolinks:load', function() {
//   attachListeners();
// })
//
//  var attachListeners = function() {

//Post a task through AJAX
$(function(){
  $("#new_task").on("submit", function(e){
    e.preventDefault();

    $.ajax({
      type:($("input[name='_method']").val() || this.method),
      url: this.action + ".json",
      data: $(this).serialize(),
      success: function(data) {

        const task = new Task(data); //creates a new object from object constructor
        $("#tasks").append(task.renderTask())
        $("input[name=commit]").removeAttr('disabled');//enable create button after submit
      }
    })
.error(function(error) {
  alert("Something is not right")
});
});
});

// Loads the next assignment page through Ajax
// $(".js-next").on("click", function() {
//         const nextId = parseInt($(".js-next").attr("assignment_id")) + 1;
//         $.get("/assignments/" + nextId + ".json", function(data) {
//             $(".assignmentHeader").html("Assignment:" + data["name"]);
//             $(".assignmentDueDate").html("Due:" + data["due date"]);
//             $(".js-next").attr("assignment-id", data["id"]);
//         });
//         return false
//       });
//   //Loads the previous assignment page through AJAX
//   $(".js-prev").on("click", function() {
//     const prevId = parseInt($(".js-prev").attr("assignment_id")) - 1;
//      $.get("/assignments/" + prevId + ".json", function(data) {
//      $(".assignmentHeader").html("Assignment:" + data["name"]);
//      $(".assignmentDueDate").html("Due:" + data["due date"]);
//      $(".js-next").attr("assignment-id", data["id"]);
//     });
//       return false
//   });
