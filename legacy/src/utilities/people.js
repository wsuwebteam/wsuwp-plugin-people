import apiFetch from "@wordpress/api-fetch";
import { addQueryArgs } from '@wordpress/url';


const getPeople = ( people_ids, callback ) => {

    let data = { people_ids:people_ids }

    apiFetch( { 
        path: addQueryArgs( '/directory/api/v1/people-get', data ) ,
    }).then( ( response ) => {

        callback( response.response );

    });

    return [];
}


const getPeopleIdsFromDirectory = ( directory ) => {


    if ( directory.hasOwnProperty( 'peopleIDs' ) ) {

        return directory.peopleIDs;

    }

    return [];

}

const getPeopleIdsFromDirectories = ( directories ) => {

    let people_ids = [];

    if ( directories.length && Array.isArray( directories ) ) {

        directories.forEach( ( directory ) => {
            
            let dir_people = getPeopleIdsFromDirectory( directory );

            console.log( dir_people );

            people_ids = people_ids.concat( dir_people );

        } );

    }

    return people_ids;

}

export { getPeople, getPeopleIdsFromDirectory, getPeopleIdsFromDirectories }