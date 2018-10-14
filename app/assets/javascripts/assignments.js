class AssignmentShow {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.complete = data.complete
    this.incomplete = data.incomplete
    this.userId = data.user.id
  }
}


function addNewTasks() {
    $("#new_task").on("submit", function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: this.action,
            data: $(this).serialize(),
            success: function(response) {
                $("#task_name").val("");
                var $ol = $("div.tasks ol");
                $ol.append(response);
            }
        });
    });
}
