import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const MyForm = styled.form`
  width: 400px;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;

  background: linear-gradient(
    90deg,
    rgba(255, 52, 0, 1) 0%,
    rgba(212, 128, 0, 1) 100%,
    rgba(238, 130, 238, 1) 100%
  );
`;

export const ButtonSubmit = styled.button`
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #f6ad8d;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 0, 1) 0%,
      rgba(0, 118, 212, 1) 100%,
      rgba(238, 130, 238, 1) 100%
    );
  }
`;

export const Textarea = styled.textarea`
  width: 300px;
  height: 120px;
  padding: 5px;
  border-radius: 5px;
  resize: none;
  &::placeholder {
    font-size: 18px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 2px #7065ff;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  &::placeholder {
    font-size: 18px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 10px 2px #7065ff;
  }
`;

export const LabelText = styled.label`
  margin: 15px;
  font-size: 20px;
  color: white;
`;
