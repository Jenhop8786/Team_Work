// $(document).on('turbolinks:load', function() {
//   attachListeners();
// });
//
// const attachListeners = function() {
//
// // use Jquery event handler for whn link is clicked
//   $("a.showTasks").on("click", function(e) {
//     // Get Comments via jQuery AJAX .get Method
//     $.get(this.href).success(function(json){
//       // select the div comment container
//       var $ol = $("div.comments ol")
//       //empty div container so it doesn't reload list and double comments
//       $ol.html("")
//       // call the function for each comment in the array
//       json.forEach(function(comment){
//         $ol.append(`<li> <strong> <a href='/users/${comment.user.id}'> ${comment.user.email} </a></strong>:${comment.content}</li>`);
//       })
//     })
//     e.preventDefault();
//   })
// })
//
// $(function() {
//   function Comment(data) {
//     this.id = data.id;
//     this.content = data.content;
//     this.user= data.user.email;
//   }
//
//     Comment.prototype.formatComment = function() {
//     var html = "<li> <strong> <a href='/users/"+ this.id + "'>" + this.user + "</a></strong>: "+ this.content + "</li>";
//     return html;
//   }
//
// }
