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
    listItemHover: {
      display: 'flex',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      '&:hover': {
        backgroundColor: 'white',
      }
    },
    dividerLine: {
        backgroundColor: 'white'
    },
    textLink: {
        textAlign: 'center',
        color: 'white',
        '&:hover': {
          color: '#b33939',
        }
    }

}));


export default function ListItems () {
const classes = useStyles()

return (
<>
<List component="nav">
          {[['Home', '/'], ['About me', '/about'], ['Projects','/projects'], ['Blog', '/blog']].map((text) => (
            <React.Fragment key={text}>  
            <Link href={text[1]} >
            <ListItem button classes={{root: classes.listItemHover}}>
              <ListItemText primary={text[0]} classes={{root: classes.textLink}} />
            </ListItem>
            </Link>                  
            <Divider classes={{root: classes.dividerLine}} />
            </React.Fragment>
          ))}
        </List>
        </>
        )
}