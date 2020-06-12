import {makeStyles} from '@material-ui/core/styles'
// @ts-ignore
export const useStyles= makeStyles(()=>({
    grid:{
        width:'100vw',
        height:'100vh',
        backgroundColor:"#fafafa"
    },
    paper:{
        backgroundColor:'transparent',
        textAlign:'center',
        padding:'20px'
    },
    button:{
        textTransform:'none',
        color:'#424242',
        fontFamily:'Montserrat'
    },
    googleIco:{
        height:15,
        paddingRight:5,
        position:'relative' as 'relative'
    },
    chat:{
        fontSize:100,
        display:'block',
        margin:'10px auto',
        color:'#424242'
    },
    text:{
        fontFamily:'Montserrat',
        color:'#424242',
        marginBottom:10
    }
}))