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
                            <h1 class="xl-heading">Booking</h1>
                            <nav id="breadcrumbs" class="breadcrumbs">
                                <ul>
                                    <li><NuxtLink to="#">Home</NuxtLink></li>
                                    <li>Booking Page</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row form-submit">
                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <div class="row m-0">
                            <div class="submit-page">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 mb-4">
                                        <h3 class="fw-medium">Personal Details</h3>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>First Name<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Last Name<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Your Email<i class="req">*</i></label>
                                            <input type="email" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Contact<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row align-items-start justify-content-start mt-4 g-2">
                            <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                                <h3 class="fw-medium">Payment Methods</h3>
                            </div>
                            
                            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                                <div class="accordion accordion-flush" id="paymentFlushExample">
                                    <div class="accordion-item border">
                                        <h2 class="accordion-header rounded-2">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-paypal" aria-expanded="false" aria-controls="flush-paypal">
                                                Pay Via PayPal
                                            </button>
                                        </h2>
                                        <div id="flush-paypal" class="accordion-collapse collapse show" data-bs-parent="#paymentFlushExample">
                                            <div class="accordion-body">
                                                <form>
                                                    <div class="form-group form-border">
                                                        <label>PayPal Email</label>
                                                        <input type="text" class="form-control simple" placeholder="paypal@gmail.com">
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item border rounded-2">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-stripe" aria-expanded="false" aria-controls="flush-stripe">
                                                Pay Via Stripe
                                            </button>
                                        </h2>
                                        <div id="flush-stripe" class="accordion-collapse collapse" data-bs-parent="#paymentFlushExample">
                                            <div class="accordion-body">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label>Card Holder Name</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label>Card Number</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>									
                                                    
                                                        <div class="col-lg-5 col-md-5 col-sm-6">
                                                            <div class="form-group form-border">
                                                                <label>Expire Month</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-5 col-md-5 col-sm-6">
                                                            <div class="form-group form-border">
                                                                <label>Expire Year</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-2 col-md-2 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label>CVC</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>										
                                                        
                                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="form-check mb-3">
                                                                <input id="stripes" class="form-check-input" name="stripes" type="checkbox">
                                                                <label for="stripes" class="form-check-label">By Continuing, you ar'e agree to conditions</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item border rounded-2">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-creditcard" aria-expanded="false" aria-controls="flush-creditcard">
                                                Pay Via Dabit/Credit Card
                                            </button>
                                        </h2>
                                        <div id="flush-creditcard" class="accordion-collapse collapse" data-bs-parent="#paymentFlushExample">
                                            <div class="accordion-body">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label>Card Holder Name</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label>Card Number</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>									
                                                    
                                                        <div class="col-lg-5 col-md-5 col-sm-6">
                                                            <div class="form-group form-border">
                                                                <label>Expire Month</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-5 col-md-5 col-sm-6">
                                                            <div class="form-group form-border">
                                                                <label>Expire Year</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-lg-2 col-md-2 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label>CVC</label>
                                                                <input type="text" class="form-control">
                                                            </div>
                                                        </div>										
                                                        
                                                        <div class="col-lg-6 col-md-6 col-sm-12">
                                                            <div class="form-check mb-3">
                                                                <input id="credits" class="form-check-input" name="credits" type="checkbox">
                                                                <label for="credits" class="form-check-label">By Continuing, you ar'e agree to conditions</label>
                                                            </div>
                                                        </div>								
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>								
                            </div>
                            
                            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                                <div class="form-group m-0">
                                    <NuxtLink to="/success-payment" class="btn btn-primary fw-medium rounded-pill w-100">Proceed & Pay</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="paymensSidebar bg-light rounded-3 p-4">
                            <div class="paymentPagewrap">
                                <div class="paymentPage">
                                    <div class="bookingList">
                                        <img :src="list1" class="img-fluid" alt="Listing Image">	
                                        <div class="listing-details">
                                            <h5>The Blue Ley Light<span class="verified"><i class="bi bi-patch-check-fill m-0"></i></span></h5>
                                            <div class="list-ratings">
                                                <div class="d-flex align-items-center justify-content-start gap-2">
                                                    <span class="d-flex align-items-center justify-content-start gap-1 text-sm">
                                                        <i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-fill mb-0 text-warning"></i><i class="bi bi-star-half mb-0 text-warning"></i>
                                                    </span>
                                                    <span class="text-md text-light">(86 Reviews)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="booking-info-try rounded rounded mt-4">
                                    <ul class="p-0 m-0">
                                        <li class="d-flex align-items-center justify-content-between my-2"><span class="text-dark fw-medium">Booking Date</span><span class="fw-medium text-muted">Sep 12 2024</span></li>
                                        <li class="d-flex align-items-center justify-content-between my-2"><span class="text-dark fw-medium">Time</span><span class="fw-medium text-muted">10:50 AM</span></li>
                                        <li class="d-flex align-items-center justify-content-between my-2"><span class="text-dark fw-medium">Guests</span><span class="fw-medium text-muted">03 Adults, 2 Child</span></li>
                                        <li class="d-flex align-items-center justify-content-between my-2"><span class="text-dark fw-medium">Discount</span><span class="fw-medium text-danger">-$12.10</span></li>
                                        <li class="d-flex align-items-center justify-content-between"><span class="text-dark fw-medium">Total</span><span class="fw-semibold text-success">$298.76</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop/>
        <FooterOne/>
        <BackToTop/>
    </div>
</template>

<script setup>
import list1 from '@/assets/img/list-4.jpg'
</script>

<style lang="scss" scoped>

</style>