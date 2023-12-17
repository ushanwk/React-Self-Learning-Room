import {useState} from "react";

function ListGroup() {

    const animals = [
        'Dog', 'Cat', 'Parrot'
    ];

    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    // const message = animals.length == 0 ? <h2>No item found</h2>: null;

    // const getMessage = () => {
    //     return animals.length == 0 ? <h2>No item found</h2>: null;
    // }

    // const handleClick = (event: never) => console.log(event);
    

    return (
        <>
            <h1 className="text-3xl text-green-400 pb-5">Hello</h1>

            {/*{animals.length == 0 ? <h2>No item found</h2>: null}*/}

            {animals.length == 0 && <h2>No item found</h2>}

            <ul className="list-inside">
                {animals.map((animal, index) => (
                    <li
                        key = {animal}
                        onClick={() => { setSelectedIndex(index) }}
                        className={selectedIndex === index ? 'bg-blue-300': ''}
                        >
                            {animal}
                    </li>
                )
                )}
            </ul>
        </>
    );
}

export default ListGroup;