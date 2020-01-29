import React from "react";
import {useParams} from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "One of the most famous sky scrapers in the world",
        imageUrl: "https://cdn.cheapism.com/images/Where_You_Live_or_Work.2e16d0ba.fill-1440x605.png",
        address: "20w 34th St, new York",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: "u1"
    },
    {
        id: "p2",
        title: "Empire State Building",
        description: "One of the most famous sky scrapers in the world",
        imageUrl: "https://cdn.cheapism.com/images/Where_You_Live_or_Work.2e16d0ba.fill-1440x605.png",
        address: "20w 34th St, new York",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: "u2"
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>;
};

export default UserPlaces;