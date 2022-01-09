import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, CardText,CardImg,CardTitle,CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

// Components
import Loader from '../components/Loader';

const PokemonPage = ({ match }) => {

    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const id = match.params.id;

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        console.log(details.data)
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, [])

    return (
        <>
            {loading ? (
                <Loader/>
            ) : (
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <Link to={`/pokemon/${pokemonDetails.id}`}>
                                <CardImg style={{ width: '15rem' }} src={pokemonDetails.sprites.front_default} variant='top'/>
                            </Link>
                            <CardBody className={`${pokemonDetails.types[0].type.name} rounded text-white`}
                                style={{
                                    background:'none',
                                }}>
                                <Link to={`/pokemon/${pokemonDetails.name}`} >
                                    <CardTitle as='div'
                                    >
                                        <strong>#{pokemonDetails.id} {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</strong>
                                    </CardTitle>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <CardBody>
                                <CardText>
                                    <Row>
                                        {pokemonDetails.types.map(t => (
                                            <Col key={t.type.name} style={{
                                                display : 'flex', justifyContent: 'center'
                                            }}>
                                                <div className={`${t.type.name} rounded px-4 py-1`} style={{ color: 'red', background:'pink', width: '50%', height:'30px' }}>
                                                    {t.type.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col>
                                            <CardImg style={{ width: '15rem' }} src={pokemonDetails.sprites.front_default}/>
                                            <CardText>Normal Form</CardText>
                                        </Col>
                                        <Col>
                                            <CardImg style={{ width: '15rem' }} src={pokemonDetails.sprites.front_shiny}/>
                                            <CardText>Shiny Form</CardText>
                                        </Col>
                                    </Row>
                                    <Row className='mt-4'>
                                        <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className='px-4 py-1 rounded' style={{ border: '1px black solid' }}>Abilities</div>
                                        </Col>
                                    </Row>
                                    <Row className='text-center'>
                                        {pokemonDetails.abilities.map(a => (
                                            <Col key={a.ability.name} xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <div className={`rounded px-4 py-1`}>
                                                    {a.ability.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default PokemonPage;
