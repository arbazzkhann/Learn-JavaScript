const user1 = {
  name: "Arbaz Khan",
  age: 22,
  getAgeYear: function () {
    return new Date().getFullYear() - user1.age;
  },
};

function userFunction(name, age) {
  const user = {
    name,
    age,
    getAgeYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return { user };
}

console.log(userFunction("Madhav", 27).user.getAgeYear())
