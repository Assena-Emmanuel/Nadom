<template>
    <div>
        <ClientOnly>
            <NavbarAdmin/>
        </ClientOnly>

        <section class="p-0">
            <div class="container-fluid p-0">
                <div class="row user-dashboard g-0">
                    <div class="col-xl-2 col-lg-3 col-md-12">
                        <AdminSidebar/>
                    </div>
                    <div class="col-xl-10 col-lg-9 col-md-12">
                        <div class="user-dashboard-box bg-light">
                            <div class="dashHeader p-xl-5 p-4 pb-xl-0 pb-0 pt-lg-0 pt-5 mt-lg-0 mt-5">
                                <h2 class="fw-medium mb-0">My Profile</h2>
                            </div>
                            <div class="dashCaption p-xl-5 p-3 p-md-4">
                                <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                    <div class="col-xl-8 col-lg-8 col-md-7">
                                        <div class="card rounded-3 shadow-sm mb-lg-5 mb-4">
                                            <div class="card-body p-4">
                                                <div class="row align-items-start">
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                                                        <div class="cardTitle d-flex align-items-center justify-content-start mb-3">
                                                            <h6 class="fw-semibold">Agent Basic information</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row align-items-start">
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>First Name</label>
                                                            <input type="text" class="form-control" placeholder="Daniel">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Last Name</label>
                                                            <input type="text" class="form-control" placeholder="Decuze">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Phone</label>
                                                            <input type="tel" class="form-control" placeholder="5684526582">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Email</label>
                                                            <input type="email" class="form-control" placeholder="danieldecuze@gmail.com">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                                        <div class="form-group form-border">
                                                            <label>Member of</label>
                                                            <input type="text" class="form-control" placeholder="Daniel">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                                        <div class="form-group form-border">
                                                            <label>About Me</label>
                                                            <textarea class="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card rounded-3 shadow-sm mb-lg-5 mb-4">
                                            <div class="card-body p-4">
                                                
                                                <div class="row align-items-start">
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                                                        <div class="cardTitle d-flex align-items-center justify-content-start mb-3">
                                                            <h6 class="fw-semibold">Contact Information</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row align-items-start mb-4">
                                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                                        <div class="form-group form-border">
                                                            <label>Address 1</label>
                                                            <input type="text" class="form-control" placeholder="123 Moobek Marg, Sirathu">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>City</label>
                                                            <input type="text" class="form-control" placeholder="Denver">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>State</label>
                                                            <input type="tel" class="form-control" placeholder="New York">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Country</label>
                                                            <input type="text" class="form-control" placeholder="United State">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Zip Code</label>
                                                            <input type="text" class="form-control" placeholder="HQ4560R">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Latitude</label>
                                                            <input type="text" class="form-control" placeholder="+568452568">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Longitude</label>
                                                            <input type="text" class="form-control" placeholder="-45695824">
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                                <div class="row align-items-start">
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                                                        <div class="cardTitle d-flex align-items-center justify-content-start mb-3">
                                                            <h6 class="fw-semibold">Social Accounts</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row align-items-start">
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Facebook</label>
                                                            <input type="text" class="form-control" placeholder="">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Twitter</label>
                                                            <input type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>LinkedIn</label>
                                                            <input type="tel" class="form-control">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Dribbble</label>
                                                            <input type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Pinterest</label>
                                                            <input type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Vimeo URL</label>
                                                            <input type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Youtube URL</label>
                                                            <input type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Website URL</label>
                                                            <input type="text" class="form-control">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                                        <div class="d-flex align-items-center justify-content-start flex-wrap gap-3 mt-3">
                                                            <button class="btn btn-primary fw-medium flex-fill" type="button">Update Profile</button>
                                                            <button class="btn btn-light-primary fw-medium flex-fill" type="button">Reset Profile</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-body p-4">
                                                
                                                <div class="row align-items-start">
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
                                                        <div class="cardTitle d-flex align-items-center justify-content-start mb-3">
                                                            <h6 class="fw-semibold">Update Password</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="row align-items-start">
                                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                                        <div class="form-group form-border">
                                                            <label>Old Password</label>
                                                            <input type="password" class="form-control" placeholder="">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>New Password</label>
                                                            <input type="password" class="form-control" placeholder="">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                                        <div class="form-group form-border">
                                                            <label>Confirm Password</label>
                                                            <input type="password" class="form-control" placeholder="">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                                        <div class="d-flex align-items-center justify-content-start flex-wrap gap-3 mt-3">
                                                            <button class="btn btn-primary fw-medium flex-fill" type="button">Update Password</button>
                                                            <button class="btn btn-light-primary fw-medium flex-fill" type="button">Delete Account</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-5">
                                        <div class="card rounded-3 shadow-sm">
                                            <div class="card-body py-5 p-4">
                                                <div class="dash-prf-start d-flex flex-column align-items-start justify-content-start">
                                                    <div class="dash-prf-start-upper mx-auto">
                                                        <div class="dash-prf-start-thumb w-40 h-40 mb-2">
                                                            <figure><img :src="user" class="img-fluid circle" alt=""></figure>
                                                        </div>
                                                    </div>
                                                    <div class="dash-prf-start-bottom mx-auto mt-3">
                                                        <div class="upload-btn-wrapper small">
                                                            <button class="btn btn-md btn-light-primary fw-medium">Change Profile Image</button>
                                                            <input type="file" name="myfile">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row align-items-start g-4">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <p class="text-muted m-0">©ListingHub {{year}} Design & Develop By ShreeThemes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <BackToTop/>
    </div>
</template>

<script setup>
import AdminSidebar from '@/components/admin-sidebar.vue';
import user from '@/assets/img/team-2.jpg'
import { ref } from 'vue';

const year = ref(new Date().getFullYear())

</script>

<style lang="scss" scoped>

</style>