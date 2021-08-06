const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
    if( phase = PHASE_DEVELOPMENT_SERVER){
        return {
            env : {
                mongodb_username: 'ayushmalik',
                mongodb_password: 'Miindia!2345',
                mongodb_clustername: 'node-rest-shop',
                mongodb_database: 'mySite-dev',
            }
        };
    }
    
    return {
        env : {
            mongodb_username: 'ayushmalik',
            mongodb_password: 'Miindia!2345',
            mongodb_clustername: 'node-rest-shop',
            mongodb_database: 'mySite-prod',
        }
    };
};