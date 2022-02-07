import React from 'react';
import { connect } from 'react-redux';
import logobasil from "../../assets/photo/basil-leaf-1-1-1-1-1-1-1-1-1.png";
import { Item, mapStateToPropsContactDocs } from '../../ulilities/constants';

function ContactUs(props) {
    const contactDocs = props.contactDocs;

    return <React.Fragment >
                        <Item>
        <section style={{marginTop:100}} className="center elementor-section elementor-top-section elementor-element elementor-element-fa28548 elementor-section-content-middle elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="fa28548" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b9a68d1" data-id="b9a68d1" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="center elementor-element elementor-element-19b320b elementor-widget elementor-widget-image" data-id="19b320b" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                                <style>
                                    {`.elementor-widget-image{text - align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical - align:middle;display:inline-block}`}
                                </style>
                                <h1>تواصل معنا</h1>
                                <img width="209" height="90" src={logobasil} className="attachment-full size-full" alt="" loading="lazy" />															</div>
                        </div>
                          <section  style= {{marginTop:80, alignContent:"center" }}
                          className="elementor-section elementor-inner-section elementor-element elementor-element-9c48f47 elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9c48f47" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-default">
                                {/* <ul class="navbar-nav ml-auto">
                                <ul class="network-icon" aria-hidden="true">
                                <li>
                                <a href="https://www.instagram.com/angularwiki/" target="_blank" rel="noopener"
                                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6.0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1.0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9.0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9.0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9.0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9.0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8.0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                </path></svg></a></li><li><a href="https://twitter.com/angular_js" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645.0 138.72-105.583 298.558-298.558 298.558-59.452.0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055.0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421.0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391.0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04.0-57.828 46.782-104.934 104.934-104.934 30.213.0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></li><li><a href="https://www.facebook.com/angularjswiki" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6.0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9.0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7.0 24.8 11.1 24.8 24.7z"></path></svg></a></li><li><a href="https://www.linkedin.com/company/angular-js/" target="_blank" rel="noopener"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5.0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6.0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3.0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2.0 38.5 17.3 38.5 38.5.0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6.0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2.0 79.7 44.3 79.7 101.9V416z">
                                </path></svg></a></li></ul></ul> */}
                                <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-81741c0" data-id="81741c0" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div  className="elementor-widget-wrap elementor-element-populated">
                                        <a href={contactDocs ? contactDocs.data().facebookUrl : "#"} style={{ textDecoration: "none"}} className="center elementor-element elementor-element-ad9c956 elementor-view-default elementor-widget elementor-widget-icon" data-id="ad9c956" data-element_type="widget" data-widget_type="icon.default">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-icon-wrapper">
                                                    <div className="elementor-icon">
                                                        <i style={{color:"var(--ast-global-color-0)"}}aria-hidden="true" className="fab fa-facebook"></i>
                                                        			</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="center elementor-element elementor-element-9424694 elementor-widget elementor-widget-text-editor" data-id="9424694" data-element_type="widget" data-widget_type="text-editor.default">
                                            <div className="elementor-widget-container">
                                                <style>/*! elementor - v3.5.2 - 22-12-2021 */
                                                    {`.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background - color:#818a91;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#818a91;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin - top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}`}
                                                </style>
                                                <p >
                                                    {contactDocs ? contactDocs.data().facebookUrl : "N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-4668ed7" data-id="4668ed7" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <a href={`https://wa.me/${contactDocs ? contactDocs.data().whatsappNumber : "#"}`} className="center elementor-element elementor-element-09f8c14 elementor-view-default elementor-widget elementor-widget-icon" data-id="09f8c14" data-element_type="widget" data-widget_type="icon.default">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-icon-wrapper">
                                                    <div className="elementor-icon">
                                                        <i style={{color:"var(--ast-global-color-0)"}}aria-hidden="true" className="fab fa-whatsapp">
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="center elementor-element elementor-element-fefbc96 elementor-widget elementor-widget-text-editor" data-id="fefbc96" data-element_type="widget" data-widget_type="text-editor.default">
                                            <div className="elementor-widget-container">
                                                <p>
                                                {contactDocs ? contactDocs.data().whatsappNumber :"N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-9bedccc" data-id="9bedccc" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <a href={`tel:${contactDocs ? contactDocs.data().phoneNumber : "#"}`} className="center elementor-element elementor-element-c6aa97c elementor-view-default elementor-widget elementor-widget-icon" data-id="c6aa97c" data-element_type="widget" data-widget_type="icon.default">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-icon-wrapper">
                                                    <div className="elementor-icon">
                                                        <i style={{color:"var(--ast-global-color-0)"}}aria-hidden="true" className="fas fa-phone"></i>			</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="center elementor-element elementor-element-2db2d2e elementor-widget elementor-widget-text-editor" data-id="2db2d2e" data-element_type="widget" data-widget_type="text-editor.default">
                                            <div className="elementor-widget-container">
                                                <p>
                                                {contactDocs ? contactDocs.data().phoneNumber : "N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-13a381b" data-id="13a381b" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <a href={`mail:${contactDocs ? contactDocs.data().email : "#"}`} className="center elementor-element elementor-element-cafd8c3 elementor-view-default elementor-widget elementor-widget-icon" data-id="cafd8c3" data-element_type="widget" data-widget_type="icon.default">
                                            <div className="elementor-widget-container">
                                                <div className="elementor-icon-wrapper">
                                                    <div className="elementor-icon">
                                                        <i style={{color:"var(--ast-global-color-0)"}}aria-hidden="true" className="far fa-envelope"></i>			</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="center elementor-element elementor-element-0f1b8ad elementor-widget elementor-widget-text-editor" data-id="0f1b8ad" data-element_type="widget" data-widget_type="text-editor.default">
                                            <div className="elementor-widget-container">
                                                <p>
                                                {contactDocs ? contactDocs.data().email : "N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-962ded7" data-id="962ded7" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                    <div style={{ textDecoration: "none"}} className="elementor-widget-wrap elementor-element-populated">
                                        <a href={`maps:${contactDocs ? contactDocs.data().address : "#"}`} class="center elementor-element elementor-element-debd35c elementor-view-default elementor-widget elementor-widget-icon" data-id="debd35c" data-element_type="widget" data-widget_type="icon.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-icon-wrapper">
                                                    <div class="elementor-icon">
                                                        <i style={{color:"var(--ast-global-color-0)"}} aria-hidden="true" class="fas fa-map-marker-alt"></i>			</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="center elementor-element elementor-element-d7b199e elementor-widget elementor-widget-text-editor" data-id="d7b199e" data-element_type="widget" data-widget_type="text-editor.default">
                                            <div className="elementor-widget-container">
                                                <p>
                                                {contactDocs ? contactDocs.data().address : "N/A"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
        {/* <SectionHeader style={{marginTop:80,  }}  name="تواصل معنا"/> */}
                        </Item>
        
    </React.Fragment>;
}
export default connect(mapStateToPropsContactDocs)(ContactUs);