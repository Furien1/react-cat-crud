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

    componentDidUpdate(prevProps) {
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
        this.setState({ ...this.returnStateObject() })
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
        <div className="container mt-3">
            <h3 className='text-center'>Cica hozzáadó</h3>
            <form onSubmit = {this.handleSubmit} autoComplete='off'>
               {/* <input name='name' placeholder="Név" value={this.state.name} onChange = {this.handleInputChange} class="form-control" id="inputName" /> <br /> */}
               <div class="form-group">
                    <label for="inputName">Név</label>
                    <input name='name' value={this.state.name} onChange = {this.handleInputChange} class="form-control" id="inputName" />
                    <small id="help" class="form-text text-muted mb-3">Sosem adjuk ki cica nevedet.</small>
             
                    <label for="inputFood">Étel</label>
                    <input placeholder="Kitekat! Semmicicó." name='food' value={this.state.food} onChange = {this.handleInputChange} class="form-control mb-3" id="inputFood" />
                    
                    <label for="inputImage">Kép</label>
                    <input name='image' placeholder="https://..." value={this.state.image} onChange = {this.handleInputChange} class="form-control" id='inputImage' /> <br />
                </div>
                <button className='btn btn-info' type="submit">Hozzáadás </button>
           </form>
        </div>
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