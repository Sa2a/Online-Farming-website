import React, { Component } from 'react';
import BestSelling from '../components/sections/BestSelling';
import MainSection from '../components/sections/MainSection';
import Offer from '../components/sections/Offer';
import Services from '../components/sections/Services';
import Categories from '../components/sections/Categories';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import logo from "../assets/photo/logo.jpg";
import { Link } from 'react-router-dom';
// import CategoryCard from '../components/CategoryCard';


class Home extends Component {


    render() {
        return (
            <>
                <MainSection />
                <Services />
                {/* <ProductCard product={{name:" المنتج الحلو", image:{logo}}}/> */}
                {/* <BestSelling/> 
                <Link to={{pathname:`/test/${5050}`,hash:"CATID"}}
                    key={5050}
                    
                > TEst</Link>*/}
                <Categories />
                <Offer />
            </>
        );
    }
}

export default Home;