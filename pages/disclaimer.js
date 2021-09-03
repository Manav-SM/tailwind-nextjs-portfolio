import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 4

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}
export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h2 className="font-extrabold sm:text-2xl md:text-2xl">
          © {new Date().getFullYear()} Disclaimer
        </h2>
        <br />
        <p className="text-xl font-light text-lg leading-7 text-white-500 dark:text-white-400 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /> <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
          <br /> <br />
          Return{' '}
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Read Resume`}
          >
            Home &rarr;
          </Link>
          <br />
        </p>
      </div>
    </>
  )
}
