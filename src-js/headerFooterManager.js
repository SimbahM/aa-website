class SpecialHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <nav>
			<div class="container">
				<a href="/" class="logo">
					<img
						src="./assets/appreciation-logo.svg"
						alt="Appreciation Agency Logo"
					/>
				</a>
				<div class="mobile-hamburger">
					<div class="menu-icon">
						<span class="line1"></span>
						<span class="line2"></span>
					</div>
				</div>
				<div class="web-nav-items">
					<ul>
						<li>
							<a href="">
								<div class="products">
									<span>Products</span>
									<img
										src="./assets/icons/arrow-down.svg"
										alt="Arrown Down Icon"
									/>
								</div>
							</a>

							<div class="overlay"></div>

							<div class="mega-menu">
								<div class="container">
									<a
										href="./stationery-&-office-supplies"
										class="product-card"
									>
										<img
											src="./assets/images/home/mega-menu/stationery-&-office-supplies.webp"
											alt="Office Suppliers"
										/>
										<h1>Office Supplies</h1>
									</a>

									<a
										href="./corporate-wear"
										class="product-card"
									>
										<img
											src="./assets/images/home/mega-menu/corporate-wear.webp"
											alt="Corporate Wear"
										/>
										<h1>Coporate Wear</h1>
									</a>

									<a href="./apparel" class="product-card">
										<img
											src="./assets/images/home/mega-menu/apparel.webp"
											alt="Apparel"
										/>
										<h1>Apparel</h1>
									</a>

									<a href="./gifts" class="product-card">
										<img
											src="./assets/images/home/mega-menu/gifts.webp"
											alt="Gifts"
										/>
										<h1>Gifts</h1>
									</a>
								</div>
							</div>
						</li>
						<li>
							<a href="./services">Services</a>
						</li>
						<li>
							<a href="./about-us">About Us</a>
						</li>
						<li>
							<a href="contact-us">Contact Us</a>
						</li>
					</ul>
				</div>

				<!-- Mobile Menu Items TODO: -->

				<div class="mobile-nav-items">
					<ul>
						<li>
							<div class="mobile-mega-menu-controller" href="">
								<div class="products">
									<span>Products</span>
									<img
										class=""
										src="./assets/icons/arrow-down.svg"
										alt="Arrown Down Icon"
									/>
								</div>
							</div>
						</li>
						<li>
							<a href="./services">Services</a>
						</li>
						<li>
							<a href="./about-us">About Us</a>
						</li>
						<li>
							<a href="./contact-us">Contact Us</a>
						</li>
					</ul>
					<div class="social-media">
						<div class="social-media">
							<hr />
							<div class="icons">
								<ul>
									<li>
										<a
											target="_blank"
											href="https://www.facebook.com/profile.php?id=61570382283221&mibextid=ZbWKwL"
											><img
												src="./assets/icons/facebook.svg"
												alt="Facebook Icon"
										/></a>
									</li>
									<li>
										<a
											target="_blank"
											href="https://www.instagram.com/theappreciationagency/"
											><img
												src="./assets/icons/instagram.svg"
												alt="Instagram icon"
										/></a>
									</li>
									<li>
										<a
											target="_blank"
											href="https://www.linkedin.com/company/appreciation-agency"
											><img
												src="./assets/icons/linkedin.svg"
												alt="Linkedin Icon"
										/></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="mobile-mega-menu">
					<div class="items">
						<div class="back-icon">
							<img
								class="back"
								src="./assets/icons/arrow-down.svg"
								alt="Arrow Icon"
							/>
							<p>Back</p>
						</div>

						<a
							href="./stationery-&-office-supplies"
							class="product-card"
						>
							<img
								src="./assets/images/home/mega-menu/stationery-&-office-supplies.webp"
								alt="Office Suppliers"
							/>
							<h1>Office Supplies</h1>
						</a>

						<a href="./corporate-wear" class="product-card">
							<img
								src="./assets/images/home/mega-menu/corporate-wear.webp"
								alt="Coporate Wear"
							/>
							<h1>Coporate Wear</h1>
						</a>

						<a href="./apparel" class="product-card">
							<img
								src="./assets/images/home/mega-menu/apparel.webp"
								alt="Apparel"
							/>
							<h1>Apparel</h1>
						</a>

						<a href="./gifts" class="product-card">
							<img
								src="./assets/images/home/mega-menu/gifts.webp"
								alt="Gifts"
							/>
							<h1>Gifts</h1>
						</a>
					</div>
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

customElements.define("special-header", SpecialHeader)
customElements.define("special-footer", SpecialFooter)

// mobile menu TODO:

const menuIcon = document.querySelector("nav .menu-icon")
const mobileNavItems = document.querySelector("nav .mobile-nav-items")
const mobileMegaMenu = document.querySelector("nav .mobile-mega-menu")
const mobileMegaMenuController = document.querySelector(
	"nav .mobile-nav-items ul li .mobile-mega-menu-controller"
)
const backIcon = document.querySelector(
	"nav .mobile-mega-menu .items .back-icon"
)

menuIcon.addEventListener("click", () => {
	mobileNavItems.classList.toggle("active")
	menuIcon.classList.toggle("active")
	document.body.classList.toggle("on-scroll")
})

mobileMegaMenuController.addEventListener("click", () => {
	mobileMegaMenu.classList.add("active")
})

backIcon.addEventListener("click", () => {
	mobileMegaMenu.classList.remove("active")
})
