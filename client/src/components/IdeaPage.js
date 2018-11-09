
import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Need info about a user
// Need info about that users ideas

const IdeaStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background: #f1faee;
  margin: 10px 0;
  button {
    position: absolute;
    top: 5px;
    right: 10px;
  }
  input,
  textarea {
    background-color: transparent;
    border: none;
  }
  input {
    height: 30%;
    font-size: 1.3rem;
  }
  textarea {
    height: 70%;
  }
`

const NewIdeaButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`

const IdeasContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`

class IdeaPage extends Component {
  state = {
    user: {},
    ideas: []
  }

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data)
      this.setState({
        user: res.data,
        ideas: res.data.ideas
      })
    })
  }

  handleCreateNewIdea = () => {
    const userId = this.props.match.params.userId
    const payload = {
      title: 'Idea Title',
      description: 'Idea Description'
    }
    axios.post(`/api/users/${userId}/ideas`, payload).then(res => {
      const newIdea = res.data
      const newStateIdeas = [...this.state.ideas, newIdea]
      this.setState({ ideas: newStateIdeas })
    })
  }

  handleDelete = ideaId => {
    // some unique value
    axios.delete(`/api/ideas/${ideaId}`).then(() => {
      //Remove the idea with ideaID from this.state.ideas
      const newIdeas = [...this.state.ideas]
      // Return only ideas that are NOT the id provided
      const filtered = newIdeas.filter(idea => {
        return idea._id !== ideaId // ! = =
      })
      // Take filtered data and set it to ideas
      this.setState({ideas: filtered})
    })
  }
  handleChange = () => {

  }
  handleUpdate = () => {}

  render() {
    return (
      <div>
        <h1>{this.state.user.username}'s Idea Page</h1>
        <NewIdeaButton onClick={this.handleCreateNewIdea}>
          New Idea
        </NewIdeaButton>
        <IdeasContainerStyle>
          {this.state.ideas.map(idea => {
            const deleteIdea = () => {
              return this.handleDelete(idea._id)
            }
            return (
              <IdeaStyles>
                <input type="text" name="title" value={idea.title} />
                <textarea name="description" value={idea.description} />
                <button onClick={deleteIdea}>X</button>
              </IdeaStyles>
            )
          })}
        </IdeasContainerStyle>
      </div>
    )
  }
}
export default IdeaPage