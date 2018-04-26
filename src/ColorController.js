'use strict';

exports.register = function(server, options) {
    return server.register([]).then(() => {
        server.route({
            method: 'GET',
            path: '/color',
            config: {auth: false},
            handler: (request, reply) => {
                const red = request.query.red
                const green = request.query.green
                const blue = request.query.blue
                console.log(request.query)
                if (red === null || red === undefined || green === null || green === undefined || blue === null || blue === undefined ) {
                    return reply.response({"message": "All parameters [red, blue, green] must be defined"}).code(400)
                }
                
                return reply.response({}).code(200)
            }
        })

        server.route({
            method: 'GET',
            path: '/reset-settings',
            config: {auth: false},
            handler: (request, reply) => {
                return reply.response({}).code(200)
            } 
        })
    });
};

exports.name = 'ColorPlugin';
exports.multiple = true;