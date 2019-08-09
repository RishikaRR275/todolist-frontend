import React from 'react';

import Header from "../components/Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
//import taskReducer from "../reducers/taskReducer";
import { getDBData, addTask, editTask, deleteTask } from "../actions/taskAction";
import { connect } from 'react-redux';
import axios from "axios";

class App extends React.Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <div>
        <Header />
          <ToDoList allTasks={this.props.allTasks}
          getDBData={this.props.getDBData}
          editTask={this.props.editTask}
          deleteTask={this.props.deleteTask}
        />
        <ToDoForm addTask={this.props.addTask}
        />
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  console.log("app" , state.taskReducer.allTasks);
  return {
    allTasks: state.taskReducer.allTasks
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      
        axios.post('http://localhost:8080/addTask',{taskName:task})
        .then(res => {console.log(res);
          dispatch(addTask(task))});
             
    },

    editTask: (task) => {
      dispatch(editTask(task))
    },

    deleteTask: (task) => {
      dispatch(deleteTask(task))
    },

    getDBData: (res) => {
      dispatch(getDBData(res));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);