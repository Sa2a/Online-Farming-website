import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import ProductCardCart from '../components/ProductCardCart';
import SectionHeader from '../components/sections/SectionHeader';
import { mapStateToPropsCartProducts } from '../ulilities/constants';

function Cart(props) {
    const productItems = props.cartProducts;
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");
    const [total, setTotal] = useState(0);
    useEffect(() => {
        if (productItems) {
            let message = "عملية شراء من خلال موقع زراعه أون لاين:" + "%0A";
            let t = 0;
            let p = [];
            productItems.forEach((item) => {
                message = message.concat("%0A", item["product"].name);
                message = message.concat("%0A", `السعر: ${item["product"].price}`);
                message = message.concat("%0A", `الكميه: ${item["amount"]}`);
                message = message.concat("%0A", "---------");
                t+=parseFloat(item["product"].price)*parseInt( item["amount"]);
                p.push
                    (
                        <Grid item xs={3} sm={3} md={3} zeroMinWidth>
                            {/* <Item  > */}
                            <ProductCardCart id={item["id"]} product={item["product"]} amount={item["amount"]} />
                            {/* </Item> */}
                        </Grid>
                    );
            });
            setProducts(p);
            setTotal(t);

            message = message.concat("%0A", `الاجمالى: ${t}`);

            setMessage(message);
            console.log(message);
        }

    }, [])
    return (
        <>
            <SectionHeader name="السلة" style={{ marginTop: 100 }} />
            <div dir="rtl" className="archive post-type-archive post-type-archive-product logged-in admin-bar wp-custom-logo theme-astra woocommerce-shop woocommerce woocommerce-page woocommerce-js columns-3 tablet-columns-3 mobile-columns-1 ast-woo-shop-archive ast-woocommerce-cart-menu ast-replace-site-logo-transparent ast-inherit-site-logo-transparent ast-hfb-header ast-desktop ast-separate-container ast-no-sidebar astra-3.7.6 elementor-default elementor-kit-3049 customize-support ast-mouse-clicked"
                style={{ dataNewGrCSCheckLoaded: "14.1046.0", dataGrExtInstalled: true.valueOf, backgroundColor: "gray" }}>
                <div id="content" className="site-content">
                    <div className="ast-container">
                        <div id="primary" className="content-area primary" >
                            <main id="main" className="site-main">
                                <div className="ast-woocommerce-container">
                                    <ul className="products columns-4">
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 4, md: 3 }} /*xs={2} sm={4} md={8}*/>
                                                <Grid container item columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 4, md: 3 }} >
                                                    {products}
                                                </Grid>
                                                <Grid style={{ marginTop: 20 }} className='center' container item columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 4, md: 3 }} >
                                                    <Grid item xs={3} sm={3} md={3}>
                                                    {/* <div className="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-2-equal ast-builder-grid-row-tablet-2-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-below-footer-builder">
                <div className="ast-builder-grid-row-container-inner">
                    <div className="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row"> */}
                                                        {/* <div  className="center site-footer-below-section-2 site-footer-section site-footer-section-2">
                                                            <div className=" ast-builder-layout-element ast-flex site-footer-focus-item" data-section="section-fb-social-icons-1">

                                                                <div className="ast-footer-social-1-wrap ast-footer-social-wrap">
                                                                    <div className="footer-social-inner-wrap element-social-inner-wrap social-show-label-true ast-social-color-type-custom ast-social-stack-none ast-social-element-style-filled"> */}
                                                                    <h2 className='center'>الاجمالى : {total}</h2>
                                                                        <a href={`https://wa.me/${props.contactDocs ? props.contactDocs.data().whatsappNumber : ""}?text=${message}`}
                                                                            aria-label="whatsapp" target="_blank" rel="noopener noreferrer" style={{height:"40px",width:"100%",fontSize:25, textDecoration: "rtl", color: 'black', backgroundColor: 'var(--ast-global-color-0)' }} className="ast-builder-social-element ast-inline-flex ast-behance footer-social-item">
                                                                            <span className="social-item-label">
                                                                                الشراء
                                                                            </span><span style={{height:"40px",width:"30px"}} className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                                                                                    </path></svg></span></a>
                                                                    {/* </div>
                                                                </div>
                                                            </div>
                                                        </div> */}
{/* </div></div></div> */}
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

                                    </ul>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default connect(mapStateToPropsCartProducts)(Cart);