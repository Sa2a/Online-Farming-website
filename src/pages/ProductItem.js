import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import logo from "../assets/photo/logo.jpg"
import { addToCart } from '../store/actions';
import { currency, mapStateToPropsProductItem } from '../ulilities/constants';

function ProductItem(props) {

    const dispatch = useDispatch();
    const [amount,setAmount]  = useState(1);
    const { productID } = useParams();
    let product = props.productItem ? props.productItem : null;
    const categoryDocs = props.categoryDocs;
    const categoryID = product ? product.categoryID : null;
    let category = categoryDocs.find((doc) => doc.id === categoryID);
    const categoryName = category ? category.data().name : "لا يوجد قسم";
    function updateAmount(evt) {
        setAmount(evt.target.value);
      
    }

    return <>


        <section className="elementor-section elementor-top-section elementor-element elementor-element-a584ef8 elementor-section-content-middle elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a584ef8" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b7bcb4e" data-id="b7bcb4e" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-b9d7191 elementor-widget elementor-widget-image"
                            data-id="b9d7191" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                                <style>
                                    {`.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}`}</style>
                                <img width="634" height="543" src={product ? product.image.length===0?logo:product.image : logo} className="attachment-full size-full" alt="" loading="lazy" sizes="(max-width: 634px) 100vw, 634px" />
                            </div>
                        </div>
                    </div>
                </div>
                <div dir='rtl' className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-39d5465"
                    data-id="39d5465" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-element elementor-element-ea87ceb elementor-position-right elementor-vertical-align-top elementor-widget elementor-widget-image-box"
                            data-id="ea87ceb" data-element_type="widget" data-widget_type="image-box.default">
                            <div className="elementor-widget-container">
                                <style>/*! elementor - v3.5.2 - 22-12-2021 */
                                    {`.elementor-widget-image-box .elementor-image-box-content{width:100%}@media (min-width:768px){.elementor - widget - image - box.elementor - position - left.elementor - image - box - wrapper,.elementor - widget - image - box.elementor - position - right.elementor - image - box - wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}.elementor-widget-image-box.elementor-position-right .elementor-image-box-wrapper{text - align:right;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.elementor-widget-image-box.elementor-position-left .elementor-image-box-wrapper{text - align:left;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.elementor-widget-image-box.elementor-position-top .elementor-image-box-img{margin:auto}.elementor-widget-image-box.elementor-vertical-align-top .elementor-image-box-wrapper{-webkit - box - align:start;-ms-flex-align:start;align-items:flex-start}.elementor-widget-image-box.elementor-vertical-align-middle .elementor-image-box-wrapper{-webkit - box - align:center;-ms-flex-align:center;align-items:center}.elementor-widget-image-box.elementor-vertical-align-bottom .elementor-image-box-wrapper{-webkit - box - align:end;-ms-flex-align:end;align-items:flex-end}}@media (max-width:767px){.elementor - widget - image - box.elementor - image - box - img{margin - left:auto!important;margin-right:auto!important;margin-bottom:15px}}.elementor-widget-image-box .elementor-image-box-img{display:inline-block}.elementor-widget-image-box .elementor-image-box-title a{color:inherit}.elementor-widget-image-box .elementor-image-box-wrapper{text - align:center}.elementor-widget-image-box .elementor-image-box-description{margin:0}`}
                                </style>
                                <h1>{product ? product.name : null}</h1>
                                <h2>{product ? product.price+ currency : null}</h2>
                                <p>{categoryName}</p>
                            </div>
                        </div>
                        <div dir='ltr' style={{ marginLeft: "auto", marginRight: 'auto', verticalAlign: "right" }} className="center elementor-element elementor-element-d66ca90 elementor-align-left elementor-mobile-align-center elementor-tablet-align-left elementor-widget elementor-widget-button" data-id="d66ca90" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper" size="small">
                                   <div className="quantity">
                                        <input onChange={updateAmount} type="number" id="quantity_620fb702daec2" className="input-text qty text" step="1" min="1" max=""
                                            name="quantity" defaultValue={1} title="Qty"  inputMode="numeric" autoComplete="off" />
                                   
                                   <Button
                                   disabled={!product}
                                        onClick={() => {
                                            dispatch(addToCart(productID,product, amount));
                                        }}
                                        size="lg" color="success" style={{ fontSize: 15 }}>
                                        <span style={{ margin: 10 }} className="elementor-button-icon elementor-align-icon-left">
                                            <i aria-hidden="true" className="fas fa-cart-plus"></i>
                                        </span>
                                        اضافه الى السلة
                                    </Button> </div> 
                                    
                                    
                                    {/* <a href={aboutUsPage} className="elementor-button-link elementor-button elementor-size-md" role="button">
                                            <span className="elementor-button-content-wrapper" >
                                                <span className="elementor-button-icon elementor-align-icon-left">
                                                    <i aria-hidden="true" className="fas fa-address-card"></i>			</span>
                                                <span className="elementor-button-text" >من نحن </span>
                                            </span>
                                        </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* <div style={{ marginTop: 100 }}  id="content" className="site-content">
            <div className="ast-container">
                <div id="primary" className="content-area primary">
                    <main id="main" className="site-main">
                        <div className="ast-woocommerce-container">
                            <div className="woocommerce-notices-wrapper">
                            </div>
                            <div id="product-5198" className="ast-article-single product type-product post-5198 status-publish first instock product_cat-clothing has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style={{opacity: 1, transition: "opacity 0.25s ease-in-out 0s"}}>
                                    <a href="#" className="woocommerce-product-gallery__trigger">
                                        <img draggable="false" role="img" className="emoji" alt="🔍" src="https://s.w.org/images/core/emoji/13.1.0/svg/1f50d.svg" />
                                    </a>
                                    <figure className="woocommerce-product-gallery__wrapper">
                                        <div data-thumb="http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-100x100.jpg" data-thumb-alt=""
                                            className="woocommerce-product-gallery__image" style={{position: "relativ", overflow: "hidden"}}>
                                            <a href="http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2.jpg">
                                                <img width="600" height="600" src="http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-600x600.jpg"
                                                    className="wp-post-image" alt="" loading="lazy" title="hoodie-with-logo-2.jpg" data-caption=""
                                                    data-src="http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2.jpg"
                                                    data-large_image="http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2.jpg"
                                                    data-large_image_width="801" data-large_image_height="801"
                                                    srcSet="http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-600x600.jpg 600w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-300x300.jpg 300w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-100x100.jpg 100w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-150x150.jpg 150w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2-768x768.jpg 768w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2.jpg 801w"
                                                    sizes="(max-width: 600px) 100vw, 600px" />
                                            </a>
                                            <img role="presentation" alt="" src="http://localhost:8080/wordpress/wp-content/uploads/2022/01/hoodie-with-logo-2.jpg"
                                                className="zoomImg" style={{position: "absolute", top: "-193.461px", "left": "-303.072px", opacity: 0, width: "801px",
                                                 height: "801px", border: "none", maxWidth: "none", maxHeight: "none"}} />
                                        </div>
                                    </figure>
                                </div>

                                <div className="summary entry-summary">
                                    <nav className="woocommerce-breadcrumb">
                                        <a href="http://localhost:8080/wordpress">
                                            Home</a>&nbsp;/&nbsp;
                                        <a href="http://localhost:8080/wordpress/product-category/clothing/">
                                            Clothing</a>
                                        &nbsp;/&nbsp;اسم المنتج
                                    </nav>
                                    <h1 className="product_title entry-title">
                                        اسم المنتج
                                    </h1>
                                    <div className="woocommerce-product-rating">
                                        <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                                            <span style={{width:"100%"}}>
                                                Rated <strong className="rating">
                                                    5.00
                                                </strong>
                                                out of 5 based on
                                                <span className="rating">
                                                    1
                                                </span> customer rating</span>
                                        </div>
                                        <a href="#reviews" className="woocommerce-review-link" rel="nofollow">
                                            (<span className="count">1</span> customer review)</a>
                                    </div>

                                    <p className="price"><span className="woocommerce-Price-amount amount">
                                        <bdi>
                                            <span className="woocommerce-Price-currencySymbol">$</span>45.00</bdi>
                                    </span></p>
                                    <div className="woocommerce-product-details__short-description">
                                        <p>This is a simple product.</p>
                                    </div>


                                    <form className="cart" action="http://localhost:8080/wordpress/product/hoodie-with-logo/" method="post" encType="multipart/form-data">

                                        <div className="quantity">
                                            <label className="screen-reader-text" htmlFor="quantity_61febd8c74ab6">اسم المنتج quantity</label>
                                            <input type="number" id="quantity_61febd8c74ab6" className="input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty"
                                                size="4" placeholder="" inputMode="numeric" autoComplete="off" />
                                        </div>

                                        <button type="submit" name="add-to-cart" value="5198" className="single_add_to_cart_button button alt">
                                            Add to cart
                                        </button>

                                    </form>


                                    <div className="product_meta">



                                        <span className="posted_in">Category: <a href="http://localhost:8080/wordpress/product-category/clothing/" rel="tag">Clothing</a></span>


                                    </div>
                                </div>


                                <div className="woocommerce-tabs wc-tabs-wrapper">
                                    <ul className="tabs wc-tabs" role="tablist">
                                        <li className="description_tab active" id="tab-title-description" role="tab" aria-controls="tab-description">
                                            <a href="#tab-description">
                                                Description
                                            </a>
                                        </li>
                                        <li className="additional_information_tab" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
                                            <a href="#tab-additional_information">
                                                Additional information
                                            </a>
                                        </li>
                                        <li className="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
                                            <a href="#tab-reviews">
                                                Reviews (1)
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel"
                                        aria-labelledby="tab-title-description" >


                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    </div>
                                    <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information" style={{display: "none"}}>


                                        <table className="woocommerce-product-attributes shop_attributes">
                                            <tbody><tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
                                                <th className="woocommerce-product-attributes-item__label">Color</th>
                                                <td className="woocommerce-product-attributes-item__value"><p>Blue</p>
                                                </td>
                                            </tr>
                                            </tbody></table>
                                    </div>
                                     {/* <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews" style="display: none;">
                                        <div id="reviews" className="woocommerce-Reviews">
                                            <div id="comments">
                                                <h2 className="woocommerce-Reviews-title">
                                                    1 review for <span>اسم المنتج</span>		</h2>

                                                <ol className="commentlist">
                                                    <li className="review byuser comment-author-khaledelsaka bypostauthor even thread-even depth-1" id="li-comment-2">

                                                        <div id="comment-2" className="comment_container">

                                                            <img alt="" src="http://1.gravatar.com/avatar/d3d0a8b255395b8e68ea6e514bbeda71?s=60&amp;d=mm&amp;r=g"
                                                                srcSet="http://1.gravatar.com/avatar/d3d0a8b255395b8e68ea6e514bbeda71?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60"
                                                                loading="lazy" />
                                                            <div className="comment-text">

                                                                <div className="star-rating" role="img" aria-label="Rated 5 out of 5"><span style="width:100%">
                                                                    Rated <strong className="rating">5</strong> out of 5</span></div>
                                                                <p className="meta">
                                                                    <strong className="woocommerce-review__author">Khaled Elsaka </strong>
                                                                    <span className="woocommerce-review__dash">–</span> <time className="woocommerce-review__published-date" datetime="2022-01-24T02:12:42+00:00">
                                                                        January 24, 2022</time>
                                                                </p>

                                                                <div className="description"><p>منتم</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>

                                            </div>

                                            <div id="review_form_wrapper">
                                                <div id="review_form">
                                                    <div id="respond" className="comment-respond">
                                                        <span id="reply-title" className="comment-reply-title">Add a review <small><a rel="nofollow" id="cancel-comment-reply-link" href="/wordpress/product/hoodie-with-logo/#respond" style="display:none;">Cancel reply</a></small></span><form action="http://localhost:8080/wordpress/wp-comments-post.php" method="post" id="commentform" className="comment-form"><div className="comment-form-rating"><label htmlFor="rating">Your rating&nbsp;<span className="required">*</span></label><p className="stars">						<span>							<a className="star-1" href="#">1</a>							<a className="star-2" href="#">2</a>							<a className="star-3" href="#">3</a>							<a className="star-4" href="#">4</a>							<a className="star-5" href="#">5</a>						</span>					</p><select name="rating" id="rating" required="" style="display: none;">
                                                            <option value="">Rate…</option>
                                                            <option value="5">Perfect</option>
                                                            <option value="4">Good</option>
                                                            <option value="3">Average</option>
                                                            <option value="2">Not that bad</option>
                                                            <option value="1">Very poor</option>
                                                        </select></div>
                                                            <p className="comment-form-comment">
                                                                <label htmlFor="comment">
                                                                    Your review&nbsp;
                                                                    <span className="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" required="">
                                                                </textarea>
                                                            </p>
                                                            <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" value="Submit" />
                                                                <input type="hidden" name="comment_post_ID" value="5198" id="comment_post_ID" />
                                                                <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
                                                            </p>
                                                            <input type="hidden" id="_wp_unfiltered_html_comment_disabled" name="_wp_unfiltered_html_comment" value="91ed1a4a5a" />
                                                            <script>{(function () { if (window === window.parent) { document.getElementById('_wp_unfiltered_html_comment_disabled').name = '_wp_unfiltered_html_comment'; } })()}
                                                            </script>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="clear"></div>
                                        </div>
                                    </div>  

                                </div> 

                            </div>



                        </div>
                    </main>


                </div>


            </div>
        </div> */}
    </>;
}
export default connect(mapStateToPropsProductItem)(ProductItem);
