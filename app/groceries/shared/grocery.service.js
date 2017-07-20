"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
var shared_1 = require("../../shared");
var grocery_model_1 = require("./grocery.model");
var GroceryService = (function () {
    function GroceryService(http, zone) {
        this.http = http;
        this.zone = zone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this.allItems = [];
    }
    GroceryService.prototype.load = function () {
        var _this = this;
        var headers = this.getHeaders();
        headers.append("X-Everlive-Sort", JSON.stringify({ ModifiedAt: -1 }));
        return this.http.get(shared_1.BackendService.apiUrl + "Groceries", {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            data.Result.forEach(function (grocery) {
                _this.allItems.push(new grocery_model_1.Grocery(grocery.Id, grocery.Name, grocery.Done || false, grocery.Deleted || false));
                _this.publishUpdates();
            });
        })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.add = function (name) {
        var _this = this;
        return this.http.post(shared_1.BackendService.apiUrl + "Groceries", JSON.stringify({ Name: name }), { headers: this.getHeaders() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this.allItems.unshift(new grocery_model_1.Grocery(data.Result.Id, name, false, false));
            _this.publishUpdates();
        })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.setDeleteFlag = function (item) {
        var _this = this;
        return this.put(item.id, { Deleted: true, Done: false })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            item.deleted = true;
            item.done = false;
            _this.publishUpdates();
        });
    };
    GroceryService.prototype.toggleDoneFlag = function (item) {
        item.done = !item.done;
        this.publishUpdates();
        return this.put(item.id, { Done: item.done })
            .map(function (res) { return res.json(); });
    };
    GroceryService.prototype.restore = function () {
        var _this = this;
        var indeces = [];
        this.allItems.forEach(function (grocery) {
            if (grocery.deleted && grocery.done) {
                indeces.push(grocery.id);
            }
        });
        var headers = this.getHeaders();
        headers.append("X-Everlive-Filter", JSON.stringify({
            "Id": {
                "$in": indeces
            }
        }));
        return this.http.put(shared_1.BackendService.apiUrl + "Groceries", JSON.stringify({
            Deleted: false,
            Done: false
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this.allItems.forEach(function (grocery) {
                if (grocery.deleted && grocery.done) {
                    grocery.deleted = false;
                    grocery.done = false;
                }
            });
            _this.publishUpdates();
        })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.permanentlyDelete = function (item) {
        var _this = this;
        return this.http
            .delete(shared_1.BackendService.apiUrl + "Groceries/" + item.id, { headers: this.getHeaders() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var index = _this.allItems.indexOf(item);
            _this.allItems.splice(index, 1);
            _this.publishUpdates();
        })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.put = function (id, data) {
        return this.http.put(shared_1.BackendService.apiUrl + "Groceries/" + id, JSON.stringify(data), { headers: this.getHeaders() })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.publishUpdates = function () {
        var _this = this;
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(function () {
            // must emit a *new* value (immutability!)
            _this.items.next(_this.allItems.slice());
        });
    };
    GroceryService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + shared_1.BackendService.token);
        return headers;
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    return GroceryService;
}());
GroceryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, core_1.NgZone])
], GroceryService);
exports.GroceryService = GroceryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvY2VyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHNDQUF5RTtBQUN6RSw4Q0FBNkM7QUFDN0Msd0RBQXVEO0FBQ3ZELGlDQUErQjtBQUUvQix1Q0FBOEM7QUFDOUMsaURBQTBDO0FBRzFDLElBQWEsY0FBYztJQUt6Qix3QkFBb0IsSUFBVSxFQUFVLElBQVk7UUFBaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFKcEQsVUFBSyxHQUFvQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekQsYUFBUSxHQUFtQixFQUFFLENBQUM7SUFFa0IsQ0FBQztJQUV6RCw2QkFBSSxHQUFKO1FBQUEsaUJBc0JDO1FBckJDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUFjLENBQUMsTUFBTSxHQUFHLFdBQVcsRUFBRTtZQUN4RCxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUMxQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsSUFBSSx1QkFBTyxDQUNULE9BQU8sQ0FBQyxFQUFFLEVBQ1YsT0FBTyxDQUFDLElBQUksRUFDWixPQUFPLENBQUMsSUFBSSxJQUFJLEtBQUssRUFDckIsT0FBTyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQ3pCLENBQ0YsQ0FBQztnQkFDRixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBRyxHQUFILFVBQUksSUFBWTtRQUFoQixpQkFZQztRQVhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsdUJBQWMsQ0FBQyxNQUFNLEdBQUcsV0FBVyxFQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQzlCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUMvQjthQUNBLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksdUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkUsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxJQUFhO1FBQTNCLGlCQVFDO1FBUEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3JELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsSUFBYTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDMUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQUEsaUJBa0NDO1FBakNDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDNUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqRCxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLE9BQU87YUFDZjtTQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNsQix1QkFBYyxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQ25DLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQjthQUNBLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDNUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLElBQWE7UUFBL0IsaUJBYUM7UUFaQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixNQUFNLENBQ0wsdUJBQWMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQzlDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUMvQjthQUNBLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8sNEJBQUcsR0FBWCxVQUFZLEVBQVUsRUFBRSxJQUFZO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsdUJBQWMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxHQUFHLEVBQUUsRUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDcEIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQy9CO2FBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sdUNBQWMsR0FBdEI7UUFBQSxpQkFNQztRQUxDLG9HQUFvRztRQUNwRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNaLDBDQUEwQztZQUMxQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBSyxLQUFJLENBQUMsUUFBUSxTQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sbUNBQVUsR0FBbEI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLHVCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU8scUNBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBN0lELElBNklDO0FBN0lZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtxQ0FNZSxXQUFJLEVBQWdCLGFBQU07R0FMekMsY0FBYyxDQTZJMUI7QUE3SVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlc3BvbnNlT3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4vZ3JvY2VyeS5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvY2VyeVNlcnZpY2Uge1xuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PEdyb2Nlcnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIHByaXZhdGUgYWxsSXRlbXM6IEFycmF5PEdyb2Nlcnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgbG9hZCgpIHtcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1FdmVybGl2ZS1Tb3J0XCIsIEpTT04uc3RyaW5naWZ5KHsgTW9kaWZpZWRBdDogLTEgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJHcm9jZXJpZXNcIiwge1xuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgZGF0YS5SZXN1bHQuZm9yRWFjaCgoZ3JvY2VyeSkgPT4ge1xuICAgICAgICB0aGlzLmFsbEl0ZW1zLnB1c2goXG4gICAgICAgICAgbmV3IEdyb2NlcnkoXG4gICAgICAgICAgICBncm9jZXJ5LklkLFxuICAgICAgICAgICAgZ3JvY2VyeS5OYW1lLFxuICAgICAgICAgICAgZ3JvY2VyeS5Eb25lIHx8IGZhbHNlLFxuICAgICAgICAgICAgZ3JvY2VyeS5EZWxldGVkIHx8IGZhbHNlXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBhZGQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJHcm9jZXJpZXNcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgTmFtZTogbmFtZSB9KSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCkgfVxuICAgIClcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFsbEl0ZW1zLnVuc2hpZnQobmV3IEdyb2NlcnkoZGF0YS5SZXN1bHQuSWQsIG5hbWUsIGZhbHNlLCBmYWxzZSkpO1xuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIHNldERlbGV0ZUZsYWcoaXRlbTogR3JvY2VyeSkge1xuICAgIHJldHVybiB0aGlzLnB1dChpdGVtLmlkLCB7IERlbGV0ZWQ6IHRydWUsIERvbmU6IGZhbHNlIH0pXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgaXRlbS5kZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgaXRlbS5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRG9uZUZsYWcoaXRlbTogR3JvY2VyeSkge1xuICAgIGl0ZW0uZG9uZSA9ICFpdGVtLmRvbmU7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiB0aGlzLnB1dChpdGVtLmlkLCB7IERvbmU6IGl0ZW0uZG9uZSB9KVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICByZXN0b3JlKCkge1xuICAgIGxldCBpbmRlY2VzID0gW107XG4gICAgdGhpcy5hbGxJdGVtcy5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICBpZiAoZ3JvY2VyeS5kZWxldGVkICYmIGdyb2NlcnkuZG9uZSkge1xuICAgICAgICBpbmRlY2VzLnB1c2goZ3JvY2VyeS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1FdmVybGl2ZS1GaWx0ZXJcIiwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgXCJJZFwiOiB7XG4gICAgICAgIFwiJGluXCI6IGluZGVjZXNcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVybCArIFwiR3JvY2VyaWVzXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIERlbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBEb25lOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxuICAgIClcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFsbEl0ZW1zLmZvckVhY2goKGdyb2NlcnkpID0+IHtcbiAgICAgICAgaWYgKGdyb2NlcnkuZGVsZXRlZCAmJiBncm9jZXJ5LmRvbmUpIHtcbiAgICAgICAgICBncm9jZXJ5LmRlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBncm9jZXJ5LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgfSlcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgcGVybWFuZW50bHlEZWxldGUoaXRlbTogR3JvY2VyeSkge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGUoXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVybCArIFwiR3JvY2VyaWVzL1wiICsgaXRlbS5pZCxcbiAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldEhlYWRlcnMoKSB9XG4gICAgICApXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5hbGxJdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB0aGlzLmFsbEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXQoaWQ6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICBCYWNrZW5kU2VydmljZS5hcGlVcmwgKyBcIkdyb2Nlcmllcy9cIiArIGlkLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpIH1cbiAgICApXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgcHVibGlzaFVwZGF0ZXMoKSB7XG4gICAgLy8gTWFrZSBzdXJlIGFsbCB1cGRhdGVzIGFyZSBwdWJsaXNoZWQgaW5zaWRlIE5nWm9uZSBzbyB0aGF0IGNoYW5nZSBkZXRlY3Rpb24gaXMgdHJpZ2dlcmVkIGlmIG5lZWRlZFxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgLy8gbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXG4gICAgICB0aGlzLml0ZW1zLm5leHQoWy4uLnRoaXMuYWxsSXRlbXNdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIEJhY2tlbmRTZXJ2aWNlLnRva2VuKTtcbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cbn0iXX0=