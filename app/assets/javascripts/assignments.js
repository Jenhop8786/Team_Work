$(function() {
  var url;
  var userAssignment = document.getElementById("user") // check if the assignment path is netsted route
  if (userAssignment === null) {
    url = "/assignments.json"
  } else {
    var userId = $('#user').attr("data-id");
    url = "/users/" + userId + "/assignments.json";
  }
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      appendAssignmentJSON(json);
    })
    .then(addEventListeners)
    .catch(function(error) {
      console.log('Error!: ', error)
    })
  function appendAssignmentJSON(json) {
      $('.loading').remove();
      // we want to find the DOM element for the div with the class assignments
      var div = $('.assignments')
      // we want to iterate over the assignments
      // debugger;
      if (json.length !== undefined) {
        for (var i = 0; i < json.length; i++) {
          appendToDOM(div, json[i]);
        }
        return;
      }
      appendToDOM(div, json);
  }

  function appendToDOM(element, assignment) {
    element.append(`
      <p><a href="/assignments/${assignment.id}" >${assignment.name}</a></p>
      <p id="assignmentInfo-${assignment.id}"></p><br>
    `)

    function prependToDOM(element, assignment) {
      element.prepend(`
        <p><a href="/assignments/${assignment.id}" >${assignment.name}</a></p>
        <p id="assignmentInfo-${assignment.id}"></p><br>
      `)
    }

    $("#assignment_form").on("submit", function(event) {
      url = this.action

      var values = $(this).serialize();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UFT-8"
        }, //needed to correct Error code 422 & SyntaxError: Unexpected token < in JSON at position 0
        credentials: 'include', //needed to correct Error Code 422
        body: values
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
      console.log(json);
      var div = $('.assignments');
      prependToDOM(div, json);
      $('#assignment_form')[0].reset(); //reset the form
      $('input[data-disable-with]').removeAttr("disabled"); // re-activate the Create Assignment button
    })
    .then(addEventListeners)
    .catch(function(error) {
      console.log('Error!: ', error)
    })
    event.preventDefault();
  })
});

$(function() {
  nextAssignment();
});

function nextAssignment() {
  $(".js-next").on("click", function(event) {
    var nextId = parseInt($(".js-next").attr(data-id)) + 1;
    $.get("/assignments/" + nextId + ".json", function(assignment) {
      var entry = new ListEntry(assignment)
      $(".assignmentName").text(article["name"]);
      $("#assignmentInfo").html(entry.listAssignment() );
    });
    $(".js-next").attr("data-id", assignment["id"]);
  });
  //event.preventDefault();
}
// request task form


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
       //debugger
      var $ol = $("#task_name");
       //debugger
       $ol.append($("<p>" + "#task_name").val() + "</p>");
        $("#task_name").val("");
        $("input[name=commit]").removeAttr('disabled');
             e.preventDefault();
       }
    });
  });
});
