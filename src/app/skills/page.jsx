import styles from "../page.module.css";

const skills = () => {
    return (
        <main className={styles.main}>
            <div className={styles.pageBgImg}></div>
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
