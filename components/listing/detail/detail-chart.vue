<template>
    <div class="listingSingleblock mb-4" id="Statistics">
        <div class="SingleblockHeader">
            <a data-bs-toggle="collapse" data-parent="#Statistic" data-bs-target="#Statistic" aria-controls="Statistic" href="#" aria-expanded="false" class="collapsed"><h4 class="listingcollapseTitle">Statistics</h4></a>
        </div>
        
        <div id="Statistic" class="panel-collapse collapse show">
            <div class="card-body p-4 pt-2">
                <Line :data="chartData" :options="chartOptions" />
            </div>
        </div>
    </div>
</template>

<script setup>

import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

// Register chart components
ChartJS.register(Title, Tooltip, LineElement, PointElement, CategoryScale, LinearScale)

// Chart data
const chartData = {
  labels: ['2018', '2019', '2020', '2021', '2022','2023','2024'],
  datasets: [
    {
      label: 'Sales',
      data: [100, 200, 150, 300, 250,280,150],
      borderColor: 'rgb(0 95 175)',
      tension: 0.3
    }
  ]
}

// Chart options
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Monthly Sales Line Chart'
    }
  }
}

</script>
