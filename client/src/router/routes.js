import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import SignupView from "../views/SignupView.vue";
import NewRecordView from "../views/NewRecordView.vue";
import RecordsView from "../views/RecordsView.vue";
import EmployeeView from "../views/EmployeeView.vue";
import TheFormSlip from "../components/TheFormSlip.vue";
import TheFillupform from "../components/TheFillupform.vue";
import VerifyView from "../views/VerifyView.vue";
import HomepageView from "../views/HomepageView.vue";
import AppTopbar from "../components/AppTopbar.vue";
import TheViewform from "../components/TheViewform.vue"
import PageNotFound from "../views/PageNotFoundView.vue"
// TheFillupform
const routes = [
  {
    path: "/",
    name: "HomepageView",
    component: HomepageView,
  },
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
    components: { default: DashboardView },
    meta: {
      requiresAuth: true,
    },
    children: [{ path: "",name:"AppTopbar", component: AppTopbar }],
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
        name: "TheFillupform",
        component: TheFillupform,
      },
      {
        path: "return-slip",
        component: TheFormSlip,
      },
    ],
  },
  {
    path: "/view-records/:id",
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
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];
export default routes;
