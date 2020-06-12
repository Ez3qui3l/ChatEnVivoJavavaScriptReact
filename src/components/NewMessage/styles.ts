import {makeStyles} from '@material-ui/styles'
export const useStyles = makeStyles((theme)=>({
    filledInput:{
        fontFamily:'Montserrat !important',
        position:'relative',
        width:'calc(100% - 80px)',
        margin:'10px auto !important'
    },
    inputProp:{
        padding:'15px 25px 15px !important'
    }
}))