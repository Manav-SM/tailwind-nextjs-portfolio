import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'
import Timeline from '@/components/Timeline'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function TimelinePage() {
  return (
    <>
      <PageSeo title={`Timeline - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Timeline />
    </>
  )
}
