// import React from 'react';
import logobasil from "../../assets/photo/basil-leaf-1-1-1-1-1-1-1-1-1.png";
import CategoryCard from '../CategoryCard';
import React, { Component, useEffect, useRef, useState } from 'react';
import { ScrollView } from "@cantonjs/react-scroll-view";
import {  mapStateToPropsCategoryDocs } from "../../ulilities/constants";
import { connect } from "react-redux";

// export default
class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }
    componentWillMount() {
        this.getCategories();

    }
    componentDidUpdate(prevProps) {
        if(this.props.categoryDocs !== prevProps.categoryDocs) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            this.getCategories();
        }
    } 
    getCategories() {
        let cats = [];
        let docs = this.props.categoryDocs;//useSelector(state => state.categoryDocs);
        docs.forEach((doc) => {
            cats.push
                (<header className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e798021"
                    data-id="e798021" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                        <div className="elementor-background-overlay"></div>
                        <CategoryCard id={doc.id} category={doc.data()} />
                    </div>
                </header>);
        });
        this.setState({
            categories: cats
        });
    }
    render() {
        return (
            <>
                <section className="elementor-section elementor-top-section elementor-element elementor-element-1d2289e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1d2289e" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a809201" data-id="a809201" data-element_type="column">
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div className="elementor-element elementor-element-e71f37e elementor-widget elementor-widget-image" data-id="e71f37e" data-element_type="widget" data-widget_type="image.default">
                                    <div className="elementor-widget-container">
                                        <img width="209" height="73" src={logobasil} className="attachment-full size-full" alt="" loading="lazy" />															</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section dir="rtl" /*style={{overflowX: 'scroll'}}*/ className="elementor-section elementor-top-section elementor-element elementor-element-0a181d7 elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0a181d7" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-element elementor-element-e3141d4 elementor-widget elementor-widget-heading" data-id="e3141d4" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h2 className="elementor-heading-title elementor-size-default">الأقسام الرئيسيه</h2>                                        		</div>
                    </div> <ScrollView isHorizontal={true} style={{ marginRight: 5, marginLeftt: 5 }} >
                        <div className="elementor-container elementor-column-gap-default">

                            {
                                this.state.categories
                            }

                            {/* <header className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-01f3a32" data-id="01f3a32" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-background-overlay"></div>
                            <div className="elementor-element elementor-element-c8877ef elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="c8877ef" data-element_type="widget" data-widget_type="image-box.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Fresh Vegetables</h3><p className="elementor-image-box-description">I am text block. Click edit button to change this tex em ips.</p></div></div>		</div>
                            </div>
                            <div className="elementor-element elementor-element-c75e82f elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="c75e82f" data-element_type="widget" data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                        <a href="#" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                            <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-icon elementor-align-icon-right">
                                                    <i aria-hidden="true" className="fas fa-arrow-right"></i>			</span>
                                                <span className="elementor-button-text">Shop Now</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <header className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-415b29e" data-id="415b29e" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-background-overlay"></div>
                            <div className="elementor-element elementor-element-eba8b48 elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="eba8b48" data-element_type="widget" data-widget_type="image-box.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-image-box-wrapper"><div className="elementor-image-box-content"><h3 className="elementor-image-box-title">Organic Legume</h3><p className="elementor-image-box-description">I am text block. Click edit button to change this tex em ips.</p></div></div>		</div>
                            </div>
                            <div className="elementor-element elementor-element-6367bd1 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="6367bd1" data-element_type="widget" data-widget_type="button.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                        <a href="#" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                                            <span className="elementor-button-content-wrapper">
                                                <span className="elementor-button-icon elementor-align-icon-right">
                                                    <i aria-hidden="true" className="fas fa-arrow-right"></i>			</span>
                                                <span className="elementor-button-text">Shop Now</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header> */}
                        </div>
                    </ScrollView>

                </section>
            </>
        );
    }
}



function Categoriesx(props) {
    const [categories, setCategories] = useState([]);
    // const dispatch = useDispatch();
    const docs = props.categoryDocs;// useSelector(state => state.categoryDocs);
    const prevDocsRef = useRef(docs);
    useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        // dispatch(getCategories());
        if (prevDocsRef.current != docs) {
            let cats = [];
            docs.forEach((doc) => {
                cats.push
                    (<header className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e798021"
                        data-id="e798021" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-background-overlay"></div>
                            <CategoryCard id={doc.id} category={doc.data()} />
                        </div>
                    </header>);
            });
            prevDocsRef.current = docs;
            setCategories(cats);
        }
    }, []);


    return (
        <>
            <section className="elementor-section elementor-top-section elementor-element elementor-element-1d2289e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1d2289e" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a809201" data-id="a809201" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div className="elementor-element elementor-element-e71f37e elementor-widget elementor-widget-image" data-id="e71f37e" data-element_type="widget" data-widget_type="image.default">
                                <div className="elementor-widget-container">
                                    <img width="209" height="73" src={logobasil} className="attachment-full size-full" alt="" loading="lazy" />															</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section dir="rtl" /*style={{overflowX: 'scroll'}}*/ className="elementor-section elementor-top-section elementor-element elementor-element-0a181d7 elementor-section-content-top elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0a181d7" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-element elementor-element-e3141d4 elementor-widget elementor-widget-heading" data-id="e3141d4" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">الأقسام الرئيسيه</h2>                                        		</div>
                </div> <ScrollView isHorizontal={true} style={{ marginRight: 5, marginLeftt: 5 }} >
                    <div className="elementor-container elementor-column-gap-default">

                        {
                            categories
                        }

                    </div>
                </ScrollView>

            </section>
        </>
    );
}

export default connect(mapStateToPropsCategoryDocs)(Categories);