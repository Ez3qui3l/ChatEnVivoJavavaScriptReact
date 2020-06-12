import React from 'react'
import Grid from '@material-ui/core/Grid'
import {useStyles} from './styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import googleIco from '../../static/googleIco.svg'
import ChatIcon from '@material-ui/icons/Chat'
import Typography from '@material-ui/core/Typography'



const SingIn=({signInWithGoogle})=>{
    const classes = useStyles()
return(
    <Grid container 
    justify="center" alignItems="center"
    className={classes.grid}>

<Paper elevation={0} className={classes.paper}>
<ChatIcon className={classes.chat}></ChatIcon>
<Typography className={classes.text} gutterBottom>
    Start the conversation
</Typography>
<Button onClick={signInWithGoogle}
variant="outlined"
className={classes.button}>
    <img className={classes.googleIco}
src={googleIco}/> 
sing in google
</Button>
</Paper>
    </Grid>
    
    )

}
export default SingIn