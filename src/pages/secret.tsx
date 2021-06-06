import Layout from "@components/Layout/Layout";
import Link from "next/link";
import Image from "next/image";

const Secret: React.FC = () => {
  return (
    <Layout title="SECRET PAGE">
      <h1>YOU'VE FOUND THE SECRET PAGE, NICE!</h1>
      <Link href="https://www.youtube.com/watch?v=bwpK5QJu6K4">
        <a>
          <Image src="/imgs/dab.png" width={500} height={500} />
        </a>
      </Link>
    </Layout>
  );
};

export default Secret;
