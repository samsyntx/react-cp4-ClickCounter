import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClickEventName = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="com-bg-container">
        <h1 className="counter-heading">
          The Button has been clicked{' '}
          <span className="counter-style">{count}</span> times
        </h1>
        <p className="counter-para">Click the Button to Increase the Count!</p>
        <button
          className="button-style"
          onClick={this.onClickEventName}
          type="button"
        >
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
