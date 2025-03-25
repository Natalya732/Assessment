import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import { Menu } from "react-feather";
import profilePic from "../../assets/logo.png";
import Input from "../../Components/Input/Input";

export default function ProfilePage() {
    const [profileImage, setProfileImage] = useState(profilePic);
    const [personalInfo, setPersonalInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });
    const [passwordInfo, setPasswordInfo] = useState({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveChanges = () => {
        if (passwordInfo.newPassword !== passwordInfo.confirmNewPassword) {
            alert("New passwords do not match!");
            return;
        }

        const profileData = {
            ...personalInfo,
            profileImage,
            passwordChange: {
                oldPassword: passwordInfo.oldPassword,
                newPassword: passwordInfo.newPassword
            }
        };

        console.log('Profile Update Data:', profileData);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Menu />
                <h2>Profile</h2>
            </div>

            <div className={styles.profileCard}>
                <div className={styles.profileImageSection}>
                    <img src={profileImage} alt="Profile" className={styles.profileImage} />
                    <input 
                        type="file" 
                        accept="image/*" 
                        style={{ display: 'none' }} 
                        id="imageUpload"
                        onChange={handleImageUpload}
                    />
                    <label htmlFor="imageUpload" className={styles.uploadButton}>
                        Upload New Picture
                    </label>
                </div>

                <div className={styles.section}>
                    <h3>Personal Information:</h3>
                    <Input 
                        label="Full Name" 
                        type="text" 
                        name="fullName"
                        placeholder="Enter your name" 
                        value={personalInfo.fullName}
                        onChange={handlePersonalInfoChange}
                    />
                    <Input 
                        label="Email Address" 
                        type="email" 
                        name="email"
                        placeholder="Enter your email" 
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                    />
                    <Input 
                        label="Phone Number" 
                        type="tel" 
                        name="phoneNumber"
                        placeholder="Enter your number" 
                        value={personalInfo.phoneNumber}
                        onChange={handlePersonalInfoChange}
                    />
                </div>

                <div className={styles.section}>
                    <h3>Password Management:</h3>
                    <Input 
                        label="Old Password" 
                        type="password" 
                        name="oldPassword"
                        placeholder="Enter old password" 
                        value={passwordInfo.oldPassword}
                        onChange={handlePasswordChange}
                    />
                    <Input 
                        label="New Password" 
                        type="password" 
                        name="newPassword"
                        placeholder="Enter new password" 
                        value={passwordInfo.newPassword}
                        onChange={handlePasswordChange}
                    />
                    <Input 
                        label="Confirm New Password" 
                        type="password" 
                        name="confirmNewPassword"
                        placeholder="Confirm new password" 
                        value={passwordInfo.confirmNewPassword}
                        onChange={handlePasswordChange}
                    />
                </div>

                <button 
                    className={styles.saveButton}
                    onClick={handleSaveChanges}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}
