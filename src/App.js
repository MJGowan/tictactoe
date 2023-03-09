import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import GameComponent from './components/game/game';
import background from './assets/tictactoes.jpg';

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
          <h1 className='title'>Tic Tac Toes</h1>
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
