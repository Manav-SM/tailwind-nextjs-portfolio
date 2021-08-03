import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'

export const POSTS_PER_PAGE = 15

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSeo title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="flex justify-end text-base font-medium leading-6">
        <Link
          href="/tags"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="all tags"
        >
          All tags &rarr;
        </Link>
      </div>
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
