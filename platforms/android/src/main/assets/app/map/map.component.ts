import { Component, ViewChild } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";
import { Image } from "ui/image";
import { ImageSource } from "image-source";


// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => MapView);

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.html',
    styleUrls: ['map.css'],
})
export class MapComponent {

    latitude = -32.9114;
    longitude = -68.845;
    zoom = 12;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: String;

    constructor() {

        let that = this;
        var location = getCurrentLocation({ desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000 }).
            then(function (loc) {
                if (loc) {
                    console.log("Current location is: ", loc.latitude, loc.longitude);
                    that.latitude = loc.latitude;
                    that.longitude = loc.longitude;
                }
            }, function (e) {
                console.log("Error: " + e.message);
            });
    }

    //Map events
    onMapReady(event) {
        console.log('Map Ready');
        let imgSrc = new ImageSource();
        imgSrc.fromResource("rec_pin");

        let image = new Image();
        image.imageSource = imgSrc;

        this.mapView = event.object;

        console.log("Setting a marker...");

        var marker = new Marker();
        marker.position = Position.positionFromLatLng(this.latitude, this.longitude);
        marker.title = "YO";
        marker.snippet = "Ubicación actual";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);

                var marker1 = new Marker();
        marker1.position = Position.positionFromLatLng(-32.94838894324855, -68.84135093539953);
        marker1.title = "Plastico";
        marker1.snippet = "14:00 18:00";
        marker1.icon = image;
        marker1.userData = { index: 1 };
        this.mapView.addMarker(marker1);
    
                        var marker2 = new Marker();
        marker2.position = Position.positionFromLatLng(-32.896186947688356, -68.81551690399647);
        marker2.title = "Vidrio";
        marker2.snippet = "15:30 19:30";
        marker2.icon = image;
        marker2.userData = { index: 1 };
        this.mapView.addMarker(marker2);

    }

    onCoordinateTapped(args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

}