import React, { Component } from 'react'
import { ListGroupItem, ListGroup, Alert } from 'reactstrap'

class Result extends Component {

    getWinner() {
        const tab = this.props.candidates.map(candidate => {
            return candidate.votes
        })
        const max = Math.max(...tab)
        const candidateId = tab.indexOf(max) + 1
        const candidateName = this.props.candidates.map(candidate => {
            if(candidate.id === candidateId){
                return candidate.name
            }
        })

        return(
            candidateName
        )
    }

    render() {
        const list = this.props.candidates.map(candidate => {
            return(
                <ListGroupItem key={candidate.id}>
                    <div className="row">
                        <div className="col-sm-10">{candidate.name}</div>
                        <p className="col-sm-2">{candidate.votes}</p>
                    </div>
                </ListGroupItem>
            )
        })
        return(
            <ListGroup>
                {list}
                <Alert color="secondary">Le vainqueur des élections est <strong>{this.getWinner()}</strong></Alert>
            </ListGroup>

        )
    }
}

export default Result