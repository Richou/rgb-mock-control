'use strict';

exports.register = function(server, options) {
    return server.register([]).then(() => {
        server.route({
            method: 'GET',
            path: '/color',
            config: {auth: false},
            handler: (request, reply) => {
                return reply.response({}).code(200)
            }
        })
    });
};

exports.name = 'ColorPlugin';
exports.multiple = true;