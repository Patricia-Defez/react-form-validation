import React from 'react';

export default (props) => (
  <div className="List">
    <ul>
      {props.emails.map((email,index) => <li key={index}>{email}</li>)}
    </ul>
  </div>
);