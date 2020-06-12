import {makeStyles} from '@material-ui/styles'
export const useStyles = makeStyles((theme)=>({
    appBar:{
        flewGrow:1,
        color:'black',
        backgroundColor:'white !important',
        boxShadow:'none'
    },
    iconButton:{
        marginRight:'16px'
    },
    avatar:{
    },
    title:{
        flexGrow:1,
        color:'#424242',
        fontFamily:'Montserrat'
    },
    button:{
        fontFamily:'Montserrat',
        color:'#424242',
        textTransform:'none'
    }
}))