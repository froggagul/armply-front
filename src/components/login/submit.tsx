import * as React from 'react';
import '../../styles/submit.scss';

interface InputInterface {
    isOn: boolean
    title: string,
    className: string,
    onClick?: () => void,
}

export default ({ isOn, title, className, onClick }: InputInterface) => {
  return (
    <div className={`${className} ${isOn}`} onClick={() => { if (onClick && isOn) { onClick(); } }}>
      <div className="title">
        {title}
      </div>
    </div>
  );
};
