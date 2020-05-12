import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col, Input } from 'reactstrap'

class AddCandidate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            candidateName: '',
            candidateId: 1
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleChange = (e) => {
        this.setState({
            candidateName: e.target.value,
        })
    }

    handleSubmit = (e) => {
        this.setState({
            candidateId: this.state.candidateId + 1
        })
        this.props.onAdd(this.state.candidateName, this.state.candidateId)
        this.setState({
            candidateName: ''
        })
        this.toggle()
        e.preventDefault()
    }

    render() {
        return(
            <div className="mt-5">
                <Button color="secondary" onClick={this.toggle}>Ajouter un candidat</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Ajout d'un candidat</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="candidateName" sm={4}>Nom du candidat</Label>
                                <Col sm={8}>
                                    <Input type="text" id="candidateName" value={this.state.candidateName} onChange={this.handleChange} />
                                </Col>
                            </FormGroup>

                            <Button type="submit" color="success">Ajouter</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default AddCandidate