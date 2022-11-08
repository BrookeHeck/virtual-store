import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header/header';
import StoreFront from './components/storefront';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header />
      <StoreFront/>
    </div>
    </Provider>
  );
}

export default App;
