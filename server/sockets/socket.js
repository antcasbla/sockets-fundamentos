const {io} = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el client
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);


        // client.emit('enviarMensaje', {
        //     usuario: data.usuario,
        //     mensaje: data.mensaje
        // });

        //Para hacer Broadcast
        client.broadcast.emit('enviarMensaje', {data});

        // if(mensaje.usuario){
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // }else{
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!'
        //     });
        // }

        //callback();

    });


});