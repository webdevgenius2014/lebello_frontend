<template>
  <div class="bg-[rgb(220,214,205)] flex">
    <div class="bg-[rgb(220,214,205)] m-auto flex mx-12">
      <div id="app" class="flex mx-5">
        <div class="grid grid-cols- sm:grid-cols-2 md:grid-cols-4 gap-14 py-12">
          <div class="px-4" v-for="(section, index) in sections" :key="index">
            <h3 class="mb-2 text-lg font-medium">{{ section?.title }}</h3>
            <div class="text-sm">
              <p
                v-for="(item, i) in section?.items"
                :key="i"
                class="text-[14px] font-thin"
                :class="{ 'mt-8': item && item.text === 'Collection 24' }"
              >
                <a v-if="item?.link" :href="item?.link" target="_blank">{{
                  item?.text
                }}</a>
                <span v-else>{{ item.text }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 my-12 m-auto">
        <h3 class="mb-3">Newsletter Sign Up</h3>
        <div id="mc_embed_signup">
          <form
            action="https://lebello.us8.list-manage.com/subscribe/post?u=dd1c823536a67c191fdf3aa91&amp;id=17b118c684"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate="novalidate"
          >
            <div id="mc_embed_signup_scroll">
              <div class="flex items-center">
                <div class="w-full sm:w-3/4">
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    placeholder="Email Address"
                    required=""
                    class="required email form-control bg-transparent"
                    id="mce-EMAIL"
                    aria-required="true"
                  />
                </div>
                <div class="w-full sm:w-1/4">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button border rounded-3xl border-[#333333] py-2 px-5"
                  />
                </div>
              </div>
              <div class="row">
                <div id="mce-responses" class="clear">
                  <div
                    class="response"
                    id="mce-error-response"
                    style="display: none"
                  ></div>
                  <div
                    class="response"
                    id="mce-success-response"
                    style="display: none"
                  ></div>
                </div>
              </div>
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_dd1c823536a67c191fdf3aa91_17b118c684"
                  tabindex="-1"
                  value=""
                />
              </div>
            </div>
          </form>
        </div>
        <span class="block mt-4 text-sm"
          >© 2024 Lebello All rights reserved.<br />Ropetek®, Knittex® are trademarks of
          Lebello USA</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sections = ref([
  {
    title: "Contact",
    items: [
      { text: "E sales@lebello.com", link: "mailto:sales@lebello.com" },
      { text: "T +1 310 878 4578" },
      { text: "F +1 530 309 4286" },
    ],
  },
  {
    title: "Social",
    items: [
      { text: "FaceBook", link: "#/" },
      { text: "Instagram", link: "#/" },
      { text: "Pinterest", link: "#/" },
      { text: "Houzz", link: "#/" },
      { text: "Youtube", link: "#/" },
    ],
  },
  {
    title: "Sitemap",
    items: [
      { text: "Company" },
      { text: "Contact", link: "#/" },
      { text: "Find a Retailer", link: "#/" },
      { text: "Press", link: "#/" },
    ],
  },
  {
    title: " ",
    items: [
      { text: "Collection 24", link: "#/" },
      { text: "Library & Tools", link: "#/" },
      { text: "Materials", link: "#/" },
      { text: "Search" },
      { text: "Catalogue", link: "#/" },
    ],
  },
]);
</script>
<style scoped></style>
