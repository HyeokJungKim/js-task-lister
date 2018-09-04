document.addEventListener("DOMContentLoaded", () => {
  const task1 = new Task("Learn Javascript")
  const form = document.querySelector("#create-task-form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let input = form.querySelector("#new-task-description")
    const task = new Task(input.value)
    const tasks = document.getElementById('tasks')
    tasks.append(task.renderLi())
    input.value = ""
  })
});
