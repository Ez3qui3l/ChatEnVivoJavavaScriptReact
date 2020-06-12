import React from 'react'
import {useStyles} from './styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
const Loading=()=>{
    const classes = useStyles()
    return(
        <Grid container 
        justify="center"
        alignItems="center"
        className={classes.grid}
        >
            <CircularProgress className={classes.progress}/>
        </Grid>
    )
}
export default Loading