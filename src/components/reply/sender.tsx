import * as React from 'react';
import Axios from 'axios';
import { backUrl, MAXLENGTH } from '../../../config';
import '../../styles/replySender.scss';

interface sender {
  name: string
}

export default ({ name }: sender) => {
  const [content, setContent] = React.useState<string>('');

  const message = content.slice(0, MAXLENGTH);
  const [isPrivate, setIsPrivate] = React.useState<boolean>(false);
  const send = () => {
    Axios.post(`${backUrl}/posts/post`, {
      isPrivate,
      content,
    }, { withCredentials: true })
      .then(() => {
        window.location.href = './';
      });
  };

  if (name !== '') {
    return (
      <div className="sendContainer">
        <div className="from">
          From. {name}
        </div>
        <div className="togglebutton">
          <div className="text public">
            공개
          </div>
          <label className="switch">
            <input type="checkbox" onChange={() => { setIsPrivate(!isPrivate); }} />
            <span className="slider round" />
          </label>
          <div className="text">
            비공개
          </div>
        </div>
        <textarea
          className="inputs"
          placeholder="댓글을 입력하세요"
          value={message}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <div className="limit">
          {`(${message.length}/250)`}
        </div>
        <div className="buttons">
          <div className="button delete" onClick={() => { setContent(''); }}>
            취소
          </div>
          <div className="button confirm" onClick={() => { send(); }}>
            <div className="text">
              확인
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="sendContainer" onClick={() => { window.location.href = './login'; }}>
      <div className="center">
        댓글을 보내려면 로그인 하십시오
      </div>
    </div>
  );
};
