import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const GooglePageLogin = () => {
    const login = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse),
        flow: 'implicit',
    });
    return (
        // <GoogleOAuthProvider clientId='205216238298-hm9oof8lime7ohotkd46psdorg6p33ll.apps.googleusercontent.com'>
            <button type='button' onClick={() => login()}>Login</button>
        // </GoogleOAuthProvider>

    );
};

export default GooglePageLogin;