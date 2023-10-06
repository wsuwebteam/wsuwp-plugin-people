import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const getChildDirectories = ( directoryID, callback ) => {

    let data = { 
        directory_id:directoryID, 
    }

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/children', data ) ,
    }).then( ( response ) => {

        console.log( response.response );

        callback( response.response );

    });

    return [];

}

export default getChildDirectories;