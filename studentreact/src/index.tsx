import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Container } from './container';

ReactDOM.render(
  <Container />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
