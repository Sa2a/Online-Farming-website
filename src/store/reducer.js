import { db } from "../config/fb_config";
import { fbCategoryCollection, getCategoriesActionType } from "../ulilities/constants";

const initialState = {
    categoryDocs: [],
    contactDocs: null,
    productItem:null,

    cartProducts: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {


        case "addToCart":
            const productID = action.id;
            const catProducts = state.cartProducts.filter((p) => p["id"] !== productID);
            // if ( catProduct !==undefined) {
            //     const cart = state.cartProducts.re
            //     return {
            //         ...state,
            //         cartProducts: [
            //             ...state.cartProducts,
            //             {
            //                 "product": action.product,
            //                 "amount": action.amount
            //             }
            //         ]
            //     };
            // }

            return {
                ...state,
                cartProducts: [
                    ...catProducts,
                    {
                        "id": action.id,
                        "product": action.product,
                        "amount": action.amount
                    }
                ]
            };
        case "setProductItem":
            return {
                ...state,
                productItem:action.product
            }
        case "setCategoryDocs":
            return {
                ...state,
                categoryDocs: action.data
            };
        case "setContactDocs":
            return {
                ...state,
                contactDocs: action.data
            };
        case getCategoriesActionType:
            {
                const categoryList = [];
                db.collection(fbCategoryCollection).get().then((querySnapshot) => {
                    // console.log("querySnapshot.docs", querySnapshot.docs);
                    querySnapshot.forEach((doc) => {
                        categoryList.push(doc);
                    });
                    // console.log("categories",categories);
                }).then(() => {
                    // action.callBack();
                    return {
                        ...state,
                        categoryDocs: categoryList
                    };
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                    return {
                        ...state,
                        categoryDocs: categoryList
                    };
                });

            }
        default:
            return state;

    }
}

export default reducer;
