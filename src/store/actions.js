
import {fbCategoryCollection, getCategoriesActionType}from "../ulilities/constants";
const getCategories=()=>{
    return {
        type: getCategoriesActionType,
    }
}

const setCategoryDocs=(categoryDocs)=>{
    return {
        type: "setCategoryDocs",
        data:categoryDocs
    }
}

const setContactDocs=(contactDocs)=>{
    return {
        type: "setContactDocs",
        data:contactDocs
    }
}

const addToCart = (id,product,amount)=>{

    return {
        type: "addToCart",
        product:product,
        amount:amount,
        id:id
    }
}

const setProductItem = (product)=>{

    return {
        type: "setProductItem",
        product:product,
    }
}

export{
    // getCategories,
    setCategoryDocs,
    setContactDocs,
    addToCart,
    setProductItem,

}