import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70vw',
    height: '60vh',
    borderRadius: 20,
    border: '1px solid black',
  },
}))

export default function HomeCard() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      Hello, I'm Kenny! I'm a Full Stack Software Developer and a former lawyer.
      Welcome to my site!
    </Box>
  )
}
