import "../styles/Auth.css"
import { useNavigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider , signInWithPopup } from "firebase/auth";import { useState } from "react";

export default function Auth() {

    const navigate = useNavigate()

    const [ popuptext , setpopuptext ] = useState()

    const firebaseConfig = {
        apiKey: "AIzaSyBsgk9zFWUbPZQLVGZLd6Ay37gvcfJltwY",
        authDomain: "white-9981e.firebaseapp.com",
        projectId: "white-9981e",
        storageBucket: "white-9981e.firebasestorage.app",
        messagingSenderId: "3857612118",
        appId: "1:3857612118:web:8881c3ea40d0b7faf5aaf7",
        measurementId: "G-ZZXB1ZRB7M"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    function Signin () {
        try{
            signInWithPopup(auth, provider).then( res => {
                fetch('http://localhost:3000/signin' , {
                    method: 'POST',
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        token: res.user.accessToken
                    })
                } )
                .then( res => res.json() )
                .then( res => {
                    if ( res.res == "user already exists" ) {
                        alert(res.res)
                    } else if ( res.res == "user got created" ) {
                        alert("do login ")
                    }
                })
            })
        } catch(err) {
            console.log(err);
        }
    }

    function Login () {
        try{
            signInWithPopup(auth, provider).then( res => {
                fetch('http://localhost:3000/login' , {
                    method: 'POST',
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        token: res.user.accessToken
                    })
                } )
                .then( res => res.json() )
                .then( res => {
                    if ( res.token ) {
                        localStorage.setItem( "token" , res.token )
                        navigate("/")
                    }
                })
            })
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="Auth-block">

                <div className="auth-img">
                    <img src="https://github.com/Samarth369/whiteboard/blob/main/client/images/dog-1728494_640.png?raw=true" alt="dog img" width={'80%'} />
                </div>

                <div className="user-in">
                    <button className="auth-btn" onClick={() => { Signin() }}>Signin</button>
                    <button className="auth-btn" onClick={() => { Login() }}>Login</button>
                </div>
            </div>
        </>
    )
}