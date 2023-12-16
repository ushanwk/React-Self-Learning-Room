function ListGroup(){

    let animals = [
        'Dog', 'Cat', 'Parrot'
    ];

    animals = [];

    if(animals.length == 0){
        return(
            <>
                <h1 className="text-3xl text-green-400 pb-5">Hello</h1>
                <h2>No item found</h2>
            </>);
    }

    return (
        <>
            <h1 className="text-3xl text-green-400 pb-5">Hello</h1>
            <ul className="list-inside">
                {
                    animals.map(animal=> <li key={animal}>{animal}</li>)
                }
            </ul>
        </>
    );
}

export default ListGroup;