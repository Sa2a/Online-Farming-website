import React from 'react';
import logobasil from "../../assets/photo/basil-leaf-1-1-1-1-1-1-1-1-1.png";
import logoLoaf from "../../assets/photo/logo-leaf-new-1-1-1-1-1-1-1-1-1.png";

export default function SectionHeader(props) {

    return <>
        <div className="elementor-container elementor-column-gap-default" style={{ ...props.style }}>
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6ed6cac" data-id="6ed6cac" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-285c924 elementor-widget elementor-widget-heading" data-id="285c924" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <style>/*! elementor - v3.5.2 - 22-12-2021 */
                                {`.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font - size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font - size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font - size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font - size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font - size:59px}`}
                            </style><h1 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center" }}>
                                {props.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {props.loaf ? <div className="center elementor-element elementor-element-2000b27 elementor-widget elementor-widget-image" data-id="2000b27" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
                <img width="75" height="33" src={logoLoaf} className="attachment-large size-large" alt="" loading="lazy" />
            </div>
        </div> :
            <section className="elementor-section elementor-top-section elementor-element elementor-element-1d2289e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1d2289e" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a809201" data-id="a809201" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-e71f37e elementor-widget elementor-widget-image" data-id="e71f37e" data-element_type="widget" data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                <style>
                                    {`.elementor-widget-image{text - align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical - align:middle;display:inline-block}`}
                                </style>
                               
                                <img width="209" height="90" src={logobasil} className="attachment-full size-full" alt="" loading="lazy" />	
                                          </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}



    </>;
}
