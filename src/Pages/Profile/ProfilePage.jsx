// import React from "react"
// import styles from "./ProfilePage.module.css";
// import { Menu } from "react-feather";
// import logo from "../../assets/logo.png";
// import Input from "../../Components/Input/Input";


// export default function ProfilePage() {
//     return <div className={styles.profileContainer}>
//         <div className="flex gap-4 self-start">
//             <Menu />
//             <div className="text-xl font-semibold">Profile</div>
//         </div>
//         <div className={styles.profileCard}>
//             <div className={styles.profileImage}>
//                 <img src={logo} alt="profile" />
//                 <div className={styles.upload}><input type="file" className={styles.input} /></div>
//             </div>

//             <div className={styles.profileDetails}>
//                 <Input label="Name" type="text" placeholder="Enter your name" />
//                 <Input label="Email" type="email" placeholder="Enter your email" />
//                 <Input label="Phone Number" type="tel" placeholder="Enter your number" />
//             </div>
//         </div>
//     </div>
// }

import React from "react";
import styles from "./ProfilePage.module.css";
import { Menu } from "react-feather";
import profilePic from "../../assets/logo.png";
import Input from "../../Components/Input/Input";

export default function ProfilePage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Menu />
                <h2>Profile</h2>
            </div>

            <div className={styles.profileCard}>
                <div className={styles.profileImageSection}>
                    <img src={profilePic} alt="Profile" className={styles.profileImage} />
                    <button className={styles.uploadButton}>Upload New Picture</button>
                </div>

                <div className={styles.section}>
                    <h3>Personal Information:</h3>
                    <Input label="Full Name" type="text" placeholder="Enter your name" />
                    <Input label="Email Address" type="email" placeholder="Enter your email" />
                    <Input label="Phone Number" type="tel" placeholder="Enter your number" />
                </div>

                <div className={styles.section}>
                    <h3>Password Management:</h3>
                    <Input label="Old Password" type="password" placeholder="Enter old password" />
                    <Input label="New Password" type="password" placeholder="Enter new password" />
                    <Input label="Confirm New Password" type="password" placeholder="Confirm new password" />
                </div>

                <button className={styles.saveButton}>Save Changes</button>
            </div>
        </div>
    );
}
