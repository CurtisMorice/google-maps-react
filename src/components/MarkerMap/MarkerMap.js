import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { compose, withProps, withStateHandlers } from "recompose";
/* eslint-disable no-undef */
// const FaAnchor = "@fortawesome/react-fontawesome";
import  {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

class MarkerMap extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }
  
  

    onToggleOpen = () => {
      this.setState({...state, isOpen: !this.state.isOpen})
    }

    componentWillMount() {
        this.setState({ markers: [] })
      }
    
      componentDidMount() {
        const url = [
          // Length issue
          `https://gist.githubusercontent.com`,
          `/farrrr/dfda7dd7fccfec5474d3`,
          `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
        ].join("")
    
        fetch(url)
          .then(res => res.json())
          .then(data => {
            this.setState({ markers: data.photos });
          }); 
      }
    
      render( ) {
        let MyMap = (withScriptjs(withGoogleMap(()=>{
          return <GoogleMap
          defaultZoom={12}
          defaultCenter={{ lat: 44.9778, lng: -93.258133}}>
          <Marker
            position={{ lat: 44.9778, lng: -93.258133 }}
            onClick={this.onToggleOpen}>
        {this.state.isOpen && 
        <InfoWindow onCloseClick={this.onToggleOpen}>
        <div>"Hello"</div> 
        </InfoWindow>}
          </Marker>
        </GoogleMap>
        })));

        return (
            <MyMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHHRhTzzE5wUoHuZKmTJdTzD7sBFxvXB0&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `800px`, width: `1000px`, position:"relative", left: '500px' }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
        )
      }
    }
    
    
    

export default MarkerMap;
