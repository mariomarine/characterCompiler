import React from 'react';
import { armor } from '../resources/armor.js';

class Equipment extends React.Component {
    render() {
        var _this = this;
        return (
            <div>
                <h2>Equipment</h2>
                <p>Armor</p>
                <select onChange={_this.props.handleEquipmentChange} >
                    {
                        Object.keys(armor).map((key, index) => {
                            return (
                                    <option key={key} value={key}>{key}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}

export default Equipment;

