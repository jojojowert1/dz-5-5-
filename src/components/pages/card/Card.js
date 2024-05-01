import React, {useState} from 'react';

const Card = ({props}) => {
    const [state, setState] = useState(false)

    return (
        <div onMouseEnter={ () =>setState(true)}
        onMouseLeave={()=>setState(false)}>
            <span>{props.id}</span>
            <p>{props.title}</p>
            {state && (
                <div>{props.body}</div>
            )}
        </div>
    );
};

export default Card;