    <template>
        <div>
            <ClientOnly>
                <NavbarAdmin />
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
                                    <h2 class="fw-medium mb-0">Add Listing</h2>
                                </div>

                                <div class="dashCaption p-xl-5 p-3 p-md-4">
                                    <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <div class="card rounded-3 shadow-sm">
                                                <div class="card-header py-4 px-4">
                                                    <h4 class="fs-5 fw-medium"><i class="fa fa-file text-primary me-2"></i>Basic Informations</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label class="lableTitle">Listing Tile<i class="lableTip bi bi-patch-question-fill" data-bs-toggle="tooltip" data-bs-title="Name of your business"></i></label>
                                                                <input type="text" class="form-control rounded" placeholder="Decathlon Sport House">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label class="lableTitle">Category</label>
                                                                <div class="selects border">
                                                                    <Multiselect 
                                                                        v-model="selected2" 
                                                                        :options="options2" 
                                                                        placeholder="All Categories" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label class="lableTitle">Keywords<i class="lableTip bi bi-patch-question-fill" data-bs-toggle="tooltip" data-bs-title="Maximum 10 keywords related with business"></i></label>
                                                                <input type="text" class="form-control rounded" placeholder="Type keywords by comma's">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label class="lableTitle">About Liting</label>
                                                                <textarea class="form-control rounded ht-150" placeholder="Describe your self"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <div class="card rounded-3 shadow-sm">
                                                <div class="card-header py-4 px-4">
                                                    <h4 class="fs-5 fw-medium"><i class="bi bi-geo-alt text-primary me-2"></i>Add Location</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label class="lableTitle">Address</label>
                                                                <input type="text" class="form-control rounded" placeholder="202 Near houset market">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label class="lableTitle">City</label>
                                                                <div class="selects border">
                                                                    <Multiselect 
                                                                        v-model="selected3" 
                                                                        :options="options3" 
                                                                        placeholder="City, Country or zip" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label class="lableTitle">State</label>
                                                                <input type="text" class="form-control rounded" placeholder="">
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label class="lableTitle">Postal Code</label>
                                                                <input type="text" class="form-control rounded" placeholder="">
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label class="lableTitle">Zip-Code</label>
                                                                <input type="text" class="form-control rounded" placeholder="">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <div class="card rounded-3 shadow-sm">
                                                <div class="card-header py-4 px-4">
                                                    <h4 class="fs-5 fw-medium"><i class="bi bi-images text-primary me-2"></i>Logo & Gallery</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row g-4">
                                                        <div class="col-lg-4 col-md-6">
                                                            <label class="lableTitle">Upload Logo</label>
                                                            <form action="/file-upload" class="dropzone" id="single-logo">
                                                                <i class="bi bi-patch-plus"></i>
                                                            </form>
                                                            <label class="smart-text text-md">Maximum file size: 2 MB.</label>
                                                        </div>

                                                        <div class="col-lg-4 col-md-6">
                                                            <label class="lableTitle">Featured Image</label>
                                                            <form action="/file-upload" class="dropzone" id="featured-image">
                                                                <i class="bi bi-patch-plus"></i>
                                                            </form>
                                                            <label class="smart-text text-md">Maximum file size: 2 MB.</label>
                                                        </div>

                                                        <div class="col-lg-4 col-md-12">
                                                            <label class="lableTitle">Image Gallery</label>
                                                            <form action="/file-upload" class="dropzone" id="gallery">
                                                                <i class="bi bi-patch-plus"></i>
                                                            </form>
                                                            <label class="smart-text text-md">Maximum file size: 2 MB.</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <div class="card rounded-3 shadow-sm">
                                                <div class="card-header py-4 px-4">
                                                    <h4 class="fs-5 fw-medium"><i class="bi bi-stopwatch text-primary me-2"></i>Working Hours</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="form-group">
                                                            <div class="row align-items-center g-3">
                                                                <label class="lableTitle col-lg-2 col-md-2">Monday</label>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected" 
                                                                        :options="options" 
                                                                        placeholder="Opening Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected4" 
                                                                        :options="options" 
                                                                        placeholder="Closing Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="row align-items-center g-3">
                                                                <label class="lableTitle col-lg-2 col-md-2">Monday</label>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected5" 
                                                                        :options="options" 
                                                                        placeholder="Opening Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected6" 
                                                                        :options="options" 
                                                                        placeholder="Closing Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="row align-items-center g-3">
                                                                <label class="lableTitle col-lg-2 col-md-2">Monday</label>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected7" 
                                                                        :options="options" 
                                                                        placeholder="Opening Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected8" 
                                                                        :options="options" 
                                                                        placeholder="Closing Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="row align-items-center g-3">
                                                                <label class="lableTitle col-lg-2 col-md-2">Monday</label>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected9" 
                                                                        :options="options" 
                                                                        placeholder="Opening Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected10" 
                                                                        :options="options" 
                                                                        placeholder="Closing Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="row align-items-center g-3">
                                                                <label class="lableTitle col-lg-2 col-md-2">Monday</label>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected11" 
                                                                        :options="options" 
                                                                        placeholder="Opening Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected12" 
                                                                        :options="options" 
                                                                        placeholder="Closing Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="row align-items-center g-3">
                                                                <label class="lableTitle col-lg-2 col-md-2">Monday</label>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected13" 
                                                                        :options="options" 
                                                                        placeholder="Opening Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected14" 
                                                                        :options="options" 
                                                                        placeholder="Closing Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="row align-items-center g-3">
                                                                <label class="lableTitle col-lg-2 col-md-2">Monday</label>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected15" 
                                                                        :options="options" 
                                                                        placeholder="Opening Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                                <div class="col-lg-5 col-md-5">
                                                                    <Multiselect 
                                                                        v-model="selected16" 
                                                                        :options="options" 
                                                                        placeholder="Closing Time" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="form-check mt-4 ps-5">
                                                            <input id="t24" class="form-check-input" name="24-1" type="checkbox">
                                                            <label for="t24" class="form-check-label text-dark">This Business open 7x24</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <div class="card rounded-3 shadow-sm">
                                                <div class="card-header py-4 px-4">
                                                    <h4 class="fs-5 fw-medium"><i class="bi bi-feather text-primary me-2"></i>Features</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="amenitiesFeatures">
                                                        <ul class="p-0 row align-items-start justify-content-start g-4">
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am2" class="form-check-input" name="am2" type="checkbox">
                                                                    <label for="am2" class="form-check-label">Reservations</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am3" class="form-check-input" name="am3" type="checkbox">
                                                                    <label for="am3" class="form-check-label">Vegetarian Options</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am4" class="form-check-input" name="am4"  type="checkbox">
                                                                    <label for="am4" class="form-check-label">Moderate Noise</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am5" class="form-check-input" name="am5" type="checkbox">
                                                                    <label for="am5" class="form-check-label">Good For Kids</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am6" class="form-check-input" name="am6" type="checkbox">
                                                                    <label for="am6" class="form-check-label">Private Lot Parking</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am7" class="form-check-input" name="am7" type="checkbox">
                                                                    <label for="am7" class="form-check-label">Beer & Wine</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am8" class="form-check-input" name="am8" type="checkbox">
                                                                    <label for="am8" class="form-check-label">TV Services</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am9" class="form-check-input" name="am9" type="checkbox">
                                                                    <label for="am9" class="form-check-label">Pets Allow</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am10" class="form-check-input" name="am10" type="checkbox">
                                                                    <label for="am10" class="form-check-label">Offers Delivery</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am11" class="form-check-input" name="am11" type="checkbox">
                                                                    <label for="am11" class="form-check-label">Staff wears masks</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am12" class="form-check-input" name="am12" type="checkbox">
                                                                    <label for="am12" class="form-check-label">Accepts Credit Cards</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am13" class="form-check-input" name="am13" type="checkbox">
                                                                    <label for="am13" class="form-check-label">Offers Catering</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am14" class="form-check-input" name="am14" type="checkbox">
                                                                    <label for="am14" class="form-check-label">Good for Breakfast</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am15" class="form-check-input" name="am15" type="checkbox">
                                                                    <label for="am15" class="form-check-label">Waiter Service</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am16" class="form-check-input" name="am16" type="checkbox">
                                                                    <label for="am16" class="form-check-label">Drive-Thru</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am17" class="form-check-input" name="am17" type="checkbox">
                                                                    <label for="am17" class="form-check-label">Outdoor Seating</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am18" class="form-check-input" name="am18" type="checkbox">
                                                                    <label for="am18" class="form-check-label">Offers Takeout</label>
                                                                </div>
                                                            </li>
                                                            <li class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                                <div class="form-check">
                                                                    <input id="am19" class="form-check-input" name="am19" type="checkbox">
                                                                    <label for="am19" class="form-check-label">Vegan Options</label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <div class="card rounded-3 shadow-sm">
                                                <div class="card-header py-4 px-4">
                                                    <h4 class="fs-5 fw-medium"><i class="bi bi-tags text-primary me-2"></i>Add Menues</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="form-group">
                                                                <label class="lableTitle">Choose Category<i class="lableTip bi bi-patch-question-fill" data-bs-toggle="tooltip" data-bs-title="Choose your Item Category"></i></label>
                                                                <div class="selects border">
                                                                    <Multiselect 
                                                                        v-model="selected17" 
                                                                        :options="options4" 
                                                                        placeholder="All Categories" 
                                                                        :open="true"
                                                                        class="border"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label class="lableTitle">Item Name</label>
                                                                <input type="text" class="form-control rounded" placeholder="Item Name">
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                            <div class="form-group form-border">
                                                                <label class="lableTitle">Item Price in USD</label>
                                                                <input type="text" class="form-control rounded" placeholder="Price">
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div class="d-flex align-items-center justify-content-between gap-3">
                                                                <div class="addItem"><button type="button" class="btn btn-sm btn-light-primary fw-medium rounded-pill"><i class="bi bi-plus-circle me-1"></i>Add Item</button></div>
                                                                <div class="removeItem"><button type="button" class="btn btn-sm btn-light fw-medium rounded-pill"><i class="bi bi-x-circle me-1"></i>Remove Item</button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row align-items-start g-4 mb-lg-5 mb-4">
                                        <div class="col-xl-12 col-lg-12 col-md-12">
                                            <button type="button" class="btn btn-primary rounded-pill fw-medium">Publish & Preview<i class="bi bi-arrow-right-circle ms-2"></i></button>
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
    import Multiselect from 'vue-multiselect'
    import 'vue-multiselect/dist/vue-multiselect.min.css'

    import AdminSidebar from '@/components/admin-sidebar.vue';
    import BackToTop from '@/components/back-to-top.vue';
    import NavbarAdmin from '@/components/navbar/navbar-admin.vue';

    import { onMounted, onBeforeUnmount,ref } from 'vue'
    import Dropzone from 'dropzone'
    import 'dropzone/dist/dropzone.css'

    let logoDropzone, featuredDropzone, galleryDropzone

    const options = ['1 :00 AM', '2 :00 AM', '3 :00 AM','4 :00 AM','5 :00 AM','6 :00 AM','7 :00 AM','8 :00 AM','9 :00 AM','10 :00 AM','11 :00 AM','12 :00 AM','1 :00 PM', '2 :00 PM', '3 :00 PM','4 :00 PM','5 :00 PM','6 :00 PM','7 :00 PM','8 :00 PM','9 :00 PM','10 :00 PM','11 :00 PM','12 :00 PM']
    const options2 = ['Eat & Drinking','Rental Property','Classifieds','Bank Services','Shopping','Fintess & Gym','Coaching','Other Services']
    const options3 = ['Philadelphia','Nashville','San Francisco','San Antonio','Las Vegas','Los Angeles','Kansas City','Jacksonville']
    const options4 = ['Chinees Food','Indian Food','Breakfast','South Indian Food','Fast Food','Los Angeles','Noodles']
    const selected = ref(null);
    const selected2 = ref(null);
    const selected3 = ref(null);
    const selected4 = ref(null);
    const selected5 = ref(null);
    const selected6 = ref(null);
    const selected7 = ref(null);
    const selected8 = ref(null);
    const selected9 = ref(null);
    const selected10 = ref(null);
    const selected11 = ref(null);
    const selected12 = ref(null);
    const selected13 = ref(null);
    const selected14 = ref(null);
    const selected15 = ref(null);
    const selected16 = ref(null);
    const selected17 = ref(null);


    const year = ref(new Date().getFullYear())

    onMounted(() => {
    logoDropzone = new Dropzone('#single-logo', {
        url: '/file-upload',
        maxFilesize: 2,
        acceptedFiles: '.jpg,.jpeg,.png,.svg,.webp',
        maxFiles: 1,
        addRemoveLinks: true,
    })

    featuredDropzone = new Dropzone('#featured-image', {
        url: '/file-upload',
        maxFilesize: 2,
        acceptedFiles: '.jpg,.jpeg,.png,.svg,.webp',
        maxFiles: 1,
        addRemoveLinks: true,
    })

    galleryDropzone = new Dropzone('#gallery', {
        url: '/file-upload',
        maxFilesize: 2,
        acceptedFiles: '.jpg,.jpeg,.png,.svg,.webp',
        maxFiles: 10,
        addRemoveLinks: true,
    })
    })

    onBeforeUnmount(() => {
    logoDropzone?.destroy()
    featuredDropzone?.destroy()
    galleryDropzone?.destroy()
    })

    </script>

    <style lang="scss" scoped></style>