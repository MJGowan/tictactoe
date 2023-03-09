//Madeline Gowan
//3/9/2023
//Tic Tac Toe
//Remake the Tic Tac Toe tutorial with React
  // -Must have a component folder ( square component and board component)
  // -Must have a special feature
  // -Upload to github
  // -You can use bootstrap or tailwind
  

import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import GameComponent from './components/game/game';
import background from './assets/kitty.gif';
import AudioPlayer from './components/audiofile/audiofile';

function App() {
  return (
    <Container style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <Row>
        <Col>
          <br />
          <h1 className='title text'>Tic Tac Toes</h1>
          <AudioPlayer/>
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <br />
          <GameComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
