import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import { IoLogoGoogle } from 'react-icons/io';

const SocialBtn = () => {
    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <Button onClick={handleGoogleSignIn} className="w-full max-w-85" variant="tertiary">
            <IoLogoGoogle />
            Sign in with Google
        </Button>
    );
};

export default SocialBtn;