import ListGroup from "./components/ListGroup.tsx";

function App() {

    const animals = [
        'Dog', 'Cat', 'Parrot'
    ];

    return (
        <div>
            <ListGroup animals={animals} headings="Animals"/>
        </div>
    );
}

export default App;