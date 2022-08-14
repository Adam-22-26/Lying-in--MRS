<script>
import { Icon } from "@iconify/vue";
export default {
  name: "HomepageView",
  components: {
    Icon,
  },
};
</script>

<template>
  <!-- other css snap view css -->
  <!-- main -->
  <div class="main">
    <!-- snap-1 -->
    <div class="snap_view_1 relative">
      <!-- snap page 1 -->
      <!-- links wrapper -->
      <div class="flex justify-between p-10 z-20">
        <!-- logo -->
        <div class="max-h-[50px] md:max-h-[80px]">
          <img class="h-full" src="../assets/logo/lying-in-logo.png" alt="" />
        </div>
        <!-- links -->
        <div class="flex items-center gap-5">
          <router-link
            class="text-[19px] whitespace-nowrap md:text-[25px] text-gray-800 font-bold px-3 md:px-7 py-2 rounded-xl hover:bg-white-20/50 transition-all ease-in-out"
            :to="{ name: 'LoginView' }"
            >Login</router-link
          >
          <router-link
            class="text-[19px] whitespace-nowrap md:text-[25px] text-gray-800 font-bold px-3 md:px-7 py-2 rounded-xl hover:bg-white-20/50 transition-all ease-in-out"
            :to="{ name: 'SignupView' }"
            >Sign Up</router-link
          >
        </div>
      </div>
      <div class="h-[full] w-full bg-white-20/50">
        <div class="p-2 md:ml-10 xl:ml-20">
          <p class="text-[36px] md:text-[60px] text-gray-800 font-bold">
            Jennifer B. Alcaraz Lying-in Clinic
          </p>
          <div>
            <p class="text-gray-800 text-[24px] md:text-[36px] font-semibold">
              E. Rodriguez St. Poblacion, Pandi, Bulacan
            </p>
            <div class="flex flex-col gap-2">
              <div class="ml-5 flex gap-2">
                <button class="p-2 bg-darkgreen text-white-20 rounded-full">
                  <Icon icon="fluent:call-32-filled" />
                </button>
                <p
                  class="text-[19px] md:text-[24px] font-semibold text-gray-800"
                >
                  0915-8571 / 09399039734
                </p>
              </div>
              <div class="ml-5 flex gap-2">
                <button class="p-2 bg-darkgreen text-white-20 rounded-full">
                  <Icon icon="akar-icons:facebook-fill" />
                </button>
                <p
                  class="text-[19px] md:text-[24px] font-semibold text-gray-800"
                >
                  @Jennifer-B-Alcaraz-Lying-in-Clinic
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <!-- <div class="bg-gray-700 opacity-25 absolute inset-0"></div> -->
    </div>

    <div class="snap_view_2 relative flex flex-wrap bg-white-100 ">
      <div class="absolute min-h-[100px] bg-gray-700 right-0 left-0 top-0">
      </div>
      <div class="mx-20 my-10 flex-col md:flex-row flex justify-arround w-full z-10 bg-white-20">
        <div class="flex flex-col w-full p-2 ">
          <p class="text-[32px] font-semibold text-green ">CONSULTATION</p>
          <div class="pl-5">
            <p class="text-gray-600 font-semibold">From</p>
            <p class="text-[24px] font-semibold text-gray-800">07:00 AM</p>
          </div>
          <div class="pl-5">
            <p class="text-gray-600 font-semibold">To</p>
            <p class="text-[24px] font-semibold text-gray-800 mt-[-10px]">06:00 PM</p>
          </div>
        </div>

        <div class="flex flex-col w-full p-2 ">
          <p class="text-[32px] font-semibold text-green ">VISITING</p>
          <div class="pl-5">
            <p class="text-gray-600 font-semibold">From</p>
            <p class="text-[24px] font-semibold text-gray-800">07:00 AM</p>
          </div>
          <div class="pl-5">
            <p class="text-gray-600 font-semibold">To</p>
            <p class="text-[24px] font-semibold text-gray-800 mt-[-10px]">06:00 PM</p>
          </div>
        </div>

        <div class="flex flex-col w-full p-2 ">
          <p class="text-[32px] font-semibold text-green ">Schedule for UTZ</p>
          <div class="pl-5">
            <p class="text-gray-600 font-semibold">From</p>
            <p class="text-[24px] font-semibold text-gray-800">02:00 PM</p>
          </div>
          <div class="pl-5">
            <p class="text-gray-600 font-semibold">To</p>
            <p class="text-[24px] font-semibold text-gray-800 mt-[-10px]">04:00 PM</p>
          </div>
        </div>

      </div>
      <div>
        
      </div>
    </div>

    <!-- ##################################################### -->
    <div class="snap_view_3 flex flex-col justify-between">
      <div class="container"></div>

      <footer class="min-h-[300px] bg-[#1B1E24] p-3">
        <p class="text-white-50 text-[30px] font-semibold">About Developers</p>
        <!--  -->
        <div class="flex flex-wrap gap-2 items-center">
          <div class="flex flex-grow gap-2 items-center w-full max-w-[350px]">
            <img
              src=""
              alt=""
              srcset=""
              class="h-[50px] w-[50px] object-contain bg-gray-600 border-[2px] border-gray-100 rounded-full"
            />
            <div class="flex flex-col">
              <p class="text-white-50 text-[25px]">Adam C. Marcaida Jr.</p>
              <div class="flex flex-wrap">
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  Back-End
                </p>
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  Front-End
                </p>
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  UX/UI Designer
                </p>
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  Project Leader
                </p>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="flex flex-grow gap-2 items-center w-full max-w-[350px]">
            <img
              src=""
              alt=""
              srcset=""
              class="h-[50px] w-[50px] bg-gray-600 border-[2px] border-gray-100 rounded-full"
            />
            <div class="flex flex-col">
              <p class="text-white-50 text-[25px]">Ryan Vincent M. Hilario</p>
              <div class="flex flex-wrap">
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  Front-End
                </p>
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  UX/UI Designer
                </p>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="flex flex-grow gap-2 items-center w-full max-w-[350px]">
            <img
              src=""
              alt=""
              srcset=""
              class="h-[50px] w-[50px] bg-gray-600 border-[2px] border-gray-100 rounded-full"
            />
            <div class="flex flex-col">
              <p class="text-white-50 text-[25px]">Oliver Bagos</p>
              <div class="flex flex-wrap">
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  Data Informant
                </p>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="flex flex-grow gap-2 items-center w-full max-w-[350px]">
            <img
              src=""
              alt=""
              srcset=""
              class="h-[50px] w-[50px] bg-gray-600 border-[2px] border-gray-100 rounded-full"
            />
            <div class="flex flex-col">
              <p class="text-white-50 text-[25px]">Keith Clarence Sison</p>
              <div class="flex flex-wrap">
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  Front-End
                </p>
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  UX/UI Designer
                </p>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="flex flex-grow gap-2 items-center w-full max-w-[350px]">
            <img
              src=""
              alt=""
              srcset=""
              class="h-[50px] w-[50px] bg-gray-600 border-[2px] border-gray-100 rounded-full"
            />
            <div class="flex flex-col">
              <p class="text-white-50 text-[25px]">Justine Paul R. Angeles</p>
              <div class="flex flex-wrap">
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  Front-End
                </p>
                <p
                  class="devTag flex flex-grow text-[12px] px-[5px] items-center justify-center font-semibold bg-white-50 w-auto text-center rounded-md m-[2px]"
                >
                  UX/UI Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
