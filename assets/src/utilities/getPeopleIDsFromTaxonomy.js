import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const getPeopleIDsFromTaxonomy = ( taxonomy, term, callback ) => {

    let data = { 
        taxonomy,
        term,
        format:'id',
    }

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/people/tax-query', data ) ,
    }).then( ( response ) => {

        callback( response.response );

    });

    return [];

}

export default getPeopleIDsFromTaxonomy;