<template>
    <MultiRangeSlider
        :min="barMin"
        :max="barMax"
        :minValue="barMinValue"
        :maxValue="barMaxValue"
        :step="10"
        :rular="true"
        :label="true"
        @input="UpdateValues"
      />
</template>

<script setup>
import MultiRangeSlider from "multi-range-slider-vue";
import { ref } from "vue";

const barMin = ref(0)
const barMax = ref(100)
const barMinValue = ref(10)
const barMaxValue = ref(90)

   
const UpdateValues = (e) => {
    barMinValue.value = e.minValue;
    barMaxValue.value = e.maxValue;
}
</script>
