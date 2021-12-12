
import React from 'react';
import Part from "./Part";

const Content = (props) => {

    return (
        <div>
            {
                props.data.map(({ part, exercise }) =>
                    <Part part={part} exercise={exercise} />
                )}
        </div>
    )
}

export default Content; 