// dom elements
const todoFormEle = document.getElementById("todoForm")
const todoListEle = document.getElementById("todoList")

// vars
const todoLists = []

// templates
class Templates {
    getListTemp(list) {
        return `<div id=${list.id}>
        <p>${list.name}</p>
        <button type="button" class="editBtn" 
        data-list='${JSON.stringify(list)}' 
        onclick="editBtnHandler(this)">Edit</button>
        <button type="button" class="deleteBtn"
        data-list='${JSON.stringify(list)}'
        onclick="deleteBtnHandler(this)"
        >Delete</button>
      </div>`
    }
    getlistEditTemp(list) {
        return `<div id=${list.id}>
            <input type="text" id="up${list.id}" value=${list.name} placeholder="list.."  />
            <button type="button" class="upBtn"
            data-list='${JSON.stringify(list)}'
            onclick="updateBtnHanlder(this)"
            >Update</button>
            </div>
        </div>`
    }
}

// form submit handling
function submitHandler(e) {
    e.preventDefault()
    const formData = new FormData(todoFormEle)
    const formJson = Object.fromEntries(formData)
    const list = {
        id: todoLists.length + 1,
        name: formJson.name.trim()
    }
    todoLists.push(list)
    renderTodoList([list])
    todoFormEle.reset()
}

// edit btn hadnling
function editBtnHandler(e) {
    const list = JSON.parse(e.dataset.list)
    const temp = new Templates()
    const listEle = document.getElementById(list.id)
    listEle.outerHTML = temp.getlistEditTemp(list)
}

// list delete btn handling
function deleteBtnHandler(e) {
    const list = JSON.parse(e.dataset.list);
    const index = todoLists.findIndex((l) => l.id === list.id)
    todoLists.splice(index, 1)
    todoListEle.innerHTML = ""
    renderTodoList(todoLists)
}

// list update handling
function updateBtnHanlder(e) {
    const list = JSON.parse(e.dataset.list);
    const temp = new Templates()
    const listEle = document.getElementById(list.id)
    const upInputEle = document.getElementById("up" + list.id)

    const upList = {
        id: list.id,
        name: upInputEle.value.trim()
    }

    listEle.outerHTML = temp.getListTemp(upList)
}

// render the list
function renderTodoList(lists) {
    const temp = new Templates()
    lists.forEach((list) => {
        todoListEle.insertAdjacentHTML("beforeend",
            temp.getListTemp(list)
        )
    })
}


// triggers
todoFormEle.addEventListener("submit", submitHandler)