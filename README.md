iitg-auth
=========
A wrapper library for authenticating with IIT Guwahati webmail servers.

## Installation

  ```
  $ npm install iitg-auth
  ```
## Usage

 #### Authentication
  ```javascript
  var iitgAuth = require('iitg-auth');
  ....
  
  // Store user details in an object
  var userDetails = {
    username : username, // Without @iitg.ernet.in
    password : password,
    mailServer: mailServer // Among 'teesta', 'disang', 'naambor', 'tamdil', 'dikrong'
  };
  
  /** err is null if succesfull login
  *   otherwise an object containing a
  *   specific error message
  */
  iitgAuth(userDetails, function(err) {
    if(err)
      // Login unsuccesfull!
    else
      // User details are authenticate.
      
      // Other code
  }); 
  
  
  ...
  ```

## Tests

  #### WIP
  
## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
