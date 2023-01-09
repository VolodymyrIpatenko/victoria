import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #ccd0c3;
`;

export const MailLink = styled.a`
  position: relative;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 20px;
  text-decoration: none;
  color: white;
  &:is(:hover, :focus) {
    color: #2196f3;
  }
`;
