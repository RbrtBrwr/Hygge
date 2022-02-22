import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingLayout } from '../container/LandingLayout'
import { Home } from '../pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <LandingLayout>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </LandingLayout>
    </BrowserRouter>
  );
};

export { App };
