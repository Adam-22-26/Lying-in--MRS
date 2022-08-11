const Joi = require("joi").extend(require("@joi/date"));

const formdata_joi_schema = Joi.object().keys({
    date: Joi.string().empty(""),
    time: Joi.string().empty(""),
    patient_information: Joi.object().keys({
      name: Joi.string().required(),
      birthday: Joi.string().empty(""),
      age: Joi.number(),
      arrival_date: Joi.string().empty(""),
      arrival_time: Joi.string().empty(""),
      status: Joi.string().empty(""),
      address: Joi.string().empty(""),
      no_of_hours_stayed: Joi.number(),
      no_of_check_ups: Joi.number(),
      no_of_tetanus_toxoid_given: Joi.number(),
      obs_score: Joi.string().empty(""),
      laboratory_done: Joi.object().keys({
        cbc: Joi.boolean(),
        unalysis: Joi.boolean(),
        hbsag: Joi.boolean(),
        vdrl: Joi.boolean(),
        blood_typing: Joi.boolean(),
        ultrasound: Joi.boolean(),
        syphilis: Joi.boolean(),
      }),
      medical_history: Joi.object().keys({
        hypertension: Joi.boolean(),
        thyroid_problems: Joi.boolean(),
        heart_problems: Joi.boolean(),
        diabetes_mellitus: Joi.boolean(),
        others: Joi.string().empty(""),
        ob_hisotry:Joi.object().keys({
          nsd: Joi.string().empty(""),
          cs: Joi.string().empty(""),
        })
      }),
      vital_sign: Joi.object().keys({
        bp: Joi.string().empty(""),
        hr: Joi.string().empty(""),
        pr: Joi.string().empty(""),
        temp: Joi.string().empty(""),
        blood_type_RH: Joi.string().empty(""),
      }),

    }),
    physical_exam: Joi.object().keys({
      head_neck: Joi.string().empty(""),
      heart: Joi.string().empty(""),
      chest: Joi.string().empty(""),
      abdomen: Joi.object().keys({
        fh: Joi.string().empty(""),
        fht: Joi.string().empty(""),
      }),
      pelvis: Joi.object().keys({
        ie: Joi.string().empty(""),
        cx_dilatation: Joi.string().empty(""),
        effacement: Joi.string().empty(""),
        station: Joi.string().empty(""),
        bow_ruptured: Joi.object().keys({
          yes: Joi.boolean(),
          no: Joi.boolean(),
        }),
        time: Joi.string().empty(""),
        character: Joi.string().empty(""),
      })
    }),
    
    medication_taken: Joi.object().keys({
      before_refferal: Joi.string().empty(""),
      during_transport: Joi.string().empty(""),
      diagnostic_and_finding: Joi.string().empty(""),
      reasons_for_referral: Joi.string().empty(""),
      name_and_designation_of_reffering_service_provider: Joi.string().empty(""),
      contact_no: Joi.string().empty(""),
      accomplished_by_health_worker: Joi.object().keys( {
        yes: Joi.boolean(),
        no: Joi.boolean(),
      }),
    }),
    // return_slip: Joi.object().keys({
    //   date: Joi.date().format(["YYYY-MM-DD", "DD-MM-YYYY"]).utc(),
    //   parents_name: Joi.string().empty(""),
    //   age: Joi.number(),
    //   sex: Joi.string().empty(""),
    //   initial_diagnostic_admitting_impression: Joi.string().empty(""),
    //   action_taken: Joi.string().empty(""),
    //   initial_plan: Joi.string().empty(""),
    // }),
    // contact_number: Joi.string().empty(""),
  });
module.exports = { formdata_joi_schema };
