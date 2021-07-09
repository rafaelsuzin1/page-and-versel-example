import {useState} from "react";

function Home() {
    return <div>
        <h4>Home</h4>
        <Contatodr/>

    </div>
}

function Contatodr() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adiconar</button>
        </div>
    )

}

export default Home