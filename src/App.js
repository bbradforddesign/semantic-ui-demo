import React from 'react';
import { Button, Container, Form } from 'semantic-ui-react';

const FormDemo = () => (
  <Container>
    <h1>Search Neighborhood</h1>
    <Form>
      <Form.Field>
        <label>Address</label>
        <input placeholder='Address' />
      </Form.Field>
      <Form.Field>
        <label>Phone Number</label>
        <input placeholder='Phone Number' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </Container>
)

export default class DummyApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <FormDemo />
    )
  }
}
