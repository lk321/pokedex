import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeCofing from 'theme';
import ApplicationProvider from 'Contexts/Application';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <ApplicationProvider>
      <ThemeCofing>
        <App />
      </ThemeCofing>
    </ApplicationProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
