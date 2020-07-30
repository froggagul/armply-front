import React from 'react';
import { MAXCNT } from '../../config';

interface pageIndexProp {
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  replyLength: number,
}

export default ({ currentPage, setCurrentPage, replyLength }: pageIndexProp) => {
  const pages = [];
  const maxPage = (replyLength - 1) / MAXCNT + 1;
  if (currentPage >= 3) {
    for (let i = currentPage - 2; i <= Math.min(currentPage + 2, maxPage); i += 1) {
      pages.push(i);
    }
  } else {
    for (let i = 1; i <= Math.min(5, maxPage); i += 1) {
      pages.push(i);
    }
  }
  const movePage = (num: number) => {
    setCurrentPage(num);
  };
  return (
    <div className="footer">
      <div className="container">
        <div
          className="page arrow"
          onClick={() => {
            if (currentPage > 5) {
              movePage(currentPage - 5);
            } else {
              movePage(1);
            }
          }}
        >
          <div className="text">
            {'<'}
          </div>
        </div>
        {pages.map((page) => (
          <div className={`page ${currentPage === page ? 'on' : ''}`} onClick={() => { movePage(page); }}>
            <div className="text">
              {page}
            </div>
          </div>
        ))}
        <div
          className="page arrow"
          onClick={() => {
            movePage(currentPage + 5);
          }}
        >
          <div className="text">
            {'>'}
          </div>
        </div>
      </div>
    </div>
  );
};
