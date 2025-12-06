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
                            <h1 class="xl-heading">Elements</h1>
                            <nav id="breadcrumbs" class="breadcrumbs">
                                <ul>
                                    <li><NuxtLink to="#">Home</NuxtLink></li>
                                    <li><NuxtLink to="#">Pages</NuxtLink></li>
                                    <li>Elements</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row align-items-start g-4 mb-5">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Buttons</h4></div>
                            <div class="elementContent">
                                <div class="d-flex align-items-start gap-3 flex-wrap">
                                    <NuxtLink v-for="(item, index) in butttons" :key="index" to="#" :class="item.btnStyle"><i :class="item.icon"></i>{{item.title}}</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Notifications</h4></div>
                            <div class="elementContent">
                                <div v-for="(item, index) in alert" :key="index" :class="item.style">
                                    {{item.title}}
                                    <NuxtLink v-if="item.close" to="#" class="close" data-bs-dismiss="alert" aria-label="Close"></NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-start g-4 mb-5">
                
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Badges</h4></div>
                            <div class="elementContent">
                                <div class="d-flex flex-wrap align-items-start gap-3 mb-3">
                                    <span v-for="(item, index) in badge" :key="index" class="badge rounded-pill" :class="item.style">{{item.title}}</span>
                                </div>
                                
                                <div class="d-flex flex-wrap align-items-start gap-3 mb-3">
                                    <span v-for="(item, index) in badge" :key="index" class="badge badge-xs rounded-pill" :class="item.style">{{item.title}}</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Forms Elements</h4></div>
                            <div class="elementContent">
                                <div class="form-group form-border mb-2">
                                    <input type="text" class="form-control" placeholder="Your text here">
                                </div>
                                
                                <h6>With Icons</h6>
                                <div class="form-group form-border">
                                    <div class="formField icons">
                                        <input type="text" class="form-control" placeholder="Your text here">
                                        <i class="bi bi-search icon"></i>
                                    </div>
                                </div>
                                
                                <h6>Select Form</h6>
                                <div class="form-group">
                                    <Multiselect 
                                        v-model="selected" 
                                        :options="options1" 
                                        placeholder="All Categories" 
                                        :open="true"
                                        class="border"
                                    />
                                </div>
                                
                                <h6>Multi Selection</h6>
                                <div class="form-group">
                                    <Multiselect 
                                        v-model="selected2" 
                                        :options="options1" 
                                        placeholder="All Categories" 
                                        :open="true"
                                        class="border"
                                        :multiple="true"
                                    />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-start g-4 mb-5">
                
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Tab 01</h4></div>
                            <div class="elementContent">
                                <ul class="nav nav-tabs simple-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="design" data-bs-toggle="tab" data-bs-target="#design-pane" type="button" role="tab" aria-controls="design-pane" aria-selected="true">Design</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="development" data-bs-toggle="tab" data-bs-target="#development-pane" type="button" role="tab" aria-controls="development-pane" aria-selected="false">Development</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="contact" data-bs-toggle="tab" data-bs-target="#contact-pane" type="button" role="tab" aria-controls="contact-pane" aria-selected="false">Contact</button>
                                    </li>
                                </ul>
                                <div class="tab-content py-3" id="myTabContent">
                                    <div class="tab-pane fade show active" id="design-pane" role="tabpanel" aria-labelledby="design" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                    <div class="tab-pane fade" id="development-pane" role="tabpanel" aria-labelledby="development-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                    <div class="tab-pane fade" id="contact-pane" role="tabpanel" aria-labelledby="contact" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                </div>	
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Tab 02</h4></div>
                            <div class="elementContent">
                                <ul class="nav nav-pills primary-soft mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="pill" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="pill" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="account-tab" data-bs-toggle="pill" data-bs-target="#account" type="button" role="tab" aria-controls="account" aria-selected="false">Account</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                  <div class="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                </div>	
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Tab 03</h4></div>
                            <div class="elementContent">
                                <ul class="nav nav-pills lightprimary mb-3" id="pills-tab1" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home1-tab" data-bs-toggle="pill" data-bs-target="#home1" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile1-tab" data-bs-toggle="pill" data-bs-target="#profile1" type="button" role="tab" aria-controls="profile1" aria-selected="false">Profile</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="account1-tab" data-bs-toggle="pill" data-bs-target="#account1" type="button" role="tab" aria-controls="account1" aria-selected="false">Account</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                  <div class="tab-pane fade show active" id="home1" role="tabpanel" aria-labelledby="home1-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                  <div class="tab-pane fade" id="profile1" role="tabpanel" aria-labelledby="profile1-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                  <div class="tab-pane fade" id="account1" role="tabpanel" aria-labelledby="account1-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                </div>	
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Tab 04</h4></div>
                            <div class="elementContent">
                                <ul class="nav nav-pills outline mb-3" id="pills-tab2" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home2-tab" data-bs-toggle="pill" data-bs-target="#home2" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile2-tab" data-bs-toggle="pill" data-bs-target="#profile2" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="account2-tab" data-bs-toggle="pill" data-bs-target="#account2" type="button" role="tab" aria-controls="account" aria-selected="false">Account</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                  <div class="tab-pane fade show active" id="home2" role="tabpanel" aria-labelledby="home2-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                  <div class="tab-pane fade" id="profile2" role="tabpanel" aria-labelledby="profile2-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                  <div class="tab-pane fade" id="account2" role="tabpanel" aria-labelledby="account2-tab" tabindex="0"><p>Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs</p></div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-start g-4 mb-5">
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Accordian</h4></div>
                            <div class="elementContent">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                          </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                          </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                          </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="elementWrap">
                            <div class="elementTitle mb-3"><h4 class="fw-medium mb-1">Responsive Table</h4></div>
                            <div class="elementContent">
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
                                        <tr v-for="(item, index) in tableData" :key="index">
                                            <td data-label="Invoice no.">{{item.item}}</td>
                                            <td data-label="Issued Date:">{{item.qtn}}</td>
                                            <td data-label="Due Date:">{{item.rate}}</td>
                                            <td data-label="Total">{{item.qtn * item.rate}}</td>
                                        </tr>
                                    </tbody>
                                </table>	
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
import { ref } from 'vue';
import NavbarDark from '@/components/navbar/navbar-dark.vue';
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import FooterTop from '@/components/footer/footer-top.vue';
import FooterOne from '@/components/footer/footer-one.vue';
import BackToTop from '@/components/back-to-top.vue';
const options1 = ['Eat & Drinking', 'Rental Property', 'Classifieds','Bank Services','Shopping','Fintess & Gym','Coaching','Other Services']

const selected = ref(null);
const selected2 = ref(null);

const tableData = ref([
    {
        item:'Figma Website Design',
        qtn:2,
        rate:20.00
    },
    {
        item:'Website Customization',
        qtn:3,
        rate:30.00
    },
    {
        item:'SEO| SMO Services',
        qtn:1,
        rate:599.00
    },
])

const butttons = ref([
    {
        btnStyle:'btn btn-primary rounded-pill',
        title:'Filled Button',
        icon:''
    },
    {
        btnStyle:'btn btn-primary rounded-pill',
        title:'Filled Icon Button',
        icon:'bi bi-twitter me-2'
    },
    {
        btnStyle:'btn btn-outline-primary rounded-pill',
        title:'Border Button',
        icon:''
    },
    {
        btnStyle:'btn btn-outline-primary rounded-pill',
        title:'Border Icon Button',
        icon:'bi bi-twitter me-2'
    },
    {
        btnStyle:'btn btn-light-primary rounded-pill',
        title:'Light Button',
        icon:''
    },
    {
        btnStyle:'btn btn-light-primary rounded-pill',
        title:'Light Icon Button',
        icon:'bi bi-twitter me-2'
    },
])

const badge = ref([
    {
        title:'Primary',
        style:'badge-primary'
    },
    {
        title:'Info',
        style:'badge-info'
    },
    {
        title:'Secondary',
        style:'badge-secondary'
    },
    {
        title:'Success',
        style:'badge-success'
    },
    {
        title:'Danger',
        style:'badge-danger'
    },
    {
        title:'Dark',
        style:'badge-dark'
    },
])

const alert = ref([
    {
        style:'alert alert-primary',
        title:'A simple primary alert—check it out!',
        close:false
    },
    {
        style:'alert alert-success',
        title:'A simple success alert—check it out!',
        close:false
    },
    {
        style:'alert alert-primary alert-dismissible fade show',
        title:'You should check in on some of those fields below.',
        close:true
    },
])

</script>

<style lang="scss" scoped>

</style>