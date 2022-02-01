import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>ここにNotionワークページを表示させる</p>
      <div>
        <button>
          <Link href="/page/private"><a>Privateへ</a></Link></button>
      </div>
    </>
  )
}

export default Home;