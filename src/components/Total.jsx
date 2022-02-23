import React from 'react'
import { useSelector } from 'react-redux';

export const Total = () => {
    const count = useSelector(state => state.count)
    console.log(count);
  return (
		<div>
          <h1>Pending Task: {count}</h1>
		</div>
  );
}
