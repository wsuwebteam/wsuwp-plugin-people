import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const getPeople = ( directoryID, peopleIDs, callback, fields = ['name'], ) => {

    peopleIDs = Array.isArray( peopleIDs ) ? peopleIDs.join(',') : '';

    if ( peopleIDs ) {

        let data = { 
            ids:peopleIDs, 
            directory:directoryID, 
            fields:fields.join(',') 
        }
    
        apiFetch( { 
            path: addQueryArgs( '/peopleapi/v1/people', data ) ,
        }).then( ( response ) => {
    
            callback( response);
    
        });

    } else {

        callback( [] );

    }

}


const searchPeople = ( term, callback ) => {

    let data = { search:term }

    apiFetch( { 
        path: addQueryArgs( '/peopleapi/v1/people', data ) ,
    }).then( ( response ) => {

        callback( response );

    });

}

/*const getPeopleIDs = () => {

    let meta = wp.data.select('core/editor').getEditedPostAttribute('meta');
    let peopleMeta = ( meta.hasOwnProperty('wsu_people') ) ? meta.wsu_people.split(',') : [];

    var filtered = peopleMeta.filter(Boolean);

    return filtered;

}

const getPeopleFromDirectory = ( directory, callback) => {

}

const getPeopleFromDirectories = ( directories, callback ) => {

}*/

const updatePeopleMeta = ( peopleIDs ) => {

    let idString = Array.isArray( peopleIDs ) ? peopleIDs.join(',') : '';

    wp.data.dispatch('core/editor').editPost({ meta: { wsu_people: idString } });

}


export { getPeople, updatePeopleMeta, searchPeople }
