import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../home/home';
import NavBar from '../nav_bar/nav_bar';
import MissingPage from './missing_page';
import TasksIndex from '../tasks/tasks_index';
import styled from 'styled-components';

const Main = styled.main`
  margin-top: 56px;
`;

function App() {
  return (
    <>
      <NavBar />
      <Main>
        <Switch>
          <Route path="/tasks" component={TasksIndex} />
          <Route exact path="/" component={HomePage} />
          <Route path="/" component={MissingPage} />
        </Switch>
      </Main>
    </>
  );
}

export default App;