import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import SignupView from "../views/SignupView.vue";
import NewRecordView from "../views/NewRecordView.vue";
import RecordsView from "../views/RecordsView.vue";
import EmployeeView from "../views/EmployeeView.vue";
import TheFormSlip from "../components/TheFormSlip.vue";
import TheFillupform from "../components/TheFillupform.vue";
import VerifyView from "../views/VerifyView.vue";
import ManageAccount from "../views/ManageAccount.vue";
// TheFillupform
const routes = [
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "SignupView",
    component: SignupView,
  },
  {
    path: "/verify",
    name: "VerifyView",
    component: VerifyView,
  },

  {
    path: "/dashboard",
    name: "DashboardView",
    component: DashboardView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/new-record",
    name: "NewRecordView",
    component: NewRecordView,
    meta: {
      requiresAuth: true,
      basePath: "/new-record",
    },
    children: [
      {
        path: "form",
        component: TheFillupform,
      },
      {
        path: "return-slip",
        component: TheFormSlip,
      },
    ],
  },
  {
    path: "/view-records",
    name: "RecordsView",
    component: RecordsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/employee",
    name: "EmployeeView",
    component: EmployeeView,
    meta: {
      requiresAuth: true,
    },

  },
];
export default routes;
