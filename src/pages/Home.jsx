import { Col, Row, Container } from "react-bootstrap";
import AppLayout from "../layouts/AppLayout";

export default function Home() {
    return(
        <AppLayout>
            <Container>
                <Col>
                    <Row>
                        <h2>Hello!</h2>
                        <h3>A little about me...</h3>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consequatur aliquid libero quos dolores quod quo ex molestiae id recusandae iste aut nesciunt, maxime sed magni eum nobis enim ratione.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non atque doloribus dolor aut, aliquam placeat at, fuga obcaecati cum, animi ipsa iure laboriosam doloremque.</p>
                    </Row>
                </Col>
            </Container>
        </AppLayout>
    )
}