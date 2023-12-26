import { Container, Links, Content } from "./style"

import { Header } from "../../components/header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tags"


export function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"></ButtonText>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestiae facere vel repellat cupiditate ratione, fugit atque labore tempore at iure minima laudantium? Laudantium eos qui labore quis quam neque.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.instagram.com</a></li>
              <li><a href="#">https://github.com/Saittu</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"></Tag>
            <Tag title="Node"></Tag>
          </Section>

          <Button title="Voltar"/>
        
        </Content>
      </main>

      
    </Container>
  )
}