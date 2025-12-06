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
                            <h1 class="xl-heading">Checkout</h1>
                            <nav id="breadcrumbs" class="breadcrumbs">
                                <ul>
                                    <li><NuxtLink to="#">Home</NuxtLink></li>
                                    <li><NuxtLink to="#">Shop</NuxtLink></li>
                                    <li>Checkout</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="alert alert-success text-center" role="alert">
                            Hi Dear, Have you already an account? <a href="#" class="alert-link" data-bs-toggle="collapse" data-bs-target="#login-frm">Please Login</a>
                        </div>
                    </div>
                    
                    <div class="col-lg-12 col-md-12">	
                        <div id="login-frm" class="collapse mb-5">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <div class="form-group form-border">
                                        <input type="text" class="form-control border" placeholder="Username">
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <div class="form-group form-border">
                                        <input type="text" class="form-control border" placeholder="*******">
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="form-group form-border">
                                        <button type="submit" class="btn btn-primary full-width">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row form-submit">
                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <div class="row m-0">
                            <div class="submit-page">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h3>Billing Detail</h3>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Name<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Email<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Company Name</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Address<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>City<i class="req">*</i></label>
                                            <div class="selects border">
                                                <Multiselect 
                                                    v-model="selected" 
                                                    :options="options" 
                                                    placeholder="City, Country or zip" 
                                                    :open="true"
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>State<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Apartment</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Zip-Code<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Phone<i class="req">*</i></label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Landline</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="form-group form-border">
                                            <label>Additional Information</label>
                                            <textarea class="form-control ht-50"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="form-check form-border">
                                            <input id="al-2" class="form-check-input" name="al-2" type="checkbox">
                                            <label for="al-2" class="form-check-label">Create An Account</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row align-items-start justify-content-start mt-4 g-2">
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
                                    <NuxtLink to="/success-payment" class="btn btn-primary fw-medium w-100">Place Your Order</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        
                        <div class="paymensSidebar gray rounded-3 p-4">
                            <div class="paymentPagewrap">
                                <div class="paymentPage">
                                    <div class="cartShoppes">
                                        <div class="singleCarts">
                                            <div class="cartFirsty1">
                                                <span class="shippingType">Free Shipping</span>
                                                <h6 class="itemBrans">Awaik Brand</h6>
                                                <p class="itemName">Flower Vase x1</p>
                                            </div>
                                            <div class="cartFirsty2">
                                                <div class="totalPrice">$45</div>
                                            </div>
                                        </div>
                                        
                                        <div class="singleCarts">
                                            <div class="cartFirsty1">
                                                <span class="shippingType charegable">Shipping $40</span>
                                                <h6 class="itemBrans">LP Liquid Hipe</h6>
                                                <p class="itemName">Water Castle x1</p>
                                            </div>
                                            <div class="cartFirsty2">
                                                <div class="totalPrice">$62</div>
                                            </div>
                                        </div>
                                        
                                        <div class="singleCarts">
                                            <div class="cartFirsty1">
                                                <span class="shippingType">Free Shipping</span>
                                                <h6 class="itemBrans">Singla Sivansh</h6>
                                                <p class="itemName">Cattle Liwar x1</p>
                                            </div>
                                            <div class="cartFirsty2">
                                                <div class="totalPrice">$72</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="booking-info-try rounded bg-white mb-4 mt-3 p-4">
                                    <ul class="p-0 m-0">
                                        <li class="d-flex align-items-center justify-content-between my-1"><span class="text-dark fw-medium">Subtotal</span><span class="fw-medium text-muted">$272.20</span></li>
                                        <li class="d-flex align-items-center justify-content-between my-1"><span class="text-dark fw-medium">GST</span><span class="fw-medium text-muted">$16.40</span></li>
                                        <li class="d-flex align-items-center justify-content-between my-1"><span class="text-dark fw-medium">Tax</span><span class="fw-medium text-muted">$18.20</span></li>
                                        <li class="d-flex align-items-center justify-content-between my-1"><span class="text-dark fw-medium">Discount</span><span class="fw-medium text-danger">-$12.10</span></li>
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
    import { ref } from 'vue'
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css'
    const options = ['Philadelphia', 'Nashville', 'San Francisco','San Antonio','Las Vegas','Los Angeles','Kansas City','Jacksonville']
    const selected = ref(null);
</script>