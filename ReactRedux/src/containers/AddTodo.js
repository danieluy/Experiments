import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

class AddTodo extends React.Component {
  
    input
  
    submitForm(e) {
      e.preventDefault()
      if (!this.input.value.trim()) {
        return
      }
      this.props.dispatch(addTodo(this.input.value))
      this.input.value = ''
    }
  
    render(){
      return (
        <div>
          <form className="input-form" onSubmit={this.submitForm.bind(this)}>
            <input
              className="input-text"
              placeholder="What to do?"
              ref={node => { this.input = node }}
            />
            <button className="input-button" type="submit" >Add Todo</button>
          </form>
        </div>
      )
    }
  }
  
  // let AddTodo = ({ dispatch }) => {
  
  //   let input
  
  //   function submitForm(e) {
  //     e.preventDefault()
  //     if (!input.value.trim()) {
  //       return
  //     }
  //     dispatch(addTodo(input.value))
  //     input.value = ''
  //   }
  
  //   return (
  //     <div>
  //       <form className="input-form" onSubmit={submitForm}>
  //         <input
  //           className="input-text"
  //           placeholder="What to do?"
  //           ref={node => { input = node }}
  //         />
  //         <button className="input-button" type="submit" >Add Todo</button>
  //       </form>
  //     </div>
  //   )
  // }

//The function returned by conect() injects the prop dispatch:function
export default connect()(AddTodo)