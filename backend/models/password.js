const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();
passwordSchema
.is().min(8)                                    
.is().max(20)
.has().uppercase()                              
.has().lowercase();

module.exports = passwordSchema;