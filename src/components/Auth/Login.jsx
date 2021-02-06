import React from 'react';

import signInWithGoogle  from '../../services/firebase'

export default function Login() {
  return (
    <div>
      <button onClick={signInWithGoogle}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> Continue with Google</span>
      </button>
    </div>
  );
}
