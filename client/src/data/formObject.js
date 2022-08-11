

const formObject = {
    date:"",
    time: "",
    patient_information:{
        name:"",
        birthday:"",
        age: 0,
        arrival_date:"",
        arrival_time:"",
        status:"",
        address:"",
        no_of_hours_stayed:0,
        no_of_check_ups:0,
        no_of_tetanus_toxoid_given: 0,
        obs_score:"",
        laboratory_done:{
            cbc:false,
            unalysis:false,
            hbsag:false,
            vdrl:false,
            blood_typing:false,
            ultrasound:false,
            syphilis:false,
        },
        medical_history:{
            hypertension:false,
            thyroid_problems:false,
            heart_problems:false,
            diabetes_mellitus: false,
            others:"",
            ob_hisotry: {
                nsd:"",
                cs: "",
            }
        },
        vital_sign:{
            bp:"",
            hr:"",
            pr:"",
            temp:"",
            blood_type_RH:"",
        },
    },
    physical_exam:{
        head_neck:"",
        heart:"",
        chest:"",
        abdomen:{
            fh:"",
            fht:"",
        },
        pelvis:{
            ie:"",
            cx_dilatation:"",
            effacement:"",
            station:"",
            bow_ruptured:{
                yes:false,
                no:false,
            },
            time:"",
            character:"",
        },
    },
    medication_taken:{
        before_refferal: "",
        during_transport:"",
        diagnostic_and_finding:"",
        reasons_for_referral:"",
        name_and_designation_of_reffering_service_provider:"",
        contact_no:"",
        accomplished_by_health_worker:{
            yes:false,
            no:false,
        }
    }

}
export default formObject