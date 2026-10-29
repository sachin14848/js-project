const API_URL = "https://crudcrud.com/api/c4b5397721be4919aa10ea789d9d35c3/appointmentData";
document.addEventListener('DOMContentLoaded', () => {
    getAllUsers();
});

async function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    try {
        const response = await axios.post(API_URL, data);
        console.log(response.data);
        getAllUsers(); // Refresh the list of users after adding a new one
    } catch (error) {
        console.error('Error adding appointment:', error);
    }
}

async function getAllUsers(){
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        displayUsers(response.data);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function displayUsers(users){
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => handleDelete(user._id));
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end');
        li.appendChild(deleteButton);
        usersList.appendChild(li);
    });
}


function handleDelete(userId){
    axios.delete(`${API_URL}/${userId}`)
        .then(response => {
            console.log('User deleted:', response.data);
            getAllUsers(); // Refresh the list of users after deletion
        })
        .catch(error => {
            console.error('Error deleting user:', error);
        });
}