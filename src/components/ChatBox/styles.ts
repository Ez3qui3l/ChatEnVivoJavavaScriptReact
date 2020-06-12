import {makeStyles} from '@material-ui/styles'
export const useStyles = makeStyles((theme)=>({
grid:{
    width:'100vw',
    height:'calc(100vh - 135px)',
    backgroundColor:'#fafafa',
    maxWidth:660,
    margin:'0 auto',
    overflowY:'scroll'
},
messageBox:{
    width:'100vw',
    flexDirection:'column'
},
loadingGrid:{
    width:'100vw',
    height:'calc(100vh - 135px)',
    backgroundColor:'#fafafa',
    maxWidth:660,
    margin:'0 auto'
},
progress:{
    color:'#424242',
    fontSize:20
}
}))