import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Contet, NewNote } from "./style"

import { Header } from "../../components/header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { Section } from "../../components/Section"
import { Note } from "../../components/Note";

export function Home(){
    return(
        <Container>

            <Brand>
                <h1>Rocketnote</h1>
            </Brand>

            <Header/>

            <Menu>
                <li><ButtonText title="Todos" isactive></ButtonText></li>
                <li><ButtonText title="React"></ButtonText></li>
                <li><ButtonText title="Node"></ButtonText></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Contet>
                <Section title="Minhas Notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name: 'React'},
                            {id: '2', name: 'Node'}
                        ]
                    }}
                    />
                </Section>
            </Contet>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}