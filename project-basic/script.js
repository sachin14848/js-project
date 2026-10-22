const ul = document.querySelector('ul');

const STORE_KEY = 'expenseData';

function initialize(){
    const existingData = JSON.parse(localStorage.getItem(STORE_KEY)) || [];
    existingData.forEach(data => display(data));
}

function display(data){
  const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = `${data.expenseamount} - ${data.description} (${data.category})`;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        deleteItem(li, data.id);
    });
    const editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-secondary', 'btn-sm', 'float-end', 'me-2');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        editItem(li, data.id);
    });
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);

}

function deleteItem(li, id){
   li.remove();
   const existingData = JSON.parse(localStorage.getItem(STORE_KEY)) || [];
   const updatedData = existingData.filter(data => data.id !== id);
    localStorage.setItem(STORE_KEY, JSON.stringify(updatedData));
}

function editItem(li, id){
    const existingData = JSON.parse(localStorage.getItem(STORE_KEY)) || [];
    const itemToEdit = existingData.find(data => data.id === id);
    if(itemToEdit){
        document.querySelector('input[name="expenseamount"]').value = itemToEdit.expenseamount;
        document.querySelector('input[name="description"]').value = itemToEdit.description;
        document.querySelector('select[name="category"]').value = itemToEdit.category;
        deleteItem(li, id); // Remove the item from the list and localStorage
    }
}

function handleFormSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.id = Date.now(); // Assign a unique ID to each entry
    display(data);

    const existingData = JSON.parse(localStorage.getItem(STORE_KEY)) || [];
    existingData.push(data);
    localStorage.setItem(STORE_KEY, JSON.stringify(existingData));
}

initialize();