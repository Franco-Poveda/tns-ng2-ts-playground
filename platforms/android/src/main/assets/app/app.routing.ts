import { AuthGuard } from "./auth-guard.service";
import { MapComponent } from "./map/map.component";

export const authProviders = [
  AuthGuard
];

export const appRoutes = [
    { path: "", redirectTo: "map", pathMatch: 'full' },
    { path: "map", component: MapComponent, pathMatch: 'full' }
];

/*export const appRoutes = [
  { path: "", redirectTo: "/groceries", pathMatch: "full" }
];*/
