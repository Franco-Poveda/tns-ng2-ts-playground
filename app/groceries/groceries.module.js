"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var groceries_routing_1 = require("./groceries.routing");
var groceries_component_1 = require("./groceries.component");
var grocery_list_component_1 = require("./grocery-list/grocery-list.component");
var item_status_pipe_1 = require("./grocery-list/item-status.pipe");
var GroceriesModule = (function () {
    function GroceriesModule() {
    }
    return GroceriesModule;
}());
GroceriesModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            groceries_routing_1.groceriesRouting
        ],
        declarations: [
            groceries_component_1.GroceriesComponent,
            grocery_list_component_1.GroceryListComponent,
            item_status_pipe_1.ItemStatusPipe
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], GroceriesModule);
exports.GroceriesModule = GroceriesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyaWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2Nlcmllcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHNDQUEyRDtBQUMzRCx5REFBdUQ7QUFDdkQsNkRBQTJEO0FBQzNELGdGQUE2RTtBQUM3RSxvRUFBaUU7QUFlakUsSUFBYSxlQUFlO0lBQTVCO0lBQThCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBL0IsSUFBK0I7QUFBbEIsZUFBZTtJQWIzQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLG9DQUFnQjtTQUNqQjtRQUNELFlBQVksRUFBRTtZQUNaLHdDQUFrQjtZQUNsQiw2Q0FBb0I7WUFDcEIsaUNBQWM7U0FDZjtRQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxlQUFlLENBQUc7QUFBbEIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGdyb2Nlcmllc1JvdXRpbmcgfSBmcm9tIFwiLi9ncm9jZXJpZXMucm91dGluZ1wiO1xuaW1wb3J0IHsgR3JvY2VyaWVzQ29tcG9uZW50IH0gZnJvbSBcIi4vZ3JvY2VyaWVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR3JvY2VyeUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9ncm9jZXJ5LWxpc3QvZ3JvY2VyeS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbVN0YXR1c1BpcGUgfSBmcm9tIFwiLi9ncm9jZXJ5LWxpc3QvaXRlbS1zdGF0dXMucGlwZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIGdyb2Nlcmllc1JvdXRpbmdcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR3JvY2VyaWVzQ29tcG9uZW50LFxuICAgIEdyb2NlcnlMaXN0Q29tcG9uZW50LFxuICAgIEl0ZW1TdGF0dXNQaXBlXG4gIF0sXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBHcm9jZXJpZXNNb2R1bGUge31cbiJdfQ==