var activities = [];
var input = document.getElementById("input");
var list = document.getElementById("list");

document.getElementById("btn").onclick=click;

function click(){
    activities.push(input.value);
    
    input.value = "";

    showList();
}

function showList(){
    list.innerHTML="";

    activities.forEach(function(current_value, index){
        list.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'> edit</a>"+
        "<a onclick='deleteItem("+index+")'>&#10005; | </a></li>")
    })
}

function editItem(index){
    var newValue = prompt("Please Insert Your New Value");
    activities.splice(index, 1, newValue);
    showList();
}

function deleteItem(index){
    activities.splice(index,1);
    showList();
}