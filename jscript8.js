function Add_el() {
    var object = document.createElement("div");
    object.className = 'row';
    var num = document.createElement("input");
    var dat = document.createElement("input");
    var up = document.createElement("button");
    var down = document.createElement("button");
    var del = document.createElement("button");

    num.type = 'text';
    num.className = "cell";
    dat.type = 'text'
    dat.className = "cell";
    up.innerHTML = "&#8593;";
    up.setAttribute("onclick", "Swap_up(this)");
    down.innerHTML = "&#8595;";
    down.setAttribute("onclick", "Swap_down(this)");
    del.innerHTML = "&#215;";
    del.setAttribute("onclick", "Delete_row(this)");

    object.append(num);
    object.append(dat);
    object.append(up);
    object.append(down);
    object.append(del);
    
    var add_button = document.getElementById("add_button");
    document.body.insertBefore(object, add_button);
}

function Save() {
    var object = document.createElement("div");
    var data, i=0;
    object.append("{");
    var element = document.getElementsByClassName("cell");
    Array.from(element).forEach(function (item) {
        data = item.value;
        if (data && i != 0 && i % 2 == 0) object.append(',');
        if (data && i % 2 == 0) object.append('"', data, '": ');
        if (data && i % 2 == 1) object.append('"', data, '"');
        i++;
    })
    object.append("}");
    document.body.append(object);
}

function Swap_up(item) {
    var previous = item.parentNode.previousSibling;
    if (previous && previous.className == "row") {
        item.parentNode.parentNode.insertBefore(item.parentNode, previous);
    }
}

function Swap_down(item) {
    var next = item.parentNode.nextSibling;
    if (next && next.id != "add_button") {
        item.parentNode.parentNode.insertBefore(next, item.parentNode);
    }
}

function Delete_row(button) {
    button.parentNode.parentNode.removeChild(button.parentNode);
}