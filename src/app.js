import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './styles/styles.scss';
const HomePage = () => <div>content</div>;
const CreatePage = () => <div>content dd </div>;
const UpdatePage = () => <div>update dd </div>;
const AboutPage = () => <div>about dd </div>;
const NotFoundPage = () => (
  <div>
    404 <Link to="/">Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h3>Header Nav</h3>
  </header>
);
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/create" component={CreatePage} />
      <Route path="/update" component={UpdatePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
