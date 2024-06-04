import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import ClientLogin from './pages/ClientLogin';
import ClientRegister from './pages/ClientRegister';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import NotFound from './pages/NotFound';
import PrivateRoute from './PrivateRoute';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Booking App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/client/register">Client Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/register">Admin Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/client/login" component={ClientLogin} />
        <Route path="/client/register" component={ClientRegister} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/register" component={AdminRegister} />
        <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

