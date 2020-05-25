import React from 'react';

class Info extends React.Component {
    render() {
        const { country, region, city, loc, org, timezone } = this.props.data;
        const locSplit = String(loc).split(',');
        if (this.props.data.ip) {
            return (
                <div>
                    <div className="row">
                        <div className="column">
                            <h3 class="ip-info">IP Information</h3>
                        </div>
                    </div>
                    <div class="row t-data">
                        <div class="column const-title">Country</div>
                        <div class="column const-data">{country}</div>
                    </div>

                    <div class="row t-data">
                        <div class="column const-title">Region</div>
                        <div class="column const-data">{region}</div>
                    </div>

                    <div class="row t-data">
                        <div class="column const-title">City</div>
                        <div class="column const-data">{city}</div>
                    </div>

                    <div class="row t-data">
                        <div class="column const-title">Latitude</div>
                        <div class="column const-data">{locSplit[0]}</div>
                    </div>

                    <div class="row t-data">
                        <div class="column const-title">Longitude</div>
                        <div class="column const-data">{locSplit[1]}</div>
                    </div>

                    <div class="row t-data">
                        <div class="column const-title">Organisation</div>
                        <div class="column const-data">{org}</div>
                    </div>

                    <div class="row t-data">
                        <div class="column const-title">Timezone</div>
                        <div class="column const-data">{timezone}</div>
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

export default Info;