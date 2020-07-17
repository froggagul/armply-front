import * as React from 'react';

export default ({ title }: { title: string }) => {
  return (
    <div className="header">
      <div className="top" />
      <div className="title">
        {title}
      </div>
    </div>
  );
};
