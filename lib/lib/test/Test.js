"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Test {
    constructor(id, input, output, config, required = true) {
        this.id = id;
        this.input = input;
        this.output = output;
        this.config = config;
        this.required = required;
    }
    evalute(input) {
        //TODO: implement trims and EOL
        return input === this.output;
    }
}
exports.default = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdGVzdC9UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBcUIsSUFBSTtJQVFyQixZQUFZLEVBQVUsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQWtCLEVBQUUsV0FBb0IsSUFBSTtRQUMvRixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNqQiwrQkFBK0I7UUFDL0IsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0NBRUo7QUFyQkQsdUJBcUJDIn0=