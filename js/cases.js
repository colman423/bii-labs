$(function () {
})

function setLocaleCallback() {
    if (window.innerWidth > 992) {
        console.log("setLocaleCallback1", parallex)
        parallex.reset()
        setTimeout(function() {
            console.log("setLocaleCallback2", parallex)
            $('.cases-img').parallex()
        }, 1000)
    }
}
