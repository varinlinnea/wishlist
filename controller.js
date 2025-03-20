function addItem() {
    model.wishlist.push(model.newItem);
    model.isAdding = false;
    model.newItem = {};
    saveWishlist();
    updateView();
}

function startAdd() {
    model.isAdding = true;
    updateView();
}

function cancelAddItem() {
    model.isAdding = false;
    updateView();
}

function deleteItem(index) {
    console.log("hei");
    
    model.wishlist.splice(index, 1);
    saveWishlist();
    updateView();
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(model.wishlist));
}

document.addEventListener('DOMContentLoaded', () => {
    model.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    updateView();
});

function search(searchValue) {
    model.search.query = searchValue;
    model.search.searchActive = true;
    for (let item of model.wishlist) {
        if (item.name == model.search.query) {
            model.search.searchResults.push(item);
        }
    }
    updateView();
}

function sortByCategory(category) {
    for (let item of model.wishlist) {
        if (item.category == category) {
            model.category.sortedByCategory.push(item);
            console.log(model.category.sortedByCategory);
        }
    }
}

function backToHome() {
    model.search.searchActive = false;
    model.search.query = '';
    model.search.searchResults = [];
    updateView();
}