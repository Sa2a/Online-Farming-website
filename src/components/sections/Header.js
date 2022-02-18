import React, { Component } from 'react';
import logo from "../../assets/photo/logo_only.png";
import "../../css/header.css";
import ButtonDropDown from "../ButtonDropDown";

import { Link, NavLink } from "react-router-dom";
import {
    Collapse,
    Media,
    Nav,

    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem
} from 'reactstrap';
import { aboutUsPage, cartPage, contactUsPage, homePage, mapStateToPropsCategoryCartDocs, mapStateToPropsCategoryDocs, productsPage } from '../../ulilities/constants';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
            categoryDocs: []
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
            dropdownOpen: !this.state.dropdownOpen

        });
    }


    navItemStyle = {
        margin: "5px",
    };
    componentWillMount() {
        this.getCategories();

    }
    componentDidUpdate(prevProps) {
        if (this.props.categoryDocs !== prevProps.categoryDocs) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            this.getCategories();
        }
    }
    getCategories() {
        //useSelector(state => state.categoryDocs);
        this.setState({
            ...this.state,
            categoryDocs: this.props.categoryDocs
        });
    }
    getNav() {

        return (


            <Nav className="justify-content-start" style={{
                width: "100%", marginRight: 20,
            }}>
                <NavItem style={this.navItemStyle} >
                    <NavLink to={cartPage}>
                        {/* <span className="fa-stack fa-2x has-badge" data-count="5">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span> */}

                        <span className="fa-stack fa-2x has-badge" data-count={this.props.cartProducts.length}>
                            <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
                        </span>
                    </NavLink>
                </NavItem>

                <NavItem style={this.navItemStyle} >
                    <NavLink to={homePage}>
                        <button type="button" className="btn btn-outline-success">الرئيسيه</button>

                    </NavLink>
                </NavItem>
                <NavItem style={this.navItemStyle} >
                    {/* <Link to={productsPage}>
                        <button type="button" className="btn btn-outline-success">المنتجات</button>

                    </Link> */}
                    <ButtonDropDown text={{ name: "المنتجات", ref: { productsPage } }} items={
                        this.state.categoryDocs.map((doc) => {
                            return { name: doc.data().name, ref: productsPage + '/' + doc.id }
                        })
                    }
                    />
                </NavItem>
                <NavItem style={this.navItemStyle} >
                    <NavLink to={aboutUsPage}>
                        <button type="button" className="btn btn-outline-success">من نحن</button>

                    </NavLink>
                </NavItem>
                <NavItem style={this.navItemStyle} >
                    <NavLink to={contactUsPage}>
                        <button type="button" className="btn btn-outline-success">تواصل معنا</button>

                    </NavLink>
                </NavItem>

                
                {/* <NavItem>
                <a href="https://www.facebook.com/angularjswiki" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6.0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9.0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7.0 24.8 11.1 24.8 24.7z">
                    </path></svg></a>
                </NavItem> */}

            </Nav>
        );
    }

    render() {
        return (
            <>
                <Navbar dir="rtl" fixed='top' light expand="md" style={{
                    margin: "auto",
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    alignSelf: 'stretch',
                }} >
                    <NavbarBrand>
                        <Link to="/home" className="left brand-logo" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <Media left  >
                                <Media height="50" width="50" object style={{ marginRight: 10, marginLeft: 10 }}
                                    src={logo} alt="Generic placeholder image" />
                                زراعه أون لاين
                            </Media>
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.getNav()}
                        {/* <div className="bg-light border ms-auto">
                            <NavItem>
                                <Link to="/home">
                                    <Button color='primary'>Home</Button>
                                </Link>
                            </NavItem></div> */}
                    </Collapse>

                </Navbar>
            </>


            /*<header className="site-header header-main-layout-1 ast-primary-menu-enabled ast-builder-menu-toggle-icon ast-mobile-header-inline" itemID="masthead" itemType="https://schema.org/WPHeader" itemScope="itemscope" itemID="#masthead">
                <div itemID="ast-desktop-header" data-toggle-type="dropdown">
                    <div className="ast-main-header-wrap main-header-bar-wrap ">
                        <div className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item" data-section="section-primary-header-builder">
                            <div className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container" data-section="section-primary-header-builder">
                                <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                                    <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                                        <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                                            <div className="site-branding ast-site-identity" itemType="https://schema.org/Organization" itemScope="itemscope">
                                                <span className="site-logo-img"><a href="http://localhost:8080/wordpress/" className="custom-logo-link" rel="home" aria-current="page">
                                                    <img width="1242" height="1172" src="http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo.jpg" className="custom-logo" alt="online farming" srcSet="http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo.jpg 1242w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo-300x283.jpg 300w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo-1024x966.jpg 1024w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo-768x725.jpg 768w" sizes="(max-width: 1242px) 100vw, 1242px" />
                                                </a></span>				</div>
                        </div>
                                    </div>
                                    <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                                        <div className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-hb-menu-1">
                                            <div className="ast-main-header-bar-alignment"><div className="main-header-bar-navigation"><nav className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" itemID="primary-site-navigation" aria-label="Site Navigation" itemType="https://schema.org/SiteNavigationElement" itemScope="itemscope"><div className="main-navigation ast-inline-flex"><ul itemID="ast-hf-menu-1" className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border stack-on-mobile" aria-expanded="false"><li itemID="menu-item-343" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-95 current_page_item menu-item-343"><a href="http://localhost:8080/wordpress/" aria-current="page" className="menu-link">Home</a></li>
                                                <li itemID="menu-item-406" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-406"><a href="http://localhost:8080/wordpress/shop/" className="menu-link">All Products</a></li>
                                                <li itemID="menu-item-344" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-344"><a href="http://localhost:8080/wordpress/about/" className="menu-link">About</a></li>
                                                <li itemID="menu-item-337" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-337"><a href="http://localhost:8080/wordpress/contact/" className="menu-link">Contact</a></li>
                                                <li itemID="menu-item-470" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-470" aria-haspopup="true"><a href="#" className="menu-link">Account</a><button className="ast-menu-toggle" aria-expanded="false"><span className="screen-reader-text">Menu Toggle</span><span className="ast-icon icon-arrow"></span></button>
                                                    <ul className="sub-menu">
                                                        <li itemID="menu-item-472" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-472">
                                                            <a href="http://localhost:8080/wordpress/my-account/" className="menu-link">My account</a></li>
                                                        <li itemID="menu-item-471" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-471">
                                                            <a href="http://localhost:8080/wordpress/cart/" className="menu-link">Cart</a></li>
                                                    </ul>
                                                </li>
                                            </ul></div></nav></div></div>		</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ast-desktop-header-content content-align-flex-start " style={{display: "none"}}>
                    </div>
                </div>
    <div itemID="ast-mobile-header" className="ast-mobile-header-wrap " data-type="dropdown">
                    <div className="ast-main-header-wrap main-header-bar-wrap">
                        <div className="ast-primary-header-bar ast-primary-header main-header-bar site-primary-header-wrap site-header-focus-item ast-builder-grid-row-layout-default ast-builder-grid-row-tablet-layout-default ast-builder-grid-row-mobile-layout-default" data-section="section-primary-header-builder">
                            <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                                    <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                                        <div className="site-branding ast-site-identity" itemType="https://schema.org/Organization" itemScope="itemscope">
                                            <span className="site-logo-img"><a href="http://localhost:8080/wordpress/" className="custom-logo-link" rel="home" aria-current="page">
                                                <img width="1242" height="1172" src="http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo.jpg" className="custom-logo" alt="online farming" srcSet="http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo.jpg 1242w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo-300x283.jpg 300w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo-1024x966.jpg 1024w, http://localhost:8080/wordpress/wp-content/uploads/2022/01/logo-768x725.jpg 768w" sizes="(max-width: 1242px) 100vw, 1242px" />
                                            </a></span>				</div>
                        </div>
                                </div>
                                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                                    <div className="ast-builder-layout-element ast-flex site-header-focus-item" data-section="section-header-mobile-trigger">
                                        <div className="ast-button-wrap">
                                            <button type="button" className="menu-toggle main-header-menu-toggle ast-mobile-menu-trigger-fill" aria-expanded="false" data-index="0">
                                                <span className="screen-reader-text">Main Menu</span>
                                                <span className="mobile-menu-toggle-icon">
                                                    <span className="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg className="ast-mobile-svg ast-menu-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></svg></span><span className="ahfb-svg-iconset ast-inline-flex svg-baseline"><svg className="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg></span>					</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ast-mobile-header-content content-align-flex-start ">
                        <div className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" data-section="section-hb-menu-1">
                            <div className="ast-main-header-bar-alignment"><div className="main-header-bar-navigation"><nav className="site-navigation ast-flex-grow-1 navigation-accessibility site-header-focus-item" itemID="primary-site-navigation" aria-label="Site Navigation" itemType="https://schema.org/SiteNavigationElement" itemScope="itemscope"><div className="main-navigation ast-inline-flex"><ul itemID="ast-hf-menu-1" className="main-header-menu ast-menu-shadow ast-nav-menu ast-flex  submenu-with-border stack-on-mobile"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-95 current_page_item menu-item-343"><a href="http://localhost:8080/wordpress/" aria-current="page" className="menu-link">Home</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-406"><a href="http://localhost:8080/wordpress/shop/" className="menu-link">All Products</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-344"><a href="http://localhost:8080/wordpress/about/" className="menu-link">About</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-337"><a href="http://localhost:8080/wordpress/contact/" className="menu-link">Contact</a></li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-470"><a href="#" className="menu-link">Account</a><button className="ast-menu-toggle" aria-expanded="false"><span className="screen-reader-text">Menu Toggle</span><span className="ast-icon icon-arrow"></span></button>
                                    <ul className="sub-menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-472"><a href="http://localhost:8080/wordpress/my-account/" className="menu-link">My account</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-471"><a href="http://localhost:8080/wordpress/cart/" className="menu-link">Cart</a></li>
                                    </ul>
                                </li>
                            </ul></div></nav></div></div>		</div>
                    </div>
                </div>
            </header>*/
        );
    }
}
export default connect(mapStateToPropsCategoryCartDocs)(Header);