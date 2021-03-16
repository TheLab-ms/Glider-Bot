const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
});

const Members = sequelize.define('member', {
    whmcs_id: Sequelize.INTEGER,
    email: Sequelize.STRING,
    discord_id: Sequelize.STRING,
    status: Sequelize.BOOLEAN
});

async function createMember({ whmcs_id, email, discord_id, status }) {
    console.log("Called")
    try {
        return sequelize.sync()
            .then(() => Members.create({
                whmcs_id,
                email,
                discord_id,
                status
            })).then(() => {
                return true;
            }).catch((e) => {
                return false;
            })
    } catch (e) {
        console.log(e)
     }
}


module.exports = {
    createMember
}