import * as React from 'react';
import '../styles/about.scss';
import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout title="About">
      <>
        <div className="textBox">
          <p>
            {'"우리 모두가 평소에 긴 대화를 나누는 사이는 아니잖아요"'}
          </p>
          <p>
            {'Armply는 긴 편지를 쓰기 힘든 친구들을 도와주기 위해 제작되었습니다.'}
          </p>
          <p>
            {'매일 저녁 12시, 편지가 친구가 있는 군대로 보내집니다. (단, 댓글의 수가 너무 적을때는 안보내질 수 있어요!)'}
          </p>
          <p>
            {'군대에 있는 친구들을 위해 응원의 한마디를 보내주세요!'}
          </p>
        </div>
      </>
    </Layout>
  );
};
