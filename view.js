
function updateView() {
    html = '';
    html += /*HTML*/`
        <div class="topNav">
            <div class="navLeft">
                <h1>Wishlist</h1>
                ${createCategoryDropdown()}
                <div class="searchBtnContainer">
                    <input type="text" placeholder="Search..." class="searchBar" id="searchBar">
                    <button class="searchBtn" onclick="search(searchBar.value)">></button>
                </div>
            </div>
            <div class="navRight">
                <button class="homeBtn" onclick="backToHome()">Home</button>
                ${createAddItem()}
            </div>
        </div>`;

    if (!model.search.searchActive) {
        html += /*HTML*/ `
        <div class="wishlistContainer">
            ${showWishlist()}
        </div>`;
    } else {
        html += /*HTML*/`${showSearchResults()}`;
    }
    document.getElementById('app').innerHTML = html;
}

function createAddItem(){
    if (!model.isAdding) return '<button class="addItemBtn" onclick="startAdd()">+</button>';
    return /*HTML*/`
        <div class="addItemPopup">
        <form>
            <label for="name">Item name</label>
            <input
                type="text"
                name ="name"
                onchange="model.newItem.name = this.value"
                value="${model.newItem.name ?? ''}">

            <label for="category">Category</label>
            <select name="category" onchange="model.newItem.category = this.value" value="${model.newItem.category ?? ''}">
                <option value="" disabled selected></option>
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
               
            <div class="formBtnContainer">
                <button onclick="addItem()" class="formBtn"">Add to wishlist</button>
                <button onclick="cancelAddItem()" class="formBtn"">Cancel</button>
            </div>
        </form>
    </div>

        
    `;
}

function showWishlist() {
    let wishlistHtml = ``;
    let index = 0;
    for (let item of model.wishlist) {
        wishlistHtml += /*HTML*/`
            <div class="wishlistElement">
                <div class="imageContainer">
                    <img class="itemImg" src="${item.imageURL}">
                </div>
                <div class="textContainer">
                    <div>${item.name}</div>
                    <div>Category: ${item.category}</div>
                </div>
                <div>              
                    <button class="itemBtn" onclick="deleteItem(${index})">Delete Item</button>
                    <button class="itemBtn">Edit Item</button>
                    <a href=${item.webURL} target="_parent"><button class="itemBtn">Link</button></a>
                </div>
            </div>
        `;
        index++;
    }
    return wishlistHtml;
}

function createCategoryDropdown() {
    let categoryHTML = /*HTML*/`<div class="dropdown">
        <button onclick="openCategoryDropdown()" class="dropBtn">Categories</button>
        <div id="categoryDropdown" class="dropdownContent">
        `;

    for (let category of model.category.itemCategories) {
        categoryHTML += /*HTML*/`<div onclick="sortByCategory(${category})">${category}</div>`;
    }
    categoryHTML += '</div></div>';
    return categoryHTML;
}

function showSearchResults() {
    let searchResultsHtml = /*HTML*/`
        <div class="searchHeader">
            <div>Showing search results for "${model.search.query}"...</div>
        </div><div class="wishlistContainer">
    `;
    let index = 0;

    for (let item of model.search.searchResults) {
        searchResultsHtml += /*HTML*/`
            <div class="wishlistElement">
                <div class="imageContainer">
                    <img class="itemImg" src="${item.imageURL}">
                </div>
                <div class="textContainer">
                    <div>${item.name}</div>
                    <div>Category: ${item.category}</div>
                </div>
                <div>              
                    <button class="itemBtn" onclick="deleteItem(${index})">Delete Item</button>
                    <button class="itemBtn">Edit Item</button>
                    <a href=${item.webURL} target="_parent"><button class="itemBtn">Link</button></a>
                </div>
            </div>
        `;
        index++;
    }
    searchResultsHtml += '</div>';
    return searchResultsHtml;
}