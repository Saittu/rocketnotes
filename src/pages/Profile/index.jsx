import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi"
import { Link } from "react-router-dom"


import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Container, Form, Avatar } from "./style"

export function Profile(){
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
            </header>

            <Avatar>
                <img 
                src="https://github.com/Saittu.png" 
                alt="Foto do usúario" />

                <label htmlFor="avatar">
                    <FiCamera/>
                    <input 
                    id="avatar"
                    type="file"
                    />
                </label>
            </Avatar>

            <Form>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar"/>


            </Form>

        </Container>
    )
}