import styles from "../page.module.css";
import Image from "next/image";
import laptopImage from "../../../public/laptopscreen.jpg";

const skills = () => {
  return (
    <main className={styles.main}>
      <Image
        src={laptopImage}
        sizes="fill"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          position: "fixed",
        }}
        alt="laptop screen picture"
      />
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>My Skill Sets</h2>
        <div classname={styles.contentSkill}>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>React</li>
            <li>MYSQL</li>
            <li>VIM</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default skills;
