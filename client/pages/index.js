export async function getStaticProps() {
  const response = await fetch("http://127.0.0.1:8000/api/Hello");
  const data = await response.json()
  return { props: { data } }
}

export default function Home({data}){
  console.log(data)
  return (
    <>
      <p>{data.mensagem}</p>
    </>
  )
}