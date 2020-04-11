import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Deliveries from '../pages/Deliveries';
import DeliveryForm from '../pages/DeliveryForm';

import Deliverymen from '../pages/Deliverymen';
import DeliverymanForm from '../pages/DeliverymanForm';

import Recipients from '../pages/Recipients';
import RecipientForm from '../pages/RecipientForm';

import Problems from '../pages/Problems';

import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />

      {/* Ideia pra não precisar usar dois componentes de rota pra mesma página */}
      {/* https://stackoverflow.com/questions/40541994/multiple-path-names-for-a-same-component-in-react-router */}
      <Route exact path="/deliveries" component={Deliveries} isPrivate />
      <Route path="/deliveries/:id/edit" component={DeliveryForm} isPrivate />
      <Route path="/deliveries/new" component={DeliveryForm} isPrivate />

      <Route exact path="/deliverymen" component={Deliverymen} isPrivate />
      <Route
        path="/deliverymen/:id/edit"
        component={DeliverymanForm}
        isPrivate
      />
      <Route path="/deliverymen/new" component={DeliverymanForm} isPrivate />

      <Route exact path="/recipients" component={Recipients} isPrivate />
      <Route path="/recipients/:id/edit" component={RecipientForm} isPrivate />
      <Route path="/recipients/new" component={RecipientForm} isPrivate />

      <Route exact path="/problems" component={Problems} isPrivate />

      {/* Essa rota é privada ou não? */}
      <Route path="*" component={NotFound} isPrivate />
    </Switch>
  );
}
