import * as React from 'react';
import '../styles/home.scss';
import { Layout } from '../components/layout';
import { Reply, ReplySender } from '../components/reply';

export default () => {

  return (
    <Layout title={'ARMPLY'}>
      <>
        <div className="watchword">
          은서에게 힘이 되는 <br />
          말 한마디를 보내볼까요?
        </div>
        <div className="container">
          <div className="to">
            {`To ${'은서'}`}
          </div>
          <div className="replyContainer">
            <Reply from={'호진'} content={'잘 지내구 있나 모르겠다~ 나는 이제 곧 치킨\n뜯으러 갈께 안녕~'} when={'2020-07-15'} />
            <Reply from={'호진'} content={'overflowvoerljsdfkljalkdjflksjflasdfksjadlfjlksjdlfk\n뜯으러 갈께 안녕~'} when={'2020-07-15'} />
          </div>
        </div>
        <div className="replySenderContainer">
          <ReplySender />
        </div>
      </>
    </Layout>
  );
};
