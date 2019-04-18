var input = document.querySelector('.task');
var button = document.querySelector('.add');
var checklist = document.querySelector('.checklist');

// function to add a new checklist item
button.onclick = function() {

  var taskName = input.value;
  input.value = '';

  // creating the new checklist items
  var newLi = document.createElement('li');
  var span = document.createElement('span');
  var newTask = document.createElement('input');
  newTask.setAttribute('type','checkbox');

  // creating the button to remove a task
  var removeBtn = document.createElement('button');
  removeBtn.textContent = "Remove";

  // adding the task that the user inputted
  newLi.appendChild(newTask);
  newLi.appendChild(span);
  span.textContent = taskName;

  // adding the remove button to the <li>
  newLi.appendChild(removeBtn);

  // adding the <li> to the <ul>
  checklist.appendChild(newLi);

  // eventListener to cross out the task when it is checked
  newTask.addEventListener('change', (event) => {
    if(newTask.checked == true) {
      span.style.textDecoration = 'line-through';

      checklist.removeChild(newLi);
      checklist.appendChild(newLi);
    }

    else {
      span.style.textDecoration = 'none';
    }
  });

  // giving the remove button functionality
  removeBtn.addEventListener('click', (event) => {
    checklist.removeChild(newLi);
  });

}
