import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = "Minar's Blog "
export const siteTitle = 'Next.js BLog Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
      <script
           async
           src="https://www.googletagmanager.com/gtag/js?id=G-ECZTE4YSWF"
         ></script>

         <script
           dangerouslySetInnerHTML={{
             __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-ECZTE4YSWF', {
             page_path: window.location.pathname,
           });
         `,
           }}
         />
<script data-ad-client="ca-pub-9177907791887619" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/Cat.png" />
        <meta
          name="description"
          content="Trying to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/**Minar's**%20blog.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/Cat.png"
              className={utilStyles.borderCircle}
              height={72}
              width={72}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/Cat.png"
                  className={utilStyles.borderCircle}
                  height={64}
                  width={64}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>




      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>??? Back to home</a>
          </Link>
        </div>
      )}

        <p class="footer">????</p>
    </div>



  )
}
