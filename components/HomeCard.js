import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import HeaderImage from '../components/HeaderImage'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70vw',
    height: '60vh',
    borderRadius: 20,
  },
  links: {
    color: '#FFF',
    '&:hover': {
      color: '#FFF',
    },
  },
}))

export default function HomeCard() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <h1>Kenny Chung</h1>
      <h3>Full Stack Software Developer at School of Applied Technology</h3>

      <p>
        Hello! My name is Kenny and I am a Full Stack JavaScript Developer at
        the School of Applied Technology. Before I ventured into the software
        development industry I used to work as a privacy lawyer with focus on
        the GDPR for a couple of years.
      </p>

      <p>
        Proficient within JavaScript, from popular frameworks such as Node.js,
        React and Express.js to vanilla JavaScript and Svelte.js.
      </p>
      <Button variant="contained" color="primary">
        <a
          className={classes.links}
          href="/cv/CV_Kenny_Chung.pdf"
          download="Kenny_Chung_CV.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Download CV
        </a>
      </Button>
      <span>
        {' '}
        <Button variant="contained" color="secondary">
          {' '}
          Contact me
        </Button>
      </span>
    </Box>
  )
}
