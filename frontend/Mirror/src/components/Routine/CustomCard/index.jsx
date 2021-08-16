import {Card} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
const styles ={
    root:{
        border:'2px solid #666666',
        backgroundColor:'black',
        color:'white'
    }
}
export default withStyles(styles)(Card)