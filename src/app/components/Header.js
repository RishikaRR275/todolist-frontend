import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const heading = () => {

    return (
        <div >
            <AppBar position="static" style={{
                background: '#00b3b3',
                borderRadius: 3,
                border: 0,
                color: 'black',
                height: 75,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                alignItems: 'center'
            }}>
                <Toolbar align="center">
                    <Typography variant="h2" >
                        <b>TO-DO  LIST</b>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default heading;