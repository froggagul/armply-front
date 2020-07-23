/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
// import { useRouter } from 'next/router';
import '../../styles/sidebar.scss';
import Axios from 'axios';

export default () => {
  // const router = useRouter();
  const moveTo = (url: string) => {
    window.location.href = url;
  };
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  React.useEffect(() => {
    Axios.get('http://localhost:5000/auth/my', { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setIsAuthenticated(true);
        }
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  const logout = () => {
    Axios.delete('http://localhost:5000/auth/logout', { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          moveTo('/');
        } else {
          console.log('logout err');
        }
      });
  };
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger"><div /></div>
      <div className="menu">
        <div className="top" />
        <div className="head" onClick={() => { moveTo('/'); }}>
          ARMPLY
        </div>
        <div className="item" onClick={() => { moveTo('/soldier'); }}>
          군인 정보
        </div>
        <div className="item" onClick={() => { moveTo('/my'); }}>
          내 정보
        </div>
        <div className="item" onClick={() => { moveTo('/about'); }}>
          About
        </div>
        <div
          className="item"
          onClick={() => {
            if (isAuthenticated) {
              logout();
            } else {
              moveTo('/login');
            }
          }}
        >
          {isAuthenticated ? '로그아웃' : '로그인'}
        </div>
        <div className="item" onClick={() => { moveTo('/credit'); }}>
          개발자 정보
        </div>
      </div>
    </div>
  );
};
