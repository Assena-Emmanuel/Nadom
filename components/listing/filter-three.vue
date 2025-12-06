<template>
    <div class="map-content-bxo py-5">
        <div class="filterOption-02 mb-3">
            <div class="row align-items-start justify-content-center g-3">
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="form-group form-border position-relative mb-0">
                        <input type="search" class="form-control fw-medium ps-5" placeholder="What you are looking for?">
                        <span class="position-absolute top-50 start-0 translate-middle text-muted ms-4"><i class="bi bi-search opacity-75"></i></span>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="form-group form-border position-relative mb-0">
                        <input type="search" class="form-control fw-medium ps-5" placeholder="Type location">
                        <span class="position-absolute top-50 start-0 translate-middle text-muted ms-4"><i class="bi bi-crosshair2 opacity-75"></i></span>
                    </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="form-group form-border position-relative mb-0">
                        <input type="text" class="form-control fw-medium" id="input" placeholder="Choose A Date">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="filterOptions-wrap d-flex justify-content-between align-items-center gap-2">
                
            <div class="filter-mobile d-lg-none flex-fill">
                <a href="#filterSlider" data-bs-toggle="offcanvas" data-bs-target="#filterSlider" aria-controls="filterSlider" class="btn btn-md btn-light-primary full-width"><i class="bi bi-funnel me-2"></i>Filter Option</a>
            </div>
            
            <div class="filter-desktop d-none d-lg-block">
                <div class="dropdown d-inline-flex p-0 mx-1">
                    <a href="#" class="py-2 px-3 dropdown-toggle toogleDrops" id="catsfilter" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        Categories
                    </a>
                    <div class="dropdown-menu border shadow-sm">
                        <div class="card rounded-3">
                            <div class="card-body p-4">
                                <div class="row align-items-start gy-2">
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="eatdrink1">
                                            <label class="form-check-label" for="eatdrink1">Eat & Drink</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="apartments1">
                                            <label class="form-check-label" for="apartments1">Apartments</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="classifieds1">
                                            <label class="form-check-label" for="classifieds1">Classified</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="services1">
                                            <label class="form-check-label" for="services1">Services</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="gymfitness1">
                                            <label class="form-check-label" for="gymfitness1">Gym & Fitness</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="nightlife1">
                                            <label class="form-check-label" for="nightlife1">Night Life</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="coachings1">
                                            <label class="form-check-label" for="coachings1">Coaching</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="shoppings1">
                                            <label class="form-check-label" for="shoppings1">Shopping</label>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="dropdown d-inline-flex p-0 mx-1">
                    <a href="#" class="py-2 px-3 dropdown-toggle toogleDrops" id="ratingsfilter" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        Rating Filter
                    </a>
                    <div class="dropdown-menu border shadow-sm">
                        <div class="card rounded-3">
                            <div class="card-body p-4">
                                <div class="filterButton">
                                    
                                    <div class="filterFlex">
                                        <input type="radio" class="btn-check" name="ratingsfilters" id="all" checked>
                                        <label class="btn" for="all"><i class="bi bi-star-fill me-2"></i>All</label>
                                    </div>
                                    
                                    <div class="filterFlex">
                                        <input type="radio" class="btn-check" name="ratingsfilters" id="threeplus">
                                        <label class="btn" for="threeplus"><i class="bi bi-star-fill me-2"></i>3.0+</label>
                                    </div>
                                    
                                    <div class="filterFlex">
                                        <input type="radio" class="btn-check" name="ratingsfilters" id="fourplus">
                                        <label class="btn" for="fourplus"><i class="bi bi-star-fill me-2"></i>4.0+</label>
                                    </div>
                                    
                                    <div class="filterFlex">
                                        <input type="radio" class="btn-check" name="ratingsfilters" id="fourhalf">
                                        <label class="btn" for="fourhalf"><i class="bi bi-star-fill me-2"></i>4.5+</label>	
                                    </div>
                                    
                                    <div class="filterFlex">
                                        <input type="radio" class="btn-check" name="ratingsfilters" id="fiveplus">
                                        <label class="btn" for="fiveplus"><i class="bi bi-star-fill me-2"></i>5.0</label>	
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="dropdown d-inline-flex p-0 mx-1">
                    <a href="#" class="py-2 px-3 dropdown-toggle toogleDrops" id="pricefilter" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        Price Filter
                    </a>
                    <div class="dropdown-menu pt-2 border-0 shadow-sm">
                        <div class="card rounded-3">
                            <div class="card-body">
                                <p class="fw-medium">Price Range in $ USD</p>
                                <div class="searchBar-single-wrap mt-5">
                                    <RangeSlider/>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="dropdown d-inline-flex p-0 mx-1">
                    <a href="#" class="py-2 px-3 dropdown-toggle toogleDrops" id="distancefilter" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        Distance
                    </a>
                    <div class="dropdown-menu pt-2 border-0 shadow-sm">
                        <div class="card rounded-3">
                            <div class="card-body">
                                <p class="fw-medium">Distance Filter Show in Km</p>
                                <div class="searchBar-single-wrap mt-5">
                                    <RangeSlider/>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="dropdown d-inline-flex p-0 mx-1">
                    <a href="#" class="py-2 px-3 dropdown-toggle toogleDrops" id="morefilter" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                        More Filter
                    </a>
                    <div class="dropdown-menu pt-2 border-0 shadow-sm">
                        <div class="card rounded-3">
                            <div class="card-body p-4">
                                <div class="row align-items-start gy-2">
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="goods1">
                                            <label class="form-check-label" for="goods1">Good for Kids</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="dogs1">
                                            <label class="form-check-label" for="dogs1">Dogs Allowed</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="seatings1">
                                            <label class="form-check-label" for="seatings1">Outdoor Seating</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="alcohal1">
                                            <label class="form-check-label" for="alcohal1">Alcohol</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="breakfast1">
                                            <label class="form-check-label" for="breakfast1">Breakfast</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="books1">
                                            <label class="form-check-label" for="books1">Instant Book</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="smokings1">
                                            <label class="form-check-label" for="smokings1">Smoking Allowed</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="wifi1">
                                            <label class="form-check-label" for="wifi1">Free WiFi</label>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="filterSlider" aria-labelledby="filterSliderLabel">
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
                                    <input type="radio" class="btn-check" name="ratingsfilter" id="alls" checked>
                                    <label class="btn" for="alls"><i class="bi bi-star-fill me-1"></i>All</label>
                                </div>
                                
                                <div class="filterFlex">
                                    <input type="radio" class="btn-check" name="ratingsfilter" id="threepluss">
                                    <label class="btn" for="threepluss"><i class="bi bi-star-fill me-1"></i>3.0+</label>
                                </div>
                                
                                <div class="filterFlex">
                                    <input type="radio" class="btn-check" name="ratingsfilter" id="fourpluss">
                                    <label class="btn" for="fourpluss"><i class="bi bi-star-fill me-1"></i>4.0+</label>
                                </div>
                                
                                <div class="filterFlex">
                                    <input type="radio" class="btn-check" name="ratingsfilter" id="fivepluss">
                                    <label class="btn" for="fivepluss"><i class="bi bi-star-fill me-1"></i>5.0</label>	
                                </div>
                                
                            </div>
                        </div>
                        
                        <div class="filter-search-box mb-4">
                            <div class="filtersearch-title"><h6 class="mb-2 lh-base text-sm text-uppercase fw-medium">Categories</h6></div>
                            <div class="row align-items-center justify-content-between gy-2">
                                <div class="col-xl-12 col-lg-12 col-md-12">
                                    <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 mb-3">
                    
                                        <div class="form-checks flex-fill">
                                            <input type="checkbox" class="btn-check" id="eatdrink1s">
                                            <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="eatdrink1s">Eat & Drink</label>
                                        </div>
                                        
                                        <div class="form-checks flex-fill">
                                            <input type="checkbox" class="btn-check" id="Apartmentss">
                                            <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="Apartmentss">Apartments</label>
                                        </div>
                                        
                                        <div class="form-checks flex-fill">
                                            <input type="checkbox" class="btn-check" id="classifieds1s">
                                            <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="classifieds1s">Classified</label>
                                        </div>
                                        <div class="form-checks flex-fill">
                                            <input type="checkbox" class="btn-check" id="services1s" checked>
                                            <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="services1s">Services</label>
                                        </div>
                                        
                                        <div class="form-checks flex-fill">
                                            <input type="checkbox" class="btn-check" id="gymfitness1s">
                                            <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="gymfitness1s">Gym & Fitness</label>
                                        </div>
                                        
                                        <div class="form-checks flex-fill">
                                            <input type="checkbox" class="btn-check" id="nightlife1s">
                                            <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="nightlife1s">Night Life</label>
                                        </div>
                                        
                                        <div class="form-checks flex-fill">
                                            <input type="checkbox" class="btn-check" id="coachings1s">
                                            <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="coachings1s">Coaching</label>
                                        </div>
                                        
                                        <div class="form-checks flex-fill">
                                            <input type="checkbox" class="btn-check" id="shoppings1s">
                                            <label class="btn btn-sm btn-secondary rounded-1 fw-medium full-width" for="shoppings1s">Shopping</label>
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
                                        <input class="form-check-input" type="checkbox" id="airconditionss">
                                        <label class="form-check-label" for="airconditionss">Air Condition</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gardenss">
                                        <label class="form-check-label" for="gardenss">Garden</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="parkingss">
                                        <label class="form-check-label" for="parkingss">Parking</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkboxs" id="petallows">
                                        <label class="form-check-label" for="petallow">Pet Allow</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="freewifis">
                                        <label class="form-check-label" for="freewifis">Free WiFi</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="breakfasts">
                                        <label class="form-check-label" for="breakfasts">Breakfast</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="dinners">
                                        <label class="form-check-label" for="dinners">Dinner</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="smokings">
                                        <label class="form-check-label" for="smokings">Smoking</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="swimmings">
                                        <label class="form-check-label" for="swimmings">Swimming</label>
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
</template>

<script setup>
import RangeSlider from './range-slider.vue';


</script>
