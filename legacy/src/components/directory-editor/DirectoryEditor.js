
import './_style.scss';

import { useState, useEffect } from '@wordpress/element';
import AddDirectory from '../add-directory/AddDirectory';
import Directories from '../directories/Directories';
import getDirectories from '../../utilities/getDirectories';
import { TextControl } from '@wordpress/components';



const DirectoryEditor = ( props ) => {


    const [isEditing, setIsEditing]     = useState(false);

    let {
        directories,
        setDirectories,
        post_id,
    } = props;
    

    return (
        <>
        <h2>Child Directories</h2>
        <div className="wsu-gb-people-directory-editor">
            <AddDirectory
                post_id={ post_id }
                onAdd={ setDirectories }
                isEditing={ isEditing }
                />
            <Directories 
                directories={ directories } 
                onAdd={ () => {} }
                adminUrl={ window.wsuPeopleData.adminUrl }
                onClick={ () => { setIsEditing( true ) } }
                />
        </div>
        </>
    );
}

export default DirectoryEditor;