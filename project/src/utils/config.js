
console.log('origin :- ' + window.location.origin)
console.log('pathname :- ' + window.location.pathname)
console.log('URL :- ' + window.location.origin + window.location.pathname);


var s = window.location.origin
var m = window.location.pathname
var d = m.split('/')
var front = ""
var back = ""
if (d[1] === 'getportal') {
   front = 'getportal'
   back = 'amg'
}
else if (d[1] === 'getportalqa') {
   front = 'getportalqa'
   back = 'amgqa'

}
else if (d[1] === 'getportaluat') {
   front = 'getportaluat'
   back = 'amgdetariff'

}
else {
   front = ''
   back = ''
}
export const CONFIG = {
    Front_UI: "/" + front
}