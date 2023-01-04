import Card from "react-bootstrap/Card";

function DoeCard(props) {
  const { doe } = props;

  return (
    <Card className="m-2">
      <Card.Img variant="top" src="https://via.placeholder.com/100x100" />
      <Card.Body>
        <Card.Title>{doe.name}</Card.Title>
        <Card.Text>
          {doe.about.length > 120
            ? `${doe.about.substring(0, 118)}...`
            : doe.about}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default DoeCard;
