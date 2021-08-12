import { BlogSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import Comments from '@/components/comments'

export default function Guestbook({ frontMatter }) {
  return (
    <>
      <PageSeo
        title={`Guestbook - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Guestbook
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Leave a message or comment
          </p>
        </div>
        <div className="container py-12">
          <Comments />
        </div>
      </div>
    </>
  )
}