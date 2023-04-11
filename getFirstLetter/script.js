// Написати функцію яка повертає першу літеру
// якщо перший символ число повернути “0-9”
// якщо перший символ знак взяти наступний символ і якщо це літера повернути її,
// якщо знову знак взяти наступний символ, а якщо літера повернути її …

// debugger
function getFirstLetter(e) {
    const firstChar = e.charAt(0);
    const isNum = !isNaN(firstChar);

    const letter = /[^a-zA-Z]/;
    const isLetter = letter.test(firstChar);
    
    const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
    const isSymbols = symbols.test(firstChar);


    switch (true) {
        case isNum:
            console.log('0-9');
            break
        case !isLetter:
            console.log(firstChar)
            break
        case !isSymbols:
            console.log(e.charAt(1))
            break
    }

    // if (firstChar === isNum) {
    //     console.log('0-9');
    // } else if (firstChar === isLetter) {
    //     console.log(firstChar)
    // } else {
    //     console.log(e.charAt(1))
    // }
}

getFirstLetter('test')
