import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <h2>Seleccione el modulo que desea utilizar</h2>
      <Link href='/tickets'>Tickets</Link>
      <Link href='/'>Otro modulo</Link>
    </>
  );
};

export default Home;
