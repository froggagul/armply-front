import * as React from 'react';
import '../../styles/reply.scss';

interface Reply {
  from: string,
  content: string,
  when: string,
}

export default ({ from, content, when }: Reply) => {
  return (
    <div className="replyBox">
      <div className="from">
        {`From. ${from} - ${when}`}
      </div>
      <div className="content">
        {`${content}`}
      </div>
    </div>
  );
};
