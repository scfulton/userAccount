// tried IIFE
// var result = (function() {

class User {
  constructor(email, password, alternatePassword) {
    this.email = email;
    this.password = password;
    this.alternatePassword = alternatePassword;
    this.signedIn = false;
  }
}
/******************************/
//signUp function progression
function signUp(user) {
  messageEmit(" signUp() invoked");
  if (user.email === undefined) {
    //maybe lead to a get user info function instead
    errorEmit(" empty object");
  } else {
    confirmSamePasswords(user);
  }
}
//check if passwords entered are same
function confirmSamePasswords(user) {
  if (user.password === user.alternatePassword) {
    messageEmit(" passwords match");
    validPassword(user);
  } else {
    errorEmit("passwords don't match");
  }
}
//check is passwords are valid (regex)
function validPassword(user) {
  if (regexCheck(user)) {
    if (user.signedIn) {
      validNewPassword;
    }
    messageEmit(" valid password");
    validEmail(user);
  } else {
    errorEmit("invalid password");
  }
}
//validate password format
function regexCheck(user) {
  return true;
}
//validate email pattern
function validEmail(user) {
  if (regexCheck(user)) {
    messageEmit(" valid email");
    createUser(user);
  } else {
    errorEmit("invalid email");
  }
}
//insert created record
function createUser(user) {
  try {
    //insert record
    messageEmit(" user signed up");
  } catch (error) {
    errorEmit(" user not signed up");
  }
}
//retrieve email from data store
function getEmailName() {
  return "Scotty@Druidia.com";
}
//retrieve password from data store
function getPassword() {
  return "12345";
}
//console logs error with custom message
function errorEmit(errorTopic) {
  console.log("Error, " + errorTopic);
}
//console logs success with custom message
function messageEmit(messageTopic) {
  console.log("Success, " + messageTopic);
}
/******************************/
//signIn function progression
function signIn(user) {
  messageEmit(" signIn() invoked");
  if (getEmailName() === user.email) {
    messageEmit(" Email verified");
    verifyPassword(user);
  } else {
    errorEmit(" No user with that email");
  }
}
//verify password from dataStore and progress if user is
//signed in(must be changing password) or not (user must be signing in)
function verifyPassword(user) {
  if (getPassword() === user.password && !user.signedIn) {
    messageEmit(" Password verified");
    signInUser(user);
  } else if (getPassword() === user.password && user.signedIn) {
    messageEmit(" verified PW & signed in");
    verifyNewPassword(user);
  } else {
    errorEmit(" Password incorrect");
  }
}
//validate/log session for user
function signInUser(user) {
  messageEmit(" user signed in");
  user.signedIn = true;
}
/******************************/
//change password function progression
function changePassword(user) {
  /*
 *verify old
 validNew 
 UpdateNew 
 */
  if (user.signedIn) {
    messageEmit(" changePassword() invoked");
    messageEmit(" user is signed in");
    // authenticatePassword(user)
    verifyPassword(user);
  } else {
    errorEmit(" sign in to change password");
  }
}
//validate new password pattern
function verifyNewPassword(user) {
  if (regexCheck(user.alternatePassword)) {
    messageEmit(" valid new password");
    updateNewPassword(user);
  } else {
    errorEmit(" invalid new password");
  }
}
//update data Store with new password
function updateNewPassword(user) {
  try {
    //update record
    messageEmit(" password updated");
    user.password = user.alternatePassword;
  } catch (error) {
    errorEmit(" password not updated");
  }
}
/******************************/
//signOut function progression
function signOut(user) {
  /*
    isSignedIn
    sign out
    */
  messageEmit(" signOut() invoked");
  if (user.signedIn) {
    messageEmit(" verified user signed in");
    signOutUser(user);
  } else {
    errorEmit(" user not signed in");
  }
}
//update/log user session to logged out
function signOutUser(user) {
  try {
    //update record
    messageEmit(" user signed out");
    user.signedIn = false;
  } catch (error) {
    errorEmit(" user not signed out");
  }
}

//end of tried IIFE
// }());

//test runs, can move signOut() before changePassword() to receive error
//ran with $node userAccount2.js
let A = new User("Scotty@Druidia.com", "12345", "12345");
signUp(A);
signIn(A);
A.alternatePassword = "67890";
changePassword(A);
signOut(A);
