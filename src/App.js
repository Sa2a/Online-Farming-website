import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/sections/AboutUs";
import ContactUs from "./components/sections/ContactUs";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import { db } from "./config/fb_config";
import Home from "./pages/Home";
import ProductItem from "./pages/ProductItem";
import Products from "./pages/Products";
import { getCategoryDocs, setCategoryDocs, setContactDocs } from "./store/actions";
import Test from "./Test";
import { aboutUsPage, categoryID, contactUsPage, fbCategoryCollection, fbContactCollection, homePage, productsPage } from "./ulilities/constants";

const categoryList = [];

const getCategories = async () => {
  await db.collection(fbCategoryCollection).get().then((querySnapshot) => {
    // console.log("querySnapshot.docs", querySnapshot.docs);
    querySnapshot.forEach((doc) => {
      categoryList.push(doc);
    });
    // console.log("categories",categories);
  })
  // .then(() => {
  //   setCategories(categoryList);

  // })
  .catch((error) => {
    console.log("Error getting documents: ", error);
    // setCategories(categoryList);

  });
}
let contactDoc = null;

const getContacts = async () => {
  await db.collection(fbContactCollection).get().then((querySnapshot) => {
    // console.log("querySnapshot.docs", querySnapshot.docs);
    contactDoc = querySnapshot.docs[0];
    // console.log("categories",categories);
  })
  // .then(() => {
  //   setCategories(categoryList);

  // })
  .catch((error) => {
    console.log("Error getting documents: ", error);
    // setCategories(categoryList);
  });
}


function App() {
  const dispatch = useDispatch();
  // dispatch(getCategoryDocs());
  // const [categoryDocs, setCategories] = useState([]);

  useEffect(async() => {
    await getCategories();
    await getContacts();
    dispatch(setCategoryDocs(categoryList));
    dispatch(setContactDocs(contactDoc));
    // if(categoryList.length !=0){
      // setCategories(categoryList);

    // }
  }, []);
  return (
   /* categoryDocs.length==0?null:*/<Router>
      <div className="hfeed site" itemID="page">
        <div className="site-content" itemID="content">
          <div className="ast-container">
            <div className="content-area primary" itemID="primary">
              <main className="site-main" itemID="main">
                <article className="post-95 page type-page status-publish ast-article-single"
                  itemID="post-95" itemType="https://schema.org/CreativeWork" itemScope="itemscope">
                  {/*<header className="entry-header ast-header-without-markup">
                  </header>*/}
                  <Header />
{/* 
                  <div style={{marginTop:50}} className="site-footer-below-section-2 site-footer-section site-footer-section-2">
                            <div className="ast-builder-layout-element ast-flex site-footer-focus-item" data-section="section-fb-social-icons-1">

                                <div className="ast-footer-social-1-wrap ast-footer-social-wrap">
                                    <div className="footer-social-inner-wrap element-social-inner-wrap social-show-label-true ast-social-color-type-custom ast-social-stack-none ast-social-element-style-filled">

                                        <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: '#557dbc', backgroundColor: 'transparent' }} className="ast-builder-social-element ast-inline-flex ast-facebook footer-social-item">
                                            <span className="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                                </path></svg></span><span className="social-item-label">
                                                Facebook
                                            </span></a>

                                        <a href="#" aria-label="whatsapp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: '#1B64F6', backgroundColor: 'transparent' }} className="ast-builder-social-element ast-inline-flex ast-behance footer-social-item">
                                            <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                                                    </path></svg></span><span className="social-item-label">
                                                whatsapp
                                            </span></a>

                                        <a href="#" aria-label="Phone" style={{ textDecoration: "none", color: 'inherit', backgroundColor: 'transparent' }} className="ast-builder-social-element ast-inline-flex ast-phone footer-social-item">
                                            <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                ><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                                                    </path></svg></span><span className="social-item-label"
                                                    >Phone
                                            </span>

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}




                  <div className="entry-content clear" itemProp="text">
                    <div data-elementor-type="wp-page" data-elementor-id="95" className="elementor elementor-95" data-elementor-settings="[]">
                      <div className="elementor-section-wrap">
                        <Routes>
                          <Route exact path="/" element={<Home />} />
                          <Route exact path={homePage} element={<Home />} />
                          <Route exact path={productsPage} element={<Products />} >
                            <Route path={`:${categoryID}`} element={<Products />} />
                            {/* <Route path={`:${categoryID}`} element={<Products />} /> */}

                          </Route>
                          <Route exact path={aboutUsPage} element={<AboutUs />} />
                          <Route exact path={contactUsPage} element={<ContactUs />} />
                          <Route path={"/productitem"} element={<ProductItem />} />

                          {/* 
                        <Route path="/test" element={<Test />}>
                          <Route
                            index
                            element={
                              <main style={{ padding: "1rem" }}>
                                <p>Select an Item</p>
                              </main>
                            }
                          />
                          <Route path=":testID" element={<Test />} />
                        </Route> */}
                          <Route
                            path="*"
                            element={
                              <main style={{ margin:100,padding: "1rem" }} className="center">
                                <h1>لا يوجد شئ هنا!</h1>
                              </main>
                            }
                          />
                        </Routes>
                      </div>
                    </div>
                  </div>
                  <Footer />
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Router >






    /*<div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b7bcb4e" data-id="b7bcb4e" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-b9d7191 elementor-widget elementor-widget-image" data-id="b9d7191" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <style>
                  {`.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}`}
                </style>
                <img width="634" height="543" src="http://localhost:8080/wordpress/wp-content/uploads/2022/01/organic-products-hero-1-1-1-1-1-1-1-1-1.png" className="attachment-full size-full" alt="" loading="lazy" srcSet="http://localhost:8080/wordpress/wp-content/uploads/2022/01/organic-products-hero-1-1-1-1-1-1-1-1-1.png 634w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/organic-products-hero-1-1-1-1-1-1-1-1-1-768x657.png 768w" sizes="(max-width: 634px) 100vw, 634px" />
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-39d5465" data-id="39d5465" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-c7ff546 elementor-widget elementor-widget-image" data-id="c7ff546" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <img width="75" height="33" src="http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo-leaf-new-1-1-1-1-1-1-1-1-1.png" className="attachment-large size-large" alt="" loading="lazy" />															</div>
            </div>
            <div className="elementor-element elementor-element-cbd1d88 elementor-widget elementor-widget-heading" data-id="cbd1d88" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <style>
                  {`.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}`}</style><h5 className="elementor-heading-title elementor-size-default">Best Quality Products</h5>
              </div>
            </div>
            <div className="elementor-element elementor-element-ea87ceb elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="ea87ceb" data-element_type="widget" data-widget_type="image-box.default">
              <div className="elementor-widget-container">
                <style>
                  {`.elementor-widget-image-box .elementor-image-box-content{width:100%}@media (min-width:768px){.elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper,.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper{text-align:right;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper{text-align:left;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.elementor-widget-image-box.elementor-position-top .elementor-image-box-img{margin:auto}.elementor-widget-image-box.elementor-vertical-align-top .elementor-image-box-wrapper{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.elementor-widget-image-box.elementor-vertical-align-middle .elementor-image-box-wrapper{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.elementor-widget-image-box.elementor-vertical-align-bottom .elementor-image-box-wrapper{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}}@media (max-width:767px){.elementor-widget-image-box .elementor-image-box-img{margin-left:auto!important;margin-right:auto!important;margin-bottom:15px}}.elementor-widget-image-box .elementor-image-box-img{display:inline-block}.elementor-widget-image-box .elementor-image-box-title a{color:inherit}.elementor-widget-image-box .elementor-image-box-wrapper{text-align:center}.elementor-widget-image-box .elementor-image-box-description{margin:0}`}</style><div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h1 className="elementor-image-box-title">Join The Organic Movement!</h1><p className="elementor-image-box-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p></div></div>		</div>
            </div>
            <div className="elementor-element elementor-element-d66ca90 elementor-align-left elementor-mobile-align-center elementor-tablet-align-left elementor-widget elementor-widget-button" data-id="d66ca90" data-element_type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a href="#" className="elementor-button-link elementor-button elementor-size-md" role="button">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon elementor-align-icon-left">
                        <i aria-hidden="true" className="fas fa-shopping-cart"></i>			</span>
                      <span className="elementor-button-text">Shop Now</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </React.Fragment>*/
  );
}

export default App;
