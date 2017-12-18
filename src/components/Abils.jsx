import React from 'react';
import point_buy from '../resources/point_buy.js';

class Abils extends React.Component {
    getTotal(key) {
        let total = parseInt(this.props.abils[key].score);
        total += parseInt(this.props.abils[key].bonus);
        total += parseInt(this.props.abils[key].racial ? 2 : 0);
        return total;
    }
    getPointsUsed(abils) {
        let points = 0;
        Object.keys(abils).map((key, index) => {
            points += point_buy[abils[key].score];
        });
        return points;
    }
    getMod(score) {
        let mod = Math.floor(score / 2) - 5;
        return mod;
    }
    getBonusPointsUsed(abils) {
        let points = 0;
        Object.keys(abils).map((key, index) => {
            points += parseInt(abils[key].bonus);
        });
        return points;
    }
    getTotalBonusPoints(level) {
        let points = 0;
        points += (level >= 4) ?
                    (level >= 14) ?
                        (level >= 24) ?
                            6
                        : 4
                    : 2
                : 0
        points += (level >= 8) ?
                    (level >= 18) ?
                        (level >= 28) ?
                            6
                        : 4
                    : 2
                : 0
        points += (level >= 11) ?
                    (level >= 21) ?
                        12
                    : 6
                : 0
        return points;
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
                                        <input type="number" min={1} max={20} name={key} value={abilities[key].score} onChange={(e) => _this.props.handleAbilChange(e.target)} />
                                        <input type="checkbox" name={key} checked={abilities[key].racial} onChange={(e) => _this.props.handleRacialChange(e.target)} />
                                        <input type="number" min={-10} max={10} name={key} value={abilities[key].bonus} onChange={(e) => _this.props.handleBonusChange(e.target)} />
                                        <span className="total">{_this.getTotal(key)}</span> &nbsp;
                                        <span className="mod">Mod: {_this.getMod(_this.getTotal(key))}</span>
                                    </label>
                                    <br />
                                </div>
                            )
                        })
                    }
                </form>
                <p className='point_buy'>You have used {_this.getPointsUsed(abilities)}/80.</p>
                <p className='bonus_points'>You have {_this.getBonusPointsUsed(abilities)}/{_this.getTotalBonusPoints(_this.props.level)}</p>
            </div>
        )
    }
}

export default Abils;

