<template>
    <div class="listingSingleblock mb-4" id="reviews">
        <div class="SingleblockHeader">
            <a data-bs-toggle="collapse" data-parent="#review" data-bs-target="#review" aria-controls="review" href="#" aria-expanded="false" class="collapsed"><h4 class="listingcollapseTitle">Reviews</h4></a>
        </div>
        
        <div id="review" class="panel-collapse collapse show">
            <div class="card-body p-4 pt-2">
                <div class="allreviewsWrapper">
                    <div class="reviewsTitle d-flex flex-column mb-3"><h5>03 Reviews</h5></div>
                    <div class="allreviewsLists mb-4">
                        <div class="singlereviews">
                            <div class="d-flex align-items-start justify-content-between flex-sm-wrap flex-wrap gap-3">
                                <div class="reviewerThumb">
                                    <div class="square--60 circle overflow-hidden"><img :src="team6" class="img-fluid circle" alt="Reviewer Thumb"></div>
                                </div>
                                <div class="reviewerMessage">
                                    <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
                                        <div class="reviewerInfo">
                                            <h6 class="mb-0">Claire H. Jeter</h6>
                                            <p class="text-md mb-0">Posted on 26 Fab 2025</p>
                                        </div>
                                        <div class="reviewsFlexlast">
                                            <div class="d-flex align-items-center justify-content-start gap-1">
                                                <span><i class="fa-solid fa-star text-sm text-warning active"></i></span>
                                                <span><i class="fa-solid fa-star text-sm text-warning active"></i></span>
                                                <span><i class="fa-solid fa-star text-sm text-warning active"></i></span>
                                                <span><i class="fa-solid fa-star text-sm text-warning active"></i></span>
                                                <span><i class="fa-solid fa-star text-sm text-warning active"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="messageDescription">
                                        <p>Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs to be.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="replyReviews">
                                <div class="d-flex align-items-start justify-content-between flex-sm-wrap flex-wrap gap-3">
                                    <div class="reviewerThumb">
                                        <div class="square--60 circle overflow-hidden"><img :src="team4" class="img-fluid circle" alt="Reviewer Thumb"></div>
                                    </div>
                                    <div class="reviewerMessage">
                                        <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
                                            <div class="reviewerInfo">
                                                <h6 class="mb-0">Jack M Kerry</h6>
                                                <p class="text-md mb-0">Posted on 26 Fab 2025</p>
                                            </div>
                                        </div>
                                        <div class="messageDescription">
                                            <p>Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts and designs to be.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="singlereviews d-flex align-items-start justify-content-between flex-sm-wrap flex-wrap gap-3">
                            <div class="reviewerThumb">
                                <div class="square--60 circle overflow-hidden"><img :src="team7" class="img-fluid circle" alt="Reviewer Thumb"></div>
                            </div>
                            <div class="reviewerMessage">
                                <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
                                    <div class="reviewerInfo">
                                        <h6 class="mb-0">Carl M. Gibson</h6>
                                        <p class="text-md mb-0">Posted on 28 Fab 2025</p>
                                    </div>
                                    <div class="reviewsFlexlast">
                                        <div class="d-flex align-items-center justify-content-start gap-1">
                                            <span><i class="fa-solid fa-star text-sm text-warning active"></i></span>
                                            <span><i class="fa-solid fa-star text-sm text-warning active"></i></span>
                                            <span><i class="fa-solid fa-star text-sm text-warning active"></i></span>
                                            <span><i class="fa-solid fa-star text-sm text-warning active"></i></span>
                                            <span><i class="fa-solid fa-star text-sm text-muted disabled"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="messageDescription">
                                    <p>Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we'd like our layouts.</p>														
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="reviewssubmition">
                        <div class="formRow">
                            <div class="row align-items-start gx-xl-3 gx-lg-3">
                                <div class="col-xl-6 col-lg-6 col-md-12">
                                    <div class="form-group form-border">
                                        <input type="email" class="form-control border" placeholder="your@example.com">
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12">
                                    <div class="form-group form-border">
                                        <div class="position-relative">
                                            <select class="select form-control border">
                                                <option value="">Select Rating</option>
                                                <option value="verypoor">1 Star - Very Poor</option>
                                                <option value="poor">2 Star - Poor</option>
                                                <option value="mid">3 Star - Medium</option>
                                                <option value="good">4 Star - Very Good</option>
                                                <option value="verygood">5 Star - Excellent</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12">
                                    <div class="form-group form-border">
                                        <input type="text" class="form-control border" placeholder="Review title">
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12">
                                    <div class="form-group form-border">
                                        <textarea class="form-control border" placeholder="Leave Review Message" style="height: 120px"></textarea>
                                    </div>
                                </div>
                                <div class="col-xl-12 col-lg-12 col-md-12">
                                    <button type="button" class="btn btn-primary fw-medium px-5">Submit Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import team6 from '@/assets/img/team-6.jpg'
import team7 from '@/assets/img/team-7.jpg'
import team4 from '@/assets/img/team-4.jpg'

</script>
