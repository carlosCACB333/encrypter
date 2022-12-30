import styled from "styled-components";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
  fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(1) + " " + theme.spacing(2)};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.75;
  ${({ color, theme }) =>
    color === "primary" &&
    `
        background-color: ${theme.palette.primary[500]};
        color: ${theme.palette.common.white};
    `}
  ${({ color, theme }) =>
    color === "secondary" &&
    `
        background-color: ${theme.palette.secondary[500]};
        color: ${theme.palette.secondary[500]};
    `}
    ${({ variant, theme }) =>
    variant === "outlined" &&
    `
        border: 2px solid;
        background-color: ${theme.palette.secondary[300]};
        color: ${theme.palette.primary[500]};
    `}
    ${({ fullWidth }) =>
    fullWidth &&
    `
        width: 100%;
    `}
`;
