//YouTube Channel : https://www.youtube.com/@chaiaurcode
//Video Link : https://youtu.be/9ksqBa8_txM

/******************************************************************************/
/********************************* This Keyword *******************************/

const user = {
    username : "Arbaz Khan",
    website : "youtube",
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

console.log(user.welcomeMessage());
user.username = "AK"
console.log(user.welcomeMessage());



