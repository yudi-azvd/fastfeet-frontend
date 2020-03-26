import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Deliveries from '../pages/Deliveries';
import DeliveryForm from '../pages/DeliveryForm';

import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route exact path="/deliveries" component={Deliveries} isPrivate />
      <Route path="/deliveries/:id/edit" component={DeliveryForm} isPrivate />
      {/* <Route path="/deliveries/new" component={DeliveryForm} isPrivate /> */}

      {/* Essa rota é privada ou não? */}
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
