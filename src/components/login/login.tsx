import * as React from 'react';
import Axios from 'axios';
import Input from './input';
import Submit from './submit';

interface User {
  email?: string,
  password?: string,
  name?: string,
}

interface Init {
  setPhase: React.Dispatch<React.SetStateAction<'GetEmail' | 'UserExist' | 'UserNExist'>>,
  setUserInfo: React.Dispatch<React.SetStateAction<User | undefined>>,
  userInfo: User | undefined
}

export default ({ setPhase, userInfo, setUserInfo }: Init) => {
  const [password, setPassword] = React.useState<string>('');
  const login = () => {
    Axios.post('http://localhost:5000/auth/login', {
      email: userInfo?.email,
      password,
    }, { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          window.location.href = './';
        }
      });
  };
  return (
    <>
      <div className="semi title">로그인</div>
      <div className="componentbox">
        <Input state={password} setState={setPassword} placeholder={'비밀번호'} className={'login'} />
        <div className="text">
          비밀번호 찾기
        </div>
        <Submit isOn title={'로그인'} className={'continue'} onClick={() => { login(); }} />
      </div>
    </>
  );
};
