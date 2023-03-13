var ROLE;
(function (ROLE) {
    ROLE[ROLE["MANAGER"] = 0] = "MANAGER";
    ROLE[ROLE["STAFF"] = 1] = "STAFF";
})(ROLE || (ROLE = {}));
function login(user) {
    if ("role" in user) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome back");
    }
}
var user = {
    username: "john",
    password: "password",
    email: "john@example.com"
};
var admin = {
    username: "jane",
    password: "password",
    email: "jane@example.com",
    role: ROLE.MANAGER
};
login(user); // prints "Welcome back"
login(admin); // prints "Welcome to admin"
