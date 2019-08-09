import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from "axios";


class ToDoList extends React.Component {
  
  componentDidMount(){
    console.log("todo lis ---", this.props);
    axios.get('http://localhost:8080/tasks')
    .then(res => {
      console.log(res);
      this.props.getDBData(res.data);
      //CALL THE ADD DB DATA METHOD HERE
    });

  }
    render() {
      return (
       <div>
          <ul>
           {this.props.allTasks.map((item,index) => (
              <Paper key={index} style={{ padding: 5, margin: 5 }}>
                <Typography variant="h5">
                  <li key={index}>
                    <Grid container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      {item.taskName}
                      <Grid>
                        <Button variant="outlined" 
                            onClick={() => this.props.editTask(item.taskName)} 
                        >
                          EDIT
                        </Button>
  
                        <Button variant="outlined"
                            onClick={() => this.props.deleteTask(item.taskName)}
                        >
                          DELETE
                        </Button>
                      </Grid>
                    </Grid>
                  </li>
                </Typography>
              </Paper>
            ))}
          </ul>
        
        </div>
      );
    }
  }
  
  export default ToDoList;