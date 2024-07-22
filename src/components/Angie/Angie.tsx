import Head from "next/head";
import styles from "./Angie.module.scss";
const Angie: React.FC = () => {
	return (
		<div>
			<Head>
				<title>For my beloved Angelina</title>
			</Head>
			<div className={styles.container}>
				<div className={styles.x}>
					<img className={styles.y} src="../img/angie.png" alt="angie" />
				</div>
				<h1 className={styles.title}>I LOVE YOU, ANGELINA</h1>
			</div>
			<div id={styles.stars}></div>
			<div id={styles.stars2}></div>
			<div id={styles.stars3}></div>
			<p className={styles.paragraph}>
				In this ever expanding universe of possibilities we call life, <br></br>
				where each star's a memory of every experience lived and unlived, <br></br>
				every person we love, hate, and forgive, <br></br>
				our planets crossed paths from distant galaxies, <br></br>
				orbiting each other amidst this brilliant, but empty void. <br></br> <br></br>

				<br></br>
				With just enough distance to prevent collision, <br></br>
				and just enough gravity to avoid escape, <br></br>
				we dance in each other's warm embrace    <br></br>
				to explore this otherwise desolate place; <br></br>
				because you are always my home, my safe space.<br></br>
				<br></br>


				<br></br> <br></br>
				<div style={{ textAlign: "right" }}>
					- Ajay ♡
				</div>
			</p>
		</div>
	);
};
export default Angie;
