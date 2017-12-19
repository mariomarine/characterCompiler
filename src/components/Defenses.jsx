import React from 'react';

class Defenses extends React.Component {
    getTotal(defense) {
        let total = 10;
        total += Math.floor(this.props.level / 2);
        return total;
    }
    render() {
        var defenses = this.props.defenses;
        var _this = this;
        return (
            <div>
                <h2>Defenses</h2>
                <form>
                    {
                        Object.keys(defenses).map((key, index) => {
                            return (
                                <div key={index}>
                                    <label>
                                        {key}
                                        <input disabled type="number" min={1} max={20} name={key} value={_this.getTotal(key)} />
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

export default Defenses;

