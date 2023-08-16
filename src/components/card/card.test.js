import React from 'react';
import './card.styles.css';

let data
let robohash_src1 = "https://robohash.org/"
let robohash_src2 = "?set=set2&size=150x150"
export const Card = props => (
 data = props.monster.id ,
 
 console.log(data),
<div className='card-container' >
<img alt = "monster"
     src={robohash_src1 + data + robohash_src2}
     />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
</div>
)