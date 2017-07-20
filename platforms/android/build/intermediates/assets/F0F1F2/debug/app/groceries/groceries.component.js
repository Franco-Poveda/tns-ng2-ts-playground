"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var page_1 = require("ui/page");
var SocialShare = require("nativescript-social-share");
var shared_1 = require("./shared");
var shared_2 = require("../shared");
var GroceriesComponent = (function () {
    function GroceriesComponent(router, store, loginService, page) {
        this.router = router;
        this.store = store;
        this.loginService = loginService;
        this.page = page;
        this.grocery = "";
        this.isShowingRecent = false;
        this.isLoading = false;
    }
    GroceriesComponent.prototype.ngOnInit = function () {
        this.isAndroid = !!this.page.android;
        this.page.actionBarHidden = true;
        this.page.className = "list-page";
    };
    // Prevent the first textfield from receiving focus on Android
    // See http://stackoverflow.com/questions/5056734/android-force-edittext-to-remove-focus
    GroceriesComponent.prototype.handleAndroidFocus = function (textField, container) {
        if (container.android) {
            container.android.setFocusableInTouchMode(true);
            container.android.setFocusable(true);
            textField.android.clearFocus();
        }
    };
    GroceriesComponent.prototype.showActivityIndicator = function () {
        this.isLoading = true;
    };
    GroceriesComponent.prototype.hideActivityIndicator = function () {
        this.isLoading = false;
    };
    GroceriesComponent.prototype.add = function (target) {
        var _this = this;
        // If showing recent groceries the add button should do nothing.
        if (this.isShowingRecent) {
            return;
        }
        var textField = this.groceryTextField.nativeElement;
        if (this.grocery.trim() === "") {
            // If the user clicked the add button, and the textfield is empty,
            // focus the text field and return.
            if (target === "button") {
                textField.focus();
            }
            else {
                // If the user clicked return with an empty text field show an error.
                shared_2.alert("Enter a grocery item");
            }
            return;
        }
        // Dismiss the keyboard
        // TODO: Is it better UX to dismiss the keyboard, or leave it up so the
        // user can continue to add more groceries?
        textField.dismissSoftInput();
        this.showActivityIndicator();
        this.store.add(this.grocery)
            .subscribe(function () {
            _this.grocery = "";
            _this.hideActivityIndicator();
        }, function () {
            shared_2.alert("An error occurred while adding an item to your list.");
            _this.hideActivityIndicator();
        });
    };
    GroceriesComponent.prototype.toggleRecent = function () {
        var _this = this;
        if (!this.isShowingRecent) {
            this.isShowingRecent = true;
            return;
        }
        this.showActivityIndicator();
        this.store.restore()
            .subscribe(function () {
            _this.isShowingRecent = false;
            _this.hideActivityIndicator();
        }, function () {
            shared_2.alert("An error occurred while adding groceries to your list.");
            _this.hideActivityIndicator();
        });
    };
    GroceriesComponent.prototype.showMenu = function () {
        var _this = this;
        dialogs_1.action({
            message: "What would you like to do?",
            actions: ["Perfil", "Log Off"],
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result === "Perfil") {
                _this.share();
            }
            else if (result === "Log Off") {
                _this.logoff();
            }
        });
    };
    GroceriesComponent.prototype.share = function () {
        var items = this.store.items.value;
        var list = [];
        for (var i = 0, size = items.length; i < size; i++) {
            list.push(items[i].name);
        }
        SocialShare.shareText(list.join(", ").trim());
    };
    GroceriesComponent.prototype.logoff = function () {
        this.loginService.logoff();
        this.router.navigate(["/login"]);
    };
    return GroceriesComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], GroceriesComponent.prototype, "groceryTextField", void 0);
GroceriesComponent = __decorate([
    core_1.Component({
        selector: "gr-groceries",
        moduleId: module.id,
        templateUrl: "./groceries.component.html",
        styleUrls: ["./groceries-common.css", "./groceries.component.css"],
        providers: [shared_1.GroceryService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shared_1.GroceryService,
        shared_2.LoginService,
        page_1.Page])
], GroceriesComponent);
exports.GroceriesComponent = GroceriesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyaWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2Nlcmllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBQ3pDLHNDQUFvQztBQUVwQyxnQ0FBK0I7QUFFL0IsdURBQXlEO0FBR3pELG1DQUEwQztBQUMxQyxvQ0FBZ0Q7QUFTaEQsSUFBYSxrQkFBa0I7SUFRN0IsNEJBQW9CLE1BQWMsRUFDeEIsS0FBcUIsRUFDckIsWUFBMEIsRUFDMUIsSUFBVTtRQUhBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVZwQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFPSyxDQUFDO0lBRXhCLHFDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsd0ZBQXdGO0lBQ3hGLCtDQUFrQixHQUFsQixVQUFtQixTQUFTLEVBQUUsU0FBUztRQUNyQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixTQUFTLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLFNBQVMsQ0FBQyxP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dCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuaW1wb3J0IHsgR3JvY2VyeUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9ncm9jZXJ5LWxpc3QvZ3JvY2VyeS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSwgYWxlcnQgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1ncm9jZXJpZXNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ncm9jZXJpZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2dyb2Nlcmllcy1jb21tb24uY3NzXCIsIFwiLi9ncm9jZXJpZXMuY29tcG9uZW50LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbR3JvY2VyeVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEdyb2Nlcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyb2Nlcnk6IHN0cmluZyA9IFwiXCI7XG4gIGlzQW5kcm9pZDtcbiAgaXNTaG93aW5nUmVjZW50ID0gZmFsc2U7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHN0b3JlOiBHcm9jZXJ5U2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzQW5kcm9pZCA9ICEhdGhpcy5wYWdlLmFuZHJvaWQ7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wYWdlLmNsYXNzTmFtZSA9IFwibGlzdC1wYWdlXCI7XG4gIH1cblxuICAvLyBQcmV2ZW50IHRoZSBmaXJzdCB0ZXh0ZmllbGQgZnJvbSByZWNlaXZpbmcgZm9jdXMgb24gQW5kcm9pZFxuICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MDU2NzM0L2FuZHJvaWQtZm9yY2UtZWRpdHRleHQtdG8tcmVtb3ZlLWZvY3VzXG4gIGhhbmRsZUFuZHJvaWRGb2N1cyh0ZXh0RmllbGQsIGNvbnRhaW5lcikge1xuICAgIGlmIChjb250YWluZXIuYW5kcm9pZCkge1xuICAgICAgY29udGFpbmVyLmFuZHJvaWQuc2V0Rm9jdXNhYmxlSW5Ub3VjaE1vZGUodHJ1ZSk7XG4gICAgICBjb250YWluZXIuYW5kcm9pZC5zZXRGb2N1c2FibGUodHJ1ZSk7XG4gICAgICB0ZXh0RmllbGQuYW5kcm9pZC5jbGVhckZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0FjdGl2aXR5SW5kaWNhdG9yKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgfVxuICBoaWRlQWN0aXZpdHlJbmRpY2F0b3IoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZCh0YXJnZXQ6IHN0cmluZykge1xuICAgIC8vIElmIHNob3dpbmcgcmVjZW50IGdyb2NlcmllcyB0aGUgYWRkIGJ1dHRvbiBzaG91bGQgZG8gbm90aGluZy5cbiAgICBpZiAodGhpcy5pc1Nob3dpbmdSZWNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLmdyb2NlcnkudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciBjbGlja2VkIHRoZSBhZGQgYnV0dG9uLCBhbmQgdGhlIHRleHRmaWVsZCBpcyBlbXB0eSxcbiAgICAgIC8vIGZvY3VzIHRoZSB0ZXh0IGZpZWxkIGFuZCByZXR1cm4uXG4gICAgICBpZiAodGFyZ2V0ID09PSBcImJ1dHRvblwiKSB7XG4gICAgICAgIHRleHRGaWVsZC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgY2xpY2tlZCByZXR1cm4gd2l0aCBhbiBlbXB0eSB0ZXh0IGZpZWxkIHNob3cgYW4gZXJyb3IuXG4gICAgICAgIGFsZXJ0KFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcbiAgICAvLyBUT0RPOiBJcyBpdCBiZXR0ZXIgVVggdG8gZGlzbWlzcyB0aGUga2V5Ym9hcmQsIG9yIGxlYXZlIGl0IHVwIHNvIHRoZVxuICAgIC8vIHVzZXIgY2FuIGNvbnRpbnVlIHRvIGFkZCBtb3JlIGdyb2Nlcmllcz9cbiAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuXG4gICAgdGhpcy5zaG93QWN0aXZpdHlJbmRpY2F0b3IoKTtcbiAgICB0aGlzLnN0b3JlLmFkZCh0aGlzLmdyb2NlcnkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgICB0aGlzLmhpZGVBY3Rpdml0eUluZGljYXRvcigpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIpO1xuICAgICAgICAgIHRoaXMuaGlkZUFjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICB0b2dnbGVSZWNlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvd2luZ1JlY2VudCkge1xuICAgICAgdGhpcy5pc1Nob3dpbmdSZWNlbnQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0FjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgdGhpcy5zdG9yZS5yZXN0b3JlKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzU2hvd2luZ1JlY2VudCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaGlkZUFjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGFkZGluZyBncm9jZXJpZXMgdG8geW91ciBsaXN0LlwiKTtcbiAgICAgICAgICB0aGlzLmhpZGVBY3Rpdml0eUluZGljYXRvcigpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgc2hvd01lbnUoKSB7XG4gICAgYWN0aW9uKHtcbiAgICAgIG1lc3NhZ2U6IFwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBkbz9cIixcbiAgICAgIGFjdGlvbnM6IFtcIlBlcmZpbFwiLCBcIkxvZyBPZmZcIl0sXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09PSBcIlBlcmZpbFwiKSB7XG4gICAgICAgIHRoaXMuc2hhcmUoKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIkxvZyBPZmZcIikge1xuICAgICAgICB0aGlzLmxvZ29mZigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hhcmUoKSB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdG9yZS5pdGVtcy52YWx1ZTtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBzaXplID0gaXRlbXMubGVuZ3RoOyBpIDwgc2l6ZSA7IGkrKykge1xuICAgICAgbGlzdC5wdXNoKGl0ZW1zW2ldLm5hbWUpO1xuICAgIH1cbiAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdC5qb2luKFwiLCBcIikudHJpbSgpKTtcbiAgfVxuXG4gIGxvZ29mZigpIHtcbiAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dvZmYoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICB9XG59XG4iXX0=