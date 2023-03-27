import Layout from "@components/Layout/Layout";

const Secret: React.FC = () => {
  return (
    <Layout title="SECRET PAGE">
      <h1>YOU'VE FOUND THE SECRET PAGE!</h1>
      <p style={{ margin: "20px auto", width: "80%" }}>
        Here, have a cookie, you deserve it! While you're eating, how's your day
        been?
      </p>
      {/* <a href="https://www.youtube.com/watch?v=bwpK5QJu6K4"> */}
      <img src="/img/cookie.svg" style={{ width: "200px" }} />
      {/* </a> */}
      <p style={{ margin: "20px auto", width: "80%" }}>
        Today might've been a rough day or it may have been great, but either
        way, don't forget to cherish the little things in life. It's so easy to
        take things for granted, you might even start taking yourself for
        granted.
      </p>
      <p style={{ margin: "20px auto", width: "80%" }}>
        I started journaling in June 2022 and since then, every morning and
        night, I've written down 3 things I'm thankful for. It only takes a few
        minutes a day but my life has transformed dramatically since. Writing 6
        things of these a day really forced my brain to think about the good in
        everything. Below are some of the things I've written before:
      </p>
      <ul style={{ listStyle: "inside" }}>
        <li>Thankful for alarm working this morning.</li>
        <li>Thankful for not forgetting anything back home.</li>
        <li>Thankful for not waiting long for the bus today.</li>
        <li>Thankful for the rain, such a comfy day.</li>
      </ul>
      <p style={{ margin: "20px auto", width: "80%" }}>
        Some of these are pretty silly now that I read them but there's never
        enough things to be thankful for. Recently, I also started writing one
        thing I love and appreciate about myself in addition to the 3 things I'm
        thankful for. It's really helped me build more confidence and self-love.
      </p>
      <p style={{ margin: "20px auto", width: "80%" }}>
        Sorry for all this rambling. Anyways, gratitude truly changed my life
        and I just thought it was worth sharing.
      </p>
    </Layout>
  );
};

export default Secret;
