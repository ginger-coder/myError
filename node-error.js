process.on('uncaughtException', function (a) {
    precess.exit(1);
})
process.on('unhandledRejection', function (a) {

})

app.on('error', function (error) {

})