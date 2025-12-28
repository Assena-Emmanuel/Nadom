<template>
    <section class="text-center position-relative" style="background-color:#fff5ed; margin-top: 100px;" id="etude">
        <div class="">
                
                <div class="position-absolute w-100 d-flex justify-content-center" style="top: -80px; left: 50%; transform: translateX(-50%);">

                    <div class="mx-auto" style="background-color: #fff5ed; height: 500px; width: 1100px; opacity: 0.95; border-radius: 0 0 10px 10px;">

                        <div class="secHeading-wrap text-center pt-5 fade-up" ref="studiesRef">
    
                            <!-- Titre principal moderne -->
                            <h2 class="sectionHeading fw-bold mb-3">
                                <span class="text-primary">{{ $t('studies_in_china') }}</span>
                            </h2>

                            <!-- Sous-texte -->
                            <p v-appear="'zoom-in'" class="lead fs-5 mb-4" style="max-width: 700px; margin: 0 auto; font-size: 18px;">
                                Nous vous accompagnons de l’orientation jusqu’à l’arrivée sur le campus,
                                avec un suivi complet et professionnel.
                            </p>

                            <!-- Liste des avantages --> 
                            <div v-appear="'zoom-in'" class="mt-4 mb-4" style="max-width: 650px; margin: 0 auto;">
                                <ul class="list-unstyled fs-5 text-start mx-auto d-inline-block">
                                    <li class="mb-2">✔️ Inscription dans les universités chinoises</li>
                                    <li class="mb-2">✔️ Assistance Visa Étudiant</li>
                                    <li class="mb-2">✔️ Préparation du dossier et traduction</li>
                                    <li class="mb-2">✔️ Accueil à l'aéroport + installation</li>
                                </ul>
                            </div>

                            <!-- Boutons CTA -->
                            <div v-appear="'fade-up'" class="d-flex justify-content-center gap-3 mt-3">

                                <NuxtLink 
                                    to="/etudes" 
                                    class="btn btn-primary px-4 py-2 fw-semibold"
                                    style="background: linear-gradient(90deg, #662E63, #9E595F, #B5720F); border: none; font-size: 17px;"
                                >
                                    Découvrir les universités
                                </NuxtLink>

                                <NuxtLink 
                                    to="/contact" 
                                    class="btn btn-outline-dark px-4 py-2 fw-semibold"
                                    style="font-size: 17px;"
                                >
                                    Faire évaluer mon dossier
                                </NuxtLink>

                            </div>
                        </div>


                    </div>

                </div>

                
                <!-- <div class="">
                    <div class="workingCaption">
                        
                        <div class="workingDemo mb-lg-5 mb-4">
                            <div class="row align-items-center justify-content-center g-3">
                                <div class="col-xl-8 col-lg-8 col-md-8">
                                    <div class="form-group form-border position-relative m-0">
                                        <input type="tel" class="form-control fw-medium ps-5" placeholder="41 256 524 5485">
                                        <span class="position-absolute top-50 start-0 translate-middle-y fs-5 ms-3 text-primary"><i class="bi bi-phone"></i></span>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4">
                                    <div class="form-group m-0">
                                        <button type="button" class="btn btn-primary fw-medium w-100">Get Free Demo</button>	
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="workingVideo">
                            <div class="workingVideobox">
                                <NuxtLink to="#" class="d-inline-flex align-items-center justify-content-start gap-3">
                                    <span class="square--50 circle bg-white text-primary shadow-sm"><i class="bi bi-play-fill fs-4"></i></span>
                                    <span class="fw-semibold text-dark">See how ListingHub work online</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div> -->
            
            </div>
    </section>
</template>

<script setup>
    import etude from '@/assets/img/index/etude.jpg'
</script>
