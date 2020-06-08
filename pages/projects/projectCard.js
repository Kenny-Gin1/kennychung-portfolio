import React from 'react'
import Card from '@material-ui/core/Card'
import cx from 'clsx'
import CardContent from '@material-ui/core/CardContent'
import TextInfoContent from '@mui-treasury/components/content/textInfo'
import { useN02TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n02'
import { makeStyles } from '@material-ui/core/styles'
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { DateMonth } from '../../components/Date'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    borderRadius: 20,
    maxWidth: 343,
    marginBottom: '2rem',
  },
  header: {
    height: '12px',
  },
  icons: {
    width: '1.5rem',
    height: '1.5rem',
  },
  content: {
    padding: 24,
  },
  subheader: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

export default function ProjectCard({ body, heading, subheader, url }) {
  const classes = useStyles()
  const shadowStyles = useLightTopShadowStyles()
  return (
    <Card className={cx(shadowStyles.root, classes.root)}>
      <CardHeader
        avatar={
          <Avatar
            alt="React"
            src="/images/react-icon-png-7.png"
            className={`${classes.header} ${classes.icons}`}
          />
        }
        subheader={<DateMonth dateString={subheader} />}
        classes={{
          subheader: classes.subheader,
        }}
      />
      <Divider variant="middle" />
      <CardContent className={classes.content}>
        <TextInfoContent
          useStyles={useN02TextInfoContentStyles}
          overline={''}
          heading={heading}
          body={body}
        />
      </CardContent>
    </Card>
  )
}
