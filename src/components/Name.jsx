import React from 'react';

class Name extends React.Component {
    render() {
        var _this = this;
        return (
            <div>
                <h2>Name</h2>
                <input type="text" name="Name" value={_this.props.name} onChange={(e) => _this.props.handleNameChange(e.target)} />
            </div>
        )
    }
}

export default Name;

