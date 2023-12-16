import {Fragment} from "react";

function ListGroup(){

    const animals = [
        'Dog', 'Cat', 'Parrot'
    ];

    return (
        <Fragment>
            <h1>Hello</h1>
            <ul className="list-inside">
                {
                    animals.map(animal=> <li key={animal}>{animal}</li>)
                }
            </ul>
        </Fragment>
    );
}

export default ListGroup;