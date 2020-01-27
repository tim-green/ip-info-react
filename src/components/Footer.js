import React from 'react';

class Footer extends React.Component {
    render() {
        if (this.props.ip) {
            return (
                <div className="row">
                    <div className="column">
                           <h5> <a href="https://ipinfo.io/" target="_blank" rel="noopener noreferrer" class="fas fa-map-marker-alt" style={{ fontSize: '2em', marginTop: '0.1em', display: 'none' }}></a>
                           </h5>
                    </div>
                </div>
            );
        } 
        else {
            return (
                <div></div>
            );
        };
    };
};

export default Footer;