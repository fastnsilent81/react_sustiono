import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const propTypes = {}

class GroupTable extends React.Component {
  render() {
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
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td className='text-center'>
                <FontAwesomeIcon icon={faTrashAlt} />
              </td>
            </tr>
          </tbody>
        </Table>
      </React.Fragment>
    )
  }
}

GroupTable.propTypes = propTypes
export default GroupTable
