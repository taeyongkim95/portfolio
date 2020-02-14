import React from 'react';

export class BodyBlock extends React.Component {
    render() {
        return (
            <div className="body-blocks">
                <h2 className="traits">{this.props.title}</h2>
                <ul className="lines">
                    {this.props.lines.map((item,index) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}