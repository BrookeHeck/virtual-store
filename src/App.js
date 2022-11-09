import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header/header';
import StoreFront from './components/storefront';
import SimpleCart from './components/cart/simplecart';

function App() {
  const [ showCart, setShowCart ] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
      <Header setShowCart={setShowCart} />
      {showCart ? <SimpleCart/> : <StoreFront/>}
    </div>
    </Provider>
  );
}

export default App;
