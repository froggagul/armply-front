import * as React from 'react';
import Axios from 'axios';
import '../styles/index.scss';

export default () => {
  const [id, setId] = React.useState<string>();
  const [pw, setPw] = React.useState<string>();
  const login = () => {
    Axios.post('http://localhost:5000/auth/login', {
      username: id,
      password: pw,
    }, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  return (
    <div className="main">
      <h1 className="title">ARMPLY</h1>
      <div className="container">
        <div className="semi title">로그인</div>
        <div className="item email">
          <input
            value={id}
            onChange={(e) => { setId(e.target.value); }}
          />
          <input
            value={pw}
            onChange={(e) => { setPw(e.target.value); }}
          />
          <div onClick={login}>
            로그인
          </div>
        </div>
        <div className="item google">
          <img src="/btn_google.svg" alt="googlebtn" />
          <div className="context">
            {'SIGN IN WITH GOOGLE'}
          </div>
        </div>
        <div className="item google">
          <img src="/btn_google.svg" alt="googlebtn" />
          <div className="context">
            {'SIGN IN WITH GOOGLE'}
          </div>
        </div>
        <div className="item google">
          <img src="/btn_google.svg" alt="googlebtn" />
          <div className="context">
            {'SIGN IN WITH GOOGLE'}
          </div>
        </div>
      </div>
    </div>
  );
};
