import { Img, Main, Description, Coaches, Title } from './Home.styled';
import { Breakpoint } from 'react-socks';
import PageFooter from '../footer/Footer.js';
import Typed from 'react-typed';
import Slider from '../slider/Slider.js';
import './coach.css';

const titleStyle = {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
};

const Coach = ({ coachData: { photo, alt, id, name, description } }) => {
  return (
    <div class="flip-card">
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
          <p style={{ padding: '10px', textAlign: 'left', lineHeight: '28px' }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Home = ({ coachData }) => {
  return (
    <>
      <Main>
        <Typed
          style={titleStyle}
          strings={['Спортклуб ВІКТОРІЯ']}
          typeSpeed={100}
          showCursor={false}
        />
        <Description>Сюди можна якись текст що буде описувати зал</Description>
        <Img src={require('./sport.jpg')} alt="wedding" loading="lazy" />
        <section>
          <Title>Наші тренери</Title>
          <Coaches>
            {coachData.map(coach => {
              return <Coach key={coach.id} coachData={coach} />;
            })}
          </Coaches>
          <section
            style={{
              display: 'grid',
              placeContent: 'center',
            }}
          ></section>
        </section>
        <Slider />
      </Main>
      <PageFooter />
    </>
  );
};

export default Home;
