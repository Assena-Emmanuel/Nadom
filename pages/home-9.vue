<template>
    <div>
        <ClientOnly>
            <NavbarTransparant/>
        </ClientOnly>

        <div class="image-cover hero-header bg-slicefull-height position-relative" :style="{backgroundImage:`url(${bg})`, backgroundColor:'#fff3f3', backgroundRepeat:'no-repeat'}">
			<div class="container">
				<div class="row justify-content-between align-items-center">
					<div class="col-xl-7 col-lg-5 col-md-12 col-sm-12">
						<div class="position-relative d-block py-5">
							<div class="position-relative">
                                <h1 class="fw-medium">Explore Your Nearest Places <span class="text-primary">To Stay</span></h1>
                                <p class="fs-5 fw-light text-muted-2">Take a little break from the work strss of everyday. Discover plan trip and explore beautiful destinations.</p>
							</div>
						</div>
						<div class="heroSearch rounded-search style-01">
							<div class="row gx-lg-2 gx-md-2 gx-3 gy-sm-2 gy-2">
								<div class="col-xl-10 col-lg-9 col-md-12">
									<div class="row gx-lg-2 gx-md-2 gx-3 gy-sm-2 gy-2">
										<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
											<div class="form-group">
												<div class="mobSearch d-flex align-items-center justify-content-start">
													<div class="flexStart ps-2"><span class="fw-semibold text-dark">Find</span></div>
													<input type="text" class="form-control fs-6 fw-medium border-0" placeholder="What are you looking for?">
												</div>
											</div>
										</div>
										<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 single-border">
											<div class="form-group">
												<div class="mobSearch d-flex align-items-center justify-content-start">
													<div class="flexStart ps-2"><span class="fw-semibold text-dark">Where</span></div>
													<input type="text" class="form-control fs-6 fw-medium border-0" placeholder="Location">
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-xl-2 col-lg-3 col-md-12 col-sm-12">
									<div class="form-group">
										<button type="button" class="btn btn-primary rounded-pill full-width fw-medium"><i class="bi bi-search me-2"></i>Search</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="imgSidefull d-none d-lg-block">
				<img :src="heroImg" class="img-fluid" alt="Image Side">	
			</div>
		</div>

        <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Featured Listing In <span class="text-primary">Las Vegas</span></h3>
                            <p>Explore Hot & Popular Business Listings</p>
                        </div>
                    </div>
                </div>
                <FeatureProductOne/>
            </div>
        </section>

        <section class="pt-0">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Hot & Trending <span class="text-primary">Categories</span></h3>
                            <p>Explore all types of popular category for submit your listings</p>
                        </div>
                    </div>
                </div>
                <CategoryTwo/>
            </div>
        </section>

        <section class="light-top-gredient">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Trending & Popular <span class="text-primary">Listings</span></h3>
                            <p>Explore Hot & Popular Business Listings</p>
                        </div>
                    </div>
                </div>
                <PopularListingOne/>
            </div>
        </section>

        <section class="bg-light">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Our Great <span class="text-primary">Reviews</span></h3>
                            <p>Our cliens love our services and give great & positive reviews</p>
                        </div>
                    </div>
                </div>
                <ClientOne/>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Latest Updates <span class="text-primary">News</span></h3>
                            <p>Join ListingHub and get latest & trending updates about listing</p>
                        </div>
                    </div>
                </div>
                <BlogOne/>
            </div>
        </section>
        <FooterTop/>
        <FooterOne/>
        <BackToTop/>
    </div>
</template>

<script setup>
    import FeatureProductOne from '@/components/listing/feature-product-one.vue';
    import PopularListingOne from '@/components/listing/popular-listing-one.vue';

    import heroImg from '@/assets/img/side-img.png'
    import bg from '@/assets/img/banner-2.png'
</script>

<style lang="scss" scoped>

</style>