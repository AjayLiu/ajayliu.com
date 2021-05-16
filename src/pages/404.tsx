import Layout from "@components/Layout/Layout";
import Link from "next/link";

const FourOhFour: React.FC = () => {
  return (
    <Layout title="404">
      <h1>404 - Page Not Found :(</h1>
      <Link href="../">Click me to go to home page</Link>
    </Layout>
  );
};
export default FourOhFour;
