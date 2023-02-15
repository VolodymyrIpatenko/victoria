import {
  Main,
  Description,
  Coaches,
  Title,
  CoachDescription,
} from './Home.styled';
import { Breakpoint } from 'react-socks';
import Typed from 'react-typed';
import Slider from '../slider/Slider.js';
import './coach.css';
import { nanoid } from 'nanoid';
import { DarkModeContext } from '../context/DarkModeContext.js';
import React, { useContext } from 'react';

const id = nanoid();

const titleStyle = {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
};

const Coach = ({ coachData: { photo, alt, name, description } }) => {
  return (
    <li key={id} class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={photo} alt={alt} width="300" height="200" />
          <Breakpoint small down>
            <h2>{name}</h2>
            <p>{description}</p>
          </Breakpoint>
        </div>
        <div class="flip-card-back">
          <h1>{name}</h1>
          <CoachDescription>{description}</CoachDescription>
        </div>
      </div>
    </li>
  );
};

const Home = ({ coachData }) => {
  const { darkMode } = useContext(DarkModeContext);
  const contentProvider = () => {
    return (
      <>
        <Main>
          <Typed
            style={titleStyle}
            strings={['Спортклуб ВІКТОРІЯ']}
            typeSpeed={100}
            showCursor={false}
          />
          <Description>
            Спортивний клуб «Вікторія» — це чудове місце для активного
            відпочинку, а також нових знайомств і прекрасного спілкування. У
            нашому клубі ви гарантовано отримаєте гарний настрій і заряд
            бадьорості, який необхідний для досягнення успіху в житті! У нашому
            клубі продумано зонування і розташування тренажерів відповідно до
            концепції тренувального процесу. Це дозволяє виключити можливість
            одночасної концентрації великої кількості людей в одній зоні клубу,
            щоб тренувальний процес приносив задоволення і був комфортним й
            приємним абсолютно для кожного. Основний принцип нашої роботи —
            надання послуг кращої якості при збереженні помірних цін.
          </Description>
          <section>
            <Title>Наші тренери</Title>
            <Coaches>
              {coachData.map(coach => {
                return <Coach key={coach.id} coachData={coach} />;
              })}
            </Coaches>
          </section>
          <Slider />
        </Main>
      </>
    );
  };
  return (
    <>
      <div className={darkMode ? `Content-dark` : null}>
        {contentProvider()}
      </div>
    </>
  );
};

export default Home;
