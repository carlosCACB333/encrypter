import { FC, useState } from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Area } from "../common/Area";
import { Container } from "../common/Container";
import { Typhograpy } from "../common/Typhograpy";

const EntryStyle = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(2)} 0;
`;

interface Props {
  onEncrypt: (text: string) => void;
  onDecrypt: (text: string) => void;
}
export const EntryCard: FC<Props> = ({ onDecrypt, onEncrypt }) => {
  const [text, setText] = useState("");
  return (
    <EntryStyle>
      <Container>
        <Typhograpy variant="xl" color="primary" position="left">
          a
        </Typhograpy>
        <br />
        <Area
          style={{
            flex: 1,
          }}
          placeholder="Ingrese el texto aquí"
          value={text}
          onChange={(e) => setText(e.target.value.toLowerCase())}
        />
        <Typhograpy variant="caption" color="secondary" position="left">
          Solo letras minúsculas y sin acentos
        </Typhograpy>

        <div
          style={{
            display: "flex",
            gap: ".5rem",
            marginTop: ".4rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                onEncrypt(text);
                setText("");
              }}
            >
              Encriptar
            </Button>
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => {
                onDecrypt(text);
                setText("");
              }}
            >
              Desencriptar
            </Button>
          </div>
        </div>
      </Container>
    </EntryStyle>
  );
};
