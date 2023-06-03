import { Form, Button, Container } from "react-bootstrap";
import AppLayout from "../layouts/AppLayout";

export default function Contact() {
    return(
        <AppLayout>
            <Container>
                <Form>
                    <Form.Group className="m-5" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control size="md" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="m-5" controlId="formBasicContact">
                        <Form.Label>Contact me!</Form.Label>
                        <Form.Control size="md" as="textarea" placeholder="..." />
                    </Form.Group>

                    <Button className="m-5" variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </Container>
        </AppLayout>
    )
}