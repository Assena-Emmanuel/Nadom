<template>
    <div>
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>

        <section class="p-0">
			<div class="position-relative">
				<div class="ht-500" id="map-main">
                    <GoogleMap
                        api-key=""
                        style="width: 100%; height: 500px"
                        :center="center"
                        :zoom="15"
                        >
                        <Marker :options="{ position: center }" />
                    </GoogleMap>
                </div>
                <div class="bg-primary py-3" style="position: absolute; width: 100%; bottom: 0;" >
                    <div class="container">
                        <FormFour/>
                    </div>
                </div>
			</div>
		</section>

        <section class="pb-0">
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
						<div class="secHeading-wrap text-center">
							<h3 class="sectionHeading">Hot & Trending <span class="text-primary">Categories</span></h3>
							<p>Explore all types of popular category for submit your listings</p>
						</div>
					</div>
				</div>
				<CategoryThree/>
			</div>
		</section>

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

        <section class="light-top-gredient">
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
						<div class="secHeading-wrap text-center">
							<h3 class="sectionHeading">How ListingHub <span class="text-primary">Work?</span></h3>
							<p>Let's see ListingHub work process and create an account.</p>
						</div>
					</div>
				</div>
				<HowItsWork/>
			</div>
		</section>

        <WorkProcessTwo/>

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
        <FooterTwo/>
        <BackToTop/>
    </div>
</template>

<script setup>
    import FeatureProductOne from '@/components/listing/feature-product-one.vue';
    import WorkProcessTwo from '@/components/work-process-two.vue';
    import { GoogleMap, Marker } from 'vue3-google-map'
    const center = { lat: 48.866024, lng: 2.340041 }
</script>

<style lang="scss" scoped>


</style>