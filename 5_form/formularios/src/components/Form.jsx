import { useState } from 'react'
import styles from './Form.module.css'

const Form = ({user}) => {

    const [profissoes] = useState([
        {value: 'D', label: 'Desenvolvedor'},
        {value: 'T', label: 'Tester'},
        {value: 'A', label: 'Arquiteto'}
    ])

    const [nome, setNome] = useState(user ? user.nome : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [profissao, setProfissao] = useState(user ? user.profissao : '');

    const handleName = (e) => {
        setNome(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleProf = (e) => {
        setProfissao(e.target.value)
    }

    const handleBio = (e) => {
        setBio(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nome)
        console.log(email)
        console.log(profissao)
        console.log(bio)

        setNome('')
        setEmail('')
        setProfissao('')
        setBio('')
    }

    return (
        <div>
            <h2>Formulário</h2>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <label>
                    <span className={styles['label_form']}>Nome:</span>
                    <input className={styles['input_text_form']} type="text" name="name" onChange={handleName} value={nome} placeholder="Digite seu nome" />
                </label>

                <label>
                    <span className={styles['label_form']}>Email:</span>
                    <input className={styles['input_text_form']} type="text" name="name" onChange={handleEmail} value={email} placeholder="Digite seu email" />
                </label>

                <label>
                    <span className={styles['label_form']}>Profissão:</span>
                    <select className={styles['input_select_form']} name="profissao" onChange={handleProf} value={profissao}>
                        {profissoes && profissoes.map((profDef, i) => (
                            <option key={i} value={profDef.value}>{profDef.label}</option>
                        ))}
                    </select>
                </label>

                <label>
                    <span className={styles['label_form']}>Bio:</span>
                    <textarea className={styles['input_textarea_form']} name="bio" onChange={handleBio} value={bio} placeholder='Fale sobre você'></textarea>
                </label>
                
                <input className={styles['input_submit_form']} type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Form