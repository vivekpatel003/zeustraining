const addBtn = document.querySelector('.Add')
const removeBtn = document.querySelector('.Remove')
const todoList = document.getElementById('todo-list')
const inpt = document.getElementById('task-input')
const head2 = document.querySelector('h2')

document.addEventListener("DOMContentLoaded",()=>{
    str=''
    Object.keys(localStorage).forEach((key)=>{
        str+=`<li>${localStorage[key]}</li>`; 
    })
    todoList.innerHTML = str;
    console.log("he")
        if(localStorage.length === 0)
        {
            head2.style.display = "block";
        }
        else{
            head2.style.display = "none";
        }
})
addBtn.addEventListener("click",()=>{
        localStorage.setItem(localStorage.length+1,inpt.value);
        inpt.value='';
        console.log(localStorage)
        const n=localStorage.length;
        todoList.innerHTML += `<li>${localStorage[n]}</li>`;
        if(localStorage.length === 0)
        {
            head2.style.display = "block";
        }
        else{
            head2.style.display = "none";
        } 
});
removeBtn.addEventListener("click",()=>{
    str=''
    let i=0;
    Object.keys(localStorage).forEach((key)=>{
        if(i==0){
            localStorage.removeItem(key);
            i++;
        }
        else
        str+=`<li>${localStorage[key]}</li>`; 
    })
    
    todoList.innerHTML = str;
    if(localStorage.length === 0)
    {
        head2.style.display = "block";
    }
    else{
        head2.style.display = "none";
    } 
})
todoList.addEventListener("click",(e)=>{
    if( e.target.style.backgroundColor === "green")
        e.target.style.backgroundColor = "white";
    else    
        e.target.style.backgroundColor = "green";
    
});