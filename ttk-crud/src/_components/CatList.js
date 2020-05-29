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
                <hr />
                <p>List of cats</p>
                <table>
                    <tbody>
                        {/* hozzadas, edit */}
                        {
                            this.props.list.map( (item, index) => {
                                return <tr key = {index}>
                                        <td>{item.name}</td>
                                        <td>{item.image}</td>
                                        <td><button onClick = { () => this.handleEdit(index)}>Edit</button></td>
                                        <td><button onClick = { () => this.handleDelete(index)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
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