import React, { useContext } from 'react'
import {useStyles} from './styles'
import {UserContext} from '../User/UserContext'
import {SingOutContext} from '../User/SingOutContext'
import Appbar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import { Typography } from '@material-ui/core'

const NavBar: React.FC=()=>{
    const user = useContext(UserContext)
    const singOut =useContext(SingOutContext)
    const classes = useStyles()
    return(
        <Appbar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton
                edge="start"
                className={classes.iconButton}
                >
                <Avatar  src={user.photoURL} 
                className={classes.avatar}/>
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                   {user.displayName}
                </Typography>
                {/*

                //@ts-ignore*/}
                <Button onClick={singOut} className={classes.button}>
                Sing Out
                </Button>
            </Toolbar>
        </Appbar>
        
    )
}
export default NavBar