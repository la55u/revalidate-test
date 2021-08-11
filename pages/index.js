export default function Home({ sec }) {
  return <h1 style={{ textAlign: "center", marginTop: "40vh" }}>{sec}</h1>;
}

export const getStaticProps = async () => {
  const sec = new Date().getSeconds();
  console.log({ sec });
  return {
    props: { sec },
    notFound: sec <= 30,
    revalidate: 1,
  };
};
