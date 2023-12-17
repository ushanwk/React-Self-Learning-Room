function ListGroup() {

    const animals = [
        'Dog', 'Cat', 'Parrot'
    ];

    // const message = animals.length == 0 ? <h2>No item found</h2>: null;

    // const getMessage = () => {
    //     return animals.length == 0 ? <h2>No item found</h2>: null;
    // }

    const handleClick = (event: any) => console.log(event);
    

    return (
        <>
            <h1 className="text-3xl text-green-400 pb-5">Hello</h1>

            {/*{animals.length == 0 ? <h2>No item found</h2>: null}*/}

            {animals.length == 0 && <h2>No item found</h2>}

            <ul className="list-inside">
                {animals.map((animal) => (
                    <li
                        key = {animal}
                        onClick={handleClick}
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