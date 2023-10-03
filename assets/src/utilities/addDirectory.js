import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';

const addDirectory = ( directoryID, directoryName, callback ) => {

    let data = { directory_id:directoryID, title:directoryName }

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/add', data ) ,
    }).then( ( response ) => {

        callback( response.response );

    });

}

export default addDirectory;