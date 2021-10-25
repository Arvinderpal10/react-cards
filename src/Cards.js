import React from 'react';
// Single Card 
function SingleCard(props) {
   return (
      <>
         <div class="column">
            <div className="card">
               <h5 className="card-title">{props.title}</h5>
               <img className="card-img-top" src={props.img} alt={props.alt} />
               <div className="card-body">
                  <p className="card-text">Price: {props.price}</p>
               </div>
            </div>
         </div>
      </>
   )
}

export default SingleCard;