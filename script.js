
const toDosList = document.getElementById("offeneAufgaben");
const toDoForm = document.getElementById("eingabeFeld");
const done = document.getElementById("erledigteAufgaben")

toDoForm.querySelector("button").addEventListener("click", function() {   
  const toDoItem = document.createElement("li");
  toDoItem.textContent = toDoForm.querySelector("input").value;
  toDosList.appendChild(toDoItem);
  
  const removeButton = document.createElement("button");
  removeButton.textContent = "Löschen!";
  removeButton.setAttribute("type", "button");
  removeButton.onclick = function() { 
    this.parentElement.remove();
  }
  toDoItem.appendChild(removeButton);

  const doneButton = document.createElement("button")
  doneButton.textContent = "Erledigt!"
  doneButton.setAttribute("type", "button")
  doneButton.onclick = function() { 
      this.parentElement.remove();
      done.appendChild(this.parentElement);  
  }
  toDoItem.appendChild(doneButton)
});

function verstecken() {
    var x = document.getElementById("offeneAufgaben");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}






