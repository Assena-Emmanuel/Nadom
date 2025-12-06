<template>
    <footer class="footer skin-dark-footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-5 col-lg-12 col-xl-4">
                    <div class="footer-widget pe-xl-4 mb-5">
                        <div class="footerLogo"><img :src="logo" class="img-fluid" width="160" alt="Footer Logo"></div>
                        <div class="footerText"><p>©ListingHub {{year}} Design & Develop By ShreeThemes</p></div>
                        <div class="footerSocialwrap">
                            <ul class="footersocial">
                                <li v-for="(item, index) in footerSocial" :key="index"><NuxtLink to="#" class="social-link"><i :class="item"></i></NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="col-6 col-md-4 offset-md-3 col-lg-3  offset-lg-0 col-xl-2">
                    <div class="footer-widget mb-5 mb-md-5 mb-lg-0">
                        <h4 class="widget-title text-pri">Community</h4>
                        <ul class="footer-menu">
                            <li v-for="(item, index) in footerLink1" :key="index"><NuxtLink to="#">{{item}}</NuxtLink></li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="footer-widget mb-5 mb-md-5 mb-lg-0">
                        <h4 class="widget-title">Getting Started</h4>
                        <ul class="footer-menu">
                            <li v-for="(item, index) in footerLink2" :key="index"><NuxtLink to="#">{{item}}</NuxtLink></li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="footer-widget">
                        <h4 class="widget-title">ListingHub Business</h4>
                        <ul class="footer-menu">
                            <li v-for="(item, index) in footerLink3" :key="index"><NuxtLink to="#">{{item}}</NuxtLink></li>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="footer-widget">
                        <h4 class="widget-title">Get In Touch</h4>
                        <div class="contactInfowrap">
                            <div class="singleinfo">
                                <div class="icons"><i class="bi bi-geo-alt-fill"></i></div>
                                <div class="caps">
                                    <h5 class="title">Angraster 7, Greenhorst<br>Los Angeles QTC564</h5>
                                    <p class="subs">Reach Us</p>											
                                </div>
                            </div>
                            <div class="singleinfo">
                                <div class="icons"><i class="bi bi-telephone-outbound"></i></div>
                                <div class="caps">
                                    <h5 class="title">042 - 526 - 5263</h5>
                                    <p class="subs">Mon - Sat 10am - 6PM</p>											
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import logo from '@/assets/img/logo-light.svg'
import { footerLink1, footerLink2, footerLink3, footerSocial } from '@/data/data';
import { ref } from 'vue';

const year = ref(new Date().getFullYear())
</script>
