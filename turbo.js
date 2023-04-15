let tarefas = [];
const listaTarefas = document.getElementById('tarefas');
function Adicionar() {
    const tarefa = document.querySelector("#text").value;
    tarefas.push({
        descricao: tarefa,
        concluida: false
    });
    atualizarTarefa();
}

function atualizarTarefa() {
    listaTarefas.innerHTML = '';
    tarefas.forEach(tarefa => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'check';
        checkbox.checked = tarefa.concluida; 
        checkbox.addEventListener('click', () => {
            tarefa.concluida = !tarefa.concluida;
            li.classList.toggle('concluida');
        }); 
     
        const descricao = document.createElement('span');
        descricao.textContent = tarefa.descricao;
        li.appendChild(descricao);
        listaTarefas.appendChild(li);   
        li.appendChild(checkbox);
        if (tarefa.concluida) {
            li.classList.add('concluida');
        }
    });
}
function Limpar() {
    listaTarefas.innerHTML = '';
    tarefas = []
}
