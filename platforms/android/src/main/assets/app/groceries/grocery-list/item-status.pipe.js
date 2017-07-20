"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemStatusPipe = (function () {
    function ItemStatusPipe() {
        this.value = [];
    }
    ItemStatusPipe.prototype.transform = function (items, deleted) {
        if (items && items.length) {
            this.value = items.filter(function (grocery) {
                return grocery.deleted === deleted;
            });
        }
        return this.value;
    };
    return ItemStatusPipe;
}());
ItemStatusPipe = __decorate([
    core_1.Pipe({
        name: "itemStatus"
    })
], ItemStatusPipe);
exports.ItemStatusPipe = ItemStatusPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zdGF0dXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0tc3RhdHVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFPcEQsSUFBYSxjQUFjO0lBSDNCO1FBSUUsVUFBSyxHQUFtQixFQUFFLENBQUM7SUFTN0IsQ0FBQztJQVJDLGtDQUFTLEdBQVQsVUFBVSxLQUFxQixFQUFFLE9BQWdCO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxPQUFnQjtnQkFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksY0FBYztJQUgxQixXQUFJLENBQUM7UUFDSixJQUFJLEVBQUUsWUFBWTtLQUNuQixDQUFDO0dBQ1csY0FBYyxDQVUxQjtBQVZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5cbkBQaXBlKHtcbiAgbmFtZTogXCJpdGVtU3RhdHVzXCJcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVN0YXR1c1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdmFsdWU6IEFycmF5PEdyb2Nlcnk+ID0gW107XG4gIHRyYW5zZm9ybShpdGVtczogQXJyYXk8R3JvY2VyeT4sIGRlbGV0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gaXRlbXMuZmlsdGVyKChncm9jZXJ5OiBHcm9jZXJ5KSA9PiB7XG4gICAgICAgIHJldHVybiBncm9jZXJ5LmRlbGV0ZWQgPT09IGRlbGV0ZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cbn0iXX0=