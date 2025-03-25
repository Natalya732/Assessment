import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import styles from "./Input.module.css";

export default function Input({
    value, handleChange, type, placeholder, label, ...props
}) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            <div className={styles.inputWrapper}>
                <input
                    className={styles.input}
                    placeholder={placeholder}
                    value={value}
                    type={type === "password" && showPassword ? "text" : type}
                    onChange={(e) => handleChange(e.target.value)}
                    {...props}
                />
                {type === "password" && (
                    <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </span>
                )}
            </div>
            {/* {type === "password" && <span className={styles.forgotPassword}>Forgot Password</span>} */}
        </div>
    );
}
