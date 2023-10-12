import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const getChildDirectories = ( directoryID, callback ) => {

    apiFetch( { 
        path: addQueryArgs( `/peopleapi/v1/directory/children/${directoryID}` ) ,
    }).then( ( response ) => {

        callback( response );

    });

    return [];

}

export default getChildDirectories;