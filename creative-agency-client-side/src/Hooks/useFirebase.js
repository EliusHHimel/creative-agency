import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useState, useEffect } from 'react';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const useFirebase = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleName = event => {
        setName(event.target.value)
    }
    const handleNumber = event => {
        setNumber(event.target.value);
    }

    const signInWithGoogle = (location, navigate) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result);
                saveUserToDB(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch(error => {
                setError(error);
            });
    }

    const signInWithGithub = (location, navigate) => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result);
                saveUserToDB(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch(error => {
                setError(error);
            });
    }

    // Login using email and password
    const loginHandler = (location, navigate) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const registerUser = (location, navigate) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                updateDisplayName();
                saveUserToDB(email, name, 'POST');
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');

            })
            .catch(error => {
                setError(error);
            });
    }

    const updateDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            phoneNumber: number
        }).then(() => {

        }).catch((error) => {
            setError(error.message);
        });
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error);
            });
    }


    useEffect(() => {
        let mounted = true;
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(token => {
                        localStorage.setItem('idToken', token);
                    })
                setUser(user);
            }

            setLoading(false)
        })
        return () => mounted = false;
    }, [user])


    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {
                const foundAdmin = data.find(admin => user.email === admin.email && admin.role === 'admin');
                if (foundAdmin) {
                    setAdmin(true);
                    setLoading(false);
                }
            })
    }, [user.email]);

    const saveUserToDB = (userEmail, userDisplayName, method) => {
        const user = { userEmail, userDisplayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        signInWithGoogle,
        signInWithGithub,
        error,
        loading,
        signOut,
        registerUser,
        loginHandler,
        handleEmail,
        handlePassword,
        handleName,
        handleNumber,
        admin
    }

};

export default useFirebase;