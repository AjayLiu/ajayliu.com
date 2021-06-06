import styles from "./Skills.module.scss";
import SkillPair from "@components/SkillPair/SkillPair";

const Skills: React.FC = () => {
  return (
    <section>
      <h2 className="sectionTitle">I use...</h2>
      <div id={styles.skills}>
        <div id={styles.skillBar}>
          <SkillPair
            image="/img/unity.svg"
            alt="unity logo"
            description="Unity"
          />
          <SkillPair
            image="/img/vscode.svg"
            alt="vscode logo"
            description="Visual Studio Code"
          />
          <SkillPair image="/img/csharp.svg" alt="C# logo" description="C#" />
          <SkillPair
            image="/img/typescript.svg"
            alt="typescript logo"
            description="TypeScript"
          />
          <SkillPair
            image="/img/react.svg"
            alt="react logo"
            description="React"
          />
          <SkillPair
            image="/img/nextjs.png"
            alt="Next.js logo"
            description="Next.js"
          />
          <SkillPair
            image="/img/gatsby.svg"
            alt="gatsbyjs logo"
            description="Gatsby"
          />
          <SkillPair image="/img/cpp.svg" alt="C++ logo" description="C++" />
          <SkillPair image="/img/java.svg" alt="Java logo" description="Java" />
          <SkillPair
            image="/img/js.svg"
            alt="javascript logo"
            description="JavaScript"
          />
          <SkillPair
            image="/img/py.svg"
            alt="Python logo"
            description="Python"
          />
          <SkillPair image="/img/html.svg" alt="HTML logo" description="HTML" />
          <SkillPair image="/img/css.png" alt="CSS logo" description="CSS" />
          <SkillPair
            image="/img/sass.svg"
            alt="Sass CSS logo"
            description="SCSS"
          />
          <SkillPair
            image="/img/postgres.svg"
            alt="postgresql logo"
            description="PostgreSQL"
          />
          <SkillPair
            image="/img/mongoleaf.svg"
            alt="MongoDB logo"
            description="MongoDB"
          />
          <SkillPair
            image="/img/socketio.svg"
            alt="socket.io logo"
            description="Socket.io"
          />
          <SkillPair
            image="/img/graphql.svg"
            alt="GraphQL logo"
            description="GraphQL"
          />
          <SkillPair
            image="/img/expressjs.png"
            alt="expressjs logo"
            description="Express.js"
          />
          <SkillPair
            image="/img/nodejs.svg"
            alt="node.js logo"
            description="Node.js"
          />
          <SkillPair image="/img/php.svg" alt="PHP logo" description="PHP" />
          <SkillPair
            image="/img/fastai.jpg"
            alt="Fast.ai logo"
            description="Fast.ai"
          />
          <SkillPair
            image="/img/react.svg"
            alt="react native logo"
            description="React Native"
          />
          <SkillPair image="/img/vim.svg" alt="Vim logo" description="Vim" />
          <SkillPair
            image="/img/photoshop.svg"
            alt="photoshop logo"
            description="Photoshop"
          />
          <SkillPair
            image="/img/vegaspro.svg"
            alt="sony vegas pro logo"
            description="Sony Vegas Pro"
          />
          <SkillPair
            image="/img/github.png"
            alt="Github logo"
            description="Github"
          />
          <SkillPair
            image="/img/netlify.svg"
            alt="Netlify logo"
            description="Netlify"
          />
          <SkillPair
            image="/img/netlifycms.png"
            alt="Netlify CMS logo"
            description="NetlifyCMS"
          />
          <SkillPair
            image="/img/heroku.svg"
            alt="Heroku logo"
            description="Heroku"
          />
          <SkillPair
            image="/img/gcp.svg"
            alt="Google cloud platform logo"
            description="Google Cloud Platform"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
