let form = document.querySelector('form')

let main=document.querySelector('.main')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let todo = e.target.todo.value;

    let todos = JSON.parse(localStorage.getItem('details')) ?? []
    todos.push(todo)

    localStorage.setItem('details', JSON.stringify(todos))
    display()
    e.target.reset()
})


let display=()=>{
    let todos = JSON.parse(localStorage.getItem('details')) ?? []
    let finalData=""
    todos.forEach((x,i)=>{
        
        finalData+=`       
        <div class="items">
            <p class="cross" onclick='del(${i})'>&times;</p>
            <h2>Todo ${i+1}: 
            </h2>
            <ul>
            <p> ${x} </p>
            </ul>
        </div>
        `
    })
    main.innerHTML=finalData

}
display()

function del(index){
    let todos = JSON.parse(localStorage.getItem('details')) ?? []
    todos.splice(index,1)
    localStorage.setItem('details',JSON.stringify(todos))
    display()
}