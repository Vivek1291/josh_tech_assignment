import React, {Component} from 'react';
import './chipStyle.css';

class Chip extends Component {
    constructor(props) {
        super(props)

        this.state= {
            lists: this.props.lists || [],
        }
    }
    render() {
        
        const items = this.state.lists;

        return (
            // { if (this.state.list) {
                
            // }}
            <div className="chip-container" >
                {
                    items.map((item, index)=> {
                   return <span key={index}>{item}</span>
                    })
                }
            </div>
        )
    }
}

export default Chip;