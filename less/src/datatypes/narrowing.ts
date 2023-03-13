enum ROLE {
    MANAGER,
    STAFF,
  }
  
  type User = {
    username: string;
    password: string;
    email: string;
  };
  
  type Admin = User & {
    role: ROLE.MANAGER | ROLE.STAFF;
  };
  
  function login(user: User | Admin) {
    if ("role" in user) {
      console.log("Welcome to admin");
    } else {
      console.log("Welcome back");
    }
  }
  
  const user: User = {
    username: "john",
    password: "password",
    email: "john@example.com",
  };
  
  const admin: Admin = {
    username: "jane",
    password: "password",
    email: "jane@example.com",
    role: ROLE.MANAGER,
  };
  
  login(user); // prints "Welcome back"
  login(admin); // prints "Welcome to admin"
  