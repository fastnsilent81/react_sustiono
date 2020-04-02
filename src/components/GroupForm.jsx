import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

import {
  onChangeGroupName, onChangeSearcQuery, onSearchPeople
} from '../actions/group'

const propTypes = {
  name: PropTypes.string,
  onChangeGroupName: PropTypes.func.isRequired,
  onChangeSearcQuery: PropTypes.func.isRequired,
  onSearchPeople: PropTypes.func.isRequired
}

const defaultProps = {
  name: ''
}

class GroupForm extends React.Component {
  onChangeUsername(username) {
    let { searchQuery, onChangeSearcQuery } =  this.props
    let newSearchQuery = { ...searchQuery, username }
    onChangeSearcQuery(newSearchQuery)
  }

  onChangeEmail(email) {
    let { searchQuery, onChangeSearcQuery } =  this.props
    let newSearchQuery = { ...searchQuery, email }
    onChangeSearcQuery(newSearchQuery)
  }

  render() {
    let { onChangeGroupName, name, onSearchPeople } = this.props
    return (
      <Form>
        <Form.Group controlId='formBasicText'>
          <Form.Label>Group Name</Form.Label>
          <Form.Control
            type='text'
            value={name}
            onChange={e => onChangeGroupName(e.target.value)}
          />
        </Form.Group>
        <Form.Label>Search People</Form.Label>
        <Form.Group>
          <Form.Control
            type='text'
            onChange={e => this.onChangeUsername(e.target.value)}
            placeholder='search by username...'
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='email'
            onChange={e => this.onChangeEmail(e.target.value)}
            placeholder='search by email...'
          />
        </Form.Group>
        <Button variant='primary' className='col btn-blue-custom' onClick={() => onSearchPeople()}>
          Search People
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  let { name, searchQuery } = state.group
  return {
    name, searchQuery
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeGroupName: name => dispatch(onChangeGroupName(name)),
  onChangeSearcQuery: searchQuery => dispatch(onChangeSearcQuery(searchQuery)),
  onSearchPeople: () => dispatch(onSearchPeople())
})

GroupForm.propTypes = propTypes
GroupForm.defaultProps = defaultProps
export default connect(mapStateToProps, mapDispatchToProps)(GroupForm)
