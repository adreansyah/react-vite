import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { Provider } from 'react-redux';
import store from './store/index.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
