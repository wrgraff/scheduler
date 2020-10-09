import './index.scss';
import React from 'react';

class DayDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.date
        };
    }

    renderDate = (date) => {
        if (!date) {
            return (
                <span className="date__text">Выбрать дату</span>
            );
        };

        const msDate = new Date(Date.parse(date));
        const dateFormatterRu = new Intl.DateTimeFormat('ru', {
            month: 'long',
            day: 'numeric'
        });
        const dayFormatterRu = new Intl.DateTimeFormat('ru', {
            weekday: "long",
        });
        const dayFormatterEn = new Intl.DateTimeFormat('en-US', {
            weekday: "long",
        });

        return (
            <React.Fragment>
                <span className="date__text">
                    {dateFormatterRu.format(msDate)}
                </span>
                <span className={`date__day date__day_${dayFormatterEn.format(msDate).toLowerCase()}`}>
                    <span className="visually-hidden">{dayFormatterRu.format(msDate)}</span>
                </span>
            </React.Fragment>
        );
    };

    render() {
        return (
            <label className="date">
                {this.renderDate(this.state.date)}

                <input
                    type="date"
                    name="date"
                    min="2020-08-01"
                    value={this.state.date}
                    className="date__input"
                    onChange={evt => this.setState({date: evt.target.value})}
                />
            </label>
        );
    };
};

export default DayDate;
