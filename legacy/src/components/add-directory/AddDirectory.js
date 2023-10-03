import './_style.scss';

import { useState } from '@wordpress/element';
import createDirectory from '../../utilities/createDirectory';
import { TextControl, Button } from '@wordpress/components';


const AddDirectory = ( props ) => {

    const [directoryName, setDirectoryName] = useState('');

    let {
        isEditing = false,
        onAdd,
        post_id,
    } = props;


    const add = () => {

        let directories = createDirectory( post_id, directoryName, onAdd );

    }

    let editClasses = isEditing ? 'wsu-gb-people-add-directory is-active' : 'wsu-gb-people-add-directory';

    return (
        <div className={editClasses}>
            <div className="wsu-gb-people-add-directory__inner-wrapper">
                <TextControl
                    placeholder="Directory Name"
                    value={ directoryName }
                    onChange={ (value) => { setDirectoryName( value ) }}
                />
                <Button
                    onClick={ () => { add() } }
                    >Add Directory</Button>
            </div>
        </div>
    );
}

export default AddDirectory;