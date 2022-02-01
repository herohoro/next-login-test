import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link href="/private"><a>Privateへ</a></Link>
      </div>
    </>
  );
}

export default Home;