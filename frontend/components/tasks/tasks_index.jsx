import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Index = styled.div`
  h2 {
    font-size: 1.6rem;
  }
`;

function TasksIndex() {
  return (
    <Index>
      <h2>To Do List</h2>
      <ul>

      </ul>
    </Index>
  )
}

export default TasksIndex;