import React from 'react';
import { Route } from 'react-router-dom';
import Header from './component/Header';
import AboutMe from './component/AboutMe';
import SearchBook from './component/SearchBook';

function App() {
  return (
    <main className='App'>
      <Header />
      <Route
        exact path='/'
        component={SearchBook}
      />
      <Route
        path='/about'
        component={AboutMe}
      />
    </main>
  );
}

export default App;
