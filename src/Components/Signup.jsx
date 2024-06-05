import { useState } from "react";
import styled from "styled-components";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const register = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                console.log("Name updated successfully!");
            }).catch((error) => {
                console.error("Error updating name:", error);
            });
        })
        .catch(error => alert(error.message));
    }

    initializeApp(firebaseConfig);

    return (
        <Container>
            <Logo>
                <img src="./amazon_logo.png" alt="" />
            </Logo>

            <FormContainer>
                <h3>Sign-Up</h3>
                <InputContainer>
                    <p>Name</p>
                    <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <p>Email</p>
                    <input type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <p>Password</p>
                    <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputContainer>
                <SignUp onClick={register}>Create Account in Amazon</SignUp>
                <Infotext>
                    By continuing you agree to Amazon <span>Conditions of Use</span> and{" "}
                    <span>Privacy Notice</span>
                </Infotext>
            </FormContainer>
            <LoginButton>
                <Link to="/login">Back to Login</Link>
            </LoginButton>
        </Container>
    );
}

const Container = styled.div`
    width: 50%;
    min-width: 450px;
    height: fit-content;
    padding: 15px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.div`
    width: 120px;
    margin-bottom: 20px;
    img {
        width: 100%;
    }
`;

const FormContainer = styled.form`
    border: 1px solid lightgray;
    width: 55%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    h3 {
        font-size: 28px;
        font-weight: 400;
        line-height: 33px;
        align-self: flex-start;
        margin-bottom: 10px;
    }
`;

const InputContainer = styled.div`
    width: 100%;
    padding: 10px;
    p {
        font-size: 14px;
        font-weight: 600;
    }
    input {
        width: 95%;
        height: 33px;
        padding-left: 5px;
        border-radius: 5px;
        border: 3px solid lightgray;
        margin-top: 5px;

        &:hover {
            border: 3px solid orange;
        }
    }
`;

const LoginButton = styled.button`
    width: 55%;
    height: 40px;
    background-color: #f3b414;
    border: none;
    outline: none;
    border-radius: 10px;
    margin-top: 70px;
    padding: 10px;
    font-size: 18px;
`;

const SignUp = styled.button`
    width: 100%;
    height: 40px;
    font-size: 12px;
    margin-top: 20px;
    padding: 10px;
    &:hover {
        background-color: #dfdfdf;
        border: 3px solid gray;
    }
`;

const Infotext = styled.p`
    font-size: 15px;
    width: 100%;
    word-wrap: normal;
    word-break: normal;
    margin: 20px;
    span {
        color: #423bc0;
    }
`;

export default Signup;
