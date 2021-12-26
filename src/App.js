import store from './redux/store/index'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' 
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 

import Index from "./pages/index"
import States from "./pages/all-states"
import StateDesc from "./pages/state-desc"
import Area from "./pages/areas"
import Districts from "./pages/districts";
import Zones from "./pages/zones"
import Bethels from "./pages/bethels"

import Add_event from "./pages/add-event"
function App() {
  return (
    <>
      <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          <Router>
              <Switch>
                <Route exact path='/'>
                  <Index/>
                </Route>
                <Route exact path='/states'>
                  <States/>
                </Route>
                <Route exact path='/state-desc/:state'>
                  <StateDesc/>
              </Route>
              <Route exact path='/areas'>
                  <Area/>
              </Route>
              <Route exact path='/districts'>
                  <Districts/>
              </Route>
              <Route exact path='/zones'>
                  <Zones/>
              </Route>
              <Route exact path='/bethels'>
                  <Bethels/>
                </Route>
            </Switch>
            
            <Route exact path="/add-event" >
              <Add_event />
            </Route>
          </Router>
        </PersistGate>
      </Provider> 
    </>
  );
}

export default App;
