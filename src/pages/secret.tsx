import Layout from "@components/Layout/Layout";
import Head from "next/head";
import { useEffect, useState } from "react";

const Secret: React.FC = () => {
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const calculateDaysSince = () => {
      const start = new Date(2022, 7, 26);
      const now = new Date();
      const nowUTC = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate()
      );
      const startUTC = Date.UTC(
        start.getUTCFullYear(),
        start.getUTCMonth(),
        start.getUTCDate()
      );
      const diffInTime = nowUTC - startUTC;
      const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

      setDaysSince(diffInDays);
    };

    // Calculate the days when the component is mounted
    calculateDaysSince();
  }, []);

  return (
    <Layout title="SECRET PAGE">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>YOU'VE FOUND THE SECRET PAGE!</h1>
      <p style={{ margin: "20px auto", width: "80%" }}>
        Congrats 🎉! You win a cookie!
      </p>
      <img src="/img/cookie.svg" style={{ width: "50px" }} />
      <p
        style={{
          textAlign: "left",
          margin: "20px auto",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        Since you had the time to find this secret page, let's take a few
        minutes together to practice gratitude. Let's write down 3 things we're
        grateful for today.
      </p>
      <p
        style={{
          textAlign: "left",
          margin: "20px auto",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        I started journaling in June 2022 and since then, every morning and
        night, I've written down 3 things I'm thankful for. It only takes a few
        minutes a day but my life has transformed dramatically since. Writing 6
        things of these a day really forced my brain to think about the good in
        everything. Below are some of the things I've written before:
      </p>
      <ul style={{ listStyle: "inside", width: "80%", margin: "auto" }}>
        <li>Thankful for alarm working this morning.</li>
        <li>Thankful for not forgetting anything back home.</li>
        <li>Thankful for not waiting long for the bus today.</li>
      </ul>
      <p
        style={{
          textAlign: "left",
          margin: "20px auto",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        Some of these are pretty silly now that I read them but there's never
        enough things to be thankful for! Recently, I also started writing one
        thing I love and appreciate about myself in addition to the 3 things I'm
        thankful for. It's part of my ongoing experiment of improving mental
        well-being with my habits.
      </p>
      <p
        style={{
          textAlign: "left",
          margin: "20px auto",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        Sorry for all this rambling. Anyways, gratitude truly changed my life
        and I just thought it was worth sharing. I will update this page with
        any thoughts I have.
      </p>

      <p
        style={{
          textAlign: "left",
          margin: "20px auto",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        Update 9/9/2024: Wow, it's already been more than 2 years since I
        started this journaling. I used to religiously journal right when I wake
        up and before I sleep but now I've kinda slipped to just doing them all
        at night. Nevertheless, I still feel like this habit does wonders to the
        subconscious. I'm proud that I haven't missed a single day (when I do, I
        fill them back in after), which means this live counter should
        theoretically total up how many "Thankful for..."s I've written by now:
        <br />
        <br />
        Days since: {daysSince}
        <br />
        "thankful"s written: {3 * daysSince}
      </p>
      <img
        src="/img/journals.jpg"
        style={{ width: "500px", marginTop: "50px" }}
      />
      <p>My journal evolution circa 2024</p>

      <p
        style={{
          marginTop: "200px",
        }}
      >
        Anyways, thanks for reading!
      </p>
    </Layout>
  );
};

export default Secret;
