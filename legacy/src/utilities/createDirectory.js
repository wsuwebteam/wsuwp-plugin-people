import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';
import { useEffect } from '@wordpress/element';

const createDirectory = ( parent_id, title, callback ) => {

    let data = { parent:parent_id, title:title }

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/add', data ) ,
    }).then( ( response ) => {

        callback( response.response );

    });

}

export default createDirectory; 