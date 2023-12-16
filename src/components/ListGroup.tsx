function ListGroup(){

    let animals = [
        'Dog', 'Cat', 'Parrot'
    ];

    animals = [];

    // const message = animals.length == 0 ? <h2>No item found</h2>: null;

    // const getMessage = () => {
    //     return animals.length == 0 ? <h2>No item found</h2>: null;
    // }

    return (
        <>
            <h1 className="text-3xl text-green-400 pb-5">Hello</h1>
            {/*{animals.length == 0 ? <h2>No item found</h2>: null}*/}
            {animals.length == 0 && <h2>No item found</h2>}
            <ul className="list-inside">
                {
                    animals.map(animal=> <li key={animal}>{animal}</li>)
                }
            </ul>
        </>
    );
}

export default ListGroup;