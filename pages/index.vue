<template>
    <div>
        <ClientOnly>
            <NavbarDark />
        </ClientOnly>

        <div class="image-cover hero-header full-height position-relative" :style="{backgroundImage:`url(${bg})`}" data-overlay="6">
            <div class="container">
                <div class="row justify-content-center align-items-center mb-5 mt-lg-0 mt-0">
                    <div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
                        <div class="position-relative text-center">
                            <h1 style="font-size: 5.2em;">Acheter, étudier et séjourner en chine avec notre expertise</h1>
                            <p class="subtexte">etudes, Commerce, visa : nous simplifions votre projet chinois</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div class="actions-wrapper">
                        <!-- Bouton 1 -->
                        <NuxtLink 
                            to="/login" 
                            class="btn-gradient"
                            v-appear="'fade-up'"
                        >
                            {{ $t('ourservices') }}
                        </NuxtLink>

                        <!-- Bouton 2 -->
                        <NuxtLink 
                            to="/login" 
                            class="btn-outline"
                            v-appear="'fade-up'"
                        >
                            {{ $t('contactsus') }}
                        </NuxtLink>
                    </div>

                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="d-block position-relative">
                            <!-- <PopularSearchOne/> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="mousedrop z-1"><a href="#mains" class="mousewheel center"><i class="bi bi-mouse"></i></a></div>
        </div>

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
                <!-- <div class="title-wrapper">
                <h2>Daxue Etudes de marché en Chine</h2>
                </div> -->

                <CategoryTwo :elements="services" :height="'400px'" :width="'350px'" />
            </div>
        </section>


        

        <section style="background-color: #E9CFA0; margin: 13em 0px 15em 0px;">
            <div class="container-fluid" >
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h2 class="sectionHeading fw-bold mb-3" style="font-size: 34px;">
                                <span class="text-primary">{{ $t('tourism') }}</span>
                            </h2>
                            <p>Explore Hot & Popular Business Listings</p>
                        </div>
                    </div>
                </div>
                <FeatureProductTwo/>
            </div>
        </section>

        <!-- Etude en chine -->
        <WorkProcessOne/>
        


        <!-- Import export -->
        <Importexport/>

        
        <!-- Visa -->
        <Visa/>

        <!-- <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Choose Your <span class="text-primary">Package</span></h3>
                            <p>Find & Select a perfect & suitable package for your choice.</p>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center mb-4">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
                        <div class="d-flex align-items-center justify-content-between gap-4 p-3 bg-light-primary border border-primary flex-wrap gap-3 rounded-3">
                            <div class="freeprcIcon">
                                <div class="freeprcBocses d-flex align-items-center justify-content-start gap-3">
                                    <div class="freeprcFirst"><span class="square--60 bg-primary text-light circle"><i class="bi bi-patch-check-fill h-auto fs-4"></i></span></div>
                                    <div class="freeprcInfo">
                                        <h5 class="fw-semibold lh-base mb-0">Free Account</h5>
                                        <p class="lh-base mb-0">Choose free account valid for 3 listings</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="freeprcAccount mob-100">
                                <button type="button" class="btn btn-md btn-whites rounded-pill fw-medium mob-100">Free Listing<i class="bi bi-arrow-right ms-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <PricingOne/>  
            </div>
        </section> -->

        <section class="bg-light">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading"><span class="text-primary">{{ $t('temoignages_title') }}</span></h3>
                            <p>{{ $t('temoignages_description') }}</p>
                        </div>
                    </div>
                </div>
                <ClientOne/>
            </div>
        </section>

        <!-- <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center">
                            <h3 class="sectionHeading">Explore Upcoming <span class="text-primary">Events</span></h3>
                            <p>Browse our upcoming events and join soon.</p>
                        </div>
                    </div>
                </div>
                <EventOne/>
            </div>
        </section> -->
        <FooterTop/>
        <FooterOne/>
        <BackToTop/>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import bg from '@/assets/img/banner-4.jpg'
    import FeatureProductTwo from '@/components/listing/feature-product-two.vue';
    import img1 from "@/assets/img/index/1.png"
    import img2 from "@/assets/img/index/2.png"
    import img3 from "@/assets/img/index/3.png"
    onMounted(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
            new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    });

    const services = ref([
        {
            icon: 'bi bi-cash-stack me-1',
            title: 'supplier_payment',
            list: '+',
            image: img1
        },
        {
            icon: 'bi bi-arrow-left-right me-1',
            title: 'money_transfers',
            list: '+',
            image: img2
        },
        {
            icon: 'bi bi-box-seam me-1',
            title: 'package_reception',
            list: '+',
            image: img3
        }
        ]
    )

</script>

<style>
    .title-wrapper h2 {
  font-size: 32px;
  font-weight: 500;
  color: #1f4ea3;
  position: relative;
  display: inline-block;
  padding-bottom: 18px;
}

/* Trait gris (long) */
.title-wrapper h2::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
}

/* Trait bleu (court) */
.title-wrapper h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 80px;
  height: 3px;
  background-color: #1f4ea3;
}


</style>