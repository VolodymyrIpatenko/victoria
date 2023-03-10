import { React, useState, useContext } from 'react';
import Modal from '../modal/Modal.js';
import emailjs from 'emailjs-com';
import validator from 'validator';
import { DarkModeContext } from '../context/DarkModeContext';
import { useToggle, useInput } from '../customHooks/CustomHooks';
import {
  MyForm,
  ButtonSubmit,
  Textarea,
  Input,
  LabelText,
  FormWrapper,
} from './Contacts.styled';

const Contacts = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [name, setName] = useInput('');
  const [email, setEmailError] = useState('');
  const [message, setMessage] = useInput('');
  const [phone, setPhoneNumber] = useState('');
  const [isModalOpen, setModalOpen] = useToggle(false);

  const isValidValues =
    name === '' ||
    email === '' ||
    phone === '' ||
    message === '' ||
    email !== 'Valid Email :)';

  const validateEmail = e => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Чудово :)');
    } else {
      setEmailError('Напишіть правильний email!');
    }
  };

  const validatePhoneNumber = e => {
    const phone = e.currentTarget.value;
    if (!Number(phone)) {
      setPhoneNumber((e.currentTarget.value = ''));
      alert('Введіть номер');
    } else {
      setPhoneNumber(e.currentTarget.value);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dl2asq4',
        'template_vgiml6t',
        e.target,
        'uNOI4ZKdEYiXSQt9Q'
      )
      .then(
        result => {
          setTimeout(() => {
            window.location.reload();
          }, 3500);
        },
        error => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className={darkMode ? `Content-dark` : null}>
      <FormWrapper>
        <MyForm onSubmit={sendEmail}>
          <h1>Напишіть нам</h1>
          <LabelText>
            <p>Ім'я</p>
            <Input
              type="text"
              placeholder="Ваше ім'я"
              onChange={setName}
              name="name"
            />
          </LabelText>
          <LabelText>
            <p>Пошта</p>
            <Input
              type="email"
              placeholder="Ваша пошта"
              onChange={validateEmail}
              name="email"
            />
            <p
              style={{
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {email}
            </p>
          </LabelText>

          <LabelText>
            <p>Телефон</p>
            <Input
              type="tel"
              placeholder="Ваш номер телефону"
              name="phone"
              value={phone}
              maxLength="12"
              onChange={validatePhoneNumber}
            />
          </LabelText>
          <LabelText>
            <p>Повідомлення</p>
            <Textarea
              placeholder="Напишіть своє повідомлення"
              onChange={setMessage}
              name="message"
            />
          </LabelText>
          <ButtonSubmit
            disabled={isValidValues ? true : false}
            type="submit"
            onClick={() => setModalOpen.toggle()}
          >
            {isValidValues ? 'Заповніть поля' : 'Відправити'}
          </ButtonSubmit>
          {isModalOpen ? <Modal /> : null}
        </MyForm>
      </FormWrapper>
    </div>
  );
};

export default Contacts;
