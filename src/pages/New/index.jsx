import { Link } from "react-router-dom"


import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./style";
import { NoteItem } from "../../components/Noteitem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";



export function New(){
    return(
    <Container>
        <Header/>

        <main>
            <Form>
                <header>
                    <h1>Criar nota</h1>
                    <Link to="/">voltar</Link>
                </header>

                <Input placeholder="Título"/>
                <Textarea placeholder="Obsevações"/>

                <Section title="Links úteis">
                    <NoteItem value="https://rocketseat.com"/>
                    <NoteItem isNew placeholder="Novo link"/>
                </Section>

                <Section title="Marcadores">
                    <div className="tags">
                        <NoteItem value="React"/>
                        <NoteItem isNew placeholder="Novo tag"/>
                    </div>
                </Section>
                <Button  title="Salvar"/>
            </Form>


        </main>
    </Container>
    )
    
}