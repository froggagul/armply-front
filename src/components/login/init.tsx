import * as React from 'react';
import Input from './input';
import Submit from './submit';

export default ({ setPhase }: { setPhase: React.Dispatch<React.SetStateAction<"GetEmail" | "UserExist" | "UserNExist">> }) => {
  const [email, setEmail] = React.useState<string>('');
  React.useEffect(() => {
    console.log(email);
  }, [email])
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
        <Input state={email} setState={setEmail} placeholder={'이메일'} className={'login'}/>
        <Submit isOn={true} title={'계속하기'} className={'continue'} onClick={() => { setPhase('UserNExist'); }}/>
      </div>
    </>
  );
}