import Layout from "@components/Layout/Layout";

const FourOhFour: React.FC = () => {
  return (
    <Layout title="404">
      <h1>404 - Page Not Found :(</h1>
      <div
        style={{ textAlign: "center", margin: "50px auto", maxWidth: "800px" }}
      >
        <a
          href="#"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#2980b9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#3498db";
          }}
          onClick={() => (window.location.href = "/")}
        >
          Return to Home
        </a>
      </div>
    </Layout>
  );
};
export default FourOhFour;
