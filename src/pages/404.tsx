import Layout from "@components/Layout/Layout";
import Link from "next/link";

const FourOhFour: React.FC = () => {
  return (
    <Layout title="404">
      <h1>404 - Page Not Found :(</h1>
      <Link href="../">
        <a>Click me to go to home page</a>
      </Link>
    </Layout>
  );
};
export default FourOhFour;
