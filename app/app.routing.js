"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_guard_service_1 = require("./auth-guard.service");
var map_component_1 = require("./map/map.component");
exports.authProviders = [
    auth_guard_service_1.AuthGuard
];
exports.appRoutes = [
    { path: "", redirectTo: "map", pathMatch: 'full' },
    { path: "map", component: map_component_1.MapComponent, pathMatch: 'full' }
];
/*export const appRoutes = [
  { path: "", redirectTo: "/groceries", pathMatch: "full" }
];*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFpRDtBQUNqRCxxREFBbUQ7QUFFdEMsUUFBQSxhQUFhLEdBQUc7SUFDM0IsOEJBQVM7Q0FDVixDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLDRCQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtDQUM5RCxDQUFDO0FBRUY7O0lBRUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9hdXRoLWd1YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gXCIuL21hcC9tYXAuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xuICBBdXRoR3VhcmRcbl07XG5cbmV4cG9ydCBjb25zdCBhcHBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIm1hcFwiLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgIHsgcGF0aDogXCJtYXBcIiwgY29tcG9uZW50OiBNYXBDb21wb25lbnQsIHBhdGhNYXRjaDogJ2Z1bGwnIH1cbl07XG5cbi8qZXhwb3J0IGNvbnN0IGFwcFJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ncm9jZXJpZXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9XG5dOyovXG4iXX0=