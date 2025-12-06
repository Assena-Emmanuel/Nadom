<template>
    <div class="row justify-content-center align-items-center g-3">
        <div class="col-xl-4 col-lg-3 col-md-6 col-sm-12">
            <div class="form-group position-relative mb-0">
                <input type="text" class="form-control fw-medium fs-6" placeholder="Search for locality, project">
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="form-groupp fw-medium mb-0 position-relative">
                <div class="position-relative lights-bg">
                    <Multiselect 
                        v-model="selected" 
                        :options="options" 
                        placeholder="All Categories" 
                        :open="true"
                        />
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="form-groupp fw-medium mb-0 position-relative">
                <div class="position-relative lights-bg">
                    <Multiselect 
                        v-model="selected2" 
                        :options="options2" 
                        placeholder="City, Country or zip" 
                        :open="true"
                        />
                </div>
            </div>
        </div>
        
        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-12">
            <div class="form-group mb-0 d-flex align-items-center justify-content-between gap-2">
                <button type="button" class="btn btn-dark full-width fw-medium">Search<i class="bi bi-arrow-right ms-2"></i></button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css'
   const options = ['Health & Fitness', 'Nightlife', 'Services','Apartments','Events','Hospitals','Classified']
   const options2 = ['New York', 'San Diego', 'San Jose','Nashville','San Antonio','Las Vegas','Los Angeles','Kansas City']

   const selected = ref(null);
   const selected2 = ref(null);
</script>
