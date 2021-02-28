import styles from '@styles/Skills/Skills.module.css'
import SkillPair from '@components/Skills/SkillPair'

const Skills: React.FC = () =>{
    return (
        <section>
            <h2 className="sectionTitle">I use...</h2>
            <div id={styles.skills}>
                <div id={styles.skillBar}>
                    <SkillPair image="imgs/unity.png" alt="unity logo" description= "Unity" />
                    <SkillPair image="imgs/vscode.png" alt="vscode logo" description= "Visual Studio Code" /> 
                    <SkillPair image="imgs/csharp.png" alt="C# logo" description= "C#" />
                    <SkillPair image="imgs/typescript.png" alt="typescript logo" description= "TypeScript" />
                    <SkillPair image="imgs/react.png" alt="react logo" description= "React" />
                    <SkillPair image="imgs/nextjs.png" alt="Next.js logo" description= "Next.js" />
                    <SkillPair image="imgs/cpp.png" alt="C++ logo" description= "C++" />
                    <SkillPair image="imgs/java.png" alt="Java logo" description= "Java" />
                    <SkillPair image="imgs/js.png" alt="javascript logo" description= "JavaScript" />
                    <SkillPair image="imgs/py.png" alt="Python logo" description= "Python" />
                    <SkillPair image="imgs/htmlcss.png" alt="HTML/CSS logo" description= "HTML/CSS" />
                    <SkillPair image="imgs/postgres.png" alt="postgresql logo" description= "PostgreSQL" />
                    <SkillPair image="imgs/mongoleaf.png" alt="MongoDB logo" description= "MongoDB" />
                    <SkillPair image="imgs/expressjs.png" alt="expressjs logo" description= "Express.js" />
                    <SkillPair image="imgs/node.png" alt="node.js logo" description= "Node.js" />
                    <SkillPair image="imgs/php.png" alt="PHP logo" description= "PHP" />
                    <SkillPair image="imgs/mysql.png" alt="MySQL logo" description= "MySQL" />
                    <SkillPair image="imgs/fastai.png" alt="Fast.ai logo" description= "Fast.ai" />
                    <SkillPair image="imgs/react.png" alt="react native logo" description= "React Native" />
                    <SkillPair image="imgs/vim.png" alt="Vim logo" description= "Vim" />
                    <SkillPair image="imgs/photoshop.png" alt="photoshop logo" description= "Photoshop" />
                    <SkillPair image="imgs/vegas.png" alt="sony vegas pro logo" description= "Sony Vegas Pro" />
                    <SkillPair image="imgs/github.png" alt="Github logo" description= "Github" />
                    <SkillPair image="imgs/netlify.png" alt="Netlify logo" description= "Netlify" />
                    <SkillPair image="imgs/heroku.png" alt="Heroku logo" description= "Heroku" />
                    <SkillPair image="imgs/gcloud.png" alt="Google cloud platform logo" description= "Google Cloud Platform" />
                </div>
            </div>
        </section>
    )
}

export default Skills;