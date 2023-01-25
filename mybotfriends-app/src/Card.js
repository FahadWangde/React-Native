import React from 'react';
import './Card.css';

const Card = ({name, email, id}) => {
    // const {name, email, id} = props;
    return(
        <div className='tc bg-light-red dib br3 pa3 ma2 bw2 grow shadow'>
            <div>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>

            </div>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>

            </div>
            
        </div>
    );
}

export default Card;



  