import React, { Component } from "react"
import { ListGroupItem, Button } from "reactstrap"

class CandidatesList extends Component {

    handleClick = () => {
        this.props.onVoteCandidate(this.props.id)
    }

    render() {
        return(
            <ListGroupItem>
                <div className="row">
                    <div className="col-sm-10">{this.props.name}</div>
                    <Button className="col-sm-2" color="primary" onClick={this.handleClick}>Voter</Button>
                </div>
            </ListGroupItem>
        )
    }
}

export default CandidatesList