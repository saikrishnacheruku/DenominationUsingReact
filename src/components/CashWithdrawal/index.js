

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    // Ensure at least four denominations are displayed
    const additionalDenominationsCount = Math.max(
      0,
      4 - denominationsList.length,
    )
    const additionalDenominations = Array.from(
      {length: additionalDenominationsCount},
      (_, index) => ({
        id: index + denominationsList.length + 1,
        value: 100 * (index + 1),
      }),
    )

    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance}
              <br /> <span className="currency">In Rupees</span>{' '}
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {/* Render denominations from provided list */}
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
            {/* Render additional denominations if needed */}
            {additionalDenominations.map(denomination => (
              <DenominationItem
                key={denomination.id}
                denominationDetails={denomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
