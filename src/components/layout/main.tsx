import * as React from 'react';
import { Header, SideNav } from '.';

interface LayoutProp {
  children: JSX.Element,
  title: string,
}

export default ({ children, title }: LayoutProp) => {
  return (
    <div>
      <Header title={title} />
      <SideNav />
      {children}
    </div>
  );
};
