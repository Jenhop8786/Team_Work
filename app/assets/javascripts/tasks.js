// $(function() {
//   $("#new_task").on("submit", function(event) {
//       const data = $(this).serialize();  // serialize method creates a text string in standard URL encoded notation
//       $.ajax({
//           type: "POST",
//           url: this.action,
//           data: data,                         // form data
//           success: function(response) {
//               $("#task_name").val("");  // empty out text area
//               let $ol = $("div.tasks ol")
//               $ol.append(response);
//           }
//       })
//       event.preventDefault();
//   })
// })
