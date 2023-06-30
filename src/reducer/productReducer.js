const ProductReducer = (state, action) => {
  //   if (action.type === "SET_LOADING") {
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   }

  //   else if (action.type === "API_ERROR") {
  //     return {
  //         ...state,
  //         isLoading: false,
  //         isError: true,
  //     }
  //   }

  switch (action.type) {

    // -------- for get all products --------
    

    case "SET_LOADING":
      return { 
        ...state, 
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((currentElement) => {
        return currentElement.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    
    case "SET_API_ERROR":
      return { 
        ...state, 
        isLoading: false, 
        isError: true,
      };

    // ------- for get single product -------

    
    case "SET_SINGLE_LOADING":
      return { 
        ...state, 
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return { 
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return { 
        ...state, 
        isSingleLoading: false, 
        isError: true,
      };
    // ---------------default----------------

    default:
      return {
        state
      };

    // -----------------end------------------
  }
};

export default ProductReducer;
