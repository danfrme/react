import React, { Component } from 'react'
import AddFishForm from './AddFishForm'
import EditFish from './EditFish'
// import { element } from 'prop-types'

export class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(key => 
                <EditFish 
                key={key} 
                index={key}
                fish={this.props.fishes[key]} 
                updatedFish={this.props.updatedFish}
                deleteFish={this.props.deleteFish}
                />)}

                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSamples}>Load sample Fishes</button>
            </div> 
        )
    }
} 

export default Inventory
