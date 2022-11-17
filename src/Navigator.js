import React from 'react';
// import store from './redux/store';
import store, {stores} from './redux/store';
import {Provider} from 'react-redux';
// import {Counter} from './sreens/Counter';
import BasicRedux from './sreens/Counter';
import {User} from './sreens/User';

function Navigator() {
  return (
    <Provider store={stores}>
      <BasicRedux />
    </Provider>
    // <Provider store={store}>
    //   <User />
    // </Provider>
  );
}
export default Navigator;
