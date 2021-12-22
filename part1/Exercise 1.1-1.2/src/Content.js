
import React from 'react';
import Part from "./Part";

const Content = (props) => {
//console.log(props.parts[0].name)
    return (
        <div>
            
            {
                props.parts.map(({ name, exercises }) =>
                //console.log(name,exercises)
                <Part part={name} exercise={exercises} />
                )}
        </div>
    )
}

export default Content; 