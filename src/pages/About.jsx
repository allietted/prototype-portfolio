import { Container, Row, Col } from "react-bootstrap";
import Layout from '../layout/AppLayout'


export default function About (){
    return(
        <Layout>
            <Container>
                <Row>
                    <Col>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptas, itaque asperiores ad minima incidunt nam aperiam provident architecto nostrum tenetur aspernatur. Autem nemo eveniet adipisci eaque illum aliquid laudantium?</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}