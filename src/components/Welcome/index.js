import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: 'Subscribe'}

  subscribe = () => {
    this.setState(prevState => {
      if (prevState.isSubscribe === 'Subscribe') {
        return {isSubscribe: 'Subscribed'}
      }
      return {isSubscribe: 'Subscribe'}
    })
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="mainContainer">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.subscribe}>
          {isSubscribe}
        </button>
      </div>
    )
  }
}

export default Welcome
