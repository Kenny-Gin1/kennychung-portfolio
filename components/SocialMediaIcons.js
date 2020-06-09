import { makeStyles } from "@material-ui/core/styles";
import Link from 'next/link'
import styles from '../components/styles/layout.module.css';

//702A33
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: '3rem'
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
      <Link href="//github.com/Kenny-Gin1" prefetch={false}>
        <a target={"_blank"}>
          <img
            src="/images/github-logo.png"
            className={styles.socialMediaIcons}
            rel="noopener noreferrer"
            alt='Github-logo'
          />
        </a>
      </Link>
      <Link href="//linkedin.com/in/kenny-chung-02315b131/" prefetch={false}>
        <a target={"_blank"}>
          <img
            src="/images/linkedin-logo.png"
            className={styles.socialMediaIcons}
            rel="noopener noreferrer"
            alt='LinkedIn-logo'
          />
        </a>
      </Link>
      <Link href="//medium.com/@kennychung_96278" prefetch={false}>
        <a target={"_blank"}>
          <img
            src="/images/medium-logo.png"
            className={styles.socialMediaIcons}
            rel="noopener noreferrer"
            alt='Medium-logo'
          />
        </a>
      </Link>
    </div>
  );
}
