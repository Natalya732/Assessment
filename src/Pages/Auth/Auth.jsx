import React, { useState } from "react";
import styles from "./Auth.module.css";
import logo from "../../assets/logo.png";
import Card from "../../Components/Card/Card";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { toast } from "react-toastify";
import makeApiCall from "../../utils/Helper";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

function LoginCard({ onCreateAccountClick, onLogin }) {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = () => {
        onLogin(loginData);
    };

    return (
        <Card title="Login Page" description="Welcome to the free shops App Controller">
            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleInputChange}
            />
            <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleInputChange}
            />
            <div className="w-fit self-center">
                <Button onClick={handleLogin}>Log In</Button>
            </div>
            <div
                className="text-blue-500 self-center mt-6 cursor-pointer"
                onClick={onCreateAccountClick}
            >
                Create New Account
            </div>
        </Card>
    );
}

function CreateNewAccountCard({ onLoginClick, onRegister }) {
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRegisterData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = () => {
        if (registerData.password !== registerData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        onRegister(registerData);
    };

    return (
        <Card title="Create New Account" description="Welcome to the free shops App Controller">
            <Input
                label="Your Name"
                type="text"
                name="name"
                placeholder="Enter your username"
                value={registerData.name}
                onChange={handleInputChange}
            />
            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={registerData.email}
                onChange={handleInputChange}
            />
            <Input
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                placeholder="Enter your number"
                value={registerData.phoneNumber}
                onChange={handleInputChange}
            />
            <Input
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={registerData.password}
                onChange={handleInputChange}
            />
            <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="Enter your password"
                value={registerData.confirmPassword}
                onChange={handleInputChange}
            />
            <div className="w-fit self-center">
                <Button onClick={handleRegister}>Create Account</Button>
            </div>
            <div
                className="text-blue-500 self-center mt-6 cursor-pointer"
                onClick={onLoginClick}
            >
                Already have an account?
            </div>
        </Card>
    );
}

export default function Auth() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (loginData) => {
        setLoading(true);
        const response = await makeApiCall({
            path: "/api/v1/admin/login",
            payload: loginData,
            method: "POST"
        });
        setLoading(false);
        if (!response) return;
        toast.success("Logged In successfully");
        navigate("/profile");
        console.log("response", response)
        setIsLogin(true);
    };

    const handleRegister = async (registerData) => {
        setLoading(true);
        const response = await makeApiCall({
            path: "/api/v1/admin/registration",
            payload: registerData,
            method: "POST"
        });
        setLoading(false);
        if (!response) return;
        toast.success("Account created successfully");
        setIsLogin(true);
    };

    return loading ? <Loader /> : (
        <div className={styles.authContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.line} />
            <div className={styles.authFormContainer}>
                {isLogin ? (
                    <LoginCard
                        onCreateAccountClick={() => setIsLogin(false)}
                        onLogin={handleLogin}
                    />
                ) : (
                    <CreateNewAccountCard
                        onLoginClick={() => setIsLogin(true)}
                        onRegister={handleRegister}
                    />
                )}
            </div>
        </div>
    );
}