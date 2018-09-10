import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap, withScriptjs, Marker, FusionTablesLayer } from 'react-google-maps';
class Map extends Component {
   render() {
/*   const WTTGoogleMap = withScriptjs(withGoogleMap((props) => (
      <GoogleMap
        defaultCenter = { { lat: 44.985291, lng: -93.272175 } }
        defaultZoom = { 8 }
      >
        {props.isMarkerShown && <Marker position={{ lat: 44.985291, lng: -93.272175 }} />}
      </GoogleMap>
   ))*/
   const WTTGoogleMap = compose(
     withProps({
       googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCNMSOhDbjX6BfkHrdGleQPQctZ8ZlByac&libraries=geometry,drawing,places",
       loadingElement: <div style={{ height: `100%` }} />,
       containerElement: <div style={{ height: `800px` }} />,
       mapElement: <div style={{ height: `100%` }} />,
     }),
     withScriptjs,
     withGoogleMap
   )((props) =>
     <GoogleMap
       defaultZoom={7}
       defaultCenter={{ lat: 46.7296, lng: -94.6859 }}
     >
       {props.isMarkerShown && <Marker position={{ lat: 44.985291, lng: -93.272175 }} />}
       <FusionTablesLayer
        url="https://fusiontables.google.com/embedviz?viz=GVIZ&t=TABLE&q=select+col0%2C+col1%2C+col2%2C+col3%2C+col4%2C+col5%2C+col6%2C+col7%2C+col8%2C+col9%2C+col10%2C+col11%2C+col12%2C+col13%2C+col14%2C+col15%2C+col16%2C+col17+from+19jhaGLHZBJKmfAntiNPVRLfpIQG9Mli4xe0uT9mB&containerId=googft-gviz-canvas"
        options={{
          query: {
            select: "col0%2C+col1%2C+col2%2C+col3%2C+col4%2C+col5%2C+col6%2C+col7%2C+col8%2C+col9%2C+col10%2C+col11%2C+col12%2C+col13%2C+col14%2C+col15%2C+col16%2C+col17",
            from: "19jhaGLHZBJKmfAntiNPVRLfpIQG9Mli4xe0uT9mB"
          },
          styles: [{
            polygonOptions: {
              fillColor: '#e0ffd4',
              fillOpacity: 0.6,
            }
          }, {
            where: 'Region=1',
            polygonOptions: {
              fillColor: '#ff9900'
            }
          }, {
            where: 'Region=2',
            polygonOptions: {
              fillColor: '#ffff00'
            }
          }, {
            where: 'Region=3',
            polygonOptions: {
              fillColor: '#00ff00'
            }
          }, {
            where: 'Region=4',
            polygonOptions: {
              fillColor: '#00ffff'
            }
          }, {
            where: 'Region=5',
            polygonOptions: {
              fillColor: '#0000ff'
            }
          }, {
            where: 'Region=6',
            polygonOptions: {
              fillColor: '#9900ff'
            }
          }, {
            where: 'Region=7',
            polygonOptions: {
              fillColor: '#ff00ff'
            }
          }, {
            where: 'Region=8',
            polygonOptions: {
              fillColor: '#ff0000'
            }
          }, {
            where: 'Region=',
            polygonOptions: {
              fillColor: '#ff0000'
            }
          }]
        }}
      />
     </GoogleMap>
   );
   /*<WTTGoogleMap
     isMarkerShown
     googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
     loadingElement={<div style={{ height: `100%` }} />}
     containerElement={<div style={{ height: `400px` }} />}
     mapElement={<div style={{ height: `100%` }} />}
   />
   ;*/
   return(
      <div>
        <WTTGoogleMap
          containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
