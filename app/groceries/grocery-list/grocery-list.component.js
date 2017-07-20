"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var shared_1 = require("../shared");
var shared_2 = require("../../shared");
var GroceryListComponent = (function () {
    function GroceryListComponent(store) {
        this.loading = new core_1.EventEmitter();
        this.loaded = new core_1.EventEmitter();
        this.listLoaded = false;
        this.store = store;
    }
    GroceryListComponent.prototype.load = function () {
        var _this = this;
        this.loading.next("");
        this.store.load()
            .subscribe(function () {
            _this.loaded.next("");
            _this.listLoaded = true;
        }, function () {
            shared_2.alert("An error occurred loading your grocery list.");
        });
    };
    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    GroceryListComponent.prototype.makeBackgroundTransparent = function (args) {
        var cell = args.ios;
        if (cell) {
            // support XCode 8
            cell.backgroundColor = utils.ios.getter(UIColor, UIColor.clearColor);
        }
    };
    GroceryListComponent.prototype.imageSource = function (grocery) {
        if (grocery.deleted) {
            return grocery.done ? "res://selected" : "res://nonselected";
        }
        return grocery.done ? "res://checked" : "res://unchecked";
    };
    GroceryListComponent.prototype.toggleDone = function (grocery) {
        if (grocery.deleted) {
            grocery.done = !grocery.done;
            return;
        }
        this.store.toggleDoneFlag(grocery)
            .subscribe(function () { }, function () {
            shared_2.alert("An error occurred managing your grocery list.");
        });
    };
    GroceryListComponent.prototype.delete = function (grocery) {
        var _this = this;
        this.loading.next("");
        var successHandler = function () { return _this.loaded.next(""); };
        var errorHandler = function () {
            shared_2.alert("An error occurred while deleting an item from your list.");
            _this.loaded.next("");
        };
        if (grocery.deleted) {
            this.store.permanentlyDelete(grocery)
                .subscribe(successHandler, errorHandler);
        }
        else {
            this.store.setDeleteFlag(grocery)
                .subscribe(successHandler, errorHandler);
        }
    };
    return GroceryListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GroceryListComponent.prototype, "showDeleted", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GroceryListComponent.prototype, "row", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GroceryListComponent.prototype, "loading", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GroceryListComponent.prototype, "loaded", void 0);
GroceryListComponent = __decorate([
    core_1.Component({
        selector: "gr-grocery-list",
        moduleId: module.id,
        templateUrl: "./grocery-list.component.html",
        styleUrls: ["./grocery-list.component.css"],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [shared_1.GroceryService])
], GroceryListComponent);
exports.GroceryListComponent = GroceryListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2NlcnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsbUNBQXFDO0FBRXJDLG9DQUFvRDtBQUNwRCx1Q0FBcUM7QUFXckMsSUFBYSxvQkFBb0I7SUFTL0IsOEJBQVksS0FBcUI7UUFOdkIsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzdCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUd0QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO2FBQ2QsU0FBUyxDQUNSO1lBQ0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUNEO1lBQ0UsY0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQsOERBQThEO0lBQzlELGtEQUFrRDtJQUNsRCx3REFBeUIsR0FBekIsVUFBMEIsSUFBSTtRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVCxrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7SUFDSCxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLE9BQU87UUFDakIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUM7UUFDL0QsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztJQUM1RCxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzdCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7YUFDL0IsU0FBUyxDQUNSLGNBQVEsQ0FBQyxFQUNUO1lBQ0UsY0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQscUNBQU0sR0FBTixVQUFPLE9BQWdCO1FBQXZCLGlCQWVDO1FBZEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxjQUFjLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFwQixDQUFvQixDQUFDO1FBQ2hELElBQUksWUFBWSxHQUFHO1lBQ2pCLGNBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1lBQ2xFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2lCQUNsQyxTQUFTLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztpQkFDOUIsU0FBUyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM3QyxDQUFDO0lBQ0gsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQTNFRCxJQTJFQztBQTFFVTtJQUFSLFlBQUssRUFBRTs7eURBQXNCO0FBQ3JCO0lBQVIsWUFBSyxFQUFFOztpREFBSztBQUNIO0lBQVQsYUFBTSxFQUFFOztxREFBOEI7QUFDN0I7SUFBVCxhQUFNLEVBQUU7O29EQUE2QjtBQUozQixvQkFBb0I7SUFQaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7UUFDM0MsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FVbUIsdUJBQWM7R0FUdEIsb0JBQW9CLENBMkVoQztBQTNFWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5cbmltcG9ydCB7IEdyb2NlcnksIEdyb2NlcnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZFwiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XG5cbmRlY2xhcmUgdmFyIFVJQ29sb3I6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWdyb2NlcnktbGlzdFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2dyb2NlcnktbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZ3JvY2VyeS1saXN0LmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdyb2NlcnlMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgc2hvd0RlbGV0ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvdztcbiAgQE91dHB1dCgpIGxvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHN0b3JlOiBHcm9jZXJ5U2VydmljZTtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHN0b3JlOiBHcm9jZXJ5U2VydmljZSkge1xuICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRpbmcubmV4dChcIlwiKTtcbiAgICB0aGlzLnN0b3JlLmxvYWQoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGVkLm5leHQoXCJcIik7XG4gICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgbG9hZGluZyB5b3VyIGdyb2NlcnkgbGlzdC5cIik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICAvLyBUaGUgZm9sbG93aW5nIHRyaWNrIG1ha2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGVhY2ggY2VsbFxuICAvLyBpbiB0aGUgVUlUYWJsZVZpZXcgdHJhbnNwYXJlbnQgYXMgaXTigJlzIGNyZWF0ZWQuXG4gIG1ha2VCYWNrZ3JvdW5kVHJhbnNwYXJlbnQoYXJncykge1xuICAgIGxldCBjZWxsID0gYXJncy5pb3M7XG4gICAgaWYgKGNlbGwpIHtcbiAgICAgIC8vIHN1cHBvcnQgWENvZGUgOFxuICAgICAgY2VsbC5iYWNrZ3JvdW5kQ29sb3IgPSB1dGlscy5pb3MuZ2V0dGVyKFVJQ29sb3IsIFVJQ29sb3IuY2xlYXJDb2xvcik7XG4gICAgfVxuICB9XG5cbiAgaW1hZ2VTb3VyY2UoZ3JvY2VyeSkge1xuICAgIGlmIChncm9jZXJ5LmRlbGV0ZWQpIHtcbiAgICAgIHJldHVybiBncm9jZXJ5LmRvbmUgPyBcInJlczovL3NlbGVjdGVkXCIgOiBcInJlczovL25vbnNlbGVjdGVkXCI7XG4gICAgfVxuICAgIHJldHVybiBncm9jZXJ5LmRvbmUgPyBcInJlczovL2NoZWNrZWRcIiA6IFwicmVzOi8vdW5jaGVja2VkXCI7XG4gIH1cblxuICB0b2dnbGVEb25lKGdyb2Nlcnk6IEdyb2NlcnkpIHtcbiAgICBpZiAoZ3JvY2VyeS5kZWxldGVkKSB7XG4gICAgICBncm9jZXJ5LmRvbmUgPSAhZ3JvY2VyeS5kb25lO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmUudG9nZ2xlRG9uZUZsYWcoZ3JvY2VyeSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHsgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgbWFuYWdpbmcgeW91ciBncm9jZXJ5IGxpc3QuXCIpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgZGVsZXRlKGdyb2Nlcnk6IEdyb2NlcnkpIHtcbiAgICB0aGlzLmxvYWRpbmcubmV4dChcIlwiKTtcbiAgICBsZXQgc3VjY2Vzc0hhbmRsZXIgPSAoKSA9PiB0aGlzLmxvYWRlZC5uZXh0KFwiXCIpO1xuICAgIGxldCBlcnJvckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xuICAgICAgdGhpcy5sb2FkZWQubmV4dChcIlwiKTtcbiAgICB9O1xuXG4gICAgaWYgKGdyb2NlcnkuZGVsZXRlZCkge1xuICAgICAgdGhpcy5zdG9yZS5wZXJtYW5lbnRseURlbGV0ZShncm9jZXJ5KVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3NIYW5kbGVyLCBlcnJvckhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnNldERlbGV0ZUZsYWcoZ3JvY2VyeSlcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzSGFuZGxlciwgZXJyb3JIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuIl19