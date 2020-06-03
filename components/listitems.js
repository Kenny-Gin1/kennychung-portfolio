import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from "next/link";
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    divider: {
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        color: 'white'
    }

}));


export default function ListItems () {
const classes = useStyles()

return (
<>
<List component="nav">
          {[['Home', '/'], ['About me', '/about'], ['Projects','/projects'], ['Blog', '/blog']].map((text) => (
            <>  
            <Link href={text[1]} key={text}>
            <ListItem button divider key={text}>
              <ListItemText primary={text[0]} className={classes.text} />
            </ListItem>
            </Link>                  
            <Divider classes={{root: classes.divider}}/>
            </>
          ))}
        </List>
        </>
        )
}