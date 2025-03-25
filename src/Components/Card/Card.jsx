import React from "react"
import styles from "./Card.module.css";

export default function Card({ title, description, children }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardTitle}>{title}</div>
            <div className={styles.cardDescription}>{description}</div>
            <div className={styles.cardContent}>{children}</div>
        </div>
    )
}