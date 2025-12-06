<template>
    <div>
        <ClientOnly>
            <NavbarDark />
        </ClientOnly>

        <section class="bg-cover" :style="{backgroundImage:`url(${bg})`, backgroundColor:'#ffe8ee', backgroundRepeat:'no-repeat'}" >
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-9 col-lg-9 col-md-12">
                        <div class="card card-body shadow-lg border-0 p-4 p-lg-5 mt-lg-0 mt-5">
                            <div class="d-flex justify-content-between align-items-start pb-4 pb-md-5 mb-4 mb-md-5 border-bottom">
                                <div>
                                    <h6>Sugar Co-gen.</h6>
                                    <address>4789 Pickens Way South,<br>Athens, TX 75751,<br>New Orleans, USA </address>
                                    <NuxtLink to="#" class="fw-medium text-primary">hello@sugar.cogen.com</NuxtLink>
                                </div>
                                <img :src="logo" width="150" class="img-fluid" alt="Logo"/>
                            </div>
                            <div class="mb-4">
                                <h3 class="m-0">Tax Invoice <span class="badge badge-success rounded-pill">PAID</span></h3>
                            </div>

                            <div class="row justify-content-between mb-4 mb-md-5">
                                <div class="col-sm">
                                    <h6>Invoice to:</h6>
                                    <div>
                                        <div>Michael J. Jackson</div>
                                        <div>Hari Constructions</div>
                                        <address>1500 Camden Street,<br>Reno, NV 89501</address>
                                    </div>
                                </div>
                                <div class="col-sm col-lg-4">
                                    <dl class="row text-sm-end">
                                        <dt class="col-6"><strong class="fw-semibold text-dark">Invoice No.</strong></dt>
                                        <dd class="col-6 text-end">GS127425</dd>
                                        <dt class="col-6"><strong class="fw-semibold text-dark">Issued Date:</strong></dt>
                                        <dd class="col-6 text-end">15 Sep 2023</dd>
                                        <dt class="col-6"><strong class="fw-semibold text-dark">Due Date:</strong></dt>
                                        <dd class="col-6 text-end">22 Sep 2023</dd>
                                        <dt class="col-6"><strong class="fw-semibold text-dark">Terms</strong></dt>
                                        <dd class="col-6 text-end">Net 30</dd>
                                    </dl>
                                </div>
                            </div>

                            <div>
                                <table class="table table-striped mb-0">
                                    <thead class="bg-light border-top">
                                        <tr>
                                            <th scope="col" class="border-0 text-start">Item</th>
                                            <th scope="col" class="border-0">Quantity</th>
                                            <th scope="col" class="border-0">Rate</th>
                                            <th scope="col" class="border-0">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Invoice no.">Figma Website Design</td>
                                            <td data-label="Issued Date:">2</td>
                                            <td data-label="Due Date:">20.00</td>
                                            <td data-label="Total">40.00</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Invoice no.">Website Customization</td>
                                            <td data-label="Issued Date:">3</td>
                                            <td data-label="Due Date:">30.00</td>
                                            <td data-label="Total">90.0</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Invoice no.">SEO| SMO Services</td>
                                            <td data-label="Issued Date:">1</td>
                                            <td data-label="Due Date:">599.00</td>
                                            <td data-label="Total">599.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="d-flex justify-content-end text-right mb-4 py-4 border-bottom">
                                    <div class="row justify-content-md-end mb-3">
                                        <div class="col-md-8 col-lg-7">
                                            <dl class="row text-sm-end">
                                                <dt class="col-sm-6 fw-semibold text-dark">Subtotal:</dt>
                                                <dd class="col-sm-6">$629.00</dd>
                                                <dt class="col-sm-6 fw-semibold text-dark">Total:</dt>
                                                <dd class="col-sm-6">$629.00</dd>
                                                <dt class="col-sm-6 fw-semibold text-dark">Tax:</dt>
                                                <dd class="col-sm-6">$20.00</dd>
                                                <dt class="col-sm-6 fw-semibold text-dark">Amount paid:</dt>
                                                <dd class="col-sm-6">$649.00</dd>
                                                <dt class="col-sm-6 fw-semibold text-dark">Due balance:</dt>
                                                <dd class="col-sm-6">$0.00</dd>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-small">
                                    <div>
                                        <h4 class="fw-semibold">Thank you!</h4>
                                    </div>
                                    <div>
                                        <p>If you have any questions concerning this invoice, use the following contact information:</p>
                                    </div>
                                    <div>© {{year}} ListingHub Limited.</div>
                                </div>
                            </div>
                        </div>

                        <div class="printInvoice d-block mt-4">
                            <div class="d-flex align-items-center justify-content-center gap-2 w-100">
                                <NuxtLink to="#" class="btn btn-sm btn-outline-primary rounded-pill fw-medium"><i class="bi bi-download me-1"></i>Download</NuxtLink>
                                <NuxtLink to="#" class="btn btn-sm btn-outline-primary rounded-pill fw-medium"><i class="bi bi-printer me-1"></i>Print Invoice</NuxtLink>
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
    import bg from '@/assets/img/auth-bg.png'
    import logo from '@/assets/img/logo.svg'
    import { ref } from 'vue';
    const year = ref(new Date().getFullYear())
</script>
