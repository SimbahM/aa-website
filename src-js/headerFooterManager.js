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
                                        <h1>Office Supplies</h1>
                                        <a href="./stationery-&-office-supplies" class="button">View Products</a>
                                    </div>
                                    <div class="products-card">
                                        <img src="./assets/images/home/mega-menu/uniforms.png" alt="Diary Book and Pen">
                                        <h1>Corporate Wear</h1>
                                        <a href="./corporate-wear" class="button">View Products</a>
                                    </div>
                                    <div class="products-card">
                                        <img src="./assets/images/home/mega-menu/custome-apparel.png"
                                            alt="Diary Book and Pen">
                                        <h1>Apparel</h1>
                                        <a href="./apparel" class="button">View Products</a>
                                    </div>
                                    <div class="products-card">
                                        <img src="./assets/images/home/mega-menu/gifts.webp" alt="Diary Book and Pen">
                                        <h1>Gifts</h1>
                                        <a href="./gifts" class="button">View Products</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="menu-item" href="./services">Services</a>
                    </li>
                    <li>
                        <a class="menu-item" href="./about-us">About Us</a>
                    </li>
                    <li>
                        <a class="menu-item" href="./contact-us">Contact Us</a>
                    </li>
                    <div onclick=showMobileMenu() class="menu-burger">
                        <img src="./assets/icons/menu.svg" alt="">
                    </div>
                </ul>

                <!-- Mobile Menu  -->

                <ul class="mobile-menu">
                    <div onclick=hideMobileMenu() class="close-icon">
                        <img src="./assets/icons/close-icon.svg" alt="">
                    </div>

                    <details class="mobile-products">
                        <summary>PRODUCTS</summary>
                        <div class="mm-container">
                            <a href="./stationery-&-office-supplies" class="m-products-card">
                                <img src="./assets/images/home/mega-menu/stationary.webp" alt="Diary Book and Pen">
                                <h1>Office Supplies</h1>
                            </a>
                            <hr class="m-divider">
                            <a href="./corporate-wear" class="m-products-card">
                                <img src="./assets/images/home/mega-menu/uniforms.png" alt="Diary Book and Pen">
                                <h1>Corporate Wear</h1>
                            </a>
                            <hr class="m-divider">
                            <a href="./apparel" class="m-products-card">
                                <img src="./assets/images/home/mega-menu/custome-apparel.png" alt="Diary Book and Pen">
                                <h1>Apparel</h1>
                            </a>
                            <hr class="m-divider">
                            <a href="./gifts" class="m-products-card">
                                <img src="./assets/images/home/mega-menu/gifts.webp" alt="Diary Book and Pen">
                                <h1>Gifts</h1>
                            </a>
                            <hr class="m-divider">
                        </div>
                    </details>

                    <li>
                        <a class="menu-item" href="./services">Services</a>
                    </li>
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
                    <span>Stationery & Office Supplies</span>
                    <li>
                        <a href="./notebooks-&-diaries">Notebooks & Diaries</a>
                    </li>
                    <li>
                        <a href="./pens">Pens</a>
                    </li>
                    <li>
                        <a href="./desk-accessories">Desk Accessories</a>
                    </li>
                    <li>
                        <a href="./other-stationary">⁠Other Stationery</a>
                    </li>
                </div>

                <div class="footer-directory-column">
                    <span>Corporate Wear</span>
                    <li>
                        <a href="./uniforms">Uniforms</a>
                    </li>
                    <li>
                        <a href="./business-wear">Business Wear</a>
                    </li>
                    <li>
                        <a href="./knitwear">Knitwear</a>
                    </li>
                    <li>
                        <a href="./protective-wear">Protective Wear</a>
                    </li>
                </div>

                <div class="footer-directory-column">
                    <span>Apparel</span>
                    <li>
                        <a href="./hoodies">⁠Hoodies & Tracksuits</a>
                    </li>
                    <li>
                        <a href="./t-shirts">T-Shirts</a>
                    </li>
                    <li>
                        <a href="./jackets">Jackets</a>
                    </li>
                    <li>
                        <a href="./headwear-&-extras">Headwear & Extras</a>
                    </li>
                </div>

                <div class="footer-directory-column">
                    <span>Gifts</span>
                    <li>
                        <a href="./gift-sets">Gift Sets</a>
                    </li>
                    <li>
                        <a href="./drinkware">Drinkware</a>
                    </li>
                    <li>
                        <a href="./combo-sets">Combo Sets</a>
                    </li>
                    <li>
                        <a href="./tech-sets">Tech Sets</a>
                    </li>
                </div>
            </div>


            <!-- Mobile Footer  -->



            <div class="footer-links-mobile">
                <details>
                    <summary>Stationery & Office Supplies</summary>
                    <li>
                        <a href="./notebooks-&-diaries">⁠Notebooks & Diaries</a>
                    </li>
                    <li>
                        <a href="./pens">Pens</a>
                    </li>
                    <li>
                        <a href="./desk-accessories">Desk Accessories</a>
                    </li>
                    <li>
                        <a href="./other-stationary">Other Stationery</a>
                    </li>
                </details>

                <hr class="divider">

                <details>
                    <summary>Corporate Wear</summary>
                    <li>
                        <a href="./uniforms">Uniforms</a>
                    </li>
                    <li>
                        <a href="./business-wear">Business Wear</a>
                    </li>
                    <li>
                        <a href="./knitwear">Knitwear</a>
                    </li>
                    <li>
                        <a href="./protective-wear">Protective Wear</a>
                    </li>
                </details>

                <hr class="divider">

                <details>
                    <summary>Gifts</summary>
                    <li>
                        <a href="./gift-sets">Gift Sets</a>
                    </li>
                    <li>
                        <a href="./drinkware">Drinkware</a>
                    </li>
                    <li>
                        <a href="./combo-sets">Combo Sets</a>
                    </li>
                    <li>
                        <a href="./tech-sets">Tech Sets</a>
                    </li>
                </details>

                <hr class="divider">

                <details>
                    <summary>Apparel</summary>
                    <li>
                        <a href="./hoodies-&-tracksuits">Hoodies & Tracksuits</a>
                    </li>
                    <li>
                        <a href="./t-shirts">T-Shirts</a>
                    </li>
                    <li>
                        <a href="./jackets">Jackets</a>
                    </li>
                    <li>
                        <a href="./headwear-&-extras">⁠Headwear & Extras</a>
                    </li>
                </details>
            </div>

            <hr class="divider">

            <div class="copyright">
                <span>
                    Copyright © 2025 Appreciation Agency. All Rights Reserved.
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