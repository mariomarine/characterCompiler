import React from 'react';

class Abils extends React.Component {
    render() {
        var abilities = this.props.abils;
        var _this = this;
        return (
            <div>
                <h2>Abils</h2>
                <form>
                    {
                        Object.keys(abilities).map((key, index) => {
                            return (
                                <div key={index}>
                                    <label>
                                        {abilities[key].name}
                                        <input type="number" name={key} value={abilities[key].score} onChange={(e) => _this.props.handleChange(e.target)} />
                                    </label>
                                    <br />
                                </div>
                            )
                        })
                    }
                </form>
            </div>
        )
    }
}

export default Abils;

