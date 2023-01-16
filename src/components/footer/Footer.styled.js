import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: linear-gradient(
    90deg,
    rgba(255, 52, 0, 1) 0%,
    rgba(212, 128, 0, 1) 100%,
    rgba(238, 130, 238, 1) 100%
  );
`;

export const MailLink = styled.a`
  position: relative;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  &:is(:hover, :focus) {
    color: #ffffff;
  }
`;
