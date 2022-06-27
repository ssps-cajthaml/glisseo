"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AssignmentConfig_1 = require("./AssignmentConfig");
class Assignment {
    constructor(id) {
        this.id = id;
        this.config = new AssignmentConfig_1.default();
        this.tests = new Array();
    }
    getId() {
        return this.id;
    }
    setConfig(config) {
        this.config = config;
        return this;
    }
    addTest(test) {
        this.tests.push(test);
        return this;
    }
}
exports.default = Assignment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzaWdubWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYXNzaWdubWVudC9Bc3NpZ25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EseURBQWtEO0FBRWxELE1BQXFCLFVBQVU7SUFvQjNCLFlBQVksRUFBVTtRQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwwQkFBZ0IsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztJQUNuQyxDQUFDO0lBbEJELEtBQUs7UUFDRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUF3QjtRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVU7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBT0o7QUF6QkQsNkJBeUJDIn0=