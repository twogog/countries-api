import { render as rtlRender, screen, fireEvent, waitForElement } from '@testing-library/react';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>
);

test('renders learn react link', () => {
  
});
