import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                  <Row>
                    <Col xs="6" sm="3">
                      <h5 className="title-footer">Moneda Cacao</h5>
                        <span className="link-footer"> <a href="como-funciona">¿Cómo funciona?</a> </span>
                        <span className="link-footer"> <a href="comisiones">Comisiones</a></span>
                        <span className="link-footer"> <a href="contacto">Contacto</a></span>
                        <span className="link-footer"> <a href="bloquear">Bloquear tu cuenta</a></span>
                    </Col>
                    <Col xs="6" sm="3">
                      <h5 className="title-footer">Comunidad</h5>
                          <span className="link-footer"> <a href="how">Blog</a></span>
                          <span className="link-footer"> <a href="how">Ayuda</a></span>
                    </Col>
                    <Col xs="12" sm="3">
                      <h5 className="title-footer">Terminos y Condiciones</h5>
                      <Row>
                        <Col xs="3" sm="12">
                          <span className="link-footer"> <a href="how">Legal</a></span>
                        </Col>
                        <Col xs="3" sm="12">
                          <span className="link-footer"> <a href="how">Privacidad</a></span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
            </footer>
        )
    }
}
