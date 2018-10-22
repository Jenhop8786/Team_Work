//ES6 way of declaring an object using class constructor
class Task {
  constructor(data) {
    // this.userName = data.user.name
    this.assignmentId = data.assignment_id
    this.userId = data.user_id
    this.name = data.name
    this.completed_at = data.completed_at;
  }
  //Sets a method on object prototype to save memory
    renderTask(){
      return `<li>${this.name}</li>`
      // const $ol = $("#tasks ol");
      // $ol.append("<li>" + this.name + "</li>");
      // $("#task_name").val("");
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
$(function() {
$("#showTasks").on("click", function(e){
        e.preventDefault();
        $.ajax({
            method: 'GET',
            url: this.href + ".json",
            //data: $(this).serialize()
        }).done(function(data){
            // const $ol = $("#tasks ol")
            // $ol.html("")
            data.forEach(function(task){
              //  $ol.append(`<li> ${task.user.name} added: ${task.name} </li>`);
              return `<li>${this.name}</li>`
            })
        })
        .error(function(error){
            alert("There was an error!")
        });
    })
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
