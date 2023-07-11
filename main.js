//selecionando elementos a serem trabalhados
const inputTask = document.querySelector('.new-task');
const buttonTask = document.querySelector('.button-task');
const tasks = document.querySelector('.tasks');

recoverTasks();

inputTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTask.value) return;
        newElement(inputTask.value);
    }
});

buttonTask.addEventListener('click', function(){
    if(!inputTask.value) return;
    newElement(inputTask.value);
});

document.addEventListener('click', function(e){
    deletTask(e);
});

function recoverTasks(){
    const recoverTask = localStorage.getItem('tasks');
    const taskListRecovered = JSON.parse(recoverTask);

    for (let task of taskListRecovered){
        newElement(task);
    }

}

//salva as tasks
function save(){
    const itens = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of itens){
        let taskText = task.innerText;
        taskText = taskText.replace('Delet', '').replace('-----', '').trim(); //apaga texto desnecessário
        taskList.push(taskText);
    }
    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskJSON);
}

//apaga a task selecionada
function deletTask(e){
    const elemento = e.target;
    if(elemento.classList.contains('delet')) {
        elemento.parentElement.remove();
        
    }
    save();
}
//cria botão "delet"
function creatBtnDel(){
    const buttonDel = document.createElement('button');
    buttonDel.classList.add('delet');
    buttonDel.innerText = 'Delet';
    return buttonDel;
}
//limpa o input
function clearInput(){
    inputTask.value = '';
    inputTask.focus();
}
//cria nova tarefa e adiciona botão delet
function newElement(text){
    const list = document.createElement('li');
    list.innerHTML = text + ' ----- ';
    tasks.appendChild(list);
    list.appendChild(creatBtnDel());
    clearInput();
    save();
}