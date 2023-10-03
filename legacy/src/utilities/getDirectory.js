import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';

const getDirectory = ( post_id, callback ) => {

    let data = { directory_id:post_id }

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/get', data ) ,
    }).then( ( response ) => {

        callback( response.response );

    });

}

export default getDirectory; 