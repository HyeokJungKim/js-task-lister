class Task {
  constructor(description){
    this.description = description
  }

  renderLi(){
    let myLi = document.createElement("li")
    let myButton = document.createElement("button")
    myLi.innerText = this.description
    myButton.innerText = "x"
    myButton.addEventListener("click", this.removeTask)
    myLi.append(myButton)
    return myLi
  }

  removeTask(){
    this.parentNode.remove()
  }
}
