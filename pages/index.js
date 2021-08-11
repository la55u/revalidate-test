export default function Home({ minute }) {
  return <h1 style={{ textAlign: "center", marginTop: "40vh" }}>{minute}</h1>;
}

export const getStaticProps = async () => {
  const minute = new Date().getMinutes();
  console.log({ minute });
  return {
    props: { minute },
    notFound: minute % 2 === 0,
    revalidate: 1,
  };
};
