import Link from 'next/link'
import Head from 'next/head'
// import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next App Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='header-box'>
          <ul>
            <li style={{ width: "100px", paddingLeft: '0', fontSize: '26px' }}><a href="/" style={{ paddingLeft: '0' }}>Logo</a></li>
            <li className='active'><Link href="/">首页</Link></li>
            <li><Link href="/route">路由</Link></li>
            <li><Link href="/data">数据</Link></li>
            <li><Link href="/">中间件</Link></li>
            <li><Link href="/">Plugin</Link></li>
            <li><Link href="/">Error</Link></li>
            <li><Link href="/">Sign in</Link></li>
          </ul>
        </div>

        <div className="main-body">
          {children}
        </div>


      </main>

      <footer className="footer">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by goMetaHome.cn
        </a>
      </footer>
    </>
  )
}