import * as React from 'react';
import Axios from 'axios';
import { backUrl } from '../../config';
import '../styles/home.scss';
import { Layout } from '../components/layout';
import { Reply, ReplySender } from '../components/reply';

interface userInfo {
  name: string,
  email: string
}
interface reply {
  user: {
    id: string,
    name: string
  }
  content: string,
  createdAt: string,
}

export default () => {
  const [userInfo, setUserInfo] = React.useState<userInfo>({
    name: '',
    email: '',
  });
  const [replys, setReplys] = React.useState<reply[]>();
  React.useEffect(() => {
    Axios.get(`${backUrl}/auth/my`, { withCredentials: true })
      .then((res) => {
        setUserInfo(res.data);
      });
  }, []);
  React.useEffect(() => {
    if (userInfo.name !== '') {
      Axios.get(`${backUrl}/posts/list?page=1&perPage=8`)
        .then((res) => res.data.posts.map((r: any) => ({
          user: r.user,
          content: r.content,
          createdAt: r.createdAt.slice(0, 10),
        })))
        .then((res) => {
          setReplys(res);
        });
    }
  }, [userInfo]);
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
            {replys?.map((x) => (
              <Reply from={x.user.name} content={x.content} when={x.createdAt} />
            ))}
          </div>
        </div>
        <div className="replySenderContainer">
          <ReplySender name={userInfo.name} />
        </div>
      </>
    </Layout>
  );
};
