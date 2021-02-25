const { WHMCS_ID, WHMCS_SECRET, WHCMS_API_URL } = process.env;
const { Clients } = require('whmcs-js');

function getClient() {
    return new Clients({
        identifier: WHMCS_ID,
        secret: WHMCS_SECRET,
        serverUrl: WHCMS_API_URL
    });
}

async function getUserByEmail(client, email){
    const results = await client.getClients({
        search: email
    });
    if(results.result != 'success' || results.numreturned != 1 || results.clients.client[0].email.toLowerCase() != email.toLowerCase()){
        return false;
    }
    return results.clients.client[0];
}

module.exports = { getClient, getUserByEmail };