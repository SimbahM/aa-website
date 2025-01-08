class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <nav>
        <div class="container">
            <div class="logo">
                <a href="./">
                    <img class="aa-logo" src="./assets/appreciation-logo.svg" alt="">
                </a>
            </div>
            <div class="nav-items">
                <ul class="web">
                    <li>
                        <a class="products-menu menu-item" href="">Products</a>
                        <div class="overlay">
                            <div class="products-mega-menu">
                                <div class="mega-menu-container">
                                    <div class="products-card">
                                        <img src="./assets/images/home/mega-menu/stationary.webp"
                                            alt="Diary Book and Pen">
                                        <h1>Stationery & <br> Office Supplies</h1>
                                        <a href="./office-supplies" class="button">View Products</a>
                                    </div>
                                    <div class="products-card">
                                        <img src="./assets/images/home/mega-menu/uniforms.png" alt="Diary Book and Pen">
                                        <h1>Corporate Wear <br> & Uniforms</h1>
                                        <a href="./corporate-wear" class="button">View Products</a>
                                    </div>
                                    <div class="products-card">
                                        <img src="./assets/images/home/mega-menu/custome-apparel.png"
                                            alt="Diary Book and Pen">
                                        <h1>Custom <br> Apparel</h1>
                                        <a href="./custom-apparel" class="button">View Products</a>
                                    </div>
                                    <div class="products-card">
                                        <img src="./assets/images/home/mega-menu/gifts.webp" alt="Diary Book and Pen">
                                        <h1>Office <br> Gifts</h1>
                                        <a href="./office-supplies" class="button">View Products</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="menu-item" href="./about-us">About Us</a>
                    </li>
                    <li>
                        <a class="menu-item" href="./contact-us">Contact Us</a>
                    </li>
                    <div onclick=showMobileMenu() class="menu-burger">
                        <img src="./assets/icons/menu-burger.svg" alt="">
                    </div>
                </ul>
                <ul class="mobile-menu">
                    <div onclick=hideMobileMenu() class="close-icon">
                        <img src="./assets/icons/close-icon.svg" alt="">
                    </div>

                    <details class="mobile-products">
                        <summary>PRODUCTS</summary>
                        <div class="mm-container">
                            <a href="./office-supplies" class="m-products-card">
                                <img src="./assets/images/home/mega-menu/stationary.webp" alt="Diary Book and Pen">
                                <h1>Office Gifts</h1>
                            </a>
                            <hr class="m-divider">
                            <a href="./corporate-wear" class="m-products-card">
                                <img src="./assets/images/home/mega-menu/uniforms.png" alt="Diary Book and Pen">
                                <h1>Corporate Wear & Uniforms</h1>
                            </a>
                            <hr class="m-divider">
                            <a href="./custom-apparel" class="m-products-card">
                                <img src="./assets/images/home/mega-menu/custome-apparel.png" alt="Diary Book and Pen">
                                <h1>Custom Apparel</h1>
                            </a>
                            <hr class="m-divider">
                            <a href="./gifts" class="m-products-card">
                                <img src="./assets/images/home/mega-menu/gifts.webp" alt="Diary Book and Pen">
                                <h1>Office Gifts</h1>
                            </a>
                            <hr class="m-divider">
                        </div>
                    </details>

                    <li>
                        <a class="menu-item" href="./about-us">About Us</a>
                    </li>
                    <li>
                        <a class="menu-item" href="./contact-us">Contact Us</a>
                    </li>
                    <hr>
                    <div class="social-media">
                        <a target="_blank"
                            href="https://www.facebook.com/profile.php?id=61570382283221&mibextid=ZbWKwL">
                            <img src="./assets/icons/facebook.svg" alt="">
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/appreciation-agency">
                            <img src="./assets/icons/linkedin.svg" alt="">
                        </a>
                        <a target="_blank" href="https://www.instagram.com/theappreciationagency/">
                            <img src="./assets/icons/instagram.svg" alt="">
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       <footer>
        <div class="container">
            <div class="footer-links">
                <div class="footer-directory-column">
                    <span>Office Supplies</span>
                    <li>
                        <a href="">Premium Notebooks</a>
                    </li>
                    <li>
                        <a href="">Pens & Writing</a>
                    </li>
                    <li>
                        <a href="">Desk Accessories</a>
                    </li>
                    <li>
                        <a href="">Branded Stationery</a>
                    </li>
                </div>

                <div class="footer-directory-column">
                    <span>Corporate Wear</span>
                    <li>
                        <a href="">Custom Branded</a>
                    </li>
                    <li>
                        <a href="">Business Casual</a>
                    </li>
                    <li>
                        <a href="">Event Apparel</a>
                    </li>
                    <li>
                        <a href="">Workwear</a>
                    </li>
                </div>

                <div class="footer-directory-column">
                    <span>Office Gifts</span>
                    <li>
                        <a href="">Gift Sets</a>
                    </li>
                    <li>
                        <a href="">Drinkware</a>
                    </li>
                    <li>
                        <a href="">Bags</a>
                    </li>
                    <li>
                        <a href="">Umbrellas</a>
                    </li>
                </div>

                <div class="footer-directory-column">
                    <span>Custom Apparel</span>
                    <li>
                        <a href="">Hoodies & Sweatshirts</a>
                    </li>
                    <li>
                        <a href="">T-Shirts & Polos</a>
                    </li>
                    <li>
                        <a href="">Jackets & Outerwear</a>
                    </li>
                </div>
            </div>

            <div class="footer-links-mobile">
                <details>
                    <summary>Office Suppliers</summary>
                    <li>
                        <a href="">Premium Notebooks</a>
                    </li>
                    <li>
                        <a href="">Pens & Writing</a>
                    </li>
                    <li>
                        <a href="">Desk Accessories</a>
                    </li>
                    <li>
                        <a href="">Branded Stationery</a>
                    </li>
                </details>

                <hr class="divider">

                <details>
                    <summary>Corporate Wear</summary>
                    <li>
                        <a href="">Custom Branded</a>
                    </li>
                    <li>
                        <a href="">Business Casual</a>
                    </li>
                    <li>
                        <a href="">Event Apparel</a>
                    </li>
                    <li>
                        <a href="">Workwear</a>
                    </li>
                </details>

                <hr class="divider">

                <details>
                    <summary>Office Gifts</summary>
                    <li>
                        <a href="">Gist Sets</a>
                    </li>
                    <li>
                        <a href="">Drinkwear</a>
                    </li>
                    <li>
                        <a href="">Bags</a>
                    </li>
                    <li>
                        <a href="">Umbrellas</a>
                    </li>
                </details>

                <hr class="divider">

                <details>
                    <summary>Custom Apparel</summary>
                    <li>
                        <a href="">Hoodies</a>
                    </li>
                    <li>
                        <a href="">T-Shirts & Polos</a>
                    </li>
                    <li>
                        <a href="">jackets & Outwear</a>
                    </li>
                    <li>
                        <a href="">Branded Stationery</a>
                    </li>
                </details>
            </div>

            <hr class="divider">

            <div class="copyright">
                <span>
                    Copyright © 2025 Appriciation Agency. All Rights Reserved.
                </span>
                <a target="_blank" href="https://simbahm.com/">
                    <img src="./assets/icons/designed-by-simbahm.svg" alt="">
                </a>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)