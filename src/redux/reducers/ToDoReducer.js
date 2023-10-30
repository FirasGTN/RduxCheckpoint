const intiialState = {
    tasks : [
        {
            id : 1,
            description : "task 1",
            isDone :undefined,
            show : false,
        },
        {
            id : 2,
            description : "task 2",
            isDone :undefined,
            show : false,
        },
        {
            id : 3,
            description : "task 3",
            isDone :undefined,
            show : false,
        },
        {
            id : 4,
            description : "task 4",
            isDone :undefined,
            show : false,
        },
    ],
};

const ToDoReducer = (state = intiialState , action) => {
    console.log(action)
    if (action.type === "CHECK") {
        return {...state, tasks : state.tasks.map((task)=>{
            return task.id === action.payload ? {...task , isDone :true} : task;
        })}
    }
    else if (action.type === "UNCHECK") {
        return {...state, tasks : state.tasks.map((task)=>{
            return task.id === action.payload ? {...task , isDone :false} : task;
        })}
    }
    else if (action.type === "DELETE") {
        return {...state, tasks : state.tasks.filter((task)=>{
            return task.id !== action.payload ;
        })}
    } 
    else if (action.type === "EDIT") {
        return {...state, tasks : state.tasks.map((task)=>{
            return task.id === action.payload ? {...task , show : !task.show} : task
        })}
    } 
    else if (action.type === "EDIT_TEXT") {
        return {...state, tasks : state.tasks.map((task)=>{
            return task.id === action.payload ? {...task , description : action.editvalue} : task
        })}
    } 
    else if (action.type === "ADD" ) {
        if (action.payload) {
            return {...state, tasks : [...state.tasks , {
                id : state.tasks[state.tasks.length - 1].id + 1,
                description : action.payload,
                isDone : undefined,
                show : false,
            }] }
        }
    } 
    else if (action.type === "FILTER_DONE") {
        return {...state, tasks : state.tasks.filter((task)=>{
            return task.isDone === true 
        })}
    } 
    else if (action.type === "FILTER_UNDONE") {
        return {...state, tasks : state.tasks.filter((task)=>{
            return task.isDone === false 
        })}
    } 
    return state
} 

export default ToDoReducer