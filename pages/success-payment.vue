<template>
    <div>

        <ClientOnly>
            <NavbarDark/>
        </ClientOnly>

        <section class="bg-cover" :style="{backgroundImage:`url(${bg})`, backgroundColor:'#ffe8ee'}">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-xl-5 col-lg-7 col-md-9">
                        <div class="confirmsWrap">
                            <div class="confirmsbody d-black mb-4 mt-lg-0 mt-5">
                                <div class="card rounded-4 p-sm-5 p-4">
                                    <div class="card-body p-0">
                                        <div class="checkBox">
                                            <span class="check"><i class="bi bi-patch-check-fill"></i></span>
                                        </div>
                                        <div class="confirmsHeads">
                                            <h3 class="successTitle">Congratulations!</h3>
                                            <p class="successSubtitle">Your order has been received successfully. </p>
                                        </div>

                                        <div class="confirmsInfo">
                                            <ul>
                                                <li>
                                                    <span class="headTitle">Order ID</span>
                                                    <span class="headCaps">54231</span>
                                                </li>
                                                <li>
                                                    <span class="headTitle">Payment Status</span>
                                                    <span class="headCaps"><i class="bi bi-check-circle-fill text-success me-1"></i>Compeleted</span>
                                                </li>
                                                <li>
                                                    <span class="headTitle">Payment Date</span>
                                                    <span class="headCaps">Jul 17 2024, 10:40:25</span>
                                                </li>
                                                <li>
                                                    <span class="headTitle">Total Amount</span>
                                                    <span class="headCaps">$276.85</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
import bg from '@/assets/img/auth-bg.png'
</script>
