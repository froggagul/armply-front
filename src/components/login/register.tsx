import * as React from 'react';
import Axios from 'axios';
import { backUrl } from '../../../config';
import Input from './input';
import Submit from './submit';

interface User {
  email?: string,
  password?: string,
  name?: string,
}

interface Init {
  setPhase: React.Dispatch<React.SetStateAction<'GetEmail' | 'UserExist' | 'UserNExist'>>,
  userInfo: User | undefined
}

export default ({ setPhase, userInfo }: Init) => {
  console.log(setPhase, userInfo);
  const [name, setName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [checkPassword, setCheckPassword] = React.useState<string>('');
  const register = () => {
    console.log('register');
    Axios.post(`${backUrl}/auth/signup`, {
      email: userInfo?.email,
      username: name,
      password,
      type: 'user',
    })
      .then((res) => {
        if (res.data.success) {
          window.location.href = './';
        }
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  return (
    <>
      <div className="semi title">회원가입</div>
      <div className="componentbox">
        <Input state={name} setState={setName} placeholder={'이름'} className={'login margin'} />
        <Input state={password} setState={setPassword} placeholder={'비밀번호'} className={'login'} />
        <div className="text">
          {password.length >= 6 ? '' : '비밀번호는 6자 이상이어야 합니다.'}
        </div>
        <Input state={checkPassword} setState={setCheckPassword} placeholder={'비밀번호 확인'} className={'login'} />
        <div className="text">
          {password === checkPassword ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.'}
        </div>
        <Submit isOn title={'회원가입'} className={'continue'} onClick={() => { register(); }} />
        <div className="text margin">
          회원가입을 함에따라, 개인정보 동의 및 어쩌구 저쩌구를 동의하게 됩니다.
        </div>
      </div>
    </>
  );
};
