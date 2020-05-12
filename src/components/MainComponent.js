import React, { Component } from 'react'
import CandidatesList from './CandidateslistComponent'
import { Row, Col, ListGroup, Button } from 'reactstrap'
import AddCandidate from './AddcandidateComponent'
import Result from './ResultComponent'

class Main extends Component {

    state={
        candidatesList: [],
        result: false,
        disabledBtnRes: false
    }

    addNewCandidate = (name, id) => {
        const d = {}
        d.name = name
        d.id = id
        d.votes = 0
        this.setState({
            candidatesList: this.state.candidatesList.concat(d)
        })
    }

    voteForCandidate = (candidateId) => {
        const updatedCandidatesList = this.state.candidatesList.map(candidate => {
            if(candidate.id === candidateId){
                return Object.assign({}, candidate, {
                    votes: candidate.votes + 1
                })
            } else {
                return candidate
            }
        })

        this.setState({
            candidatesList: updatedCandidatesList
        })
    }

    showResult = () =>{
        this.setState({
            result: !this.state.result,
            disabledBtnRes: true
        })
    }

    render() {
        const list = this.state.candidatesList.map(candidate => {
            return(
                <CandidatesList key={candidate.id} id={candidate.id} name={candidate.name} votes={candidate.votes} onVoteCandidate={this.voteForCandidate}/>
            )
        })
        return(
            <div className="container mt-3">
                <Row>
                    <Col sm="6">
                        <ListGroup>
                            {list}
                        </ListGroup>
                    </Col>
                    <Col sm="6">
                        {this.state.result ? <Result candidates={this.state.candidatesList} /> : <div></div>}
                    </Col>
                </Row>
                <AddCandidate onAdd={this.addNewCandidate}/>
                <Button className="mt-2" color="success" disabled={this.state.disabledBtnRes} onClick={this.showResult}>Voir les résultats</Button>
                <Button className="mt-2 ml-2" color="dark" onClick={() => window.location.reload(false)}>Reset</Button>
            </div>
        )
    }

}

export default Main