import Layout from "@components/Layout/Layout";
import Link from "next/link";

const Secret: React.FC = () => {
  return (
    <Layout title="SECRET PAGE">
      <h1>YOU'VE FOUND THE SECRET PAGE, NICE!</h1>
      <Link href="https://www.youtube.com/watch?v=bwpK5QJu6K4">
        <img src="imgs/dab.png" style={{ width: "50%" }} />
      </Link>
    </Layout>
  );
};

export default Secret;
