import styles from "@styles/Skills/Skills.module.css";
import SkillPair from "@components/Skills/SkillPair";

const Skills: React.FC = () => {
  return (
    <section>
      <h2 className="sectionTitle">I use...</h2>
      <div id={styles.skills}>
        <div id={styles.skillBar}>
          <SkillPair
            image="imgs/unity.svg"
            alt="unity logo"
            description="Unity"
          />
          <SkillPair
            image="imgs/vscode.svg"
            alt="vscode logo"
            description="Visual Studio Code"
          />
          <SkillPair image="imgs/csharp.svg" alt="C# logo" description="C#" />
          <SkillPair
            image="imgs/typescript.svg"
            alt="typescript logo"
            description="TypeScript"
          />
          <SkillPair
            image="imgs/react.svg"
            alt="react logo"
            description="React"
          />
          <SkillPair
            image="imgs/nextjs.png"
            alt="Next.js logo"
            description="Next.js"
          />
          <SkillPair
            image="imgs/gatsby.svg"
            alt="gatsbyjs logo"
            description="Gatsby"
          />
          <SkillPair image="imgs/cpp.svg" alt="C++ logo" description="C++" />
          <SkillPair image="imgs/java.svg" alt="Java logo" description="Java" />
          <SkillPair
            image="imgs/js.svg"
            alt="javascript logo"
            description="JavaScript"
          />
          <SkillPair
            image="imgs/py.svg"
            alt="Python logo"
            description="Python"
          />
          <SkillPair image="imgs/html.svg" alt="HTML logo" description="HTML" />
          <SkillPair image="imgs/css.png" alt="CSS logo" description="CSS" />
          <SkillPair
            image="imgs/postgres.svg"
            alt="postgresql logo"
            description="PostgreSQL"
          />
          <SkillPair
            image="imgs/mongoleaf.svg"
            alt="MongoDB logo"
            description="MongoDB"
          />
          <SkillPair
            image="imgs/expressjs.png"
            alt="expressjs logo"
            description="Express.js"
          />
          <SkillPair
            image="imgs/nodejs.svg"
            alt="node.js logo"
            description="Node.js"
          />
          <SkillPair image="imgs/php.svg" alt="PHP logo" description="PHP" />
          <SkillPair
            image="imgs/mysql.svg"
            alt="MySQL logo"
            description="MySQL"
          />
          <SkillPair
            image="imgs/fastai.jpg"
            alt="Fast.ai logo"
            description="Fast.ai"
          />
          <SkillPair
            image="imgs/react.svg"
            alt="react native logo"
            description="React Native"
          />
          <SkillPair image="imgs/vim.svg" alt="Vim logo" description="Vim" />
          <SkillPair
            image="imgs/photoshop.svg"
            alt="photoshop logo"
            description="Photoshop"
          />
          <SkillPair
            image="imgs/vegaspro.svg"
            alt="sony vegas pro logo"
            description="Sony Vegas Pro"
          />
          <SkillPair
            image="imgs/github.png"
            alt="Github logo"
            description="Github"
          />
          <SkillPair
            image="imgs/netlify.svg"
            alt="Netlify logo"
            description="Netlify"
          />
          <SkillPair
            image="imgs/netlifycms.png"
            alt="Netlify CMS logo"
            description="NetlifyCMS"
          />
          <SkillPair
            image="imgs/heroku.svg"
            alt="Heroku logo"
            description="Heroku"
          />
          <SkillPair
            image="imgs/gcp.svg"
            alt="Google cloud platform logo"
            description="Google Cloud Platform"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
