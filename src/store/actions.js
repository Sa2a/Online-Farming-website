
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

export{
    // getCategories,
    setCategoryDocs,
    setContactDocs,

}