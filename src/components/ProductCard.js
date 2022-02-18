import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { currency, productItemPage } from '../ulilities/constants';
import logo from "../assets/photo/logo.jpg";
import Zoom from 'react-image-zoom';
import { useDispatch } from 'react-redux';
import { addToCart, setProductItem } from '../store/actions';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {

  const dispatch = useDispatch();


  const imageProps = {
    img: props.product.image === '' ? logo : props.product.image,
    width: 400, height: 250, zoomWidth: 400,
    offset: { vertical: 0, horizontal: -400 }
  };

  return (

    <Card sx={{ maxWidth: 400 }} key={props.id}>
      <Link to={{
        pathname: productItemPage+'/'+props.id,
        // hash:"CATID",
        key: props.id
    }}>
      <CardActionArea style={{ height: '22rem' }}
      onClick={()=>{
        dispatch(setProductItem(props.product));
      }}
       
     >
        {/* <CardMedia style={{
    flex: 1,
    width: '100%',
    height: '15rem',
    resizeMode: 'contain'
}}
          component="img"
          height="100%"
          image={props.product.image=== ''?logo:props.product.image}
          alt={props.product.name}
        >
          
          </CardMedia> */}
        <Zoom
          {...imageProps}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {props.product.name}
          </Typography>
          <Typography variant="body2" color="amber" noWrap>
            {props.product.price + ' ' + currency}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>  */}
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>
        <Button 
        
        onClick={()=>{
          dispatch(addToCart(props.id,props.product,1));
        }}
        size="small" color="success" style={{ color: "green", fontSize: 15 }}>
          <span style={{ margin: 10 }} className="elementor-button-icon elementor-align-icon-left">
            <i aria-hidden="true" className="fas fa-cart-plus"></i>
          </span>
         
          اضافه الى السلة
          
        </Button>
         {/* <div className="quantity">
          <input type="number" id="quantity_620fb702daec2" className="input-text qty text" step="1" min="1" max=""
            name="quantity" defaultValue={1} title="Qty" size="5"  inputMode="numeric" autoComplete="off" />
        </div> */}
      </CardActions>

    </Card>
  );
}