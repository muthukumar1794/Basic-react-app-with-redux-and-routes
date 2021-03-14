import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './Redux/store'
import { BrowserRouter } from 'react-router-dom';
import DefaultLayout from './views/layouts/DefaultLayout'

function App() {
  return (
    
    <Provider store={store} autoComplete="off">
    <div id="app">
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    </div>
  </Provider>
  );
}

export default App;
