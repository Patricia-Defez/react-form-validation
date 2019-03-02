import React from 'react';

export default (props) => (
  <div className="List">
    <ul>
      {props.emails.map((email, i) => (
        <li key={i}>{email}</li>
      ))}
    </ul>
  </div>
);