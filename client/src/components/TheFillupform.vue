<script>
import DateTimeVue from "./form components/DateTime.vue";
import FormTextInputVue from "./form components/FormTextInput.vue";
import FormNavigateVue from "./form components/FormNavigate.vue";
export default {
  components: {
    DateTimeVue,
    FormTextInputVue,
    FormNavigateVue
  },
};
</script>
<template>
  <!-- form wrapper -->
  <div class=" flex flex-col gap-3 md:m-5 my-2 pb-10">
    <FormNavigateVue />
    <!-- date time wraper -->
    <div class="flex flex-row justify-end">
      <DateTimeVue />
    </div>
    <!-- body form wrapper -->
    <div
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PATIENT INFORMATION</h2>
      <!-- patien information wrapper -->
      <div class="flex flex-col gap-3">
        <!-- full name, birtheday, age warapper -->
        <div class="flex flex-wrap gap-3">
          <!-- full name -->
          <div class="flex-grow">
            <FormTextInputVue
              :label="'Full Name'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <!-- bd, age wrapper -->
          <div class="flex flex-wrap gap-3 flex-grow">
            <!-- birthday -->
            <div class="flex-grow">
              <FormTextInputVue
                :label="'Birthday'"
                :placeholder="'yyyy/mm/dd'"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
            <!-- age -->
            <div class="flex-grow">
              <FormTextInputVue
                :label="'Age'"
                :placeholder="''"
                :is-required="true"
                :input-type="'number'"
              />
            </div>
          </div>
        </div>
        <!-- Arrival date, time , status warapper -->
        <div class="flex flex-wrap gap-3">
          <!-- Arrival date -->
          <div class="flex-grow">
            <FormTextInputVue
              :label="'Arrival Date'"
              :placeholder="'yyyy/mm/dd'"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <!-- time , status warapper -->
          <div class="flex flex-wrap gap-3 flex-grow">
            <!-- date -->
            <div class="flex-grow">
              <FormTextInputVue
                :label="'Arrival Time'"
                :placeholder="'yyyy/mm/dd'"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
            <!-- time -->
            <div class="flex-grow">
              <FormTextInputVue
                :label="'Status'"
                :placeholder="''"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
          </div>
        </div>
        <!-- address -->
        <div class="flex w-full">
          <FormTextInputVue
            :label="'Adress'"
            :placeholder="''"
            :is-required="true"
            :input-type="'text'"
          />
        </div>
        <!-- no. hours stayed and checkups wrapper-->
        <div class="flex flex-wrap gap-3 flex-grow">
          <!-- stayed -->
          <div class="flex-grow">
            <FormTextInputVue
              :label="'No. Of Hours Stayed'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <!-- checkups -->
          <div class="flex-grow">
            <FormTextInputVue
              :label="'No. Of Check-ups'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
        </div>
        <!-- no. tetanus ans ob score wrapper-->
        <div class="flex flex-wrap gap-3 flex-grow">
          <!-- tetanus -->
          <div class="flex-grow">
            <FormTextInputVue
              :label="'No. Of Tetanus Toxide Given'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <!-- ob score -->
          <div class="flex-grow">
            <FormTextInputVue
              :label="'OB Score'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
        </div>
        <!-- loboratory done -->
        <div
          class="border-[1px] border-gray-300 rounded-md p-2 flex flex-col gap-2"
        >
          <h3 class="font-semibold text-[22px] text-gray-700">
            Laboratory Done
          </h3>
          <div class="flex flex-wrap gap-3">
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">CBC</p>
            </div>
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">URINALYSIS</p>
            </div>
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">HBSAG</p>
            </div>
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">BLOOD TYPING</p>
            </div>
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">ULTRA SOUND</p>
            </div>
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">SYPHILIS</p>
            </div>
          </div>
        </div>
        <!-- medical hisotry, ob history wrapper -->
        <div
          class="border-[1px] border-gray-300 rounded-md p-2 flex flex-col gap-2"
        >
          <h3 class="font-semibold text-[22px] text-gray-700">
            Medical History
          </h3>

          <!-- medical history wrapper -->
          <div class="flex flex-wrap gap-3">
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">HYPERTENSION</p>
            </div>
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">THYROID PROBLEMS</p>
            </div>
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">HEART PROBLEMS</p>
            </div>
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <input
                class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                type="checkbox"
                value="true"
              />
              <p class="font-semibold text-gray-600">DIABETES</p>
            </div>
            <div class="flex gap-3 flex-flow min-w-[160px]">
              <FormTextInputVue
                :label="'OTHERS'"
                :label-style="'font-semibold text-gray-600'"
                :placeholder="''"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
          </div>
          <!-- ob history wrapper -->
          <h3 class="font-semibold text-[22px] text-gray-700">OB History</h3>
          <div class="flex flex-wrap gap-3 flex-grow">
            <div class="flex flex-grow">
              <FormTextInputVue
                :label="'NSD'"
                :label-style="'font-semibold text-gray-600'"
                :placeholder="''"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
            <div class="flex flex-grow">
              <FormTextInputVue
                :label="'CS'"
                :label-style="'font-semibold text-gray-600'"
                :placeholder="''"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
          </div>
        </div>
        <!-- vital Sign wrapper -->
        <div
          class="border-[1px] border-gray-300 rounded-md p-2 flex flex-col gap-2"
        >
          <h3 class="font-semibold text-[22px] text-gray-700">Vital Sign</h3>
          <div class="flex flex-wrap gap-3">
            <div class="flex flex-grow">
              <FormTextInputVue
                :label="'BP'"
                :label-style="'font-semibold text-gray-600'"
                :placeholder="''"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
            <div class="flex flex-grow">
              <FormTextInputVue
                :label="'HR'"
                :label-style="'font-semibold text-gray-600'"
                :placeholder="''"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
            <div class="flex flex-grow">
              <FormTextInputVue
                :label="'PR'"
                :label-style="'font-semibold text-gray-600'"
                :placeholder="''"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
            <div class="flex flex-grow">
              <FormTextInputVue
                :label="'TEMP'"
                :label-style="'font-semibold text-gray-600'"
                :placeholder="''"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
            <div class="flex flex-grow">
              <FormTextInputVue
                :label="'BLOOD TYPE/RH'"
                :label-style="'font-semibold text-gray-600'"
                :placeholder="''"
                :is-required="true"
                :input-type="'text'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- physical exam -->
    <div
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PHYSICAL EXAM</h2>
      <div class="border-[1px] border-gray-300 md:rounded-2xl p-3 rounded-md">
        <!-- headneck, heart, chest, abdomen -->
        <div class="flex flex-wrap gap-3">
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'Head/Neck'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'Heart'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'Chest'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <!-- abdomen -->
          <div class="flex flex-flow flex-col">
            <h3 class="font-semibold text-gray-700">Abdomen</h3>
            <div class="flex flex-wrap gap-2 px-3">
              <div class="flex flex-grow">
                <FormTextInputVue
                  :label="'BLOOD TYPE/RH'"
                  :label-style="'font-semibold text-gray-600'"
                  :placeholder="''"
                  :is-required="true"
                  :input-type="'text'"
                />
              </div>
              <div class="flex flex-grow">
                <FormTextInputVue
                  :label="'BLOOD TYPE/RH'"
                  :label-style="'font-semibold text-gray-600'"
                  :placeholder="''"
                  :is-required="true"
                  :input-type="'text'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- pelvis -->
      <div
        class="border-[1px] border-gray-300 rounded-md p-2 flex flex-col gap-2"
      >
        <h3 class="font-semibold text-[22px] text-gray-700">Pelvis</h3>
        <!-- id, cx.dilation, ...character -->
        <div class="flex flex-wrap gap-3">
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'IE'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'Cx. Dilatation'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'Effacement'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'Station'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <!-- bow ruptured -->
          <div class="flex flex-grow gap-3">
            <h3 class="font-semibold text-gray-700">BOW Ruptured</h3>
            <div class="flex flex-row gap-2 items-center">
              <div class="flex gap-3 flex-flow min-w-[60px]">
                <input
                  class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                  type="checkbox"
                  value="true"
                />
                <p class="font-semibold text-gray-600">YES</p>
              </div>
              <div class="flex gap-3 flex-flow min-w-[60px]">
                <input
                  class="formCheckbox text-gray-300 w-[20px] h-[20px]"
                  type="checkbox"
                  value="true"
                />
                <p class="font-semibold text-gray-600">NO</p>
              </div>
            </div>
          </div>
          <!-- time -->
          <div class="flex-grow">
            <FormTextInputVue
              :label="'Time'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <!-- character -->
          <div class="flex-grow">
            <FormTextInputVue
              :label="'Character'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- medication taken -->
    <div
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">MEDICATION TAKEN</h2>
      <!-- before refferal, during -->
      <div class="border-[1px] border-gray-300 md:rounded-2xl p-3 rounded-md">
        <div class="flex flex-wrap gap-3">
          <!-- beforee -->
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'Character'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
          <!-- during -->
          <div class="flex flex-grow">
            <FormTextInputVue
              :label="'Character'"
              :label-style="'font-semibold text-gray-600'"
              :placeholder="''"
              :is-required="true"
              :input-type="'text'"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- progress of labor -->
    <div
      class="flex flex-col gap-3 md:border-[1px] border-gray-300 md:rounded-2xl p-3"
    >
      <h2 class="font-semibold text-[22px] text-green">PROGRESS OF LABOR</h2>

      <!-- diagnosis and finding, reason wrapper -->
      <div
        class="flex flex-col gap-3 border-[1px] border-gray-300 md:rounded-2xl p-3 rounded-md"
      >
        <div>
          <FormTextInputVue
            :label="'Character'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="true"
            :input-type="'text'"
          />
        </div>
        <div>
          <FormTextInputVue
            :label="'Reason/s for Referral (specify)'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="true"
            :input-type="'text'"
          />
        </div>
      </div>
      <!-- designation and contact no. wrapper -->
      <div
        class="flex flex-col gap-3 border-[1px] border-gray-300 md:rounded-2xl p-3 rounded-md"
      >
        <div class="flex flex-glow overflow-hidden">
          <FormTextInputVue
            :label="'Name and Designation of Referring Service Provider '"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="true"
            :input-type="'text'"
          />
        </div>
        <div>
          <FormTextInputVue
            :label="'Contact No.'"
            :label-style="'font-semibold text-gray-600'"
            :placeholder="''"
            :is-required="true"
            :input-type="'text'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<!-- medication taken -->
<!-- <div></div> -->
<!-- progress of labor -->
