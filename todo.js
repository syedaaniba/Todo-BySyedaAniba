
// get input and list 
let input = document.getElementById("aniba-input")
let list = document.getElementById("list")

let todo = []
function addTodo (task) {
    todo.push({
        text: task,
        completed: false
    });
}
function toggleComplete(index) {
    if (todo[index]) {
        todo[index].completed = !todo[index].completed
    } else {
        console.log("Invalid index")
    }
}
function showTodos() {
    console.clear()
    todo.forEach((task,index) => {
        let status = ""
        if (task.completed == true) {
            status = "[✓]"
        } else {
            status = "[]"
        }
        console.log(`${index+1} ${status} ${task.text}`)
    })
}
//dom 
function handleAdd () {
    let task = input.value.trim()

    if (task != "") {
        addTodo(task)
        input.value = ""
        renderlist()
    }
}

function renderlist () {
    list.innerHTML = ""

    todo.forEach((task,index) => {
        let li = document.createElement("li")

        let status = ""
        if (task.completed == true) {
            status = "[✓]"
        } else {
            status = "[ ]"
        }

        li.textContent = `${status} ${task.text}`

        li.onclick = function () {
            toggleComplete(index)
            renderlist();
        }
        list.append(li)
    })
}