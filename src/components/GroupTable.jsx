import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'

const propTypes = {
  memberGroup: PropTypes.array
}

const defaultProps = {
  memberGroup: []
}

class GroupTable extends React.Component {
  renderNestedBody(text) {
    return (
      <div key={_.random(100000)}>{text}</div>
    )
  }

  renderBody(member, index) {
    return (
      <tr key={member.id}>
        <td>{index + 1}</td>
        <td>{member.name}</td>
        <td>
          {member.skills.map(this.renderNestedBody)}
        </td>
        <td>
          {member.certifications.map(this.renderNestedBody)}
        </td>
        <td className='text-center align-middle'>
          <FontAwesomeIcon icon={faTrashAlt} />
        </td>
      </tr>
    )
  }

  render() {
    let { memberGroup } = this.props
    return (
      <React.Fragment>
        <div>Selected member group:</div>
        <Table responsive className='group-table text-white'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Skill and Qualification</th>
              <th>Certification</th>
              <th className='text-center'>Process</th>
            </tr>
          </thead>
          <tbody>
            {memberGroup.map((member, index) => this.renderBody(member, index))}
          </tbody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  let { memberGroup } = state.group
  return { memberGroup  }
}

const mapDispatchToProps = dispatch => ({
})

GroupTable.propTypes = propTypes
GroupTable.defaultProps = defaultProps
export default connect(mapStateToProps, mapDispatchToProps)(GroupTable)
