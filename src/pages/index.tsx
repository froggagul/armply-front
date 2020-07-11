import * as React from 'react';
import '../styles/index.scss';
import Axios from 'axios';

export default () => {
  const [userInfo, setUserInfo] = React.useState<any>();
  React.useEffect(() => {
    Axios.get('http://localhost:5000/auth/view', { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, []);
  const logout = () => {
    Axios.delete('http://localhost:5000/auth/logout');
  };

  return (
    <div>
      <div>
        {`username: ${userInfo?.username}`}
      </div>
      <div>
        {`password: ${userInfo?.password}`}
      </div>
      <div>
        {`email: ${userInfo?.email}`}
      </div>
      <div onClick={logout}>
        로그아웃
      </div>
    </div>
  );
};
