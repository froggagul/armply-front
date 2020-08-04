import * as React from 'react';
import Axios from 'axios';
import '../styles/my.scss';
import { Layout } from '../components/layout';
import { Reply } from '../components/reply';
import { PageComponent } from '../components';
import { backUrl, MAXCNT } from '../../config';

interface reply {
  user: {
    id: string,
    name: string
  }
  content: string,
  createdAt: string,
  isSent: boolean,
}

export default () => {
  const [userInfo, setUserInfo] = React.useState<any>();
  const [replys, setReplys] = React.useState<reply[]>();
  const [page, setPage] = React.useState<number>(1);

  React.useEffect(() => {
    Axios.get(`${backUrl}/auth/my`, { withCredentials: true })
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch(() => {
        alert('로그인이 필요합니다');
        window.location.href = './login';
      });
  }, []);

  React.useEffect(() => {
    if (userInfo?.name && page) {
      Axios.get(`${backUrl}/posts/my?page=${page}&perPage=${MAXCNT}`, { withCredentials: true })
        .then((res) => res.data.posts.map((r: any) => ({
          user: r.user,
          content: r.content,
          createdAt: r.createdAt.slice(0, 10),
        })))
        .then((res) => {
          setReplys(res);
        })
        .catch((err) => {
          console.dir(err);
        });
    }
  }, [userInfo, page]);

  return (
    <Layout title="내 정보">
      <>
        <div className="item">
          {`이름: ${userInfo?.name}`}
        </div>
        <div className="item">
          {`이메일: ${userInfo?.email}`}
        </div>
        <div className="item">
          {`보낸 댓글 수: ${userInfo?.replyCount || 0}`}
        </div>
        <div className="mycontainer">
          {replys?.map((x) => (
            <>
              <Reply from={x.user.name} content={x.content} />
              <div className="isSend false">{`${x.createdAt} / ${x.isSent ? '보내짐' : '대기중'}`}</div>
            </>
          ))}
        </div>
        <PageComponent currentPage={page} setCurrentPage={setPage} replyLength={userInfo?.replyCount || 0} />
      </>
    </Layout>
  );
};
