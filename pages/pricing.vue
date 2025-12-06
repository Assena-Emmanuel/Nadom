<template>
    <div>
        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>

        <section class="bg-light">
            <div class="container">
                <div class="row justify-content-start align-items-center">
                    <div class="col-xl-7 col-lg-9 col-md-12 col-sm-12">
                        <div class="position-relative pt-lg-0 pt-5">
                            <h1 class="xl-heading">Pricing Page</h1>
                            <nav id="breadcrumbs" class="breadcrumbs">
                                <ul>
                                    <li><NuxtLink to="#">Home</NuxtLink></li>
                                    <li><NuxtLink to="#">Pages</NuxtLink></li>
                                    <li>Pricing</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-11 col-sm-12">
                        <div class="secHeading-wrap text-center mb-5">
                            <h2 class="fw-semibold">Choose your Package</h2>
                            <p>Showcase the finest features of your properties with the List Category shortcode. Utilize this tool to display specific property categories, types, cities, and areas of your choice.</p>
                        </div>
                    </div>
                </div>
                <PricingOne/>
            </div>	
        </section>

        <FooterTop/>
        <FooterOne/>
        <BackToTop/>
    </div>
</template>

<script setup>
</script>