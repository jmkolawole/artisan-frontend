import React, { useState } from 'react';
import * as S from './Login.style';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import { emailLogin, isLoggedIn } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isLoggedIn()) {
    if(localStorage.getItem('is_admin') === 1){
      location.assign('/dashboard');
    }else{
      location.assign('/');
    }
    
    return <></>;
  }

  const navigate = useNavigate();

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password,
    };

    const res = await emailLogin(payload);
    const user = await res.json();

    if (user.status == 200) {
      localStorage.setItem('user_id', user.data.id);
      localStorage.setItem('token', user.data.access_token);
      localStorage.setItem('expiry', user.data.expiresIn);
      localStorage.setItem('username', user.data.username);
      localStorage.setItem('email', user.data.email);
      localStorage.setItem('is_admin', user.data.is_admin);

      if(user.data.is_admin === 1){
        navigate('/dashboard');
      }else{
        navigate('/');
      }

      
    }
  };
  return (
    <S.LoginContainer>
      <S.LoginContent>
        <S.LoginHeader>
          <h4>Login</h4>
        </S.LoginHeader>
        <S.LoginBody>
          <TextInput
            icon={{}}
            style={{ minWidth: '466px', marginBottom: '40px' }}
            label="Email"
            placeholder="Email"
            size="md"
            type="email"
            width="400px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            icon={{}}
            style={{ minWidth: '466px' }}
            label="Password"
            placeholder="Password"
            size="md"
            type="password"
            width="400px"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <S.ButtonContainer>
            <Button
              height="40px"
              width="100%"
              variant="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </S.ButtonContainer>
        </S.LoginBody>
      </S.LoginContent>
    </S.LoginContainer>
  );
};

export default Login;
