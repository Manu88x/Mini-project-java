document.addEventListener("DOMContentLoaded", () => {
  let form=document.querySelector("form")
 form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleTask(e.target.task.value); // Call the function with the task value
    e.target.task.value = ''; // Clear the input field
    form.reset//makes sure our form is pretty set
  });
});

// Function to handle adding the task to the list
function handleTask(task) {
  let li = document.createElement('li');
  let btn=document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent='delete' // i think since task is like equal to text.content
  li.textContent = `${task} `
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li);
  
}

function handleDelete(e){
  e.target.parentNode.remove()
}

let back= document.querySelector("body")
 back.style.background='black'