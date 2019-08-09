function getDBData(res){
    
    return{
        type: "GET_DB_DATA",
        payload:res
    }
}


function addTask(task) {
    return {
        type: "ADD_TASK",      
        payload: {taskName: task}
    }
}

function editTask(task) {
    return {
        type: "EDIT_TASK",
        payload: {taskName: task}
    }
}

function deleteTask(task) {
    return {
        type: "DELETE_TASK",
        payload: {taskName: task}
    }
}

export {getDBData, addTask , editTask , deleteTask};