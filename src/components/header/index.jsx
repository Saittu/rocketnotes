import { RiShutDownLine } from "react-icons/ri"


import { Container, Profile, Logout } from "./style"


export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/Saittu.png"
                     alt="image user" />
                
                <div>
                    <span>Bem-vindo</span>
                    <strong>Jean Antonio</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    )
}