import * as React from 'react';
import '../../styles/replySender.scss';

interface sender {
  name: string
}

export default ({ name }: sender) => {
  const [content, setContent] = React.useState<string>('');
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
            <input type="checkbox" />
            <span className="slider round" />
          </label>
          <div className="text">
            비공개
          </div>
        </div>
        <textarea
          className="inputs"
          placeholder="댓글을 입력하세요"
          value={content}
          onChange={(e) => { setContent(e.target.value); }}
        />
        <div className="limit">
          {`(${content.length}/250)`}
        </div>
        <div className="buttons">
          <div className="button delete">
            취소
          </div>
          <div className="button confirm">
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
