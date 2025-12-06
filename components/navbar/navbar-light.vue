<template>
    <div>
        <div class="header header-transparent dark navdark" :class="{'header-fixed': scroll}" data-sticky-element="">
				<div class="container-fluid">
					<nav id="navigation" :class="windowWidth > 991 ? 'navigation navigation-landscape' : 'navigation navigation-portrait'">
						<div class="nav-header">
							<NuxtLink class="nav-brand" to="/"><img :src="logoLight" class="logo" alt=""/></NuxtLink>
							<div class="nav-toggle" @click="toggle = !toggle"></div>
							<div class="mobile_nav">
								<ul>
									<li>
										<a href="#" class="d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#login"><i class="bi bi-person-circle me-1"></i></a>
									</li>
									<li>
										<a href="#cartSlider" class="cart-content" data-bs-toggle="offcanvas" role="button" aria-controls="cartSlider"><i class="bi bi-basket2"></i><span class="head-cart-counter">3</span></a>
									</li>
									<li>
										<a href="#searchSlider" class="d-flex align-items-center" data-bs-toggle="offcanvas" role="button" aria-controls="searchSlider"><i class="bi bi-search me-1"></i></a>
									</li>
								</ul>
							</div>
						</div>
						<div class="nav-menus-wrapper" :class="{ 'nav-menus-wrapper-open': toggle}" :style="{'left': toggle ? '0%' : '-100%'}">
							<div class='mobLogos'>
								<img :src="logo" class='img-fluid lightLogo' alt='Logo'/>
							</div>
							<span class="nav-menus-wrapper-close-button" @click="toggle = !toggle">✕</span>
							<ul class="nav-menu">
								<!-- <li :class="['/','/home-2','/home-3','/home-4','/home-5','/home-6','/home-7','/home-8','/home-9','/home-10','/home-splash','/home-map'].includes(current) ? 'active' : '' "><router-link to="#">Home<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
									<ul class="nav-dropdown nav-submenu">
										<li :class="current === '/' ? 'active' : ''"><NuxtLink to="/">Home Layout 01</NuxtLink></li>
										<li :class="current === '/home-2' ? 'active' : ''"><NuxtLink to="/home-2">Home Layout 02</NuxtLink></li>
										<li :class="current === '/home-3' ? 'active' : ''"><NuxtLink to="/home-3">Home Layout 03</NuxtLink></li>
										<li :class="current === '/home-4' ? 'active' : ''"><NuxtLink to="/home-4">Home Layout 04</NuxtLink></li>
										<li :class="current === '/home-5' ? 'active' : ''"><NuxtLink to="/home-5">Home Layout 05</NuxtLink></li>
										<li :class="current === '/home-6' ? 'active' : ''"><NuxtLink to="/home-6">Home Layout 06</NuxtLink></li>
										<li :class="current === '/home-7' ? 'active' : ''"><NuxtLink to="/home-7">Home Layout 07</NuxtLink></li>
										<li :class="current === '/home-8' ? 'active' : ''"><NuxtLink to="/home-8">Home Layout 08</NuxtLink></li>
										<li :class="current === '/home-9' ? 'active' : ''"><NuxtLink to="/home-9">Home Layout 09</NuxtLink></li>
										<li :class="current === '/home-10' ? 'active' : ''"><NuxtLink to="/home-10">Home Layout 10</NuxtLink></li>
										<li :class="current === '/home-splash' ? 'active' : ''"><NuxtLink to="/home-splash">Home Splash</NuxtLink></li>
										<li :class="current === '/home-map' ? 'active' : ''"><NuxtLink to="/home-map">Home Map Layout</NuxtLink></li>
									</ul>
								</li> -->
								<!-- <li :class="['/','/home-2','/home-3','/home-4','/home-5','/home-6','/home-7','/home-8','/home-9','/home-10','/home-splash','/home-map'].includes(current) ? 'active' : '' "><router-link to="#">Home<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
									<ul class="nav-dropdown nav-submenu">
										
										
									</ul>
								</li> -->
								<li :class="current === '/home-5' ? 'active' : ''"><NuxtLink to="/home-5">Home</NuxtLink></li>
								<li :class="current === '/contact-us' ? 'active' : ''"><NuxtLink to="/contact-us"><i class="bi bi-envelope-check me-1"></i>Contacts</NuxtLink></li>

								<li :class="['/grid-layout-01','/grid-layout-02','/grid-layout-03','/grid-layout-04','/grid-layout-05','/grid-layout-06','/list-layout-01','/list-layout-02','/list-layout-03','/list-layout-04','/list-layout-05','/half-map-01','/half-map-02','/half-map-03','/half-map-04','/half-map-05','/single-listing-01','/single-listing-02','/single-listing-03','/single-listing-04','/single-listing-05'].includes(current) ? 'active' : ''"><router-link to="#">Listings<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
									<ul class="nav-dropdown nav-submenu">
										<li :class="['/grid-layout-01','/grid-layout-02','/grid-layout-03','/grid-layout-04','/grid-layout-05','/grid-layout-06'].includes(current) ? 'active' : ''"><router-link to="#">Grid Layouts<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
											<ul class="nav-dropdown nav-submenu">
												<li :class="current === '/grid-layout-01' ? 'active' : ''"><NuxtLink to="/grid-layout-01">Grid Layout 01</NuxtLink></li>                                    
												<li :class="current === '/grid-layout-02' ? 'active' : ''"><NuxtLink to="/grid-layout-02">Grid Layout 02</NuxtLink></li>                                    
												<li :class="current === '/grid-layout-03' ? 'active' : ''"><NuxtLink to="/grid-layout-03">Grid Layout 03</NuxtLink></li>                                    
												<li :class="current === '/grid-layout-04' ? 'active' : ''"><NuxtLink to="/grid-layout-04">Grid Layout 04</NuxtLink></li>                                    
												<li :class="current === '/grid-layout-05' ? 'active' : ''"><NuxtLink to="/grid-layout-05">Grid Layout 05</NuxtLink></li>                                    
												<li :class="current === '/grid-layout-06' ? 'active' : ''"><NuxtLink to="/grid-layout-06">Grid Layout 06</NuxtLink></li>                                    
											</ul>
										</li>
										<li :class="['/list-layout-01','/list-layout-02','/list-layout-03','/list-layout-04','/list-layout-05'].includes(current) ? 'active' : ''"><router-link to="#">List Layouts<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
											<ul class="nav-dropdown nav-submenu">
												<li :class="current === '/list-layout-01' ? 'active' : ''"><NuxtLink to="/list-layout-01">List Layout 01</NuxtLink></li>                                     
												<li :class="current === '/list-layout-02' ? 'active' : ''"><NuxtLink to="/list-layout-02">List Layout 02</NuxtLink></li>                                     
												<li :class="current === '/list-layout-03' ? 'active' : ''"><NuxtLink to="/list-layout-03">List Layout 03</NuxtLink></li>                                     
												<li :class="current === '/list-layout-04' ? 'active' : ''"><NuxtLink to="/list-layout-04">List Layout 04</NuxtLink></li>                                     
												<li :class="current === '/list-layout-05' ? 'active' : ''"><NuxtLink to="/list-layout-05">List Layout 05</NuxtLink></li>                                     
											</ul>
										</li>
										<li :class="['/half-map-01','/half-map-02','/half-map-03','/half-map-04','/half-map-05'].includes(current) ? 'active' : ''"><router-link to="#">Half Map Screen<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
											<ul class="nav-dropdown nav-submenu">
												<li :class="current === '/half-map-01' ? 'active' : ''"><NuxtLink to="/half-map-01">Half Map Screen 01</NuxtLink></li>
												<li :class="current === '/half-map-02' ? 'active' : ''"><NuxtLink to="/half-map-02">Half Map Screen 02</NuxtLink></li>
												<li :class="current === '/half-map-03' ? 'active' : ''"><NuxtLink to="/half-map-03">Half Map Screen 03</NuxtLink></li>
												<li :class="current === '/half-map-04' ? 'active' : ''"><NuxtLink to="/half-map-04">Half Map Screen 04</NuxtLink></li>
												<li :class="current === '/half-map-05' ? 'active' : ''"><NuxtLink to="/half-map-05">Half Map Screen 05</NuxtLink></li>
											</ul>
										</li>
										<li :class="['/single-listing-01','/single-listing-02','/single-listing-03','/single-listing-04','/single-listing-05'].includes(current) ? 'active' : ''"><router-link to="#">Single Listings<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
											<ul class="nav-dropdown nav-submenu">
												<li :class="current === '/single-listing-01' ? 'active' : ''"><NuxtLink to="/single-listing-01">Single Listing 01</NuxtLink></li>
												<li :class="current === '/single-listing-02' ? 'active' : ''"><NuxtLink to="/single-listing-02">Single Listing 02</NuxtLink></li>
												<li :class="current === '/single-listing-03' ? 'active' : ''"><NuxtLink to="/single-listing-03">Single Listing 03</NuxtLink></li>
												<li :class="current === '/single-listing-04' ? 'active' : ''"><NuxtLink to="/single-listing-04">Single Listing 04</NuxtLink></li>
												<li :class="current === '/single-listing-05' ? 'active' : ''"><NuxtLink to="/single-listing-05">Single Listing 05</NuxtLink></li>
											</ul>
										</li>
									</ul>
								</li>

								<li :class="['/dashboard-user','/dashboard-my-profile','/dashboard-my-bookings','/dashboard-my-listings','/dashboard-bookmarks','/dashboard-messages','/dashboard-reviews','/dashboard-wallet','/dashboard-add-listing'].includes(current) ? 'active' : ''"><router-link to="#">User Dashboard 6<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></router-link>
									<ul class="nav-dropdown nav-submenu">
										<li :class="current === '/dashboard-user' ? 'active' : ''"><NuxtLink to="/dashboard-user"><i class="bi bi-speedometer me-1"></i>Dashboard Area</NuxtLink></li>
										<li :class="current === '/dashboard-my-profile' ? 'active' : ''"><NuxtLink to="/dashboard-my-profile"><i class="bi bi-person-lines-fill me-1"></i>My Profile</NuxtLink></li>
										<li :class="current === '/dashboard-my-bookings' ? 'active' : ''"><NuxtLink to="/dashboard-my-bookings"><i class="bi bi-journal-check me-1"></i>My Bookings</NuxtLink></li>
										<li :class="current === '/dashboard-my-listings' ? 'active' : ''"><NuxtLink to="/dashboard-my-listings"><i class="bi bi-ui-radios-grid me-1"></i>My Listings</NuxtLink></li>
										<li :class="current === '/dashboard-bookmarks' ? 'active' : ''"><NuxtLink to="/dashboard-bookmarks"><i class="bi bi-bookmark-star me-1"></i>Bookmarkes</NuxtLink></li>
										<li :class="current === '/dashboard-messages' ? 'active' : ''"><NuxtLink to="/dashboard-messages"><i class="bi bi-chat-dots me-1"></i>Messages</NuxtLink></li>
										<li :class="current === '/dashboard-reviews' ? 'active' : ''"><NuxtLink to="/dashboard-reviews"><i class="bi bi-yelp me-1"></i>Reviews</NuxtLink></li>
										<li :class="current === '/dashboard-wallet' ? 'active' : ''"><NuxtLink to="/dashboard-wallet"><i class="bi bi-wallet me-1"></i>Wallet</NuxtLink></li>
										<li :class="current === '/dashboard-add-listing' ? 'active' : ''"><NuxtLink to="/dashboard-add-listing"><i class="bi bi-patch-plus me-1"></i>Add Listing</NuxtLink></li>
									</ul>
								</li>

								<li :class="['/login','/register','/forgot-password','/two-factor-auth','/checkout-page','/success-payment','/invoice-page','/viewcart','/privacy-policy','/author-profile','/booking-page','/about-us','/blog','/contact-us','/pricing','/help-center','/comingsoon','/faq','/error','/elements'].includes(current) ? 'active' : ''"><NuxtLink to="#">Pages<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></NuxtLink>
									<ul class="nav-dropdown nav-submenu">
										<li :class="['/login','/register','/forgot-password','/two-factor-auth'].includes(current) ? 'active' : ''"><NuxtLink to="#"><i class="bi bi-person-circle me-1"></i>My Account<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></NuxtLink>
											<ul class="nav-dropdown nav-submenu">
												<li :class="current === '/login' ? 'active' : ''"><NuxtLink to="/login"><i class="bi bi-box-arrow-in-right me-1"></i>User Login</NuxtLink></li>
												<li :class="current === '/register' ? 'active' : ''"><NuxtLink to="/register"><i class="bi bi-person-plus me-1"></i>Signup Page</NuxtLink></li>
												<li :class="current === '/forgot-password' ? 'active' : ''"><NuxtLink to="/forgot-password"><i class="bi bi-question-circle me-1"></i>Forget Password</NuxtLink></li>
												<li :class="current === '/two-factor-auth' ? 'active' : ''"><NuxtLink to="/two-factor-auth"><i class="bi bi-shield-check me-1"></i>Two Step verification</NuxtLink></li>
											</ul>
										</li>
										<li :class="['/checkout-page','/success-payment','/invoice-page','/viewcart','/privacy-policy'].includes(current) ? 'active' : ''"><NuxtLink to="#"><i class="bi bi-person-circle me-1"></i>Shop<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span></NuxtLink>
											<ul class="nav-dropdown nav-submenu">
												<li :class="current === '/checkout-page' ? 'active' : ''"><NuxtLink to="/checkout-page"><i class="bi bi-box-arrow-in-right me-1"></i>Checkout</NuxtLink></li>
												<li :class="current === '/success-payment' ? 'active' : ''"><NuxtLink to="/success-payment"><i class="bi bi-person-plus me-1"></i>Success Payment</NuxtLink></li>
												<li :class="current === '/invoice-page' ? 'active' : ''"><NuxtLink to="/invoice-page"><i class="bi bi-question-circle me-1"></i>Invoice</NuxtLink></li>
												<li :class="current === '/viewcart' ? 'active' : ''"><NuxtLink to="/viewcart"><i class="bi bi-shield-check me-1"></i>Viewcart</NuxtLink></li>
												<li :class="current === '/privacy-policy' ? 'active' : ''"><NuxtLink to="/privacy-policy"><i class="bi bi-shield-check me-1"></i>Privacy Policy</NuxtLink></li>
											</ul>
										</li>
										<li :class="current === '/author-profile' ? 'active' : ''"><NuxtLink to="/author-profile"><i class="bi bi-person-vcard me-1"></i>Author Profile</NuxtLink></li>
										<li :class="current === '/booking-page' ? 'active' : ''"><NuxtLink to="/booking-page"><i class="bi bi-calendar2-check me-1"></i>Booking Page</NuxtLink></li>
										<li :class="current === '/about-us' ? 'active' : ''"><NuxtLink to="/about-us"><i class="bi bi-person-check me-1"></i>About Us</NuxtLink></li>                                
										<li :class="current === '/blog' ? 'active' : ''"><NuxtLink to="/blog"><i class="bi bi-blockquote-left me-1"></i>Blog Page</NuxtLink></li>
										<li :class="current === '/contact-us' ? 'active' : ''"><NuxtLink to="/contact-us"><i class="bi bi-envelope-check me-1"></i>Contact Us</NuxtLink></li>
										<li :class="current === '/pricing' ? 'active' : ''"><NuxtLink to="/pricing"><i class="bi bi-coin me-1"></i>Pricing</NuxtLink></li>										
										<li :class="current === '/help-center' ? 'active' : ''"><NuxtLink to="/help-center"><i class="bi bi-patch-question me-1"></i>Help Center</NuxtLink></li>
										<li :class="current === '/comingsoon' ? 'active' : ''"><NuxtLink to="/comingsoon"><i class="bi bi-hourglass-top me-1"></i>Coming Soon</NuxtLink></li>
										<li :class="current === '/faq' ? 'active' : ''"><NuxtLink to="/faq"><i class="bi bi-info-circle me-1"></i>FAQ's</NuxtLink></li>
										<li :class="current === '/error' ? 'active' : ''"><NuxtLink to="/error"><i class="bi bi-x-octagon me-1"></i>Error Page</NuxtLink></li>
										<li :class="current === '/elements' ? 'active' : ''"><NuxtLink to="/elements"><i class="bi bi-gear me-1"></i>Elements</NuxtLink></li>
									</ul>
								</li>
								
								<li><NuxtLink to="#" class="mob-addlisting light"><i class="bi bi-geo-alt-fill me-1"></i>Add Listing</NuxtLink></li>

							</ul>

							<ul class="nav-menu nav-menu-social align-to-right">
								<li>
									<a href="#" class="d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#login"><i class="bi bi-person-circle fs-6 me-1"></i><span class="navCl">SignUp or SignIn</span></a>
								</li>
								<li>
									<a href="#cartSlider" class="cart-content" data-bs-toggle="offcanvas" role="button" aria-controls="cartSlider"><i class="bi bi-basket2"></i><span class="head-cart-counter">3</span></a>
								</li>
								<!-- <li class="list-buttons">
									<NuxtLink to="/register"><i class="bi bi-geo-alt fs-6 me-1"></i>Add Listing</NuxtLink>
								</li> -->
							</ul>
						</div>
						
					</nav>
				</div>
			</div>

			<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
				<div class="modal-dialog" id="loginmodal">
					<div class="modal-content">
						<div class="modal-header justify-content-end border-0 pb-0">
							<NuxtLink to="#" class="square--30 circle bg-light-danger text-danger" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></NuxtLink>
						</div>
						
						<div class="modal-body px-4">
							<div class="text-center mb-5">
								<h2>Welcome Back</h2>
								<p class="fs-6">Login to manage your account.</p>
							</div>

							<form class="needs-validation px-lg-2" novalidate>
								<div class="row align-items-center justify-content-between g-3 mb-4">
									<div class="col-xl-6 col-lg-6 col-md-6"><NuxtLink to="#" class="btn btn-outline-secondary border rounded-3 text-md px-lg-2 full-width"><img :src="google" class="img-fluid me-2" width="16" alt=""/>Login with Google</NuxtLink></div>
									<div class="col-xl-6 col-lg-6 col-md-6"><NuxtLink to="#" class="btn btn-outline-secondary border rounded-3 text-md px-lg-2 full-width"><img :src="facebook" class="img-fluid me-2" width="16" alt=""/>Login with Facebook</NuxtLink></div>
								</div>
								
								<div class="form-group form-border mb-4">
									<label class="form-label" for="email01">Your email</label>
									<input type="email" class="form-control" id="email01" placeholder="email@site.com" required>
									<span class="invalid-feedback">Please enter a valid email address.</span>
								</div>

								<div class="mb-4">
									<div class="d-flex justify-content-between align-items-center">
										<label class="form-label" for="pass01">Password</label>
										<a href="/forgot-password" class="link fw-medium text-primary">Forgot Password?</a>
									</div>
									<div class="form-group form-border input-group-merge">
										<input type="password" class="form-control" id="pass01" placeholder="8+ characters required" required>
									</div>
									<span class="invalid-feedback">Please enter a valid password.</span>
								</div>

								<div class="d-grid mb-3">
									<button type="submit" class="btn btn-primary fw-medium">Log in</button>
								</div>

								<div class="text-center">
									<p>Don't have an account yet? <a href="/register" class="link fw-medium text-primary">Sign up here</a></p>
								</div>
							</form>
						</div>
						
						<div class="modal-footer p-3 border-top">
							<div class="d-flex align-items-center justify-content-between gap-3">
								<div class="brand px-lg-4 px-3"><img :src="brand1" class="img-fluid" alt=""></div>
								<div class="brand px-lg-4 px-3"><img :src="brand2" class="img-fluid" alt=""></div>
								<div class="brand px-lg-4 px-3"><img :src="brand3" class="img-fluid" alt=""></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="cartSlider" aria-labelledby="cartSliderLabel">
				<div class="offcanvas-header border-bottom d-flex justify-content-between">
					<h6 class="offcanvas-title" id="cartSliderLabel">Your cart Items</h6>
					<NuxtLink to="#" class="square--35 circle text-muted-2 border" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x"></i></NuxtLink>
				</div>
				<div class="offcanvas-body">
					<div class="cartItems w-100">
						<div class="d-flex align-items-center justify-content-start flex-column gap-3">
							<div class="singleCartitem d-flex align-items-center justify-content-between gap-4 w-100">
								<div class="d-flex align-items-center justify-content-start gap-3">
									<div class="cartiteThumb"><figure class="d-block m-0"><img :src="list3" class="img-fluid rounded-2" width="60" alt=""></figure></div>
									<div class="cartCaption">
										<h6 class="lh-base m-0">Spicy Burger</h6>
										<p class="m-0">1x$25.50</p>
									</div>
								</div>
								<div class="removeItemcart"><NuxtLink to="#" class="square--35 circle badge-secondary"><i class="bi bi-x"></i></NuxtLink></div>
							</div>
							
							<div class="singleCartitem d-flex align-items-center justify-content-between gap-3 w-100">
								<div class="d-flex align-items-center justify-content-start gap-3">
									<div class="cartiteThumb"><figure class="d-block m-0"><img :src="list4" class="img-fluid rounded-2" width="60" alt=""></figure></div>
									<div class="cartCaption">
										<h6 class="lh-base m-0">Premium Package</h6>
										<p class="m-0">1x$22.10</p>
									</div>
								</div>
								<div class="removeItemcart"><NuxtLink to="#" class="square--35 circle badge-secondary"><i class="bi bi-x"></i></NuxtLink></div>
							</div>
							
							<div class="singleCartitem d-flex align-items-center justify-content-between gap-3 w-100">
								<div class="d-flex align-items-center justify-content-start gap-3">
									<div class="cartiteThumb"><figure class="d-block m-0"><img :src="list5" class="img-fluid rounded-2" width="60" alt=""></figure></div>
									<div class="cartCaption">
										<h6 class="lh-base m-0">Platinum Plaster</h6>
										<p class="m-0">1x$17.40</p>
									</div>
								</div>
								<div class="removeItemcart"><NuxtLink to="#" class="square--35 circle badge-secondary"><i class="bi bi-x"></i></NuxtLink></div>
							</div>
						</div>
						
						<div class="cartSubtotal w-100 py-3 border-top mt-3">
							<h6 class="m-0">Subtotal: $128.75</h6>
						</div>
					</div>
					
					<div class="cartButtons w-100 py-2">
						<div class="d-flex align-items-center justify-content-center flex-wrap gap-2">
							<a href="/viewcart" class="btn btn-md btn-light-primary fw-medium flex-fill">View Cart</a>
							<a href="/checkout-page" class="btn btn-md btn-primary fw-medium flex-fill">Checkout</a>
						</div>
					</div>
				</div>
			</div>

			<div class="offcanvas offcanvas-top h-auto" tabindex="-1" id="searchSlider" aria-labelledby="searchSliderLabel">
				<div class="offcanvas-body" id="searchSliderLabel">
					<div class="searchForm w-100 mb-3">
						<div class="p-2 ps-3 rounded border d-flex align-items-center justify-content-between gap-2">
							<div class="searchicons"><span><i class="bi bi-search fs-4 opacity-75"></i></span></div>
							<div class="flex-fill"><input type="search" class="form-control border-0 ps-0" placeholder="What are you looking for?"></div>
							<div class="closeSlides"><a href="JavaScript:Void(0);" class="square--35 circle text-muted-2 border" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x"></i></a></div>
						</div>
					</div>
					<div class="popularSearches d-flex align-items-center justify-content-center gap-2 flex-wrap">
						<div class="singleItem"><NuxtLink to="#" class="badge badge-xs badge-primary rounded-pill">Real Estate</NuxtLink></div>	
						<div class="singleItem"><NuxtLink to="#" class="badge badge-xs badge-primary rounded-pill">Eat & Drink</NuxtLink></div>	
						<div class="singleItem"><NuxtLink to="#" class="badge badge-xs badge-primary rounded-pill">Shopping</NuxtLink></div>	
						<div class="singleItem"><NuxtLink to="#" class="badge badge-xs badge-primary rounded-pill">Nightlife</NuxtLink></div>	
						<div class="singleItem"><NuxtLink to="#" class="badge badge-xs badge-primary rounded-pill">Services</NuxtLink></div>	
					</div>
				</div>
			</div>
    </div>
</template>

<script setup>
	import { onMounted, ref } from 'vue'
	import { useRoute } from 'vue-router'
	import logoLight from '@/assets/img/logo-light.svg'
	import logo from '@/assets/img/logo.svg'
	import google from '@/assets/img/google.png'
	import facebook from '@/assets/img/facebook.png'
	import brand1 from '@/assets/img/brand/logo-1.png'
	import brand2 from '@/assets/img/brand/logo-3.png'
	import brand3 from '@/assets/img/brand/logo-2.png'
	import list3 from '@/assets/img/list-3.jpg'
	import list4 from '@/assets/img/list-4.jpg'
	import list5 from '@/assets/img/list-5.jpg'

	const router = useRoute();

	const current = ref(router.fullPath);
	const scroll = ref(false);
	const windowWidth= ref(window.innerWidth);
	const toggle = ref(false);

	const handleScroll = () => {
        if (window.scrollY >= 50) {
            scroll.value = true
        } else {
            scroll.value = false
        }
    }

	const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };

	onMounted(()=>{
		window.scrollTo(0,0)
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);
	})

</script>

<style lang="scss" scoped>

</style>