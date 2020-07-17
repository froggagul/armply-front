import * as React from 'react';
import { Header, SideNav } from '.';
import '../../styles/layout.scss';

interface LayoutProp {
  children: JSX.Element,
  title: string,
}

export default ({ children, title }: LayoutProp) => {
  return (
    <div className="layout">
      <Header title={title} />
      <SideNav />
      {children}
    </div>
  );
};
