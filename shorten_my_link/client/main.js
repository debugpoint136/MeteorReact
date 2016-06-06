import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link_create';
import '../style/style.css';
import { Links } from '../imports/collections/links';
import LinkList from './components/link_list';

const App = (props) => {
  return (
    <div>
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  );
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
