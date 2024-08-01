"use client";

import { useState } from "react";
import styles from "../page.module.css";

let Contact = () => {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        setLoading(true);
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const response = await fetch("/api/email", {
                method: "post",
                headers: {
                    "api-key": "2e932fsubvfvsfe9f3fywscnvisunfuefw8fvsjlv",
                },
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over");
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData["message"]);

            alert(responseData["message"]);
            setLoading(false);
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
            setLoading(false);
        }
    }

    return (
        <main className={styles.main}>
            { loading ? <div className={styles.loadingBg}><div className={styles.loadingBgImg}></div></div> : null }
            <div className={styles.pageBgImg}></div>
            <div className={styles.content}>
                <h2 className={styles.contentTitle}>Contact me</h2>
                <div classname={styles.contentForm}>
                    <form onSubmit={handleSubmit} className="">
                        <div className="">
                            <label htmlFor="form-name">Name:</label>
                            <br />
                            <input
                                id="form-name"
                                required
                                maxLength={50}
                                size="lg"
                                name="name"
                                className=""
                                placeholder="G1 Michigan"
                            />
                            <br />

                            <label htmlFor="form-email"> Email:</label>
                            <br />
                            <input
                                id="form-email"
                                required
                                maxLength={80}
                                name="email"
                                type="email"
                                className=""
                                placeholder="example@mail.com"
                            />
                            <br />

                            <label htmlFor="form-message"> Message: </label>
                            <br />
                            <textarea
                                id="form-message"
                                required
                                name="message"
                                rows={5}
                                className=""
                                placeholder="Type your message here"
                            />
                        </div>
                        <br />
                        <button className={styles.submitBtn} type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;
