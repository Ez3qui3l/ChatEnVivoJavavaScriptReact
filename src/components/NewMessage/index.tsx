import React, {useContext, useState} from 'react'
import { Message } from '../ChatBox'
import { UserContext } from '../User/UserContext'
import{ createMessage } from '../../firebase/utils'
import { FilledInput, IconButton, Grid } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import {useStyles} from './styles'

const NewMessage=()=>{
    const classes = useStyles()
    const [newMessage, setnewMessage] = useState('')
    const user = useContext(UserContext)


//handles
const handleNewMessage=(e)=>{
    e.preventDefault()
    setnewMessage(e.target.value)
}
const sendMessage=async(e)=>{
    e.preventDefault()
    const msgTemp: Message = {
        content:newMessage,
        user:user.displayName,
        published:JSON.stringify(new Date()),
        photoURL:user.photoURL
        
    }
    await createMessage(msgTemp)
    setnewMessage('')
}

    return(
        <Grid container alignItems="center" style={{maxWidth:'600px'}}>
<FilledInput 
value={newMessage}
onChange={handleNewMessage}
type='text'
disableUnderline
className={classes.filledInput}
inputProps={{className:classes.inputProp}}
/>
<IconButton onClick={sendMessage}>
    <SendIcon/>
</IconButton>
</Grid>

    )
}
export default NewMessage