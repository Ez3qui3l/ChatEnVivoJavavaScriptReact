import React from 'react'
import { Message as MessageType} from '../ChatBox'
import {useStyles} from './styles'
import { Paper, Grid, Typography } from '@material-ui/core'
import Moment from 'react-moment'




interface Props{
    message:MessageType
}
const Message:React.FC<Props>=({message})=>{
    const classes=useStyles()
    return(
        <Paper className={classes.paper}>
            <Grid container alignItems ="center"> 
                <img 
                src={message.photoURL}
                className={classes.img}
                />
                <Typography className={classes.text}>
                    {message.user}
                </Typography>
                <Typography className={classes.text}>
                <Moment fromNow>
                    {message.published}
                </Moment>
                </Typography>
            </Grid>
            <Grid className={classes.gridContent}>
            <Typography className={classes.text}>
                    {message.content}
                </Typography>
            </Grid>
        </Paper>
    )
}
export default Message