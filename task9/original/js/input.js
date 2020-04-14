let user = {
  value: 30
};

function showUser(surName, name) {
  alert('User ' + surName + ' ' + name + ' , age ' + this.value)
}

showUser.call(user, 'Smith', 'John');