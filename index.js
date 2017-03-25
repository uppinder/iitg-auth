/*!
 * iitg-auth
 * Copyright(c) 2017 Uppinder Chugh
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

var Imap = require('imap');

/**
 * Module exports.
 * @public
 */

module.exports = webmailAuthenticate;

/**
 * Create a new Imap Object using given user details
 * and tries to login user.
 *
 * @param {object} req
 * @public
 */

/**
 * Create a new Imap Object using given user details
 * and tries to login user.
 * 
 * @param      {Object}    userDetails          The user login details
 * @param      {string}    userDetails.username username
 * @param      {string}    userDetails.password password
 * @param      {string}    userDetails.mailServer mail server
 * @param      {Function}  callback     The callback
 * 
 * @todo       Add checks on input for validity.
 */
function webmailAuthenticate(userDetails, callback) {
    
    /**
     * Required for bypassing SSL certificate 
     * authorization error. 
     */
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    var authObject = {
      username: userDetails.username,
      password: userDetails.password,
      host: userDetails.mailServer.toLowerCase() + '.iitg.ernet.in',
      port: 993,
      tls: true
    };

    /**
     * Create new Imap object
     *
     * @type       {Imap}
     */
    var imap = new Imap(authObject);

    imap.connect();

    /**
     * If user logged in successfully.
     */
    imap.once('ready', function() {
      imap.end();
      callback(null);
    });

    /**
     * User login unsuccessful.
     */
    imap.once('error', function(err) {
      callback(err);
    });
}