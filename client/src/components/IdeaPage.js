import React, { Component } from 'react'
import axios from 'axios'

// Need info about a user
// Need info about that users ideas

class IdeaPage extends Component {
  state = {
    user: {},
    ideas: [
      {
        id: 1,
        title: 'hello',
        description: 'world'
      },
      {
        id: 2,
        title: 'hola',
        description: 'mundo'
      },
      {
        id: 3,
        title: 'goodnight',
        description: 'moon'
      },
      {
        id: 4,
        title: 'greetings',
        description: 'earthlings'
      }
    ]
  }

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data)
      this.setState({ user: res.data })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.username}'s Idea Page</h1>
        <button>New Idea</button>
        {this.state.ideas.map(idea => (
          <div>
            <input type="text" name="title" />
            <textarea name="description" />
            <button>Delete Idea</button>
          </div>
        ))}
      </div>
    )
  }
}
export default IdeaPage
