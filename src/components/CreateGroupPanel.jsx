import React from 'react'
import { Navbar, Card, Button } from 'react-bootstrap'

import GroupForm from './GroupForm'
import ListPeople from './ListPeople'
import GroupTable from './GroupTable'

class CreateGroupPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <div className='pt-2 pb-2'>
            <span className='root-name font-weight-bold'>Home</span>
            <span className='font-weight-bold slash-path'>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <span className='current-path text-white'>Create Work Group</span>
          </div>
        </Navbar>

        <div className='col mt-3 mb-3 card-panel text-white'>
          <Card className='card-grey'>
            <Card.Header>Create Group</Card.Header>
            <Card.Body className='card-grey pb-0'>
              <div className='row ml-3 mr-3'>
                <div className='col-md-5 col-sm-12'>
                  <GroupForm />
                  <ListPeople />
                </div>
                <div className='col-md-7 col-sm-12'>
                  <GroupTable />
                </div>
              </div>
            </Card.Body>
            <hr className='hr-custom mr-5 ml-5'/>
            <div className='col text-right mb-3 pr-5 pl-5'>
              <Button variant='primary' className='btn-blue-custom'>
                Submit
              </Button>
            </div>
          </Card>
        </div>

        <div className='col footer pt-3 pb-3 bg-white'>
          <div className='row'>
            <div className='col'>
              <span>Ericsson</span> © 2020 MOAI.
            </div>
            <div className='col text-right'>
              Powered by <span>CoreUI for React</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default CreateGroupPanel
