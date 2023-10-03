import { useState } from '@wordpress/element';
import { addDirectory } from '../../utilities/utilities';
import { TextControl, Button } from '@wordpress/components';

import './_style.scss';


const ChildDirectoryAddEditor = ( props ) => {

    const [directoryName, setDirectoryName] = useState('');

    let {
        isEditing = false,
        onAdd,
        directory,
    } = props;


    const insertDirectory = () => {

        addDirectory( directory.id, directoryName, onAdd )

    }

    return (
        <div className="wsu-cmp-child-directory-add-editor">
            <div>
                <TextControl
                    placeholder="Directory Name"
                    value={ directoryName }
                    onChange={ (value) => { setDirectoryName( value ) }}
                />
                <Button
                    onClick={ () => { insertDirectory() } }
                    >Add Directory</Button>
            </div>
        </div>
    );
}

export default ChildDirectoryAddEditor;