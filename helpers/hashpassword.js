
const bcrypt = require('bcryptjs');
module.exports = {
    setHash: function (password) {        
        const SALT_ROUND = 12;
        if (password === null) {
            throw new Error('password should not be null or empty.');
        } else {
            const hashPassword = bcrypt.hashSync(password, SALT_ROUND);
            return hashPassword;
        }
    },
    compareHash: function (password, hashPassword)
    {
        bcrypt.compareSync(password, hashPassword)
            .then(resp => {                
                return true;
            })
            .catch(err => {
                throw err;
            });
    }
};
