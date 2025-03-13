let model = {
    newItem: {
        category: '',
        webURL: '',
        imgURL: '',
        name: ''
    },
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    isAdding: false,
    categories: ["Accessories", "Clothing", "Home", "Tech", "Other"]
};
