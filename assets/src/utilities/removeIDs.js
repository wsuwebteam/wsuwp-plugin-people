const removeIDs = ( currentIDs, removeIDs ) => {

    let updatedIDs = currentIDs.filter( function( el ) {
        return ! removeIDs.includes( el );
      } );

    return updatedIDs;

}

export default removeIDs;