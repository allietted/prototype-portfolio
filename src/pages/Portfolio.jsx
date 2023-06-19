import { Container, Row, Col } from "react-bootstrap";
import Layout from '../layout/AppLayout'
import Gallery from '../layout/Gallery'


export default function Portfolio(){
    return(
        <Layout>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Portfolio</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={7}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint corrupti, fugit at, reiciendis quod officiis mollitia vitae, nesciunt et impedit quisquam eius! Sequi eius esse officiis modi ex perferendis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tempore odio, assumenda error reiciendis qui, totam repellendus provident necessitatibus nobis ea, quae animi sequi minus culpa cum exercitationem quaerat magni?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi exercitationem eveniet sed eos, quis eum aliquid, mollitia laboriosam sunt aspernatur eius recusandae est commodi esse. Ipsam consequuntur asperiores nemo optio!</p>
                    </Col>
                </Row>
            </Container>
            <Gallery/>
        </Layout>
    )
}