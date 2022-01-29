import React, { Component } from "react";
import "./Maps.scss";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  state = {
    location: {},
  };
  static defaultProps = {
    zoom: 15,
  };

  componentDidMount = () => {};

  render = () => {
    return (
      // Important! Always set the container height explicitly
      <>
        {this.state.location && (
          <div className="maps">
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) =>
                new window.google.maps.Circle({
                  strokeColor: "#19CB8C",
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: "#5BE5AB",
                  fillOpacity: 0.3,
                  map,
                  center: this.props.center,
                  radius: 275,
                })
              }
            ></GoogleMapReact>
          </div>
        )}
      </>
    );
  };
}

export default SimpleMap;
