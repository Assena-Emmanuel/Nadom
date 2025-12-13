<template>
    <section class="explore-section">
    <div class="explore-header">
        <h1>EXPLORE</h1>
        <p>Your curated guide to tourism</p>
    </div>

    <div class="categories">
        <button>Archaeology</button>
        <button>Backpacking</button>
        <button>Beaches</button>
        <button>Birding</button>
        <button>Ecotours</button>
        <button>Hiking</button>
        <button>Culture</button>
    </div>

    <div class="carousel-container">
        <button class="nav-btn left-btn">&#10094;</button>

        <div class="carousel">
            <div class="card">
                <img src="https://picsum.photos/600/400?1" alt="">
                <div class="content">
                    <h3>National Tourism Awards 2025</h3>
                    <p>A night of celebration honoring excellence in tourism...</p>
                    <a href="#" class="read-more">READ MORE →</a>
                </div>
            </div>

            <div class="card">
                <img src="https://picsum.photos/600/400?2" alt="">
                <div class="content">
                    <h3>What’s New for 2026</h3>
                    <p>Discover new experiences and destinations for travelers...</p>
                    <a href="#" class="read-more">READ MORE →</a>
                </div>
            </div>

            <div class="card">
                <img src="https://picsum.photos/600/400?3" alt="">
                <div class="content">
                    <h3>Top 10 Resorts</h3>
                    <p>Explore the best luxury resorts for an unforgettable trip...</p>
                    <a href="#" class="read-more">READ MORE →</a>
                </div>
            </div>
        </div>

        <button class="nav-btn right-btn">&#10095;</button>
    </div>

    <div class="see-all">
        <button>SEE ALL</button>
    </div>
</section>

</template>

<style>
    .explore-section {
    padding: 40px 0;
    background: #f4d269;
}

.explore-header {
    text-align: center;
    margin-bottom: 20px;
}

.explore-header h1 {
    font-size: 48px;
    font-weight: 800;
    color: #c99a0b;
    letter-spacing: 1px;
}

.explore-header p {
    margin-top: -10px;
    font-size: 18px;
    color: #333;
}

.categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 25px;
}

.categories button {
    background: #000;
    color: #fff;
    padding: 6px 18px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.categories button:hover {
    background: #c99a0b;
}

.carousel-container {
    position: relative;
    width: 100%;
}

.carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 25px;
    padding: 10px 30px;
}

.carousel::-webkit-scrollbar {
    display: none;
}

.card {
    min-width: 340px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.card img {
    width: 100%;
    height: 210px;
    object-fit: cover;
}

.card .content {
    padding: 18px;
}

.card h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
}

.card p {
    font-size: 15px;
    color: #555;
}

.read-more {
    display: inline-block;
    margin-top: 10px;
    font-weight: 600;
    color: #000;
}

.nav-btn {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    background: #000;
    color: white;
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 22px;
    cursor: pointer;
    z-index: 10;
}

.left-btn {
    left: 10px;
}

.right-btn {
    right: 10px;
}

.see-all {
    text-align: center;
    margin-top: 20px;
}

.see-all button {
    background: #c99a0b;
    border: none;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
}

</style>