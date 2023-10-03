import './_style.scss';
import Directory from '../directory/Directory';
import { useState, useEffect } from '@wordpress/element';


const Directories = ( props ) => {

    let {
        onAdd,
        directories,
        adminUrl,
        onClick,
    } = props;

    if ( false === directories ) {
        directories = [];
    }


    return (
        <div className="wsu-gb-people-directories">
            <Directory isAdd={true} onClick={ onClick }  />
            { directories.map( ( directory ) => { return( <Directory title={ directory.title} post_id={ directory.id } adminUrl={ adminUrl }  />) } )}
        </div>
    );
}

export default Directories;