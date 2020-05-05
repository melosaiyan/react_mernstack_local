import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends React.Component<any, any> {

  constructor(props: any) {
    super(props)

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  onChangeStudentName(e: any) {
    this.setState({name: e.target.value})
  }

  onChangeStudentEmail(e: any) {
    this.setState({email: e.target.value})
  }

  onChangeStudentRollno(e: any) {
    this.setState({rollno: e.target.value})
  }

  onSubmit(e: any) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };
    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({name: '', email: '', rollno: ''})
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno}/>
        </Form.Group>

        <Button variant="danger" size="lg" block type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}