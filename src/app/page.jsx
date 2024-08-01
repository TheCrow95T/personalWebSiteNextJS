import Link from "next/link";

import styles from "./page.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.homeBgImg}></div>
            <div className={styles.homeContent}>
                <h2 className={styles.contentTitle}>Welcome to my personal page</h2>
                <div>
                    <div className={styles.contentHome}>
                        Hi, I&apos;m Calvin Ong
                        <br />A developer who happens to be love to tinkering stuff
                    </div>
                    <br />
                    <br />
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.submitBtn}
                    >
                        Download resume here!
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={styles.iconGroup}>
                        <a
                            href="https://www.linkedin.com/in/calvin-ong-jia-jun-0ab679225"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} className={styles.homeIcon} />
                        </a>
                        <a
                            href="https://github.com/TheCrow95T"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} className={styles.homeIcon} />
                        </a>
                        <Link href="/contact">
                            <FontAwesomeIcon
                                icon={faAddressCard}
                                className="nav-icon"
                            ></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
