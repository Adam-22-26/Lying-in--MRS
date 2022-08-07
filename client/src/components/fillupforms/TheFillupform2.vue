<script>
import AppButtonVue from "./AppButton.vue";
// import html2pdf from "html2pdf.js";
import VueHtml2pdf from "vue-html2pdf";
export default {
  name: "TheFillupform",
  components: {
    AppButtonVue,
    VueHtml2pdf,
  },
  created() {
    // console.log(html2pdf)
  },
  mounted() {},
  methods: {
    printForm() {

    },
  },
};
</script>
<template>
  <form ref="html2Pdf" class="fillup_form min-w-[1000px] m-2 mb-20">
    <!-- overflow-auto -->
    <!-- width of paper -->
    <!-- table -->

    <div class="flex item-center justify-center gap-3">
      <div>
        <img
          class="w-[100px]"
          src="../assets/logo/lying-in-logo.png"
          alt="logo"
        />
      </div>
      <div>
        <p class="text-[30px] font-bold text-center">
          Jennifer b. alcaraz lying-in clinic
        </p>
        <p class="text-[20px] font-semibold text-center">
          E. Rodriquez St. Poblacion, Pandi, Bulacan 3014 0915-8571-380 /
          0939-903-9734
        </p>
      </div>
    </div>
    <table
      class="m-auto min-w-[1000px] max-w-[1000px] border-collapse w-full box-border"
    >
      <tr>
        <td class="border-[1px]" colspan="2">
          Date: <input type="text" class="focus:outline-none" />
        </td>
        <td class="border-[1px]" colspan="2">
          Time: <input type="text" class="focus:outline-none" />
        </td>
      </tr>

      <tr>
        <td class="border-[1px] bg-white-100" colspan="4">
          <p>Patient Information</p>
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="2">
          Name: <input type="text" class="focus:outline-none" />
        </td>
        <td class="border-[1px]" colspan="1">
          Birthday: <input type="text" class="focus:outline-none" />
        </td>
        <td class="border-[1px]" colspan="1">
          Age: <input type="text" class="focus:outline-none" />
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="2">
          Arrival Date: <input type="date" class="focus:outline-none" />
        </td>
        <td class="border-[1px]" colspan="1">
          Arrival Time: <input type="time" class="focus:outline-none" />
        </td>
        <td class="border-[1px]" colspan="1">
          Status: <input type="text" class="focus:outline-none" />
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="4">
          Adress: <input type="text" class="focus:outline-none min-w-[900px]" />
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="2">
          No. of hours stayed:<input type="number" class="focus:outline-none" />
        </td>
        <td class="border-[1px]" colspan="2">
          No. of Check-ups: <input type="number" class="focus:outline-none" />
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="2">
          No. of Tetanus Toxoid given:
          <input type="number" class="focus:outline-none" />
        </td>
        <td class="border-[1px]" colspan="2">
          OB Score: <input type="text" class="focus:outline-none" />
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="4">
          <p class="">Laboratory Done : (attach results if available)</p>
          <br />
          <!-- <input type="file"><br/> -->
          <input class="ml-6 mr-2" type="checkbox" name="CBC" value="CBC" />
          <label for="CBC">CBC</label>
          <input
            class="ml-6 mr-2"
            type="checkbox"
            name="URINALYSIS"
            value="URINALYSIS"
          />
          <label for="URINALYSIS">URINALYSIS</label>
          <input class="ml-6 mr-2" type="checkbox" name="HBSAG" value="HBSAG" />
          <label for="HBSAG">HBSAG</label>
          <input
            class="ml-6 mr-2"
            type="checkbox"
            name="BLOOD_TYPING "
            value="BLOOD TYPING "
          />
          <label for="BLOOD_TYPING ">BLOOD TYPING </label>
          <input
            class="ml-6 mr-2"
            type="checkbox"
            name="ULTRASOUND"
            value="ULTRASOUND"
          />
          <label for="ULTRASOUND">ULTRASOUND</label>
          <input
            class="ml-6 mr-2"
            type="checkbox"
            name="SYPHILIS"
            value="SYPHILIS"
          />
          <label for="SYPHILIS">SYPHILIS</label>
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="4">
          <p>Medical History:</p>
          <div>
            <input
              class="ml-6 mr-2"
              type="checkbox"
              name="Hypertension"
              value="Hypertension"
            />
            <label for="Hypertension">Hypertension</label>
            <input
              class="ml-6 mr-2"
              type="checkbox"
              name="Thyroid_Problems"
              value="Thyroid Problems"
            />
            <label for="Thyroid_Problems">Thyroid Problems</label>
            <input
              class="ml-6 mr-2"
              type="checkbox"
              name="Heart_Problems"
              value="Heart Problems"
            />
            <label for="Heart_Problems">Heart Problems</label>
            <input
              class="ml-6 mr-2"
              type="checkbox"
              name="Diabetes_Mellitus"
              value="Diabetes Mellitus"
            />
            <label for="Diabetes_Mellitus">Diabetes Mellitus </label>
            <input
              class="ml-6 mr-2"
              type="checkbox"
              name="others"
              value="others"
            />
            <label for="others">Others: </label>
            <input
              type="text"
              name="others"
              class="border-b-[1px] focus:outline-none"
            />
          </div>
          <div>
            <label for="others">OB History: </label>
            <br />
            <label class="ml-6 mr-2" for="others">NSD: </label>
            <input
              type="text"
              name="NSD"
              class="border-b-[1px] focus:outline-none"
            />

            <label class="ml-6 mr-2" for="CS">CS: </label>
            <input
              type="text"
              name="CS"
              class="border-b-[1px] focus:outline-none"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="4">
          <p>VS:</p>
          <label class="ml-6 mr-2" for="BP">BP: </label>
          <input
            type="text"
            name="BP"
            class="border-b-[1px] focus:outline-none"
          />
          <label class="ml-6 mr-2" for="HR">HR: </label>
          <input
            type="text"
            name="HR"
            class="border-b-[1px] focus:outline-none"
          />
          <label class="ml-6 mr-2" for="PR">PR: </label>
          <input
            type="text"
            name="PR"
            class="border-b-[1px] focus:outline-none"
          />
          <label class="ml-6 mr-2" for="TEMP">TEMP: </label>
          <input
            type="text"
            name="CS"
            class="border-b-[1px] focus:outline-none"
          />
          <label class="ml-6 mr-2" for="BLOOD_TYPE_RH:">BLOOD TYPE/RH: </label>
          <input
            type="text"
            name="BLOOD_TYPE_RH:"
            class="border-b-[1px] focus:outline-none"
          />
        </td>
      </tr>
      <tr>
        <td class="border-[1px] bg-white-100" colspan="4">
          <p>Physical Exam</p>
        </td>
      </tr>
      <tr>
        <td class="border-[1px]" colspan="2">
          Head/Neck: <input type="text" class="focus:outline-none" />
        </td>
        <td class="border-[1px]" colspan="2">
          Heart: <input type="text" class="focus:outline-none" />
        </td>
      </tr>
      <tr>
        <td class="border-[1px]" colspan="2">
          Chest: <input type="text" class="focus:outline-none" />
        </td>
        <td class="border-[1px]" colspan="2">
          <p>Abdomen:</p>
          <label class="ml-6 mr-2" for="FH">FH: </label>
          <input
            type="text"
            name="FH"
            class="border-b-[1px] focus:outline-none"
          />
          <label class="ml-6 mr-2" for="FHt">FHt: </label>
          <input
            type="text"
            name="FHt"
            class="border-b-[1px] focus:outline-none"
          />
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="4">
          <div>
            <p>Pelvis:</p>
            <label class="ml-6 mr-2" for="IE">IE: </label>
            <input
              type="text"
              name="IE"
              class="border-b-[1px] focus:outline-none max-w-[100px]"
            />
            <label class="ml-6 mr-2" for="Cx_Dilatation max-w-[100px]"
              >Cx. Dilatation:
            </label>
            <input
              type="text"
              name="Cx_Dilatation"
              class="border-b-[1px] focus:outline-none max-w-[100px]"
            />
            <label class="ml-6 mr-2" for="Effacement">Effacement: </label>
            <input
              type="text"
              name="Effacement"
              class="border-b-[1px] focus:outline-none max-w-[100px]"
            />
            <label class="ml-6 mr-2" for="Station">Station: </label>
            <input
              type="text"
              name="Station"
              class="border-b-[1px] focus:outline-none max-w-[100px]"
            />
          </div>
          <div>
            <p>BOW Ruptured:</p>
            <input
              type="checkbox"
              name="YES"
              class="border-b-[1px] focus:outline-none max-w-[100px] ml-6 mr-2"
            /><label class="" for="YES">YES </label>
            <input
              type="checkbox"
              name="NO"
              class="border-b-[1px] focus:outline-none max-w-[100px] ml-6 mr-2"
            /><label class="" for="NO">NO </label>

            <label class="ml-6 mr-2" for="Time">Time: </label>
            <input
              type="text"
              name="Time"
              class="border-b-[1px] focus:outline-none max-w-[100px]"
            />
            <label class="ml-6 mr-2" for="Character">Character: </label>
            <input
              type="text"
              name="Character"
              class="border-b-[1px] focus:outline-none max-w-[100px]"
            />
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-[1px] bg-white-100" colspan="4">Medication Taken</td>
      </tr>
      <tr>
        <td class="border-[1px]" colspan="2">
          <label class="ml-6 mr-2" for="Before_Referral"
            >Before Referral:
          </label>
          <input
            type="text"
            name="Before_Referral"
            class="focus:outline-none"
          />
        </td>
        <td class="border-[1px]" colspan="2">
          <label class="ml-6 mr-2" for="During_Transport"
            >During Transport: Before Referral:
          </label>
          <input
            type="text"
            name="During_Transport"
            class="focus:outline-none"
          />
        </td>
      </tr>
      <tr>
        <td class="border-[1px] bg-white-100" colspan="4">
          Progress of Labor (attach Partograph)
        </td>
      </tr>

      <tr>
        <td class="border-[1px]" colspan="4">
          Diagnosis and Finding:
          <input type="text" class="focus:outline-none" />
        </td>
      </tr>
      <tr>
        <td class="border-[1px] min-h-[11px]" colspan="4">
          Reason/s for referral (specify): <br />
          <input type="text" class="focus:outline-none w-full" />
        </td>
      </tr>
      <tr>
        <td class="border-[1px] min-h-[11px]" colspan="2">
          Name and Designation of Referring Service Provider:
          <input type="text" class="focus:outline-none w-full" />
        </td>
        <td class="border-[1px] min-h-[11px]" colspan="2">
          Contact No:
          <input type="text" class="focus:outline-none w-full" />
        </td>
      </tr>
      <tr>
        <td class="border-[1px] min-h-[11px]" colspan="4">
          Signature of Referring Provider:
          <input type="text" class="focus:outline-none w-full" />
        </td>
      </tr>
    </table>
    <div class="max-w-[1000px] min-w-[1000px] m-auto">
      <div class="min-h-[2px] w-full bg-gray-800 mt-10"></div>
      <p class="font-bold text-center w-full">RETURN SLIP</p>
      <table class="w-full">
        <tr>
          <td colspan="3"></td>
          <td colspan="1" class="">
            <p class="font-semibold">Date:</p>
            <input
              type="text"
              class="border-b-[1px] focus:outline-none max-w-[100px] ml-6 mr-2"
            />
          </td>
        </tr>
        <tr>
          <td class="" colspan="2">
            <p class="font-semibold">patient's Name:</p>
            <input
              type="text"
              class="focus:outline-none border-b-[2px] min-w-[400px]"
            />
          </td>
          <td class="" colspan="1">
            <p class="font-semibold">Age:</p>
            <input
              type="text"
              class="focus:outline-none border-b-[2px] w-full"
            />
          </td>
          <td class="" colspan="1">
            <p class="font-semibold">Sex:</p>
            <input
              type="text"
              class="focus:outline-none border-b-[2px] w-full"
            />
          </td>
        </tr>
        <tr class="">
          <td colspan="4">
            <p class="font-semibold">
              Initial Diagnosis/ Admitting Impression:
            </p>
            <input
              type="text"
              class="focus:outline-none border-b-[2px] w-full"
            />
          </td>
        </tr>
        <tr class="">
          <td colspan="4">
            <p class="font-semibold">Action Taken:</p>
            <input
              type="text"
              class="focus:outline-none border-b-[2px] w-full"
            />
          </td>
        </tr>
        <tr class="">
          <td colspan="4">
            <p class="font-semibold">Initial Plan:</p>
            <input
              type="text"
              class="focus:outline-none border-b-[2px] w-full"
            />
          </td>
        </tr>
        <tr>
          <td><br /></td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td colspan="1">
            <input
              type="text"
              value="Juan Dela Cruz"
              class="focus:outline-none border-b-[2px] w-full text-center"
            />
            <p class="text-center font-bold">Signature over Printed Name</p>
            <p class="text-center font-bold">
              Attending Health Provider / Department
            </p>
          </td>
        </tr>
      </table>
      <div class="flex gap-2">
        <p class="font-bold">Facility Contact Number:</p>
        <input type="text" value="09XXXXXXXX" />
      </div>
    </div>
    <div class="exclude w-full flex justify-center gap-3">
      <AppButtonVue
        @click="printForm"
        :button-type="'reset'"
        :label="'Print'"
        :style="'bg-white-50 text-gray-800 hover:bg-green hover:text-white-100 bg-white-300 w-[150px]'"
      />
      <AppButtonVue
        :button-type="'button'"
        :label="'Clear'"
        :style="'bg-white-50 text-gray-800 hover:bg-green hover:text-white-100 bg-white-300 w-[150px]'"
      />
      <AppButtonVue
        :button-type="'submit'"
        :label="'Save'"
        :style="'w-[150px]'"
      />
      <!-- printForm -->
    </div>
  </form>
</template>
