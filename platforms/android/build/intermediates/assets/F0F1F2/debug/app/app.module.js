"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var shared_1 = require("./shared");
var login_module_1 = require("./login/login.module");
var groceries_module_1 = require("./groceries/groceries.module");
var map_component_1 = require("./map/map.component");
var platform = require("platform");
if (platform.isIOS) {
    GMSServices.provideAPIKey("PUT_API_KEY_HERE");
}
shared_1.setStatusBarColors();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        providers: [
            shared_1.BackendService,
            shared_1.LoginService,
            app_routing_1.authProviders
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes),
            login_module_1.LoginModule,
            groceries_module_1.GroceriesModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            map_component_1.MapComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELGtEQUFtRTtBQUNuRSxzREFBdUU7QUFFdkUsNkNBQXlEO0FBQ3pELGlEQUErQztBQUMvQyxtQ0FBNEU7QUFFNUUscURBQW1EO0FBQ25ELGlFQUErRDtBQUMvRCxxREFBbUQ7QUFFbkQsbUNBQXFDO0FBRXJDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25CLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBQ0QsMkJBQWtCLEVBQUUsQ0FBQztBQXVCckIsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBckJyQixlQUFRLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVCx1QkFBYztZQUNkLHFCQUFZO1lBQ1osMkJBQWE7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyx1QkFBUyxDQUFDO1lBQzNDLDBCQUFXO1lBQ1gsa0NBQWU7U0FDaEI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgYXV0aFByb3ZpZGVycywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycywgQmFja2VuZFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZFwiO1xuXG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLm1vZHVsZVwiO1xuaW1wb3J0IHsgR3JvY2VyaWVzTW9kdWxlIH0gZnJvbSBcIi4vZ3JvY2VyaWVzL2dyb2Nlcmllcy5tb2R1bGVcIjtcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gXCIuL21hcC9tYXAuY29tcG9uZW50XCI7XG5cbmltcG9ydCAqIGFzIHBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcbmlmIChwbGF0Zm9ybS5pc0lPUykgeyBcbiAgR01TU2VydmljZXMucHJvdmlkZUFQSUtleShcIlBVVF9BUElfS0VZX0hFUkVcIik7XG59XG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQmFja2VuZFNlcnZpY2UsXG4gICAgTG9naW5TZXJ2aWNlLFxuICAgIGF1dGhQcm92aWRlcnNcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpLFxuICAgIExvZ2luTW9kdWxlLFxuICAgIEdyb2Nlcmllc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBBcHBDb21wb25lbnQsXG4gICAgICBNYXBDb21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==