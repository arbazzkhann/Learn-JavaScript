//YouTube Channel: Chai aur Code
//Video Link: https://youtu.be/-owpuf4lbyU

/***************************************************************************************/
/*********************************** call and this *************************************/


function setUsername(username) {
   this.username = username;         
}



function createUser(username, email, password) {
    setUsername.call(this, username)     //this and call

    this.email = email;
    this.password = password;
}


const akhan = new createUser("arbaz", "arbaz@google.com", "2323")

console.log(akhan)