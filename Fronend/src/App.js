import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import { Routes, Route } from "react-router-dom";
import FromLogin from './components/formlogin';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<FromLogin />} />
      </Routes>
    </Provider>
  );
}

export default App;
