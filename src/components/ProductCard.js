import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { currency } from '../ulilities/constants';
import logo from "../assets/photo/logo.jpg";
export default function ProductCard(props) {
  return (
  
    <Card sx={{ maxWidth: 400 }} key={props.id}>
      <CardActionArea style={{height:'20rem'}} >
        <CardMedia style={{
    flex: 1,
    width: '100%',
    height: '15rem',
    resizeMode: 'contain'
}}
          component="img"
          height="100%"
          image={props.product.image=== ''?logo:props.product.image}
          alt={props.product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
          {props.product.name}
          </Typography>
          <Typography variant="body2" color="amber" noWrap>
          {props.product.price+' '+currency}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          اضف الى السله
        </Button>
      </CardActions>
    </Card>
  );
}