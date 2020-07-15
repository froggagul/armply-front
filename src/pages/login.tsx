import * as React from 'react';
import '../styles/login.scss';
import { GetEmail, Login, Register } from '../components/login'

export default () => {
  const [phase, setPhase] = React.useState<'GetEmail' | 'UserExist' | 'UserNExist'>('GetEmail');
  const components = {
    'GetEmail': <GetEmail setPhase={setPhase}/>,
    'UserExist': <Login />,
    'UserNExist': <Register />
  }
  React.useEffect(() => {
    console.log(phase);
  }, [phase]);
  return (
    <div className="main">
      <h1 className="title">ARMPLY</h1>
      <div className={`container ${phase}`}>
        {components[phase]}
      </div>
    </div>
  );
};
