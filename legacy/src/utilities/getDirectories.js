import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';

const getDirectories = ( parent_id, callback ) => {

    let data = { parent:parent_id}

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/get', data ) ,
    }).then( ( response ) => {

        callback( response.response );

    });

}

export default getDirectories; 