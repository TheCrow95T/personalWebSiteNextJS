import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Hello, I&apos;m Calvin</div>
      <a href="/resume.pdf">Download resume here!</a>
      <a href="https://www.linkedin.com/in/calvin-ong-jia-jun-0ab679225">
        Linkedln
      </a>
      <a href="https://github.com/TheCrow95T">Github</a>
    </main>
  );
}
