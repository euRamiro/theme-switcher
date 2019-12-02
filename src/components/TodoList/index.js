import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    background: #333;
    color: #FFF;
    font-family: sans-serif;
    font-size: 18px;

    li{
        line-height: 36px;
    }
`;

const TodoList = () => (
    <List>
        <li>fazer café</li>
        <li>entrada na comunidade da rocketseat</li>
        <li>estudar reactJs</li>
    </List>
);

export default TodoList;