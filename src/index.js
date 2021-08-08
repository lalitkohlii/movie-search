import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';
import { theme } from './theme/theme';
import { mode } from './state/main';

const MainCom = () => {
  const themMode = useRecoilValue(mode)
  return (
    <Grommet full theme={theme} themeMode={themMode}>
      <App />
    </Grommet>);
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <RecoilRoot>
        <MainCom />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);