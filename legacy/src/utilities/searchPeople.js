import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';

const searchPeople = ( term, callback ) => {

    let data = { term }

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/people-search', data ) ,
    }).then( ( response ) => {

        callback( response.response );

    });

}

export default searchPeople; 