import * as React from 'react';
import Axios from 'axios';
import Input from './input';
import Submit from './submit';
import { backUrl } from '../../../config';

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

export default ({ setPhase, setUserInfo, userInfo }: Init) => {
  const [email, setEmail] = React.useState<string>('');
  React.useEffect(() => {
    setUserInfo({ ...userInfo, email });
  }, [email]);
  const checkEmail = () => {
    // email 유효성 검사
    // email check
    Axios.post(`${backUrl}/auth/view`, { email, loginType: 'email' })
      .then((res) => {
        if (res.data.success) {
          setPhase('UserExist');
        } else {
          setPhase('UserNExist');
        }
      });
  };
  return (
    <>
      <div className="semi title">로그인/회원가입</div>
      <div className="componentbox">
        <a href={`${backUrl}/auth/google`} className="item" id="google-connect"> <span>구글 계정으로 로그인</span></a>
        <a href={`${backUrl}/auth/facebook`} className="item" id="facebook-connect"> <span>페이스북 계정으로 로그인</span></a>
        {/* <div
          className="item facebook"
          onClick={() => {
            alert('죄송합니다 ㅠㅠ 준비중이에요');
            // window.open(`${backUrl}/auth/facebook`, '_self');
          }}
        >
          kakao
        </div> */}
        <div className="contour">
          <div className="text">
            또는
          </div>
        </div>
        <Input state={email} setState={setEmail} placeholder={'이메일'} className={'login resp'} />
        <Submit isOn title={'계속하기'} className={'continue responsive'} onClick={() => { checkEmail(); }} />
      </div>
    </>
  );
};
