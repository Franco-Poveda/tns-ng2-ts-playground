"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_guard_service_1 = require("./auth-guard.service");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
/*export const appRoutes = [
    { path: "", redirectTo: "map", pathMatch: 'full' },
    { path: "map", component: MapComponent, pathMatch: 'full' }
];*/
exports.appRoutes = [
    { path: "", redirectTo: "/groceries", pathMatch: "full" }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFpRDtBQUdwQyxRQUFBLGFBQWEsR0FBRztJQUMzQiw4QkFBUztDQUNWLENBQUM7QUFFRjs7O0lBR0k7QUFFUyxRQUFBLFNBQVMsR0FBRztJQUN2QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBQzFELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gXCIuL21hcC9tYXAuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xuICBBdXRoR3VhcmRcbl07XG5cbi8qZXhwb3J0IGNvbnN0IGFwcFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwibWFwXCIsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgeyBwYXRoOiBcIm1hcFwiLCBjb21wb25lbnQ6IE1hcENvbXBvbmVudCwgcGF0aE1hdGNoOiAnZnVsbCcgfVxuXTsqL1xuXG5leHBvcnQgY29uc3QgYXBwUm91dGVzID0gW1xuICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2dyb2Nlcmllc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH1cbl07XG4iXX0=