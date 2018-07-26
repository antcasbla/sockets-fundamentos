var socket = io();

//On para escuchar
socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos conexión con el servidor');
});

//Emit para enviar información al servidor 1 a 1
socket.emit('enviarMensaje', {
    usuario: 'Eugenio',
    mensaje: 'Hola Mundo'
}, function(resp){
    // console.log('Se disparó el callback');
    console.log('Respuesta Server: ', resp);
});

//On escuchar información del servidor
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor', mensaje);
});