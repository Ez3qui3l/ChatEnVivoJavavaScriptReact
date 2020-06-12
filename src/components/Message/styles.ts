import {makeStyles} from '@material-ui/styles'
export const useStyles = makeStyles((theme)=>({
 paper:{
     padding:20,
     marginTop:10,
     boxShadow:'none'
    },
img:{
    width:25,
    height:25,
    borderRadius:25
},
text:{
    marginLeft:10,
    fontSize:12,
    color:'#424242',
    fontFamily:'Montserrat'
},
gridContent:{
    marginTop:10
}
}))