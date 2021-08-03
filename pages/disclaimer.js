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
          <div>© {new Date().getFullYear()} Disclaimer</div>
        </h2>
        Return{' '}
        <Link
          href="/"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Read Resume`}
        >
          Home &rarr;
        </Link>
        <br />
      </div>
    </>
  )
}
