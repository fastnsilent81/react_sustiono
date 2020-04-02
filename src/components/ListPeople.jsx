import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'

import { addMemberToGroup } from '../actions/group'

const propTypes = {
  people: PropTypes.array,
  addMemberToGroup: PropTypes.func.isRequired
}

const defaultProps = {
  people: []
}

class ListPeople extends React.Component {
  renderPerson(person) {
    let { addMemberToGroup } = this.props
    return (
      <Card key={person.id} className='card-green-custom mb-3'>
        <Card.Body>
          <h5 className='display-6'>{person.name}</h5>
          <div>{`Skill : ${person.skills.join(', ')}`}</div>
          <div>{`Certification : ${person.certifications.join(', ')}`}</div>
          <Button variant='primary' className='btn-blue-custom col' onClick={() => addMemberToGroup(person)}>
            Add member to group
          </Button>
        </Card.Body>
      </Card>
    )
  }

  render() {
    let { people } = this.props
    return (
      <React.Fragment>
        <div className='mt-3'>People found:</div>
        { people.map(person => this.renderPerson(person)) }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  let { people } = state.group
  return { people  }
}

const mapDispatchToProps = dispatch => ({
  addMemberToGroup: member => dispatch(addMemberToGroup(member))
})

ListPeople.propTypes = propTypes
ListPeople.defaultProps = defaultProps
export default connect(mapStateToProps, mapDispatchToProps)(ListPeople)
