import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId:"",
            title:"",
            body:"",
        }
    }
    changeHandler = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=>{
            console.log(response)
            alert(`Data inserted. UserId: ${this.state.userId} Title: ${this.state.title}`)
        }).catch(error=>{
            console.log(error)
        })
    }
    render() {
        const {userId,title,body} = this.state
        return (
            <div>
                <form>
                    <div>
                        <input 
                        onChange={this.changeHandler} 
                        value={userId} 
                        type="text" 
                        name="userId"></input>
                    </div>
                    <div>
                        <input 
                        onChange={this.changeHandler} 
                        value={title} 
                        type="text" 
                        name="title"></input>
                    </div>
                    <div>
                        <input 
                        onChange={this.changeHandler} 
                        value={body} 
                        type="text" 
                        name="body"></input>
                    </div>
                    <button onClick={this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
