class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.signedIn = false;
  }
  //retrieve session id (user email) and
  //set user.signedIn = false
  signOutUser(email) {
    const sessionID = findSession(email);
    //beep boop beep
    this.signedIn = false;
    console.log(sessionID + " signed out.");

    function findSession(email) {
      return "Scotty@Druidia.com";
    }
  }
  //verified email and password of user (hard coded "retrieved" data)
  // then signed user in
  signInUser(email, password) {
    //mock retrieved data from DB
    let retrievedEmail = "Scotty@Druidia.com";
    let retrievedPassword = "12345";
    //copy for immutability
    let copiedEmail = email;
    let copiedPassword = password;

    try {
      if (
        copiedEmail == retrievedEmail &&
        copiedPassword == retrievedPassword
      ) {
        this.signedIn = true;
        console.log("sign in confirmed");
      }
    } catch (error) {
      console.error("sign in failure");
    }
  }
  // validate passwords entered -> validate PW and Email -> create user
  signUpUser(email, password, confirmPassword) {
    //mock retrieved data from DB
    let retrievedEmail = "Scotty@Druidia.com";
    let retrievedPassword = "12345";

    //attempt at data structure integrity
    let copiedEmail = email;
    let copiedPassword = password;
    let copiedRetrievedConfirmPassword = confirmPassword;

    //validate email somewhere HERE and pw: REGEX?
    try {
      if (copiedPassword === copiedRetrievedConfirmPassword) {
        console.log("PWs match confirmed");
      }
      try {
        // enter record
        let record = new User(copiedEmail, copiedPassword);
        console.log(record);
        console.log("signed up");
      } catch (error) {
        console.error("error creating record");
      }
    } catch (error) {
      console.log("pws don't match");
    }
  }
  //if signed in -> validate old passwords ->
  // validate new password -> assign new password
  changePassword(previous, next) {
    //mock retrieved data from DB
    let retrievedEmail = "Scotty@Druidia.com";
    let retrievedPassword = "12345";
    try {
      if (this.signedIn == true) {
        try {
          //validate old PW
          if (previous === retrievedPassword) {
            console.log("Verified Previous");
          }
          try {
            //validate new PW
            let validFormat = true;
            if (validFormat) {
              console.log("Valid new Password");
            }
            try {
              //assign new pw
              this.password = next;
              console.log("Password update confirmed");
            } catch (error) {
              console.log("Error saving Password");
            }
          } catch (error) {
            console.log("New Password is invalid");
          }
        } catch (error) {
          console.log("Can't verify Previous");
        }
      } else {
        console.log("Please login to change a password");
      }
    } catch (error) {
      console.log("Please login to change a password");
    }
  }
}

//test calls
//ran with $node userAccount.js
let A = new User("Scotty@Druidia.com", "12345", "12345");
A.signUpUser("Scotty@Druidia.com", "12345", "12345");
A.signInUser("Scotty@Druidia.com", "12345");
A.signOutUser("Scotty@Druidia.com");
A.changePassword("12345", "67890");
