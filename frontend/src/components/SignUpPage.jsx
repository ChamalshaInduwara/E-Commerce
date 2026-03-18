import React, { useState } from 'react'
import { signUpStyles } from '../assets/dummyStyles'

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  return (
    <div>

    </div>
  )
}

export default SignUpPage