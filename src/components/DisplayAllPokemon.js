import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button, Link } from '@mui/material';
import { Remove } from '@mui/icons-material';
import { CCard, CCardGroup, CRow, CCol, CPlaceholder, CCardImage, CCardBody, CCardTitle, CCardText, CListGroupItem, CContainer,CListGroup } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { Container } from 'react-bootstrap';
import load1 from '../img/load1.gif'
import load2 from '../img/load2.gif'
import bgcard from '../img/bg.jpg'
import bgcard2 from '../img/bg2.png'
import bgcard3 from '../img/bg5.png'
import bgcard4 from '../img/bg6.png'
import bgMessage from '../img/bgMessage.jpg'
import '../style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

export default function DisplayAllPokemon({ pokemon }) {
    const [isLoading, setisLoading] = useState(false);
    var [result, setResult] = useState([]);
    var [search, setSearch] = useState([]);
    var [detail, setDetail] = useState([]);
    let i = 0;

    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        setisLoading(true);
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1154")
            .then((res) => res.json())
            .then(async (data) => {
                console.log(data.results.length);

                for (i; i < data.results.length; i++) {
                    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`)
                    if (i != 0) {
                        result.push(res.data);
                    }
                }
                console.log(result.length);

            })
            .finally(async () => {
                setisLoading(false);
            }
            )
            .catch((err) => console.log(err))

    }, []);





    return (
        <div style={{ backgroundImage: `url(${bgcard4})`, maxWidth: "100%", backgroundSize: 'cover' }}>
            <Container style={{ textAlign: 'center' }}>
                {isLoading ? (loading())
                    : pokemon != "" ? (
                        <Container>
                            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 6 }}>
                                {result.map((val) => (
                                    val.name.includes(pokemon) ? (
                                        <CCol xs>
                                            <CCard className="h-100" style={{ backgroundImage: `url(${bgcard3})`, backgroundSize: 'cover' }}>
                                                <CCardImage orientation="top" src={val.sprites.front_default} className="hover-zoom" />
                                                <CCardBody>
                                                    <h2>{val.name}</h2>
                                                    <CCardText>
                                                        <CRow xs={{ gutter: 2 }}>
                                                            {val.types.map((t) =>
                                                                <CCol xs={{ span: 6 }}>{typeEdit(t.type.name)}</CCol>
                                                            )}
                                                        </CRow>
                                                    </CCardText>
                                                </CCardBody>
                                            </CCard>
                                        </CCol>
                                    ) : ('')
                                ))}
                            </CRow>
                        </Container>
                    )
                        : <Container>
                            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 6 }}>
                                {result.map((val) => (
                                    <CCol xs>
                                        <CCard onClick={() => {
                                            saveValue(val);

                                        }} className="h-100" style={{ backgroundImage: `url(${bgcard3})`, backgroundSize: 'fit', border: "4px solid #d3d3d3" }}>
                                            <CCardImage orientation="top" src={'https://img.pokemondb.net/artwork/large/' + val.name + '.jpg'} className="hover-zoom" backgroundSize="fit" />
                                            <CCardBody>
                                                <CCardTitle style={{ backgroundColor: "#9fbce4", border: "3px solid #d3d3d3", color: "white", borderRadius: '5px', padding: "5%", backgroundSize: 'cover' }}>{val.name}</CCardTitle>
                                                <CCardText>
                                                    <CRow xs={{ gutter: 2 }}>
                                                        {val.types.map((t) =>
                                                            <CCol xs={{ span: 6 }}>{typeEdit(t.type.name)}</CCol>
                                                        )}
                                                    </CRow>
                                                </CCardText>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                ))}
                            </CRow>
                            modalShow ? <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} /> : ('')
                        </Container>

                }

            </Container>
        </div>
    );

    function loading() {

        return <> <Container>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>
                <CCol xs>
                    <CCard style={{ width: '100%' }}>
                        <CCardImage component="svg" orientation="top" width="100%" height="162" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect>
                        </CCardImage>
                        <CCardBody>
                            <CPlaceholder component={CCardTitle} animation="glow" xs={7}>
                                <CPlaceholder xs={6} />
                            </CPlaceholder>
                            <CPlaceholder component={CCardText} animation="glow">
                                <CPlaceholder xs={7} />
                                <CPlaceholder xs={4} />
                                <CPlaceholder xs={4} />
                                <CPlaceholder xs={6} />
                                <CPlaceholder xs={8} />
                            </CPlaceholder>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard style={{ width: '100%' }}>
                        <CCardImage component="svg" orientation="top" width="100%" height="162" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect>
                        </CCardImage>
                        <CCardBody>
                            <CPlaceholder component={CCardTitle} animation="glow" xs={7}>
                                <CPlaceholder xs={6} />
                            </CPlaceholder>
                            <CPlaceholder component={CCardText} animation="glow">
                                <CPlaceholder xs={7} />
                                <CPlaceholder xs={4} />
                                <CPlaceholder xs={4} />
                                <CPlaceholder xs={6} />
                                <CPlaceholder xs={8} />
                            </CPlaceholder>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard style={{ width: '100%' }}>
                        <CCardImage component="svg" orientation="top" width="100%" height="162" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect>
                        </CCardImage>
                        <CCardBody>
                            <CPlaceholder component={CCardTitle} animation="glow" xs={7}>
                                <CPlaceholder xs={6} />
                            </CPlaceholder>
                            <CPlaceholder component={CCardText} animation="glow">
                                <CPlaceholder xs={7} />
                                <CPlaceholder xs={4} />
                                <CPlaceholder xs={4} />
                                <CPlaceholder xs={6} />
                                <CPlaceholder xs={8} />
                            </CPlaceholder>
                        </CCardBody>
                    </CCard>
                </CCol>
                <CCol xs>
                    <CCard style={{ width: '100%' }}>
                        <CCardImage component="svg" orientation="top" width="100%" height="162" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect>
                        </CCardImage>
                        <CCardBody>
                            <CPlaceholder component={CCardTitle} animation="glow" xs={7}>
                                <CPlaceholder xs={6} />
                            </CPlaceholder>
                            <CPlaceholder component={CCardText} animation="glow">
                                <CPlaceholder xs={7} />
                                <CPlaceholder xs={4} />
                                <CPlaceholder xs={4} />
                                <CPlaceholder xs={6} />
                                <CPlaceholder xs={8} />
                            </CPlaceholder>
                        </CCardBody>
                    </CCard>
                </CCol>

            </CRow>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src={load2} width="30%" ></img>
        </Container></>
    }

    function typeEdit(type) {
        switch (type) {
            case "grass":
                return <CCardText style={{ backgroundColor: "#78c850", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "fire":
                return <CCardText style={{ backgroundColor: "#f08030", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "water":
                return <CCardText style={{ backgroundColor: "#6890f0", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "ice":
                return <CCardText style={{ backgroundColor: "#98d8d8", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "bug":
                return <CCardText style={{ backgroundColor: "#a8b820", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "ghost":
                return <CCardText style={{ backgroundColor: "#705898", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "normal":
                return <CCardText style={{ backgroundColor: "#a8a878", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "flying":
                return <CCardText style={{ backgroundColor: "#a890f0", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "psychic":
                return <CCardText style={{ backgroundColor: "#f85888", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "poison":
                return <CCardText style={{ backgroundColor: "#a040a0", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "fighting":
                return <CCardText style={{ backgroundColor: "#c03028", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "electric":
                return <CCardText style={{ backgroundColor: "#f8d030", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "dragon":
                return <CCardText style={{ backgroundColor: "#7038f8", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "dark":
                return <CCardText style={{ backgroundColor: "#705848", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "steel":
                return <CCardText style={{ backgroundColor: "#b8b8d0", color: "white", borderRadius: '5px', padding: "5% " }}>{type}</CCardText>;
            case "fairy":
                return <CCardText style={{ backgroundColor: "#ee99ac", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "ground":
                return <CCardText style={{ backgroundColor: "#e0c068", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;
            case "rock":
                return <CCardText style={{ backgroundColor: "#b8a038", color: "white", borderRadius: '5px', padding: "5%" }}>{type}</CCardText>;

        }
    }

    function saveValue(val) {
        setDetail(val);
        setModalShow(true);
    }


    function MydModalWithGrid(props) {
        { modalShow ? console.log(detail) : console.log('ไม่มีค่านะ') }

        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        รายละเอียด
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                {modalShow ? <img width="100%" src={detail.sprites.front_default}></img> : ('')}
                            </Col>
                            <Col xs={6} md={4}>
                                {modalShow ? <><h2> {detail.name} </h2>
                                    {detail.types.map((t) =>
                                        <h4 style={{ textAlign: "center" }}>{typeEdit(t.type.name)}</h4>
                                    )}</>
                                    : ('')}
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={4}>
                                Height: {detail.height}"
                            </Col>
                            <Col xs={6} md={4}>
                                Weight: {detail.weight} lbs
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                Stat:
                            </Col>
                              <Col xs={12} md={8}>
                                {modalShow ? (detail.stats.map((s, index) => (
                                    <CListGroup className="mb-2" layout={`horizontal${s}`} key={index}>
                                        <CListGroupItem>{s.stats}</CListGroupItem>
                                        <CListGroupItem>{s.base_stat}</CListGroupItem>
                                    </CListGroup>
                                ))) : ('')}
                            </Col>  
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
