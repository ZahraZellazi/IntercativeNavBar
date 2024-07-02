var btnCollapse = document.getElementById("btn-collapse");
var resContent = document.getElementById("responsive-content");
var divToDos = document.getElementById("todos");
//////////to do ///////////
var addToDoButton = document.getElementById("todo")
var input = document.getElementById("value")
////////////////////////
btnCollapse.addEventListener("click", function() {
    if (resContent.style.display === "" || resContent.style.display === "none") {
        resContent.style.display = "grid";
        btnCollapse.innerText = "close"
    } else {
        resContent.style.display = "none";
         btnCollapse.innerText = "open"
    }
});
 
/*
////// to do display //////////////////

var listOfTodos = ["study" , "gym" , "bake"]

function display(){
    divToDos.innerHTML =""
    for (var i=0 ; i<listOfTodos.length ;i++){
        divToDos.innerHTML+= `<li> ${listOfTodos[i]} </li>`
    }
}

addToDoButton.addEventListener("click" , function(){
    listOfTodos.push(input.value)
    display()
})

display() */