import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import StorePage from './pages/store/store.component';
import AboutPage from './pages/about/about.component';
import ManageBooks from './pages/admin-manage-books/manage-books.component';
import ManageOrders from './pages/admin-manage-orders/manage-orders.component';
import ManageUsers from './pages/admin-manage-users/manage-users.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import Orders from './pages/orders/orders.component';
import Header from './components/header/header.component';
import {PrivateRoute} from './PrivateRoute';

//import './styles/foundation.min.css';
import './styles/custom.css';
import './styles/foundation.min.css';
import './App.css';

const  App = () => {
  localStorage.setItem('base_url','https://activelearning.herokuapp.com/api');
  return (
    <div className="container">
      <Header />
      <Switch>
          <PrivateRoute exact path='/' component={HomePage} />
          <Route path='/store' component={StorePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/signin' component={SignInPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/admin/books' component={ManageBooks} />
          <Route path='/admin/users' component={ManageUsers} />
          <Route path='/admin/orders' component={ManageOrders} />
          <Route path='/orders' component={Orders} />
        </Switch>
    </div>
  );
}

export default App;
