let model = {
    newItem: {
        category: '',
        webURL: '',
        imgURL: '',
        name: '',
    },
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    isAdding: false,
    category: {
        itemCategories: ["Accessories", "Clothing", "Home", "Tech", "Other"],
        sortedByCategory : []
    },
    search: {
        query: '',
        searchResults: [],
        searchActive: false,
    }
};
