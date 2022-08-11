const mongoose = require("mongoose");
const patient_form_schema = new mongoose.Schema({
        date:{type : String},
        time: {type:String},
        patient_information:{
            name:{type: String},
            birthday:{type: String},
            age: {type: Number},
            arrival_date: {type : String},
            arrival_time:{type: String},
            status:{type: String},
            address:{type: String},
            no_of_hours_stayed:{type: Number},
            no_of_check_ups:{type: Number},
            no_of_tetanus_toxoid_given: {type: Number},
            obs_score:{type: String},
            laboratory_done:{
                cbc:{type: Boolean},
                unalysis:{type: Boolean},
                hbsag:{type: Boolean},
                vdrl:{type: Boolean},
                blood_typing:{type: Boolean},
                ultrasound:{type: Boolean},
                syphilis:{type: Boolean},
            },
            medical_history:{
                hypertension:{type: Boolean},
                thyroid_problems:{type: Boolean},
                heart_problems:{type: Boolean},
                diabetes_mellitus: {type: Boolean},
                others:{type: String},
                ob_hisotry: {
                    nsd:{type:String}, 
                    cs: {type: String}
                }
            },
            vital_sign:{
                bp:{type: String},
                hr:{type: String},
                pr:{type: String},
                temp:{type: String},
                blood_type_RH:{type: String},
            },
            
        },
        // ---
        physical_exam:{
            head_neck:{type: String},
            heart:{type: String},
            chest:{type: String},
            abdomen:{
                fh:{type: String},
                fht:{type: String},
            },
            pelvis:{
                ie:{type: String},
                cx_dilatation:{type: String},
                effacement:{type: String},
                station:{type: String},
                bow_ruptured:{
                    yes:{type: Boolean},
                    no:{type: Boolean},
                },
                time:{type: String},
                character:{type: String},
            },
        },
        medication_taken:{
            before_refferal: {type: String},
            during_transport:{type: String},
            diagnostic_and_finding:{type: String},
            reasons_for_referral:{type: String},
            name_and_designation_of_reffering_service_provider:{type: String},
            contact_no:{type: String},
            accomplished_by_health_worker:{
                yes:{type: Boolean},
                no:{type: Boolean},
            }
        }

})

module.exports = patient_form_schema
        // return_slip:{
        //     date:{type: Date},
        //     parents_name:{type: String},
        //     age:{type: Number},
        //     sex:{type: String},
        //     initial_diagnostic_admitting_impression:{type: String},
        //     action_taken:{type: String},
        //     initial_plan:{type: String},
        // },
        // contact_number:{type: String},