// Hitta viktiga element
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Lägg till event för att bocka av förinställda uppgifter
const preSetTasks = document.querySelectorAll('.complete-btn');
preSetTasks.forEach(btn => {
  btn.addEventListener('click', function() {
    btn.parentElement.classList.toggle('completed');
  });
});

// Funktion för att lägga till ny uppgift
function addTask() {
  const taskText = taskInput.value;

  // Kolla om fältet är tomt
  if (taskText === '') {
    alert('Skriv något i uppgiften!');
    return;
  }

  // Skapa en ny <li> uppgift
  const li = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Skapa bocka-av-knappen
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Bocka av';
  completeBtn.className = 'complete-btn';

  // Lägg till bocka av-funktionen
  completeBtn.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Lägg till uppgift och knapp i <li>
  li.appendChild(taskSpan);
  li.appendChild(completeBtn);

  // Lägg till <li> i listan
  taskList.appendChild(li);

  // Rensa inputfältet
  taskInput.value = '';
}

// När du klickar på knappen, lägg till uppgift
addTaskBtn.addEventListener('click', addTask);
