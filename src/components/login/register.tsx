import * as React from 'react';
import Input from './input';
import Submit from './submit';

export default () => {
  const [name, setName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [checkPassword, setCheckPassword] = React.useState<string>('');
  return (
    <>
      <div className="semi title">회원가입</div>
      <div className="componentbox">
        <Input state={name} setState={setName} placeholder={'이름'} className={'login margin'}/>
        <Input state={password} setState={setPassword} placeholder={'비밀번호'} className={'login'}/>
        <div className="text">
          비밀번호는 6자 이상이어야 합니다.
        </div>
        <Input state={checkPassword} setState={setCheckPassword} placeholder={'비밀번호 확인'} className={'login'}/>
        <div className="text">
          비밀번호가 일치하지 않습니다.
        </div>
        <Submit isOn={true} title={'회원가입'} className={'continue'} onClick={() => { alert('다음차시에'); }}/>
        <div className="text margin">
          회원가입을 함에따라, 개인정보 동의 및 어쩌구 저쩌구를 동의하게 됩니다.
        </div>
      </div>
    </>
  );
}