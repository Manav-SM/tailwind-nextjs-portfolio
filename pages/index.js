import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

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
        <h2 className="font-extrabold sm:text-2xl md:text-2xl">Hi There!</h2>
        <p className="text-2xl font-extrabold text-lg leading-7 text-gray-500 dark:text-gray-400 ">
          <br />
          Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Vel elit
          scelerisque mauris
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link`}
          >
            &nbsp; pellentesque pulvinar
          </Link>{' '}
          pellentesque habitant. Donec Donec pretium vulputate sapien nec sagittis aliquam
          malesuada. Mauris pellentesque pellentesque{' '}
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link`}
          >
            {' '}
            &nbsp; habitant morbi tristique.
          </Link>{' '}
          Turpis egestas maecenas pharetra convallis posuere.
          <br />
          <br />
          Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Feugiat nibh sed pulvinar
          proin gravida hendrerit. Egestas fringilla phasellus faucibus scelerisque eleifend donec
          pretium{' '}
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link`}
          >
            &nbsp; vulputate. &rarr;{' '}
          </Link>
          <br />
          <br />
          Check out my
          <Link
            href="static/documents/manav-resume.pdf"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Read Resume`}
          >
            &nbsp; Resume &rarr;
          </Link>
          <br />
          Know more
          <Link
            href="/about"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Read Resume`}
          >
            &nbsp; About me &rarr;
          </Link>
          <br />
        </p>
        <br />
        <div>
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h2 className="font-extrabold sm:text-2xl md:text-2xl">Latest Projects</h2>

            <div className="container py-12">
              <div className="flex flex-wrap -m-4">
                {projectsData.slice(0, MAX_DISPLAY).map((d) => (
                  <Card
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    href={d.href}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/projects"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="all projects"
              >
                All Projects &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="font-extrabold sm:text-2xl md:text-2xl">Latest Blog Posts</h2>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
