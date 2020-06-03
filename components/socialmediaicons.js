import { makeStyles } from '@material-ui/core/styles';

//3D3333
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    icons: {
        textAlign: 'center',
        color: 'white'
    }

}));

export default function SocialMedia () {
    const classes = useStyles()
    return (
        <div className={classes.root}>

        </div>
    )
}