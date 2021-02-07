import React from 'react';

class Header extends React.Component {
    render() {
        if (this.props.ip) {
            return (
                <div className="row" >
                    <div className="column">
                        <h2 className="ip-title" style={{ textAlign: 'center' }}>This Device <br/>IP Number is<br/> {this.props.ip}</h2>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        };
    };
};

export default Header;