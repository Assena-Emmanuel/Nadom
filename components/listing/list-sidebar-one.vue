<template>
    <div>
        <div class="searchingSidebar pe-xl-5">
            <div class="offcanvas offcanvas-start largeshow" data-bs-scroll="true" tabindex="-1" id="filterSlider" aria-labelledby="filterSliderLabel">
                <div class="offcanvas-header border-bottom py-3">
                    <h3 class="h5">Filters</h3>
                    <button type="button" class="btn-close text-sm d-lg-none" data-bs-dismiss="offcanvas" data-bs-target="#filterSidebar" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body overflow-x-hidden p-4 p-lg-0" id="filterSliderLabel">
                    <div class="searchInner">
                        <div class="search-inner">
                            <div class="filter-search-box mb-4">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search listing..">
                                </div>
                            </div>
                            
                            <div class="prtsTypes mb-4">
                                <div class="filterButton">
                                    <div class="filterFlex">
                                        <input type="radio" class="btn-check" name="ratingsfilter" id="all" checked>
                                        <label class="btn" for="all"><i class="bi bi-star-fill me-1"></i>All</label>
                                    </div>
                                    
                                    <div class="filterFlex">
                                        <input type="radio" class="btn-check" name="ratingsfilter" id="threeplus">
                                        <label class="btn" for="threeplus"><i class="bi bi-star-fill me-1"></i>3.0+</label>
                                    </div>
                                    
                                    <div class="filterFlex">
                                        <input type="radio" class="btn-check" name="ratingsfilter" id="fourplus">
                                        <label class="btn" for="fourplus"><i class="bi bi-star-fill me-1"></i>4.0+</label>
                                    </div>
                                    
                                    <div class="filterFlex">
                                        <input type="radio" class="btn-check" name="ratingsfilter" id="fiveplus">
                                        <label class="btn" for="fiveplus"><i class="bi bi-star-fill me-1"></i>5.0</label>	
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter-search-box mb-4">
                                <div class="filtersearch-title"><h6 class="mb-2 lh-base text-sm text-uppercase fw-medium">Categories</h6></div>
                                <div class="row align-items-center justify-content-between gy-2">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 mb-3">
                        
                                            <div class="form-checks flex-fill">
                                                <input type="checkbox" class="btn-check" id="eatdrink1">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="eatdrink1">Eat & Drink</label>
                                            </div>
                                            
                                            <div class="form-checks flex-fill">
                                                <input type="checkbox" class="btn-check" id="Apartments">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="Apartments">Apartments</label>
                                            </div>
                                            
                                            <div class="form-checks flex-fill">
                                                <input type="checkbox" class="btn-check" id="classifieds1">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="classifieds1">Classified</label>
                                            </div>
                                            
                                            <div class="form-checks flex-fill">
                                                <input type="checkbox" class="btn-check" id="services1" checked>
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="services1">Services</label>
                                            </div>
                                            
                                            <div class="form-checks flex-fill">
                                                <input type="checkbox" class="btn-check" id="gymfitness1">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="gymfitness1">Gym & Fitness</label>
                                            </div>
                                            
                                            <div class="form-checks flex-fill">
                                                <input type="checkbox" class="btn-check" id="nightlife1">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="nightlife1">Night Life</label>
                                            </div>
                                            
                                            <div class="form-checks flex-fill">
                                                <input type="checkbox" class="btn-check" id="coachings1">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="coachings1">Coaching</label>
                                            </div>
                                            
                                            <div class="form-checks flex-fill">
                                                <input type="checkbox" class="btn-check" id="shoppings1">
                                                <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="shoppings1">Shopping</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter-search-box mb-4">
                                <div class="filtersearch-title"><h6 class="mb-2 lh-base text-sm text-uppercase fw-medium">Price Range in USD</h6></div>
                                <div class="row align-items-center justify-content-between">
                                    <div class="col-12">
                                        <div class="searchBar-single-wrap mt-5">
                                            <RangeSlider/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter-search-box mb-4">
                                <div class="filtersearch-title"><h6 class="mb-2 lh-base text-sm text-uppercase fw-medium">Distance Filter in Km</h6></div>
                                <div class="row align-items-center justify-content-between">
                                    <div class="col-12">
                                        <div class="searchBar-single-wrap mt-5">
                                            <RangeSlider/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="filter-search-box mb-4">
                            <div class="filtersearch-title"><h6 class="mb-2 lh-base text-sm text-uppercase fw-medium">Amenities</h6></div>
                                <div class="row align-items-center justify-content-between gy-2">
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="airconditions">
                                            <label class="form-check-label" for="airconditions">Air Condition</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gardens">
                                            <label class="form-check-label" for="gardens">Garden</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="parkings">
                                            <label class="form-check-label" for="parkings">Parking</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="petallow">
                                            <label class="form-check-label" for="petallow">Pet Allow</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="freewifi">
                                            <label class="form-check-label" for="freewifi">Free WiFi</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="breakfast">
                                            <label class="form-check-label" for="breakfast">Breakfast</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="dinner">
                                            <label class="form-check-label" for="dinner">Dinner</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="smoking">
                                            <label class="form-check-label" for="smoking">Smoking</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="swimming">
                                            <label class="form-check-label" for="swimming">Swimming</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group filter_button mb-0">
                                <button type="submit" class="btn btn-primary fw-medium full-width">Save & Update</button>
                            </div>
                        </div>							
                    </div>
                </div>
                
            </div>
        </div>
        <a href="#filterSlider" data-bs-toggle="offcanvas" data-bs-target="#filterSlider" aria-controls="filterSlider" class="fixed-bottom z-sticky d-lg-none filterButtons"><i class="bi bi-funnel"></i>Filter Options</a>
    </div>

</template>

<script setup>
import RangeSlider from './range-slider.vue';


</script>