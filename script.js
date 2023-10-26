function addTask() {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const todolist = document.getElementById('todolist');

    const Title = title.value;
    const Description = description.value;

    if (Title === '' || Description === '') {
        alert('Both title and description are required.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `<h3>${Title}</h3><p>${Description}</p>`;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="material-symbols-outlined" id="del">delete</i>';
    deleteButton.onclick = function () {
        todolist.removeChild(listItem);
    };

    listItem.appendChild(deleteButton);
    todolist.appendChild(listItem);

    title.value = '';
    description.value = '';
}