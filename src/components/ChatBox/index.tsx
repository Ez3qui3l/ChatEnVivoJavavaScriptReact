import React, {useState, useEffect, useContext} from 'react'
import {getMessages, createMessage, databaseListener} from '../../firebase/utils'
import Moment from 'react-moment'
import {UserContext} from '../User/UserContext'
import NewMessage from '../NewMessage'
import MessageComponent from '../Message'
import { Grid } from '@material-ui/core'
import {useStyles} from './styles'
import CircularProgress from '@material-ui/core/CircularProgress'

export interface Message {
content:string
user:string
published:string
photoURL:string
}
const ChatBox =()=>{
    const [msgs,setMsgs]=useState([])
    const  [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        //se ejecuta useEffect en la etapa de montaje
        console.log('cargando mensajes')
        const callMsgDB = async()=>{
        //carga de los msjs
        let msgList = await getMessages()
            //console.log(msgList)
            msgList.sort((a,b)=>{
                const firstDate = new Date(a.published)
                const secondDate = new Date(b.published)
                return firstDate > secondDate ? 1:-1
            })
        setMsgs(msgList)
            
        }

        const triggerNewMsgs=async()=>{
            databaseListener((newMsg)=>{
                setMsgs(lista=>[...lista,newMsg])
           })
        }

        //obtener mensajes
        callMsgDB()
        triggerNewMsgs()
        //se ejecuta use efecct en la etapa de desmontaje
        return()=>{
            console.log('desmontaje de chatbox')
        }
    },[])
    //se ejecuta durandte la etapa de actualizacion del cpomponente
    useEffect(()=>{
        if(msgs && msgs.length>0){
            setLoaded(true)
            if(loaded){
            let chatBox = document.getElementById("chat-box")
            chatBox.scrollTop = chatBox.scrollHeight
            }
        }
    },[msgs])
    
    

const classes = useStyles()


    if(!loaded){
    return(
        <Grid container justify="center" 
        alignItems="center"
        className={classes.loadingGrid}>
            <CircularProgress className={classes.progress}/>

        </Grid>
    )
    }
    
    //regresa msj
    return(
        <div>
            {msgs &&
            (<Grid 
                id="chat-box"
                container justify= "center" alignItems="center"
            className={classes.grid}>
                <Grid container
                justify="flex-end"
                className={classes.messageBox}>
                {msgs.map((message: Message,key)=>(
                <MessageComponent message={message} key={key}/>

            ))
                }
                </Grid>
            </Grid>
            )
            
            }
            <Grid container justify="center">
            <NewMessage/>
            </Grid>
        </div>
    )
}
export default ChatBox