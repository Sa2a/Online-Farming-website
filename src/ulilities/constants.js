
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const fbCategoryCollection = "category";
const fbProductCollection = "product";
const fbContactCollection = "contact";


const homePage = "/home";
const productsPage = "/products";
const aboutUsPage = "/aboutus";
const contactUsPage = "/contactus";
const productItemPage = "/productItem";
const cartPage = "/cart";

const categoryID = "categoryID";
const productID = "productID";
const currency = "ج";
const productsNumLimit = 8;

const getCategoriesActionType = "getCategories";





const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const mapStateToPropsCategoryDocs = (state) => {
  return {
    categoryDocs: state.categoryDocs
  }
}
const mapStateToPropsCategoryCartDocs = (state) => {
  return {
    categoryDocs: state.categoryDocs,
    cartProducts:state.cartProducts
  }
}
const mapStateToPropsContactDocs = (state) => {
  return {
    contactDocs: state.contactDocs
  }
}
const mapStateToPropsProductItem = (state) => {
  return {
    productItem: state.productItem,
    categoryDocs: state.categoryDocs,

  }
}
const mapStateToPropsCartProducts = (state) => {
  return {
    cartProducts: state.cartProducts,
    contactDocs: state.contactDocs

  }
}
export {
  homePage,
  productsPage,
  aboutUsPage,
  contactUsPage,
  productItemPage,
  cartPage,

  productsNumLimit,
  getCategoriesActionType,
  fbCategoryCollection,
  fbProductCollection,
  fbContactCollection,
  productID,
  Item,

  categoryID,
  currency,
  mapStateToPropsCategoryDocs,
  mapStateToPropsContactDocs,
  mapStateToPropsCategoryCartDocs,
  mapStateToPropsProductItem,
  mapStateToPropsCartProducts
  
}