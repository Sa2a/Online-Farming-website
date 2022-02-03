import React from 'react';
import logo from "../assets/photo/logo.jpg";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {  productsPage } from '../ulilities/constants';
export default function CategoryCard(props) {
    // console.log(props.id);
    return <Link to={{
        pathname: productsPage+'/'+props.id,
        // hash:"CATID",
        key: props.id
    }}>

        <Card  key={props.id}>
            <CardActionArea  style={{ width: '20rem', height:'20rem' }}>
                <CardMedia style={{width: '20rem',height:'15rem'}}
                    component="img"
                    height= '100%'
                    width="100%" 
                    image={props.category.image}
                    alt={logo}
                />
                <CardContent style={{ textAlign: "center", backgroundColor:"#8bc34a" }} >
                    <Typography gutterBottom variant="h5" component="div">
                        {props.category.name}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
                </CardContent>
            </CardActionArea>
        </Card>
        {/* <Card hoverable style={{ width: '20rem', height: '100%' }} key={props.id}>

            <Card.Img variant="top" src={props.category.image} style={{ height: '100%', width: "100%" }} />
            <Card.Body>
                <Card.Title>
                    <div className="elementor-element elementor-element-c8877ef elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                        data-id="c8877ef" data-element_type="widget" data-widget_type="image-box.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-image-box-wrapper">
                                <div className="elementor-image-box-content">
                                    <h3 style={{ textAlign: "center" }} className="elementor-image-box-title">{props.category.name}</h3>
                                     <p className="elementor-image-box-description"
                                >I am text block. Click edit button to change this tex em ips.</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Title>
            <Button variant="primary">Go somewhere</Button> 
            </Card.Body>
        </Card> */}

    </Link>
        ;
}
