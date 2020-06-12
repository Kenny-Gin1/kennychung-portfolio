import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextInfoContent from '@mui-treasury/components/content/textInfo'
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog'
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over'
import Link from 'next/link'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 900,
    maxHeight: 300,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },

  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
  links: {
    color: '#FFF',
    '&:hover': {
      color: '#FFF',
    },
  },
}))

const BlogButton = React.forwardRef(({ onClick, href }, ref) => {
  const styles = useStyles()
  const { button: buttonStyles } = useBlogTextInfoContentStyles()
  return (
    <Button className={`${buttonStyles}`}>
      <a href={href} onClick={onClick} ref={ref} className={styles.links}>
        Read More
      </a>
    </Button>
  )
})

const BlogCard = React.memo(function BlogCard({ date, title, id, body }) {
  const styles = useStyles()
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles()
  const shadowStyles = useOverShadowStyles()
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
        }
      />
      <CardContent>
        <TextInfoContent
          classes={contentStyles}
          overline={date}
          heading={title}
          body={body}
        />
        <Link href={`/blog/${id}`} as={`/blog/${id}`} passHref>
          <BlogButton />
        </Link>
      </CardContent>
    </Card>
  )
})

export default BlogCard
