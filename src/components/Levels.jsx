import React from 'react';

class Levels extends React.Component {
    render() {
        var _this = this;
        return (
            <div>
                <h2>Levels</h2>
                <form>
                    <label>
                        Level
                        <input type="number" name="level" value={_this.props.levels.level} onChange={(e) => _this.props.handleChange(e.target)} />
                    </label>
                    <br />
                </form>
            </div>
        )
    }
}

export default Levels;

