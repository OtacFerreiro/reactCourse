import MyComponent from "./MyComponents";


const FirstComponent = () => {

    const name = 'Otac';

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Clicou no botao")
    }

    const renderNewTxt = (x) => {
        if(x === true) {
            return <h3>Um novo texto</h3>
        }

        return <h3>Um OUTRO novo texto</h3>
    }

    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <div>
                <p>Olá {name}</p>
                <button onClick={handleMyEvent}>Clique aqui</button>
                <button onClick={() => {console.log("Clicou aqui tambem")}}>Clique aqui tambem</button>
            </div>
            
            <MyComponent/>

            {renderNewTxt(true)}
            {renderNewTxt(false)}
        </div>
    );

};

export default FirstComponent;