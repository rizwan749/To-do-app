let item = document.querySelector("#item");
let todo = document.querySelector("#Todo-box");


item.addEventListener("keyup" , function(event){
    
    if(event.key == "Enter"){
        Todo(this.value);
        this.value = " ";
    }
}

)


const Todo = (item) =>{
    const listitem = document.createElement("li");
    listitem.innerHTML = `${item} <i class="fa-solid fa-xmark"></i>`

    listitem.addEventListener("click",function () {
        this.classList.toggle("done");
    })

    listitem.querySelector("i").addEventListener("click", function (){
        listitem.remove();
    })

    todo.appendChild(listitem);
}
