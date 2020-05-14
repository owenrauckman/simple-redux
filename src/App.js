import React from 'react';
import EditTournament from './EditTournament';
import { Provider } from "react-redux";

import store from "./redux/store";

const isCreate = true;

function App() {
  return (
    <Provider store={store}>
      <EditTournament isCreate={isCreate}/>
    </Provider>
  );
}

export default App;
