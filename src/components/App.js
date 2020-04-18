import React, { Component } from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base'
 
export class App extends Component {

    state = {
        fishes: {},
        order: {}
    }

    componentDidMount() {

        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        // console.log(localStorageRef);
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });

        if(localStorageRef) { 
            this.setState({ order: JSON.parse(localStorageRef) });
        }
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
           
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish =>{
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        });
    };

    loadSamples = () =>{
        this.setState({ fishes: sampleFishes })
    }

    addToOrder = (key) =>{
        const order = {...this.state.order};
        
        order[key] = order[key] + 1 || 1;

        this.setState({ order });

    }

    updatedFish = (key, updatedFish) =>{
        const fishes = {...this.state.fishes}
        fishes[key] = updatedFish;
        this.setState({ fishes: fishes});
    }

    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({fishes: fishes});
    }

    deleteOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order: order});
    }

    render() {
        return (
        <div className="catch-of-the-day">
            <div className="menu">

                <Header tagline="Fresh Seafood Market"/>
                <ul className="fishes">
                    {Object.keys(this.state.fishes).map(key => 
                    <Fish   

                    key={key} 
                    index={key}
                    details={this.state.fishes[key]} 
                    addToOrder={this.addToOrder}/>)}
                </ul>
        
            </div>
                <Order 
                {... this.state} 
                deleteOrder={this.deleteOrder} 
                /> 

                 <Inventory 
                 addFish={this.addFish} 
                 loadSamples={this.loadSamples} 
                 fishes={this.state.fishes} 
                 updatedFish={this.updatedFish}
                 deleteFish={this.deleteFish}
                 />
                
            </div>
        )
    }
}

export default App
