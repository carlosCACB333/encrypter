import { FC } from "react";
import empty from "../../assets/empty.svg";
import { Button } from "../button";
import { Container } from "../common/Container";
import { Typhograpy } from "../common/Typhograpy";
import { EmptyCard } from "./empty";
import { ResultStyle } from "./style";
interface Props {
  result: string;
  handleCopy: () => void;
}
export const ResultCard: FC<Props> = ({ result, handleCopy }) => {
  return (
    <ResultStyle>
      {result ? (
        <Container>
          <Typhograpy variant="title" color="primary" position="left">
            Resultado
          </Typhograpy>
          <br />
          <Typhograpy
            style={{
              flex: 1,
            }}
            variant="body"
            color="primary"
            position="left"
          >
            {result}
          </Typhograpy>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleCopy}
          >
            Copiar
          </Button>
        </Container>
      ) : (
        <EmptyCard>
          <img src={empty} width="100%" alt="Imagen vacío" />
          <Typhograpy variant="title" color="primary">
            Ningún mensaje fue encontrado
          </Typhograpy>
          <Typhograpy variant="subtitle" color="secondary">
            Ingresa el texto que deseas encriptar o desencriptar
          </Typhograpy>
        </EmptyCard>
      )}
    </ResultStyle>
  );
};
