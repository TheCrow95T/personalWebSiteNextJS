import styles from "../page.module.css";

const about = () => {
    return (
        <main className={styles.main}>
            <div className={styles.pageBgImg}></div>
            <div className={styles.content}>
                <h2 className={styles.contentTitle}>About me</h2>
                <div className={styles.contentAbout}>
                    <div>
                        <h2>Introduction</h2>
                        <p>
                            I have a background in accounting but have always harbored a
                            fascination with programming. In today&apos;s digital age, where
                            information and resources are readily available online, I found it
                            increasingly easier to learn programming. Therefore, here I am!
                        </p>
                    </div>
                    <div>
                        <h2>Why Programming</h2>
                        <p>
                            Programming holds a special appeal to me for several reasons.
                            Firstly, as a dedicated Linux workstation user, I find joy in
                            tinkering with code and exploring the depths of technology for
                            hours on end. Secondly, the sense of accomplishment that
                            accompanies reaching coding milestones or successfully completing
                            a challenge is unparalleled. Finally, let&apos;s not forget that
                            sitting in front of code with dark mode does makes me looks cool!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default about;
