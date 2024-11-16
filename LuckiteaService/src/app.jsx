import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { MainScreen } from './mainScreen/mainScreen';
import { LuckMeter } from './luckMeter/luckMeter';
import { Info } from './info/info';
import { AuthState } from './login/authState';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
    <div className='body'>
      <header className='container-fluid'>
        <nav className='navbar fixed-top navbar-dark'>
          <div className='navbar-brand'>
            Luckitea
          </div>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
            </li>
            {authState === AuthState.Authenticated && (
            <li className='nav-item'>
              <NavLink className='nav-link' to='mainScreen'>
                Teacups
              </NavLink>
            </li>
            )}
            {authState === AuthState.Authenticated && (
            <li className='nav-item'>
              <NavLink className='nav-link' to='luckMeter'>
              ☘Meter
              </NavLink>
            </li>
            )}
            <li className='nav-item'>
              <NavLink className='nav-link' to='info'>
                Info
              </NavLink>
            </li>
          </menu>
        </nav>
      </header>

      <Routes>
        <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
        <Route path = '/mainScreen' element={<MainScreen userName={userName} />} />
        <Route path = '/luckMeter' element={<LuckMeter />} />
        <Route path = '/info' element={<Info />} />      
        <Route lpath = '*' element={<NotFound />} />
      </Routes>

      <footer className='foot'>
        <div>
        <a href='https://github.com/huny17/startup'>
            GitHub
          </a>
          <span>Huny17</span>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;