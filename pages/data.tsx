import Link from 'next/link'
import { GetServerSideProps } from 'next'
export default function data(props: any) {

  const { list } = props
  return (
    <>
      <h3>getServerSideProps</h3><br/>
      <ul>
        {
          list.map((item: { id: number, title: string }) => {
            return <li key={item.id}><Link href='#'>{item.title}</Link></li>
          })
        }
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log("@@@===context",context.res);
  // context.res.end("dddd")
  
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await result.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { list: data }, // will be passed to the page component as props
  }
}
