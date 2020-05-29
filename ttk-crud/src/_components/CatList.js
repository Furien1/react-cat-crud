import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from '../_actions/catAction';
import { bindActionCreators } from "redux";
import CatForm from '../_components/CatForm';

class CatList extends Component {

    handleEdit = index => {
        this.props.updateCatIndex(index);
    }
    
    handleDelete = index => {
        this.props.deleteCat(index)
    }

    render() {
        return (
            <div>
                <CatForm />
                <h3 className='text-center'>Cicák listázása</h3>
                <div className='container'>
                        {
                            this.props.list.map( (item, index) => {
                                return <div key = {index} className="card mx-auto" style={{margin: '0 auto', float: 'none'}} >
                                            <img class="card-img-top" src={item.image} style={{width : '18rem'}} alt="Card image cap"/>
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <div>{item.name}</div>
                                                <div>
                                                    <button className="btn btn-warning mr-3 mt-1" onClick = { () => this.handleEdit(index)}>Edit</button>
                                                    <button className="btn btn-danger mt-1" onClick = { () => this.handleDelete(index)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                            })
                        }
                </div> 
            </div>
        )
    }
}

//state redux store-ban
const mapStateToProps = state => {
    return {
        list : state.list
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators ({
        deleteCat : actions.Delete,
        updateCatIndex: actions.UpdateIndex
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CatList);