const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArray = action.payload.map((curElem) => curElem.price);
      // console.log(Math.max.apply(null, priceArray));

      // let maxPrice = priceArray.reduce(
      //   (initialVal, curVal) => Math.max(initialVal, curVal),
      //   0
      // );
      // console.log(maxPrice);

      let maxPrice = Math.max(...priceArray);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortedData;

      const { filter_products, sorting_value } = state;
      let tempSortedProducts = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortedData = tempSortedProducts.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortedData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilteredProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilteredProduct = tempFilteredProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilteredProduct = tempFilteredProduct.filter(
          (curElem) => curElem.category === category
        );
      }
      if (company !== "all") {
        tempFilteredProduct = tempFilteredProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }
      if (color !== "all") {
        tempFilteredProduct = tempFilteredProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if (price === 0) {
        tempFilteredProduct = tempFilteredProduct.filter(
          (curElem) => curElem.price == price
        );
      } else {
        tempFilteredProduct = tempFilteredProduct.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilteredProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
