import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const getTaxonomies = ( callback ) => {

    apiFetch( { 
        path: '/directory/api/v1/taxonomy/get',
    }).then( ( response ) => {

        callback( response.response );

    });

    return [];

}

export default getTaxonomies;