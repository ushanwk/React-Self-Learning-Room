import {Fragment} from "react";

function ListGroup(){

    const animals = [
        'Dog', 'Cat', 'Parrot'
    ];

    return (
        <Fragment>
            <h1>Hello</h1>
            <ul className="list-inside">
                <li>5 cups chopped Porcini mushrooms</li>
                <li>5 cups chopped Porcini mushrooms</li>
                <li>5 cups chopped Porcini mushrooms</li>
            </ul>
        </Fragment>
    );
}

export default ListGroup;