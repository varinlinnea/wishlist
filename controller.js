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