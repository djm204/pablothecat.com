import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const underConstruction = () => {
  return <>
    <h1 className={styles.title}>
      Pablo Mendez
    </h1>
    <h2>October 15, 2005 - July 22, 2021</h2>
    <Image src="https://davidmendez.dev/img/pablosunshine.jpg" alt="Pablo Mendez" width="450" height="450" />
    <p>Site is under construction</p>
  </>
}

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pablo the Cat - Immortalizing the best cat</title>
        <meta name="description" content="Pablo the Cat - Memorial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {underConstruction()}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
