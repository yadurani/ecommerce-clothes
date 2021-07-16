import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Loading from './components/Loading';
const Home = lazy(() => import('./pages/Home'));
const Results = lazy(() => import('./pages/Results'));
const Error = lazy(() => import('./components/Error'));
const Checkout = lazy(() => import('./pages/Checkout'));

const Routes = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/results/:product" exaxt component={Results}/>
            <Route path="/checkout" exaxt component={Checkout}/>
            <Route path="*" exaxt component={Error}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </Suspense>
  )
}

export default Routes
