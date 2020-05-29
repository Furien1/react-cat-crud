import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from '../_actions/catAction';
import { bindActionCreators } from "redux";

class CatForm extends Component {
    state = { ...this.returnStateObject() };

    // Amennyiben a localStorage-ban nincs/van elem
    returnStateObject() {
        if(this.props.currentIndex == -1)
            return {
                name: '',
                food: '',
                image: ''
            }
        else 
            return this.props.list[this.props.currentIndex]
    }
    
    //handleChange
    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //handleSubmit
    handleSubmit = e => {
        e.preventDefault();
        if (this.props.currentIndex == -1 ) 
            this.props.insertCat(this.state)
        else
            this.props.updateCat(this.state)
    }

    render() {
        return (
           <form onSubmit = {this.handleSubmit} autoComplete='off'>
               <input name='name' placeholder="Name" value={this.state.name} onChange = {this.handleInputChange} /> <br />
               <input name='food' placeholder="Food" value={this.state.food} onChange = {this.handleInputChange} /> <br />
               <input name='image' placeholder="Image" value={this.state.image} onChange = {this.handleInputChange} /> <br />
               <button type="submit">Submit </button>
           </form>
        )
    }
}

// state index redux store-ban
const mapStateToProps = state => {
    return {
        list : state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators ({
        insertCat : actions.insert,
        updateCat : actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CatForm);