import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'

const propTypes = {
  people: PropTypes.array
}

const defaultProps = {
  people: []
}

class ListPeople extends React.Component {
  renderPerson(person) {
    return (
      <Card key={person.id} className='card-green-custom mb-3'>
        <Card.Body>
          <h5 className='display-6'>{person.name}</h5>
          <div>{`Skill : ${person.skills.join(', ')}`}</div>
          <div>{`Certification : ${person.certifications.join(', ')}`}</div>
          <Button variant='primary' className='btn-blue-custom col'>
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
})

ListPeople.propTypes = propTypes
ListPeople.defaultProps = defaultProps
export default connect(mapStateToProps, mapDispatchToProps)(ListPeople)
