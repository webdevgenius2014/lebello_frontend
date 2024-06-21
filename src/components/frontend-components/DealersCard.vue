<template>
  <div class=" mb-10 bg-gray-100 h-[232px]">
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2">
        <a :href="dealer.link" class="cont-link">
          <img :src="dealer.imgSrc" class="w-full h-[200px]" :alt="dealer.name" />
        </a>
        <div class="bg-[#CCCCCCE6] text-white pl-2 py-1">
          <a :href="dealer.link">{{ dealer.location }}</a>
        </div>
      </div>
      <div class="w-full px-4 py-2 sm:w-1/2">
        <div class="card-body">
          <div class="card-text ">
            <p class="uppercase text-textColorBlack">{{ dealer.name }}</p>
            <p class="text-[14px] leading-6 text-textColorBlack font-graphikLight">{{ dealer.location }} <br />
              {{ dealer.address }} <br />
              Tel: {{ dealer.phone }} <br />
              Fax: {{ dealer.fax }} </p>
            <p class="mt-1 text-[14px] text-blue hover:text-green font-graphikLight"><a :href="dealer.link">Contact
                Dealer &gt;</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dealer: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>