import PageFooter from '../footer/Footer.js';
import React from 'react';
import { useState } from 'react';
import Modal from '../modal/Modal.js';
import emailjs from 'emailjs-com';
import validator from 'validator';
import {
  MyForm,
  ButtonSubmit,
  Textarea,
  Input,
  LabelText,
} from './Contacts.styled';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '100px',
};

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const values =
    name === '' ||
    email === '' ||
    phone === '' ||
    message === '' ||
    email !== 'Valid Email :)';

  const validateEmail = e => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)');
    } else {
      setEmailError('Enter valid Email!');
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

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const ManageValues = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'message':
        setMessage(e.currentTarget.value);
        break;
      default:
        throw new Error('something went wrong');
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_08bxowc',
        'template_wzku9hr',
        e.target,
        '3SDHZ_wnfkYeO2bfX'
      )
      .then(
        result => {
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        },
        error => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div style={style}>
        <MyForm onSubmit={sendEmail}>
          <h1>Напишіть нам</h1>
          <LabelText>
            <p>Ім'я</p>
            <Input
              type="text"
              placeholder="Ваше ім'я"
              onChange={ManageValues}
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
                color: 'red',
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
              onChange={ManageValues}
              name="message"
            />
          </LabelText>
          <ButtonSubmit
            disabled={values ? true : false}
            type="submit"
            onClick={handleModal}
          >
            {values ? 'Заповніть поля' : 'Відправити'}
          </ButtonSubmit>
          {modalOpen ? <Modal /> : null}
        </MyForm>
      </div>
      <PageFooter />
    </>
  );
};

export default Contacts;
