var list = document.getElementById("list");
document.getElementById("addbtn").disabled = true;

function emptyvalue() {
    var inputvalue = document.getElementById("todo-item")
    if (inputvalue !== null) {
        document.getElementById("addbtn").disabled = false;
    }
}

function addtodo() {
    var todoitem = document.getElementById("todo-item")

    // create list item
    var li = document.createElement("li")
    var litext = document.createTextNode(todoitem.value)
    li.appendChild(litext)

    // create delete button
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delbtn.setAttribute("class", "btn btn-primary libtn")
    delbtn.setAttribute("onclick", "DeleteItem(this)")
    delbtn.appendChild(delText)

    // create edit button
    var editbtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editbtn.setAttribute("class", "btn btn-primary libtn")
    editbtn.setAttribute("onclick", "editItem(this)")
    editbtn.appendChild(editText)


    li.appendChild(delbtn)
    li.appendChild(editbtn)


    list.appendChild(li)

    todoitem.value = ""
}

function DeleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter edit text ", val)
    e.parentNode.firstChild.nodeValue = editvalue
}

function DeletAll() {
    list.innerHTML = ""
}

