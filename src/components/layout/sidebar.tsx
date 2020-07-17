/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import { useRouter } from 'next/router';
import '../../styles/sidebar.scss';

export default () => {
  const router = useRouter();
  const moveTo = (url: string) => {
    router.push(url);
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
        <div className="item">
          로그아웃
        </div>
        <div className="item" onClick={() => { moveTo('/credit'); }}>
          개발자 정보
        </div>
      </div>
    </div>
  );
};
