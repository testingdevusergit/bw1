import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormIntroduce = () => (
  <div id="FormIntroduce" className="ui middle aligned center aligned grid segment">
    <Form>
      <Form.Group  widths={1}>
        <Form.Input label='First name' placeholder='First name' />
        <Form.Input label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.Group widths={1}>
        <Form.Input label='Username' placeholder='Username' />
        <Form.Input label='Email' placeholder='Email' />
      </Form.Group>
      <Button type='submit'>Create Profile</Button>
    </Form>
  </div>
);

export default FormIntroduce;
