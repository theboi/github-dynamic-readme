import Head from 'next/head'
import style from './style.module.css'

export default function EditorPage() {
  return (
    <div className={style.container}>
      <Head>
        <title>GitHub Readme Cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
