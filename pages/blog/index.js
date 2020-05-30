import Link from 'next/link';

export default function Blog() {
    return (
    <>
    <h1>You are inside of the Blog</h1>
        <Link href="/blog/first-post"><a>Go to the first post</a></Link>
      </>
        )
}