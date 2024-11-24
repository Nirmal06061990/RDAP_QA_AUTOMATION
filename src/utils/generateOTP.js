const { timeout } = require('puppeteer');

class generateOTP{
    
    constructor(){
        
    }
    generateOTPAuth(){
        const OTPAuth = require('otpauth');
        const secretID = 'mxdfwlmlrkhk6mrf';
        
        const options = {
            secret: secretID,
            algorithm: 'sha1', // Common algorithms include 'SHA-1', 'SHA-256', and 'SHA-512'
            digits: 6, // The number of digits in the OTP
        };
        // Create a new TOTP instance
        const totp = new OTPAuth.TOTP(options);
        // Generate the current OTP
        const otp = totp.generate(); // This generates the OTP based on the current time
    return otp;
    }
}

module.exports = generateOTP;