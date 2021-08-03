import { PageSeo } from '@/components/SEO'
import Timeline from '@/components/Timeline'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

export default function TimelinePage() {
  return (
    <>
      <PageSeo title={`Timeline - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Timeline />
      <br />
      Return{' '}
      <Link
        href="/"
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        aria-label={`To Home`}
      >
        Home &rarr;
      </Link>
    </>
  )
}
