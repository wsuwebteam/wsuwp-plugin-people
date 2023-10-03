import { useState } from '@wordpress/element';
import { addDirectory } from '../../utilities/utilities';
import { TextControl, Button } from '@wordpress/components';


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
        <div>
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