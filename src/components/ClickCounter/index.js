import {Components} from 'react'
import './index.css'

class ClickCounter extends Components {
  state = {count: 0}

  onClickEventName = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="com-bg-container">
        <h1>
          The Button has been clicked<span>{count}</span>times
        </h1>
        <p>Click the Button to Increase the Count!</p>
        <button onClick={this.onClickEventName} type="button">
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
