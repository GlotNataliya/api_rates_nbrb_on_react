import React from 'react';

const List = (props) => {
  const { result } = props; 
  const date = new Date()

  if (!result || result.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Курсы валют на дату {date.toLocaleDateString()}</h2>
      {result.map((curs) => {
        return (
          <li className='list' key={curs.id}>
            <span className='curs-text'>{curs.Cur_Name} </span>
            <span className='curs-description'>{curs.Cur_OfficialRate}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;