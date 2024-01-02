import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import example from './assets/example2.jpg';

const GroupExample = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-4">

        <Card style={{ width: '18rem' }} className='m-2'>
          <Card.Img className='my-2' variant="top" src={example} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-success">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='m-2'>
          <Card.Img className='my-2' variant="top" src={example} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-success">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='m-2'>
          <Card.Img className='my-2' variant="top" src={example} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-success">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className='m-2'>
          <Card.Img className='my-2' variant="top" src={example} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-success">Go somewhere</Button>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
};

export default GroupExample;
