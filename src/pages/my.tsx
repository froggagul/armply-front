import * as React from 'react';
import Axios from 'axios';
import '../styles/my.scss';
import { Layout } from '../components/layout';
import { Reply } from '../components/reply';

export default () => {
  const [userInfo, setUserInfo] = React.useState<any>();
  React.useEffect(() => {
    Axios.get('http://localhost:5000/auth/my', { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);
      });
  }, []);
  return (
    <Layout title="내 정보">
      <>
        <div className="item">
          {`이름: ${userInfo?.username}`}
        </div>
        <div className="item">
          {`이메일: ${userInfo?.email}`}
        </div>
        <div className="item">
          {`보낸 댓글 수: ${userInfo?.replyCount || 0}`}
        </div>
        <div className="mycontainer">
          <Reply from={'호진'} content={'잘 지내구 있나 모르겠다~ 나는 이제 곧 치킨\n뜯으러 갈께 안녕~'} />
          <div className="isSend true">{`${'2020-07-15'} / 대기중`}</div>
          <Reply from={'호진'} content={'overflowvoerljsdfkljalkdjflksjflasdfksjadlfjlksjdlfk\n뜯으러 갈께 안녕~'}/>
          <div className="isSend false">{`${'2020-07-14'} / 보내짐`}</div>
        </div>
      </>
    </Layout>
  );
};
