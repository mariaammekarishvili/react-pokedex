import React from 'react';
import { Card , CardImg , CardBody , CardText , CardSubtitle , CardTitle, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const pokemon = ({ pokemon }) => {

    return (
        <>
            <Card className={'card-f'}>
                <Link to={`/pokemon/${pokemon.id}`}>
                    <CardImg
                        alt="Card image cap"
                        src={pokemon.sprites.front_default}
                        top
                        width="100%"
                    />
                </Link>
                <CardBody>
                    <CardTitle tag="h5">
                        #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        სალამი
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Link to={`/pokemon/${pokemon.name}`} className='link-name'>
                        <Button>
                            მონახულება
                        </Button>
                    </Link>
                </CardBody>
            </Card>

            {/*<Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded' style={{ border: 'none' }}>*/}
            {/*    <Link to={`/pokemon/${pokemon.id}`}>*/}
            {/*        <Card.Img style={{ width: '8rem' }} src={pokemon.sprites.front_default} variant='top'/>*/}
            {/*    </Link>*/}
            {/*    <Card.Body className={`${pokemon.types[0].type.name} rounded text-white`}>*/}
            {/*        <Link to={`/pokemon/${pokemon.name}`} className='link-name'>*/}
            {/*            <Card.Title as='div'><strong>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></Card.Title>*/}
            {/*        </Link>*/}
            {/*    </Card.Body>*/}
            {/*</Card>*/}
        </>
    )
}

export default pokemon;

