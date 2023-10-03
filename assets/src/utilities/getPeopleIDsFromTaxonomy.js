import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const getPeopleIDsFromTaxonomy = ( taxonomy, term, callback ) => {

    let data = { 
        taxonomy,
        term,
    }

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/editor/people_ids/taxonomy/get', data ) ,
    }).then( ( response ) => {

        callback( response.response );

    });

    return [];

}

export default getPeopleIDsFromTaxonomy;