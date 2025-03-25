import React from "react";
import { useState } from "react";
import { Camera } from "react-feather";
import "./ProfileUpdate.css";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { useNavigate } from "react-router-dom";
import makeApiCall from "../../utils/Helper";
import { toast } from "react-toastify";

export default function ProfileUpdate() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: ""
  });
  const [profileImage, setProfileImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fullName: formData.name,
      firstName: formData.name.split(" ")?.[0],
      lastName: formData.name.split(" ")?.[1],
      phone: formData.phoneNumber,
      email: formData.email,
      password: formData.password
    }
    setLoading(true);
    const response = await makeApiCall({
      path: "/api/v1/admin/update",
      method: "PUT",
      payload
    });
    setLoading(false);
    if (!response) return;
    toast.success("Profile Updated Successfully")
    navigate("/profile");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <button className="skip-btn" onClick={() => navigate("/profile")}>Skip</button>

        <div className="profile-image-section">
          <label htmlFor="profile-pic" className="profile-pic-wrapper">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-pic" />
            ) : (
              <div className="default-pic">
                <Camera size={24} className="camera-icon" />
              </div>
            )}
          </label>
          <input
            type="file"
            id="profile-pic"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
          <p className="upload-text">Upload Profile Picture</p>
        </div>

        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <Input
              label="Your Name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              handleChange={(value) => handleInputChange("name", value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="input-group">
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              handleChange={(value) => handleInputChange("email", value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <Input
              label="Phone Number"
              type="text"
              name="phoneNumber"
              placeholder="Enter your number"
              value={formData.phoneNumber}
              handleChange={(value) => handleInputChange("phoneNumber", value)}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>

          <div className="input-group">
            <Input
              label="Password"
              type={"password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              handleChange={(value) => handleInputChange("password", value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="w-fit self-center">
            <Button onClick={handleSubmit}>Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
