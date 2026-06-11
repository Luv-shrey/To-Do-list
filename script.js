const input = document.querySelector('.input')
const add = document.querySelector('.add')
const list_items = document.querySelector('.list-items')

// let itms = []
var count = 0


// it is better to use different functions for each task it made the task easy, otherwise I was facing trouble

function addTask(){
    const item = document.createElement('div')
    item.classList.add('item')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.classList.add('check')
    

    const task = document.createElement('div')
    task.classList.add('task')
    task.innerHTML = `${input.value}`

    if(count%2 ===0){
        task.style.backgroundColor = "rgb(254, 189, 69)"
    } else {
        task.style.backgroundColor = "rgb(255, 221, 158)"
    }

    const cut = document.createElement('div')
    cut.classList.add('cut')

    const symb = document.createElement('i')
    symb.classList.add('fa-solid')
    symb.classList.add('fa-x')

    list_items.appendChild(item)
    item.appendChild(checkbox)
    item.appendChild(task)
    item.appendChild(cut)
    cut.appendChild(symb)

    deleteTask(cut, item)
    checkTask(checkbox, task)
    count++;
}


function checkTask(checkbox, task){
    checkbox.addEventListener('click', function(e){
        
         if (e.target.checked) {
            task.style.textDecoration = "line-through"
   
  } else {
        task.style.textDecoration = "none"
  }
        
    })
}

function deleteTask(cut, item){
    cut.addEventListener('click', function(){
        item.remove()
        count--;
    })
    
}


document.addEventListener('keydown', function(e){
    if(e.key === "Enter" && input.value === ''){
        alert('Please enter a valid task')
    } else if(e.key === "Enter"){
        addTask()
        input.value = ''
    }

    
})

add.addEventListener('click', function(){
    if(input.value === ''){
        alert('Please enter a valid task')
    } else{
        
        addTask()
        // list_items.innerHTML += `<div class="item ${count}">
        //         <label for="${count}" class="check"><input type="checkbox" id="${count}"></label>
        //          <div class="task ${count}">${input.value}</div>
        //          <div class="cut ${count}"><i class="fa-solid fa-x"></i></div>
        //       </div>`
        // count++
        // itms.push(`item ${count}`)


        input.value = ''
    }
})

