import React from "react";
import styles from "./WelcomeScreen.module.css";
import logo from "../../assets/logo.png";

export default function WelcomeScreen() {
    return (
        <div className={styles.card}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h1 className={styles.heading}>Welcome</h1>
            <p className={styles.subheading}>to the Free Shops App Admin Panel</p>
            <p className={styles.description}>
                Manage and monitor all aspects of your app seamlessly from one place. Use the tools below to get started.  
            </p>
            <button className={styles.button}>Get Started</button>
        </div>
    );
}
