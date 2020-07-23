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

export default ({ setPhase, setUserInfo, userInfo }: Init) => {
  const [email, setEmail] = React.useState<string>('');
  React.useEffect(() => {
    setUserInfo({ ...userInfo, email });
  }, [email]);
  const checkEmail = () => {
    // email 유효성 검사
    // email check
    Axios.post('http://localhost:5000/auth/view', { email })
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
        <div className="item google">
          google
        </div>
        <div className="item facebook">
          facebook
        </div>
        <div className="item kakao">
          kakao
        </div>
        <div className="contour">
          <div className="text">
            또는
          </div>
        </div>
        <Input state={email} setState={setEmail} placeholder={'이메일'} className={'login'} />
        <Submit isOn title={'계속하기'} className={'continue'} onClick={() => { checkEmail(); }} />
      </div>
    </>
  );
};
