const bcrypt = require('bcrypt')

async function crypto(pwd){

        const salt = await bcrypt.genSalt()

        const password = await bcrypt.hash(pwd, salt)
        console.log(salt)

        return password

}

module.exports = {
    crypto
}