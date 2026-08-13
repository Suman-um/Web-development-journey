let todo = [] ;

let req = prompt("Please enter your choice:") ;
console.log(req) ;

while(true)
{
    if(req == "quit")
    {
        console.log("Quitting To-Do") ;
        break ;
    }
    if(req == "list")
    {
        console.log("............") ;
        for(let i=0 ; i<todo.length ; i++ )
        {
            console.log(i + ":" + todo[i]) ;

        }
        
        console.log("............") ;
    }
    else if(req == "add")
    {
        let task = prompt("Please enter the task u want to add:");
        todo.push(task) ;
        console.log("Task added") ;
    }
    else if(req == "delete")
    {
        let idx = prompt("Please enter the task index") ;
        todo.splice(idx , 1) ;
        console.log("Task deleted") ;
    }
    else
    {
        console.log("Wrong Request:Please enter any of the four options:(add ,delete ,list ,quit)") ;
    }
    req = prompt("Please enter your choice:") ;
}

