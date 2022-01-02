import React from 'react';
import Card from './CardUser'
function Contact({users}) {
    return (
        <div>
          {users.map((x)=>
          <Card el={x} key={x.id}></Card>
          )}
        </div>
    )
}

export default Contact
