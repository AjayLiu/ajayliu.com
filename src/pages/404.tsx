import Layout from "@components/Layout/Layout";
import StyledLink from "@components/StyledLink/StyledLink";
import Link from "next/link";

const FourOhFour: React.FC = () => {
  return (
    <Layout title="404">
      <h1>404 - Page Not Found :(</h1>
      <StyledLink href="../">Click me to go to home page</StyledLink>
    </Layout>
  );
};
export default FourOhFour;
