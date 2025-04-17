'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();

    const handleSignIn = () => {
        router.push('/');
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="login-logo">
                    <Image 
                        src="/img/logo.png" 
                        alt="Martfury Logo" 
                        width={150} 
                        height={40}
                    />
                </div>
                <h1>Welcome back</h1>
                <form className="login-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Name@email.com"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className="password-input">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="••••"
                            />
                        </div>
                    </div>
                    <button 
                        type="button" 
                        className="btn-signin"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage; 