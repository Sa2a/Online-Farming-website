import React, { Component, useEffect, useState } from 'react';
import { Button, Input } from 'reactstrap';
import { fbCategoryCollection, fbProductCollection, homePage, Item, mapStateToPropsCategoryDocs, productsNumLimit } from '../ulilities/constants';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { db } from '../config/fb_config';
import CategoryCard from '../components/CategoryCard';
import { useLocation, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/sections/SectionHeader';
import { connect } from 'react-redux';


// function getParams(){
//   return useParams();

// }

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3} sm={3} md={3}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={3} sm={3} md={3}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={3} sm={3} md={3}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={3} sm={3} md={3}>
        <Item>ItemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmItemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</Item>
      </Grid>
      <Grid item xs={3} sm={3} md={3}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}



function Products(props) {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState(Object);
  const [lastDoc, setLastDoc] = useState(Object);
  const { categoryID } = useParams();
  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
  }, [])
  const categoryDocs = props.categoryDocs;
  let category = categoryDocs.find((doc) => doc.id === categoryID);
  const categoryName = category ? category.data().name : "لا يوجد قسم";


  async function getProducts() {
    let p = [];
    const query = await db.collection(fbProductCollection).where("categoryID", "==", categoryID);
    await query.limit(productsNumLimit).get().then((querySnapshot) => {
      // console.log("querySnapshot.docs", querySnapshot.docs);
  
      const length = querySnapshot.docs.length;
      if(length<=0){
        return ;
      }
      querySnapshot.forEach((doc) => {
        
        p.push
          (
            <Grid item xs={3} sm={3} md={3} zeroMinWidth>
              {/* <Item  > */}
              <ProductCard id={doc.id} product={doc.data()} />
              {/* </Item> */}
            </Grid>
          );
      });

      setLastDoc(querySnapshot.docs[length-1]);
      // console.log("categories",categories);
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
    setQuery(query);
    setProducts(p);
  
  }
  async function getMoreProducts() {
    let p=products;
    // const length = querySnapshot.docs.length;
    if (!lastDoc) {
      return;
    }
  
    await query.startAfter(lastDoc).limit(productsNumLimit).get().then((querySnapshot) => {
      // console.log("querySnapshot.docs", querySnapshot.docs);
      
      const length = querySnapshot.docs.length;
      if(length<=0){
        return ;
      }
      querySnapshot.forEach((doc) => {
        p.push
          (
            <Grid item xs={3} sm={3} md={3} zeroMinWidth>
              {/* <Item  > */}
              <ProductCard id={doc.id} product={doc.data()} />
              {/* </Item> */}
            </Grid>
          );
      });
      setLastDoc(querySnapshot.docs[length-1]);
  
  
      // console.log("categories",categories);
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
  
    setProducts(p);
  }

  return <>

    <SectionHeader name={categoryName} style={{ marginTop: 100 }} />
    <div dir="rtl" className="archive post-type-archive post-type-archive-product logged-in admin-bar wp-custom-logo theme-astra woocommerce-shop woocommerce woocommerce-page woocommerce-js columns-3 tablet-columns-3 mobile-columns-1 ast-woo-shop-archive ast-woocommerce-cart-menu ast-replace-site-logo-transparent ast-inherit-site-logo-transparent ast-hfb-header ast-desktop ast-separate-container ast-no-sidebar astra-3.7.6 elementor-default elementor-kit-3049 customize-support ast-mouse-clicked"
      style={{ dataNewGrCSCheckLoaded: "14.1046.0", dataGrExtInstalled: true.valueOf, backgroundColor: "gray" }}>
      <div id="content" className="site-content">
        <div className="ast-container">
          <div id="primary" className="content-area primary" >
            <main id="main" className="site-main">
              <div className="ast-woocommerce-container">
                {/* <nav className="woocommerce-breadcrumb">
                  <a href={homePage}>
                    Home</a>
                  &nbsp;/&nbsp;Shop
                </nav>
                <header className="woocommerce-products-header">
                  <h1 className="woocommerce-products-header__title page-title">Shop</h1>

                </header>
                <div className="woocommerce-notices-wrapper"></div><p className="woocommerce-result-count">
                  Showing the single result</p>
                <form className="woocommerce-ordering" method="get">
                  <select name="orderby" className="orderby" aria-label="Shop order">
                    <option value="menu_order" select="selected">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">Sort by price: high to low</option>
                  </select>
                  <Input type="hidden" name="paged" value="1" />
                </form> */}
                <ul className="products columns-4">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 4, md: 3 }} /*xs={2} sm={4} md={8}*/>
                      <Grid container item columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 4, md: 3 }} >
                        {products}
                      </Grid>
                      <Grid style={{ marginTop: 20 }} className='center' container item columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 4, md: 3 }} >
                        <Grid item xs={3} sm={3} md={3}>

                          <Button
                          disabled= {products.length===0}
                            onClick={() => {
                              getMoreProducts();
                            }}
                            title="عرض منتجات اكثر"
                            color="green"
                            style={{ width: "90%", margin: 10, backgroundColor: "var(--e-global-color-accent)", }}
                          >
                            <h2>المزيد...
                            </h2>
                          </Button>

                        </Grid>
                      </Grid>
                      {/* <Grid container item columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 4, md: 3 }} >
          <FormRow />
        </Grid>
        <Grid container item >
          <FormRow />
        </Grid> */}
                    </Grid>
                  </Box>
                  {/* <li className="ast-col-sm-12 ast-article-post astra-woo-hover-zoom product type-product post-5198 status-publish first instock product_cat-clothing has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                <div className="astra-shop-thumbnail-wrap"><a href="http://localhost:8080/wordpress/product/hoodie-with-logo/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                                    <img width="300" height="300" src="http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-300x300.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt=""
                                        loading="lazy" srcSet="http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-300x300.jpg 300w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-150x150.jpg 150w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-768x768.jpg 768w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-600x600.jpg 600w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-100x100.jpg 100w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2.jpg 801w"
                                        sizes="(max-width: 300px) 100vw, 300px" />
                                </a></div><div className="astra-shop-summary-wrap">
                                    <span className="ast-woo-product-category">
                                        Clothing			</span>
                                    <a href="http://localhost:8080/wordpress/product/hoodie-with-logo/" className="ast-loop-product__link">
                                        <h2 className="woocommerce-loop-product__title">اسم المنتج</h2>
                                    </a><div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                        <span style={{ width: "100%" }}>Rated <strong className="rating">5.00</strong> out of 5</span></div>
                                    <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>45.00</bdi></span></span>
                                </div></li> */}
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  </>;

}
export default connect(mapStateToPropsCategoryDocs)(Products);