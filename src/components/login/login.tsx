import * as React from 'react';
import Input from './input';
import Submit from './submit';

export default () => {
  const [password, setPassword] = React.useState<string>('');
  return (
    <>
      <div className="semi title">로그인</div>
      <div className="componentbox">
        <Input state={password} setState={setPassword} placeholder={'비밀번호'} className={'login'}/>
        <div className="text">
          비밀번호 찾기
        </div>
        <Submit isOn={true} title={'로그인'} className={'continue'} onClick={() => { alert('다음차시에'); }}/>
      </div>
    </>
  );
}