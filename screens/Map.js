import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map(props){
    const [marker, setMarker] = useState(null)
    /*
    useEffect(() => {
        (async() => {
            getUserPosition()
        })()
    }, [])
    */

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarker(coords)
    }

    return (
        <MapView
            style={styles.map}
            region={props.location}
            onLongPress={showMarker}
            mapType={props.mapType}
        >
            {marker && <Marker title="My marker" coordinate={{latitude: marker.latitude, longitude: marker.longitude}}/>}
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        height: "100%",
        width: "100%"
    }
});