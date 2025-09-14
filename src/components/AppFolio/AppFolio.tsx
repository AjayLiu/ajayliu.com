import React from "react";
import Layout from "@components/Layout/Layout";
import Card from "@components/Card/Card";
import cardList from "public/CardList";

const AppFolio: React.FC = () => {
  const appfolioCard = cardList.find((card) => card.slug === "appfolio");
  
  return (
    <Layout title="AppFolio Internship - Ajay Liu">
      <pre>
        <Card props={appfolioCard} />
      </pre>
    </Layout>
  );
};

export default AppFolio;
