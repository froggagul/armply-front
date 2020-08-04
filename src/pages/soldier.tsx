import * as React from 'react';
import '../styles/soldier.scss';
import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout title="군인 정보">
      <>
        <div className="profile">
          <div className="img-wrap">
            <img src="" alt="profile" />
          </div>
          <div className="info-wrap">
            <div className="info-item">
              훈련병 이은서
            </div>
            <div className="info-item">
              입대 | 2020-07-28
            </div>
            <div className="info-item">
              전역 | 2022-01-28
            </div>
          </div>
        </div>
        <div className="soldier-info">
          <p className="lastword">
            {'"3인편 = 1 바뱍입니당 고객님"'}
          </p>
          <p>
            {'받은 댓글 수 : 3'}
          </p>
          <p>
            {'받은 편지 수: 1'}
          </p>
        </div>
      </>
    </Layout>
  );
};
