import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      data:{title: 'Kaspi Store'},
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Details',
    },
  ];
  export default routeConfig;