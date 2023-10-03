import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const getTaxonomyTerms = ( taxonomy, callback ) => {

    let data = { 
        taxonomy, 
    }

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/terms/get', data ) ,
    }).then( ( response ) => {

        callback( response.response );

    });

    return [];

}

export default getTaxonomyTerms;