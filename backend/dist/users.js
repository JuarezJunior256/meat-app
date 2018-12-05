"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'amanda@gmail.com': new User('Amanda', 'amanda@gmail.com', 'amanda21'),
    'juliana@gmail.com': new User('Juliana', 'juliana@gmail.com', 'juliana23')
};
