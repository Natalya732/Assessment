import React from "react";
import styles from "./Auth.module.css";
import logo from "../../assets/logo.png";
import Card from "../../Components/Card/Card";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";


function LoginCard() {
    return (<Card title="Login Page" description="Welcome to the free shops App Controller">
        <Input label="Username" type="text" placeholder="Enter your username" />
        <Input label="Password" type="password" placeholder="Enter your password" />
        <div className="w-fit self-center">
            <Button>Log In</Button>
        </div>
        <div className="text-blue-500 self-center mt-6 cursor-pointer">Create New Account</div>
    </Card>)
}


function CreateNewAccountCard() {
    return (
        <Card title="Create New Account" description="Welcome to the free shops App Controller">
            <Input label="Your Name" type="text" placeholder="Enter your username" />
            <Input label="Email" type="email" placeholder="Enter your email" />
            <Input label="Phone Number" type="tel" placeholder="Enter your number" />
            <Input label="Password" type="password" placeholder="Enter your password" />
            <Input label="Confirm Password" type="password" placeholder="Enter your password" />
            <div className="w-fit self-center">
                <Button>Create Account</Button>
            </div>
            <div className="text-blue-500 self-center mt-6 cursor-pointer">Already have an account?</div>
        </Card>
    )
}


export default function Auth() {

    return <div className={styles.authContainer}>
        <div className={styles.logoContainer}>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.line} />
        <div className={styles.authFormContainer}>
            <CreateNewAccountCard />
        </div>
    </div>;
}