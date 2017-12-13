import React from 'react';

class Abils extends React.Component {
    getTotal(key) {
        let total = parseInt(this.props.abils[key].score);
        total += parseInt(this.props.abils[key].bonus);
        total += parseInt(this.props.abils[key].racial ? 2 : 0);
        return total;
    }
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
                                        <input type="number" name={key} value={abilities[key].score} onChange={(e) => _this.props.handleAbilChange(e.target)} />
                                        <input type="checkbox" name={key} checked={abilities[key].racial} onChange={(e) => _this.props.handleRacialChange(e.target)} />
                                        <input type="number" name={key} value={abilities[key].bonus} onChange={(e) => _this.props.handleBonusChange(e.target)} />
                                        <span className="total">{_this.getTotal(key)}</span>
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

