import React from 'react';
import { connect } from 'react-redux';
import logo from "../../assets/photo/logo.jpg";
import logoPlayStore from "../../assets/photo/play-store.png";
import { mapStateToPropsContactDocs } from '../../ulilities/constants';
function Footer(props) {
    const contactDocs = props.contactDocs;

  
    return (
        <footer className="site-footer" id="colophon" itemType="https://schema.org/WPFooter" itemScope="itemscope" itemID="#colophon">
            <div className="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-3-equal ast-builder-grid-row-tablet-3-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-primary-footer-builder">
                <div className="ast-builder-grid-row-container-inner">
                    <div className="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
                        <div className="site-footer-primary-section-1 site-footer-section site-footer-section-1">
                            <aside className="footer-widget-area widget-area site-footer-focus-item" data-section="sidebar-widgets-footer-widget-4" aria-label="Footer Widget 4">
                                <div className="footer-widget-area-inner site-info-inner">
                                    <section id="media_image-1" className="widget widget_media_image">
                                        <img width="180" height="79" src={logo} className="image wp-image-2478  attachment-180x79 size-180x79" alt="" loading="lazy"
                                            style={{ maxWidth: "100%", height: "auto" }} />
                                    </section>
                                    <section id="text-2" className="widget widget_text">
                                        <div className="textwidget"><p>
                                            نتمى لكم عام زراعى سعيد ومحصول مبارَك فيه
                                        </p>
                                        </div>
                                    </section></div>		</aside>
                        </div>
                        <div className="site-footer-primary-section-2 site-footer-section site-footer-section-2">
                        </div>
                        <div className="site-footer-primary-section-3 site-footer-section site-footer-section-3">
                            <aside className="footer-widget-area widget-area site-footer-focus-item" data-section="sidebar-widgets-footer-widget-1" aria-label="Footer Widget 1">
                                <div className="footer-widget-area-inner site-info-inner"><section id="text-1" className="widget widget_text"><h2 className="widget-title">
                                    حمل التطبيق الان
                                    </h2>
                                    <div className="textwidget">
                                        <p>
                                            لنكون على تواصل دائم ومستمر
                                        </p>
                                    </div>
                                </section></div>		</aside>
                            <aside className="footer-widget-area widget-area site-footer-focus-item" data-section="sidebar-widgets-footer-widget-3" aria-label="Footer Widget 3">
                                <div className="footer-widget-area-inner site-info-inner">
                                    <section id="media_gallery-1" className="widget widget_media_gallery">
                                        <div id="gallery-1" className="gallery galleryid-95 gallery-columns-2 gallery-size-full">
                                            <figure className="gallery-item">
                                        <div className="gallery-icon landscape">
                                            <a href={contactDocs ? contactDocs.data().googlePlayApp : "#"}>
                                                <img   width="201" height="60" src={logoPlayStore} className="attachment-full size-full" alt="" loading="lazy" />
                                            </a>
                                        </div>
                                    </figure>
                                        {/* <figure className="gallery-item">
                                        <div className="gallery-icon landscape">
                                            <img width="201" height="60" src="http://localhost:8080/wordpress/wp-content/uploads/2019/06/app-store.png" className="attachment-full size-full" alt="" loading="lazy" />
                                        </div></figure> */}
                                    </div>
                                    </section></div>		</aside>
                        </div>
                    </div>
                </div>

            </div>
            <div className="site-below-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-2-equal ast-builder-grid-row-tablet-2-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack" data-section="section-below-footer-builder">
                <div className="ast-builder-grid-row-container-inner">
                    <div className="ast-builder-footer-grid-columns site-below-footer-inner-wrap ast-builder-grid-row">
                        <div className="site-footer-below-section-1 site-footer-section site-footer-section-1">
                            <div className="ast-builder-layout-element ast-flex site-footer-focus-item ast-footer-copyright" data-section="section-footer-builder">
                                <div className="ast-footer-copyright"><p>Copyright © 2022 | Online Faring - زراعه أون لاين</p>
                                </div>
                            </div>
                        </div>
                        <div className="site-footer-below-section-2 site-footer-section site-footer-section-2">
                            <div className="ast-builder-layout-element ast-flex site-footer-focus-item" data-section="section-fb-social-icons-1">

                                <div className="ast-footer-social-1-wrap ast-footer-social-wrap">
                                    <div className="footer-social-inner-wrap element-social-inner-wrap social-show-label-true ast-social-color-type-custom ast-social-stack-none ast-social-element-style-filled">

                                        <a href={contactDocs ? contactDocs.data().facebookUrl : "#"} aria-label="Facebook" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: '#557dbc', backgroundColor: 'transparent' }} className="ast-builder-social-element ast-inline-flex ast-facebook footer-social-item">
                                            <span className="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                                </path></svg></span><span className="social-item-label">
                                                Facebook
                                            </span></a>

                                        <a href={`https://wa.me/${contactDocs ? contactDocs.data().whatsappNumber : "#"}`} aria-label="whatsapp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: '#1B64F6', backgroundColor: 'transparent' }} className="ast-builder-social-element ast-inline-flex ast-behance footer-social-item">
                                            <span className="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                                                    </path></svg></span><span className="social-item-label">
                                                whatsapp
                                            </span></a>

                                        <a href={`tel:${contactDocs ? contactDocs.data().phoneNumber : "#"}`} aria-label="Phone" style={{ textDecoration: "none", color: 'inherit', backgroundColor: 'transparent' }} className="ast-builder-social-element ast-inline-flex ast-phone footer-social-item">
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
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default connect(mapStateToPropsContactDocs)(Footer);