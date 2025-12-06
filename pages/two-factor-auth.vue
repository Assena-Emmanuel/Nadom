<template>

    <div class="bg-cover" :style="{backgroundImage:`url(${bg})`, backgroundColor:'#ffe8ee', backgroundRepeat:'no-repeat', height:'100vh'}">
        <div id="main-wrapper">
            <section>
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-xl-5 col-lg-7 col-md-9">
                            <div class="authWrap">
                                <div class="authhead">
                                    <div class="text-center mb-4"><NuxtLink to="/"><img class="img-fluid" :src="logo" width="55" alt="logo"/></NuxtLink></div>
                                </div>

                                <div class="authbody d-black mb-4">
                                    <div class="card rounded-4 p-sm-5 p-4">
                                        <div class="card-body p-0">
                                            <div class="text-center">
                                                <h1 class="mb-2 fs-2">Two Step Verification</h1>
                                                <p class="mb-0">Protect your account more secure.</p>
                                            </div>
                                            <form class="mt-4 text-start">
                                                <div class="form mt-3">
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <p class="fw-medium text-md">Enter the code we have sent you:</p>
                                                            </div>
                                                        </div>
                                                        <div class="row g-4">
                                                            <div class="col">
                                                                <div class="border">
                                                                    <input type="text" class="form-control border border-2 br-dashed text-center fs-4">
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="border">
                                                                    <input type="text" class="form-control border border-2 br-dashed text-center fs-4">
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="border">
                                                                    <input type="text" class="form-control border border-2 br-dashed text-center fs-4">
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="border">
                                                                    <input type="text" class="form-control border border-2 br-dashed text-center fs-4">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                                                        <div class="modal-flex-first">
                                                            <span class="text-md">Don't Get a Code?</span>
                                                        </div>
                                                        <div class="modal-flex-last">
                                                            <NuxtLink to="#" class="text-primary fw-medium text-decoration-underline">Click to Resend</NuxtLink>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <button type="submit" class="btn btn-primary full-width fw-medium">Submit & Verify</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="authfooter">
                                    <div class="text-center">
                                        <p class="text-dark mb-0">Back to<NuxtLink to="/login" class="fw-medium text-primary"> Sign In</NuxtLink></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
    import bg from '@/assets/img/auth-bg.png'
    import logo from '@/assets/img/icon.png'
</script>

<style lang="scss" scoped></style>