import React, { useState } from 'react'
import { signUpStyles } from '../assets/dummyStyles';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ArrowLeft } from 'lucide-react';

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

// To submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // enforce all fields
    if (!name.trim() || !email.trim() || !password) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
      return;
    }

    // simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
      return;
    }

    // require remember me explicitly
    if (!rememberMe) {
      toast.error("Please tick 'Remember me' to continue.", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
      return;
    }

    // === NEW: log all form data ===
    console.log("Signup form submitted — form data:", {
      name,
      email,
      password, // ⚠️ for dev only, don't log raw passwords in production
      rememberMe,
      showPassword,
      timestamp: new Date().toISOString(),
    });

    // success
    toast.success("Signup successful", {
      position: "top-right",
      autoClose: 1200,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/login");
    }, 1250);
  };

  return (
    <div className={signUpStyles.pageContainer} style={signUpStyles.pageFontStyle}>
        <ToastContainer/>
        <button onClick={() => navigate("/login")} className={signUpStyles.backButton}>
            <ArrowLeft className={signUpStyles.backIcon}/>
            <span className={signUpStyles.backText}>Back to Login</span>

        </button>

    </div>
  )
}

export default SignUpPage