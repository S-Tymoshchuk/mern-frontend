import React, {useState} from "react";

import "./PlaceItem.css";
import Card from "../../shared/UIElements/Card";
import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/UIElements/Modal";
import Map from "../../shared/UIElements/Map";


const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false);

    const closeMapHandler = () => {
        setShowMap(false);
    };

    const openMapHandler = () => {
        setShowMap(true);
    };

    return (
        <React.Fragment>
            <Modal show={showMap} onCancel={closeMapHandler} header={props.address}
                   contentClass="place-item__modal-content" footerClass="place-item__modal-actions"
                   footer={<button onClick={closeMapHandler}>CLOSE</button>}>
                <div className="map-container">
                    <Map center={props.coordinate} zoom={16}/>
                </div>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt=""/>
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;