/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import * as React from 'react';
import '../../styles/sidebar.scss';

export default () => {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger"><div /></div>
      <div className="menu">
        <div className="top" />
        <div className="head">
          ARMPLY
        </div>
        <div className="item">
          군인 정보
        </div>
        <div className="item">
          내 정보
        </div>
        <div className="item">
          About
        </div>
        <div className="item">
          로그아웃
        </div>
        <div className="item">
          개발자 정보
        </div>
      </div>
    </div>
  );
};
