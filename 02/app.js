// document.addEventListener('DOMContentLoaded', init);

// function init() {
//     const divList = document.querySelectorAll('div');
    
//     setBorderColorAsync(divList[0], 'red', function() {
//         setBorderColorAsync(divList[1], 'blue', function() {
//             setBorderColorAsync(divList[2], 'green', function() {
//                 console.log('finish');
//             });
//         });
//     });

// }

// function setBorderColorAsync(element, color, callback) {
//     if(element && element instanceof HTMLElement) {
//         // sprawdzam czy parametr jest elementem DOM, więcej:
//         // https://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
        
//         if(callback && typeof callback === 'function') {
//             setTimeout(() => {
//                 element.style.border = `3px solid ${color}`;
//                 callback();
//             }, Math.random() * 3000);
//         } else {
//             alert('Parametr ~callback~ mus być funkcją');
//         }
//     } else {
//         alert('Paremetr ~element~ musi być prawidłowym elementem DOM');
//     }
// }

document.addEventListener('DOMContentLoaded', init);

function init() {
    const divList = document.querySelectorAll('div');
    
    setBorderColorAsync(divList[0], 'red')
        .then (() => setBorderColorAsync(divList[1], 'blue'))
        .then (() => setBorderColorAsync(divList[2], 'green'))
        .catch((err) => console.error(err))
        .finally(() => console.log('finish'));

}

function setBorderColorAsync(element, color) {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            if(element){
                element.style.border = `3px solid ${color}`;
                resolve();
            } else {
                reject('Nie znaleziono elementu!');
            }
        }, Math.random() * 3000);
    })
}

