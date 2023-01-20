import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

export default function index(props: any) {
  const router = useRouter()
  const { data } = props
  if (!data) {
    return <div>loading...</div>
  }
  return (
    <>
      <div>route index</div>
      <div><Link href="/route/10">[...id]链接方式传参数一</Link></div>
      <div><Link href="/route/10?cate=2">[...id]链接方式传参数二</Link></div>
      <div><button onClick={() => router.push('/route/10?cate=2')}>按纽方式传参</button></div>
      <div><Link href="/route/10/123">[..slug]链接方式传参数</Link></div>
      <br />
      <ul>
        <h3>getStaticProps</h3><br />
        {
          data.map((item: { id: number, email: string }) => { return <li key={item.id}><Link href={`/route/${item.id}`}>{item.email}</Link></li> })
        }
      </ul>
    </>

  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  // console.log("getStaticProps context", context, "data", data)
  return {
    props: { data }, // will be passed to the page component as props
  }
}
