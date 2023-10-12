import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const getDirectoryPath = ( directoryID, callback ) => {

    let data = { 
        directory:directoryID, 
    }

    apiFetch( { 
        path: addQueryArgs( '/peopleapi/v1/editor/directory/path', data ) ,
    }).then( ( response ) => {

        callback( response );

    });

    return [];

}

export default getDirectoryPath;