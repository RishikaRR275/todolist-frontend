import axios from "axios";
// const initialState = {
//     allTasks:[]
// }
const taskReducer = (state = {allTasks:[]}, action) => {
    switch (action.type) {
        case "GET_DB_DATA":
            
            state = {
                ...state,
                allTasks: action.payload
            }
            break;

        case "ADD_TASK":
            
            
            state = {
                ...state,
                allTasks: [...state.allTasks, action.payload]
            };
            break;

        case "DELETE_TASK":
            console.log("payload -- ",action.payload.taskName);
            const taskToBeDel = action.payload.taskName;
            
            axios.post('http://localhost:8080/deleteTask',{
                taskName: action.payload.taskName
            })
            .then(res=>{});
            state = {
                ...state,
                allTasks: state.allTasks.filter((item) => item.taskName !== taskToBeDel)
            };
            break;

        case "EDIT_TASK":
            const newTask = prompt("Enter the new Task");
            console.log(typeof action.payload.taskName);
            console.log(typeof newTask);
            
            axios.post('http://localhost:8080/editTask',[
                action.payload.taskName,
                newTask
        ])
            state = {
                ...state,
                allTasks: state.allTasks.map((item) => {
                    if (item.taskName === action.payload.taskName) {
                        return {taskName:newTask};
                    } 
                    else {
                        return item;
                    }
                })
            };
            break;
        default:
            break;
    }
    return state;
}

export default taskReducer;