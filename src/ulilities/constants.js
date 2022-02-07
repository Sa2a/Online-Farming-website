
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const fbCategoryCollection = "category";
const fbProductCollection = "product";
const fbContactCollection = "contact";


const homePage = "/home";
const productsPage = "/products";
const aboutUsPage = "/aboutus";
const contactUsPage = "/contactus";

const categoryID = "categoryID";
const currency = "ج";


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
const mapStateToPropsContactDocs = (state) => {
  return {
    contactDocs: state.contactDocs
  }
}
export {
  homePage,
  productsPage,
  aboutUsPage,
  contactUsPage,

  getCategoriesActionType,
  fbCategoryCollection,
  fbProductCollection,
  fbContactCollection,

  Item,

  categoryID,
  currency,
  mapStateToPropsCategoryDocs,
  mapStateToPropsContactDocs,
  
}