import { useState } from "react"
import UserDetails from "./UserDetails"


const Detran = () => {

    const [pessoas] = useState([
        {id: '1', nome: 'Otac',   idade: '22', profissao: 'Dev'},
        {id: '2', nome: 'Felipe', idade: '20', profissao: 'Design'},
        {id: '3', nome: 'Doly',   idade: '16',  profissao: 'Dog'}
    ]);

  return (
    <div>
        <h1>Sistema do Detran</h1>
        <UserDetails pessoas={pessoas} />
    </div>
  )
}

export default Detran