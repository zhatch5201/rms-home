import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { UserProvider, authWithGoogle, logout } from './Components/UserContext';

ReactDOM.render(
    <React.StrictMode>
        {/* <UserProvider> */}
        <App />
        {/* </UserProvider> */}
    </React.StrictMode>,

    document.getElementById('root')
);
