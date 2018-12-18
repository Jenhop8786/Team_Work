// Render html document before callback function triggers
$(document).on('turbolinks:load', function() {
  attachListeners();
});

const attachListeners = function() {

// $("#new_assignment").on("submit", function(e) {
//       //prevent form from submitting the default way
//       e.preventDefault();
//
//   var values = $(this).serialize();
//   var posting = $.post('/assignments', values);
//
//   posting.done(function(data) {
//     var assignment = data;
//     $("#assignmentName").text(assignment["name"]);
//     $("#assignmentDueDate").text(assignment["due_date"]);
//   });
//     });
//  });


//Declaring object using ES6 version
  class Task {
    constructor(task) {
      this.name = task.name;
      this.user = task.user;
    }
//Set method on object prototype
    renderTask() {
      //return `<li>${task.name}</li>`
      const $ol = $("#tasks ol");
      $ol.append("<li>" + this.name + "</li>");
      $("#task_name").val("");
    }
   }

//Create and post a task using Ajax
  $("#new_task").on("submit", function(e) {
    e.preventDefault();

    $.ajax({
      type: ($("input[name='_method']").val() || this.method),
      url: this.action + ".json",
      data: $(this).serialize(),
       success: function(data) {
         const task = new Task(data); //new object constructor
         $("#tasks").append(task.renderTask());
         $("#create").removeAttr('disabled');
       }
    })
    .error(function(error) {
      alert("Something is not right")
    });
  });

//use Ajax to show tasks on completed assignment show page
  $("a.show_tasks").on("click", function(e) {
    //alert("clicked")
    e.preventDefault();

    $.ajax({
      method: "GET",
      url: this.href,
    }).success(function(data) {
    //  console.log(data)
      //load that data into DOM
      $("div.taskList").html(data) //inject data into empty container
    })
    .error(function(error) {
      alert("Something is not right")
    })
   });

//Show next assignment
$(".js-next").on("click", function() {
   const nextId = parseInt($(".js-next").attr("assignment_id")) + 1;
     $.get("/assignments/" + nextId + ".json", function(data) {
       $(".assignmentName").html("Assignment:" + data["name"]);
       $(".assignmentDueDate").html("Due:" + data["due_date"]);
       $(".assignment-id").html("Assignment #:" + data["id"]);

       $(".js-next").attr("assignment-id", data["id"]);
    });
        return false
  });
  //Show previous assignment
$(".js-prev").on("click", function() {
   const nextId = parseInt($(".js-next").attr("assignment_id")) - 1;
     $.get("/assignments/" + nextId + ".json", function(data) {
       $(".assignmentName").html("Assignment: " + data["name"]);
       $(".assignmentDueDate").html("Due: " + data["due_date"]);
       $(".assignment-id").html("Assignment #: " + data["id"]);

       $(".js-prev").attr("assignment-id", data["id"]);
    });
    return false
  });



}
