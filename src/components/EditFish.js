import React, { Component } from 'react'


export class EditFish extends Component {

     handleChange = (e) =>{
        const updatedFish = {
            ...this.props.fish,
            [e.currentTarget.name]: e.currentTarget.value
        };
        this.props.updatedFish(this.props.index, updatedFish);
    }

    eraseFish = () =>{
        this.props.deleteFish(this.props.index);
    }
    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" placeholder="name"  onChange={this.handleChange} value={this.props.fish.name}/>
                <input type="text" name="price"  placeholder="price" onChange={this.handleChange} value={this.props.fish.price}/>
                <select type="text" name="status" placeholder="status" onChange={this.handleChange} value={this.props.fish.states} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">sold Out!</option>
                </select>
                <textarea name="desc"  placeholder="desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input type="text" name="image"  placeholder="image" onChange={this.handleChange} value={this.props.fish.image} /> 
                <button onClick={this.eraseFish}>Delete fish</button>
            </div>
        )
    }
}

export default EditFish
