
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="topNav">
            <h1>Wishlist</h1>
            ${createCategoryDropdown()}
        </div>
        ${createAddItem()}
        ${showWishlist()}
    `;
}

function createAddItem(){
    if(!model.isAdding) return '<button onclick="startAdd()">Add item</button>';
    return /*HTML*/`
        <form>
            <label for="name">Item name</label>
            <input
                type="text"
                name ="name"
                onchange="model.newItem.name = this.value"
                value="${model.newItem.name ?? ''}">

            <label for="category">Category</label>
            <select name="category" onchange="model.newItem.category = this.value" value="${model.newItem.category ?? ''}">
                <option value="accessories">accessories</option>
                <option value="clothing">clothing</option>
                <option value="home">home</option>
                <option value="tech">tech</option>
                <option value="other">other</option>
            </select>

            <label for="link">Website URL</label>
            <input
                type="url"
                name="link"
                onchange="model.newItem.webURL = this.value"
                value="${model.newItem.webURL ?? ''}">
            
            <label for="picture">Image URL</label>
            <input
                type="url"
                name="picture"
                onchange="model.newItem.imageURL = this.value"
                value="${model.newItem.imageURL ?? ''}">
            
            <button onclick="addItem()">Add to wishlist</button>
            <button onclick="cancelAddItem()">Cancel</button>
        </form>
    `;
}

function showWishlist() {
    let wishlistHtml = `<div class="wishlistContainer">`;
    let index = 0;
    for (let item of model.wishlist) {
        wishlistHtml += /*HTML*/`
            <div class="wishlistElement">
                <div class="leftContainer">
                    <div>${item.category}</div>
                    <div>${item.name}</div>
                    <a href="${item.webURL}">Link to website</a>
                </div>
                <img class="itemImg" src="${item.imageURL}">
                <button onclick="deleteItem(${index})">x</button>
            </div>
        `;
        index++;
    }
    wishlistHtml += '</div>';
    return wishlistHtml;
}

function createCategoryDropdown() {
    let categoryHTML = /*HTML*/`<div class="dropdown">
        <button onclick="openCategoryDropdown()" class="dropBtn">Categories</button>
        <div id="categoryDropdown" class="dropdownContent">
        `;

    for (let category of model.categories) {
        categoryHTML += /*HTML*/`<div onclick="sortByCategory(category)">${category}</div>`;
    }
    categoryHTML += '</div></div>';
    return categoryHTML;
}
