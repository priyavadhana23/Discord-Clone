// Mark this as a Client Component
"use client";

import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Log the environment variable value to check if it's correctly set
    console.log('Clerk After Sign-In URL:', process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL);
  }, []);

  return <SignIn />;
}
