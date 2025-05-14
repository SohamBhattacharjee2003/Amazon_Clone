import { Button } from '@mui/material';
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          alert('User not found. Please check your email.');
        } else if (error.code === 'auth/wrong-password') {
          alert('Incorrect password. Please try again.');
        } else {
          alert(error.message);
        }
      });
  };

  return (
    <Container>
      <Logo>
        <img src="./amazon_logo.png" alt="" />
      </Logo>

      <FormContainer onSubmit={signIn}>
        <h3>Sign-In</h3>
        <InputContainer>
          <p>Email</p>
          <input type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </InputContainer>

        <LoginButton type="submit">Login</LoginButton>
        <Infotext>
          By continuing you agree to Amazon <span>Conditions of Use</span> and <span>Privacy
          Notice</span>
        </Infotext>
      </FormContainer>
      <SignUp>
        Create Account in Amazon
      </SignUp>
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
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
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
    width: 70%;
    height: 40px;
    background-color: #f3b414;
    border: none;
    outline: none;
    border-radius: 10px;
    margin-top: 30px;
    padding: 10px;
    font-size: 18px;
`;

const Infotext = styled.p`
  font-size: 15px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin: 20px;
  span{
    color: #423bc0;
  }
`;

const SignUp = styled.button`
  width: 55%;
  height: 40px;
  font-size: 12px;
  margin-top: 20px;

  &:hover{
    background-color: #dfdfdf;
    border: 3px solid gray;
  }
`;

export default Login;
