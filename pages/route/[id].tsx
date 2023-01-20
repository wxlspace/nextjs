import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export default function routeId(props: any) {
  const router = useRouter()
  const { data } = props;
  // const { id } = router.query
  // console.log("router.query", router.query)
  if (!data) {
    return <div>loading...</div>
  }
  return (
    <>
      <div>id: {data.id}</div>
      <div>title: {data.title}</div>
      <div>body: {data.body}</div>
    </>
  )
}


// 在动态路由页面（[id].tsx） 
export const getStaticProps: GetStaticProps = async (context:any) => {
  // console.log("context",context);
  
  const { params } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // paths中计算出总共要生成多少个静态页面
    paths: [
      { params: { id: 'p1' } },
      { params: { id: 'p2' } },
      { params: { id: 'p3' } },
    ],
    // revalidate: 60,
    fallback: true, // can also be true or 'blocking'
  }
}



