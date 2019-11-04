import React from 'react';
import Child from './Child'
import { Provider } from "react-redux";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>Parent Component</div>
      <Child/>
    </Provider>
  );
}

export default App;
