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
import Grow from '@material-ui/core/Grow'
import dynamic from 'next/dynamic'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 800,
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
  media: {
    maxWidth: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
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

const fixDescription = (content) => {
  const newContent = content
    .replace(/<style[^>]*>.*<\/style>/gm, '')
    // Remove script tags and content
    .replace(/<script[^>]*>.*<\/script>/gm, '')
    // Remove all opening, closing and orphan HTML tags
    .replace(/<[^>]+>/gm, '')
    // Remove leading spaces and repeated CR/LF
    .replace(/([\r\n]+ +)+/gm, '')
    .replace(/Continue[^]*/gm, '')
  return newContent
}

export const BlogCard = React.memo(function BlogCard({
  date,
  title,
  content,
  link,
  image,
}) {
  const styles = useStyles()
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles()
  const shadowStyles = useOverShadowStyles()

  return (
    <Grow in={true} timeout="auto">
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia className={styles.media} image={image} />
        <CardContent>
          <TextInfoContent
            classes={contentStyles}
            overline={date}
            heading={title}
            body={fixDescription(content)}
          />
          <BlogButton href={link} />
        </CardContent>
      </Card>
    </Grow>
  )
})

/*
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
    <Grow in={true} timeout="auto">
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
    </Grow>
  )
})

*/

export default BlogCard
