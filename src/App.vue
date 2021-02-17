<template>
  <v-app>
    <div style="overflow: hidden" class="bg-dark">
      <div class="bg-border ma-5">
        <v-app-bar color="black" dark flat>
          <v-btn depressed text>
            <h2 class>EagleVest.</h2>
          </v-btn>
          <div class="d-flex container mx-auto align-center"></div>

          <v-spacer></v-spacer>
        </v-app-bar>

        <v-main style="overflow: hidden">
          <v-container class="white--text">
            <v-row align="center" justify="start">
              <v-col cols="12" md="6">
                <p
                  class="fs-15 title-text wrap--text"
                  :class="{'title-text__sm wrap':$vuetify.breakpoint.smAndDown}"
                >EagleVest.</p>
                <p class="font-weight-light text-h5">{{ highlightText }}</p>
                <vue-countdown :time="2 * 24 * 60 * 60 * 1000" v-slot="{ days, hours, minutes }">
                  <div>
                    <span
                      class="text-h2 mr-1"
                      :class="{'text-h5':$vuetify.breakpoint.smAndDown}"
                    >{{days.toString().padStart(2, '0')}}</span>
                    <span
                      class="grey--text"
                      :class="{'text-caption':$vuetify.breakpoint.smAndDown}"
                    >{{ days > 1 ? "Days" : "Day" }}</span>
                    <span class="text-h2 mx-4" :class="{'text-h5':$vuetify.breakpoint.smAndDown}">:</span>
                    <span
                      class="text-h2 mr-1"
                      :class="{'text-h5':$vuetify.breakpoint.smAndDown}"
                    >{{hours.toString().padStart(2, '0')}}</span>
                    <span
                      class="grey--text"
                      :class="{'text-caption':$vuetify.breakpoint.smAndDown}"
                    >{{ hours > 1 ? "Hours" : "Hour" }}</span>
                    <span class="text-h2 mx-4" :class="{'text-h5':$vuetify.breakpoint.smAndDown}">:</span>
                    <span
                      class="text-h2 mr-1"
                      :class="{'text-h5':$vuetify.breakpoint.smAndDown}"
                    >{{minutes.toString().padStart(2, '0')}}</span>
                    <span
                      class="grey--text"
                      :class="{'text-caption':$vuetify.breakpoint.smAndDown}"
                    >{{ minutes > 1 ? "Minutes" : "Minute" }}</span>
                  </div>
                </vue-countdown>
              </v-col>
              <v-col>
                <v-img
                  gradient="to top right, rgba(0,0,0,0), rgba(0,0,0,1)"
                  :height="!$vuetify.breakpoint.smAndDown  ? '900' : '300'"
                  :src="require('@/assets/images/eagle.png')"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-row align="start" justify="space-between" class="mt-x mb-16">
                  <v-col cols="12" md="4">
                    <p class="text-h4 d-inline-flex" style="position: relative;">
                      <span style="z-index: 40" class="font-weight-bold">Meet our team.</span>
                      <span class="border-absolute"></span>
                    </p>
                    <p
                      class="font-weight-light text-h5 pr-10"
                    >We are a people of immense zeal and unmatched skills, each of us uniquely complementing one another bblah blah blah</p>
                    <div class="mt-6 d-flex">
                      <div class="avatar-control mr-5" @click="$refs.carousel.prev()">
                        <v-icon color="white">mdi-chevron-left</v-icon>
                      </div>
                      <div class="avatar-control" @click="$refs.carousel.next()">
                        <v-icon color="white">mdi-chevron-right</v-icon>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="7">
                    <div>
                      <VueSlickCarousel ref="carousel" v-bind="settings">
                        <div v-for="(member,i) in teamMembers" :key="i">
                          <div
                            class="text--white slide-box"
                            :class="{'mx-5': !$vuetify.breakpoint.smAndDown}"
                          ></div>
                          <div class="mx-5 mt-4">
                            <h1>{{ member.name }}</h1>
                            <h4 class="font-weight-regular font-italic">{{ member.title }}</h4>
                          </div>
                        </div>
                      </VueSlickCarousel>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row justify="center" class="mt-15">
                  <v-col cols="6" sm="12" md="6">
                    <div class="d-flex flex-column">
                      <v-text-field
                        dark
                        placeholder="youremail@gmail.com"
                        label="Enter email address"
                        filled
                      ></v-text-field>
                      <div class="d-flex justify-center">
                        <v-btn
                          @click="subscribe"
                          :loading="isSubscribing"
                          depressed
                          color="primary"
                          x-large
                        >Join our mailing list</v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
          <v-footer dark color="black">
            <v-container class="mx-auto pt-16">
              <v-row align="center" justify="space-around">
                <v-col cols="3">
                  <h3>EagleVest.</h3>
                  <p class="font-weight-light">{{ highlightText }}</p>
                </v-col>
                <v-col cols="4">
                  <div class="d-flex">
                    <v-icon size="15" class="mr-2">mdi-phone</v-icon>
                    <div>+2347089324817</div>
                  </div>
                  <div class="d-flex mt-3">
                    <v-icon size="15" class="mr-2">mdi-email</v-icon>
                    <div>info@eaglevest.com</div>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="d-flex">
                    <v-btn depressed icon color="transparent">
                      <v-icon color="white">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn depressed icon color="transparent">
                      <v-icon color="white">mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn depressed icon color="transparent">
                      <v-icon color="white">mdi-twitter</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12">
                  <p class="text-center">Created by EagleVest 2021 &nbsp;</p>
                </v-col>
              </v-row>
            </v-container>
          </v-footer>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "App",

  components: {
    VueSlickCarousel
  },

  data: () => ({
    isSubscribing: false,
    highlightText:
      "Empowering students with the tools necessary to secure their finances in the future.",
    teamMembers: [
      {
        name: "Fisayo Adeyemi",
        title: "Founding Partner"
      },
      {
        name: "Totan Olatunji",
        title: "Founding Partner"
      },
      {
        name: "David Ukwu",
        title: "Pounded yam and ewedu"
      },
      {
        name: "Elvis Okhifo",
        title: "Founding Partner"
      }
    ],
    settings: {
      dots: false,
      arrows: false,
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      focusOnSelect: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 2
      // touchThreshold: 5,
    }
  }),
  methods: {
    async subscribe() {
      let mailchimpInstance = "us1";
      let listUniqueId = "503436a001";
      let token = "bc19f1f0e0604a0a04f03a56d19e78aa-us1";

      this.isSubscribing = true;

      let url = `https://${mailchimpInstance}.api.mailchimp.com/3.0/lists/${listUniqueId}/members/`;

      let res = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Basic ${token}`
        },
        body: JSON.stringify({
          email: this.email,
          status: "subscribed"
        })
      })
        .then(res => {
          this.isSubscribing = false;
          return res.json();
        })
        .catch(() => {
          this.isSubscribing = false;
        });

      console.log(res);
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-border {
  border: 6px solid white;
}

.slide-box {
  height: 25rem;
  background-color: blanchedalmond;
}

.avatar-control {
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-text {
  -webkit-text-stroke: 4px white;
  color: transparent;

  &__sm {
    -webkit-text-stroke: 1px white;
    font-size: 6.5rem;
    overflow-wrap: break-word;
    margin-top: 4rem;
  }
}

.wrap {
  &--text {
    overflow-wrap: break-word;
  }
}

.bg-dark {
  background-color: black;
}

.border-absolute {
  border-bottom: 8px solid rgb(187, 187, 77);
  position: absolute;
  right: 0;
  bottom: 3px;
  z-index: 0;
  width: 90%;
}

.mt-x {
  margin-top: 0rem;
}

.h-full {
  height: 85vh;
  overflow: hidden;
}
</style>
