class Task {
  constructor(data) {
    this.userName = data.user.name
    this.assignmentId = data.assignment_id
    this.userId = data.user_id
    this.name = data.name
    this.completed_at = postedTime(data.completed_at);
  }

   addTaskToAssignment(){
     return `<li><p>${task.name}</p><b>${this.completed_at}</b></li>`
   }

}

 function showAllTasks(path) {
   $.getJSON(path.success)(function(data) {
     const tasks = data.map( taskJSON => {
       const taskObj = new Task(taskJSON)
       return taskObj.addTaskToAssignment()
     })
     $(#task_name).val("")
     $('.taskAssignment').html(`<ul>${tasks.reverse().join('')}</ul>`)
   })
 }

  function newTask(e) {
    e.preventDefault()
    const path = this.action
    $.post(path, $(this).serialize(), function(data) {

      showAllTasks(path)
    })
  }

  function showTasks(e){
    e.preventDefault()
    showAllTasks(this.href)
  }

  function postedTime(completed_at){
    date = new Date(completed_at)
    return date.toLocaleString()
  }
