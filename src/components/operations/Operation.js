import React from 'react'
import {Table, Panel} from 'react-bootstrap'

import AccountLink from '../shared/AccountLink'

import CreateAccount from './CreateAccount'
import Payment from './Payment'
import PathPayment from './PathPayment'
import Offer from './Offer'
import SetOptions from './SetOptions'
import ChangeTrust from './ChangeTrust'
import AllowTrust from './AllowTrust'
import AccountMerge from './AccountMerge'
import Inflation from './Inflation'

function SubOperation(props) {
  let subOp
  switch (props.data.type) {
    case 'create_account':
      subOp = <CreateAccount data={props.data}/>
      break
    case 'payment':
      subOp = <Payment data={props.data}/>
      break
    case 'path_payment':
      subOp = <PathPayment data={props.data}/>
      break
    case 'manage_offer':
    case 'create_passive_offer':
      subOp = <Offer data={props.data}/>
      break
    case 'set_options':
      subOp = <SetOptions data={props.data}/>
      break
    case 'change_trust':
      subOp = <ChangeTrust data={props.data}/>
      break
    case 'allow_trust':
      subOp = <AllowTrust data={props.data}/>
      break
    case 'account_merge':
      subOp = <AccountMerge data={props.data}/>
      break
    case 'inflation':
      subOp = <Inflation data={props.data}/>
      break
    default:
      console.error(`Unknown operation type ${props.data.type}`);
      subOp = null
      break
  }
  return subOp
}

class Operation extends React.Component {
  render() {
    const d = this.props.data
    return (
      <Panel
        collapsible
        defaultExpanded={true}
        header={d.type}
        className={"operation"}>
        <Table className="table-hover table-condensed" fill>
          <tbody>
            <tr>
              <td>Id</td>
              <td>{d.id}</td>
            </tr>
            <tr>
              <td>Source</td>
              <td>
                {(d.type !== "account_merge")
                  ? <AccountLink account={d.source_account}/>
                  : d.source_account}
              </td>
            </tr>
          </tbody>
        </Table>
        <SubOperation data={d}/>
      </Panel>
    )
  }
}

export default Operation
