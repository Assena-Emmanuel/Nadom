<template>
  <section class="py-5">
    <div class="container" style="margin-top: 6em; margin-bottom: 6em;">

      <!-- Titre + accroche -->
      <div class="mb-4">
        <div class="secHeading-wrap text-center">
            <h2 class="sectionHeading fw-bold mb-3">
              <span class="text-primary">{{ $t('visa_administrative') }}</span>
          </h2>
          <p class="text-muted mt-2">{{ $t('visa_description') }}</p>
        </div>
        <!-- <div class="text-center">
          <h2 class="sectionHeading fw-bold mb-3">
              <span class="text-primary">{{ $t('visa_administrative') }}</span>
          </h2>
          <p class="text-muted mt-2">{{ $t('visa_description') }}</p>
        </div> -->
      </div>

      <!-- Bloc explicatif -->
      <div class="row align-items-center g-5">
        <!-- Image illustrative -->
        <div class="col-md-6 u-image img-fluid ">
          <!-- <img
            src="assets/img/index/visa.jpg"
            alt="Passeport et voyage"
            class="img-fluid rounded shadow"
          /> -->
        </div>

        <!-- Texte d'accompagnement -->
        <div class="col-md-6">
          <h2 class="sub" style="margin-top: -20px;">{{ $t('we_guide_you') }}</h2>
          <ul class="list-unstyled">
            <li class="mb-2 fs-5"><i class="bi bi-check-circle-fill text-primary me-2"></i>{{ $t('assist_visa_request') }}</li>
            <li class="mb-2 fs-5"><i class="bi bi-check-circle-fill text-primary me-2"></i>{{ $t('prepare_documents') }}</li>
            <li class="mb-2 fs-5"><i class="bi bi-check-circle-fill text-primary me-2"></i>{{ $t('handle_admin_formalities') }}</li>
          </ul>
          <NuxtLink to="/contact-us" class="btn btn-primary mt-3">{{ $t('learnmore') }}</NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>


<script setup>
import {ref} from "vue"


const visaItems= ref([
        {
          title: 'visa_request',
          text: 'We guide you through the visa request process for each country.',
          icon: 'bi bi-card-checklist'
        },
        {
          title: 'documents',
          text: 'Verification and preparation of required documents.',
          icon: 'bi bi-file-earmark-text'
        },
        {
          title: 'formalities_followup',
          text: 'Assistance in tracking administrative procedures.',
          icon: 'bi bi-clock-history'
        }
])

</script>

<style scoped lang="scss">

.u-image {
    min-height: 535px;
    background-repeat: no-repeat;
    background-image: url(assets/img/index/visa.jpg);
    background-size: cover;
    border-radius: 0 0 50px 0;
    background-attachment: fixed;
    background-position: 50% -10.7241vh;

}

.sub{
    font-size: 2.5rem;
    line-height: 1.1;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Montserrat, sans-serif;
    font-weight: 300;
}

</style>
