const deDupArray = ( array ) => {

    console.log( array );

    let uniqueArray = array.filter((c, index) => {
        return array.indexOf(c) === index;
    });

    console.log( uniqueArray );

    return uniqueArray;

}

export default deDupArray;