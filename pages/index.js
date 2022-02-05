import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
      <Script
           id="google-analytics"
           src="https://www.googletagmanager.com/gtag/js?id=G-ECZTE4YSWF"
           onLoad={() => {
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-ECZTE4YSWF');
           }}
         />
      <script data-ad-client="ca-pub-9177907791887619" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#317EFB"/>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I’m <strong>Shovon</strong>. I’m a student and also a web-dev. You can contact me on{' '}
          <a href="#">Telegram</a>.
        </p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, summary }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
            <img
            src={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg`}
            alt="Picture of the title"
   /></Link>
              <Link href={`/posts/${id}`}>
                <a class="title">{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <p class="summary">{summary}</p>
              </small>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
