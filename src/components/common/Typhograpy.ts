import styled from "styled-components";

export interface TextProps {
  children: React.ReactNode;
  variant?: "xl" | "title" | "subtitle" | "body" | "caption" | "button";
  color?: "primary" | "secondary" | "disabled";
  position?: "center" | "left" | "right";
}

export const Typhograpy = styled.span<TextProps>`
  width: 100%;

  ${({ variant }) =>
    variant === "xl" &&
    `
    font-size: 4rem;
    font-weight: 600;
    line-height: 1.167;
    `}

  ${({ variant }) =>
    variant === "title" &&
    `
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.334;
    `}
  ${({ variant }) =>
    variant === "subtitle" &&
    `
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.6;
    `}
    ${({ variant }) =>
    variant === "body" &&
    `
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    `}
    ${({ variant }) =>
    variant === "caption" &&
    `
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.66;
    `}
    ${({ variant }) =>
    variant === "button" &&
    `
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.75;
    `}
    ${({ color, theme }) =>
    color === "primary" &&
    `
    color: ${theme.palette.primary[500]};
    `}

    ${({ color, theme }) =>
    color === "secondary" &&
    `
    color: ${theme.palette.secondary[500]};
    `}
    ${({ color, theme }) =>
    color === "disabled" &&
    `
    color: ${theme.palette.text.disabled};
    `}

    ${({ position }) => position === "center" && `text-align: center;`}
    ${({ position }) => position === "right" && `text-align: right;`}
    ${({ position }) => position === "left" && `text-align: left;`}
`;
