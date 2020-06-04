import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link'
import styles from '../components/styles/layout.module.css';

//702A33
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: '6rem'
  },
  icons: {
    textAlign: "center",
    color: "white",
  },
}));

export default function SocialMedia() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link href="/">
        <a>
          <img
            src="/images/github-logo.png"
            className={styles.socialMediaIcons}
            alt='Github-logo'
          />
        </a>
      </Link>
      <Link href="/">
        <a>
          <img
            src="/images/linkedin-logo.png"
            className={styles.socialMediaIcons}
            alt='LinkedIn-logo'
          />
        </a>
      </Link>
      <Link href="/">
        <a>
          <img
            src="/images/medium-logo.png"
            className={styles.socialMediaIcons}
            alt='Medium-logo'
          />
        </a>
      </Link>
    </div>
  );
}
