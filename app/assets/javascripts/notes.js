// $(function() {
//   attachListeners()
// })
//
// const attachListeners = () => {
//
//   $('.all-notes').on('click', (e) => {
//     e.preventDefault()
//     let userID = $(e.target).attr("data-id")
//     history.pushState(null, null, `/users/${userId}/notes`)
//     getNotes(userId)
//   })
//
//   $('#new-note-form').submit(function(e) {
//     e.preventDefault()
//
//     $.ajax ({
//       type: "POST",
//       url: $(this).att('action'),
//       data: $('this').serialize(),
//       dataType: "JSON",
//       success: function(note) {
//         showNote(note.user.id, note.id)
//       }
//     })
//   })
//
//   $(document).on('click', '.show-note', (e) => {
//     e.preventDefault()
//     let userId = $(e.target).attr("data-user")
//     let noteId = $(e.target).attr("data-id")
//     showNote(userId, noteId)
//   })
//
//   $(document).on('click', '.next-note', (e) => {
//     e.preventDefault()
//     let userId = $(e.target).attr("data-user")
//     let noteId = $(e.target).attr("data-id")
//     fetch(`${noteId}/next.json`)
//     .then(res => res.json())
//     .then(note => {
//       showNote(note.user.id, note.id)
//     })
//   })
//
//
//
//   function Note(note) {
//     this.id = note.id
//     this.body = note.body
//     this.userId = note.user.id
//     this.name = note.name
//   }
//
//   Note.prototype.formatShow = function() {
//     let noteHtml = `
//     `
//   }
// }
