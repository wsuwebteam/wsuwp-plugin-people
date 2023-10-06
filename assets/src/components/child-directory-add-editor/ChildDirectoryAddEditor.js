import { useState } from '@wordpress/element';
import { addDirectory } from '../../utilities/utilities';
import { TextControl, Button } from '@wordpress/components';
import { 
    ButtonTitleGroup 
} from '../components';

import './_style.scss';


const ChildDirectoryAddEditor = ( props ) => {

    const [directoryName, setDirectoryName]   = useState('');
    const [isActiveCreate, setIsActiveCreate] = useState(false);
    const [isActiveAdd, setIsActiveAdd]       = useState(false);

    let {
        isEditing = false,
        onAdd,
        directory,
    } = props;


    const doEditor = ( action ) => {

        switch ( action ) {

            case 'add':
                setIsActiveAdd( ! isActiveAdd );
                setIsActiveCreate( false );
                break;
            case 'create':
                setIsActiveAdd( false );
                setIsActiveCreate( ! isActiveCreate );
                break;
            case 'close':
                setIsActiveAdd( false );
                setIsActiveCreate( false );
                break;
        }

    }


    const insertDirectory = () => {

        doEditor('close')
        addDirectory( directory.id, directoryName, onAdd )

    }

    return (
        <>
            <ButtonTitleGroup title="Subdirectories">
                    <Button
                        className='wsu-gbe-people-button-light wsu-gbe-people-button--inline'
                        onClick={ () => { doEditor('add') } }
                        >Create a Directory</Button>
                    <Button
                        className='wsu-gbe-people-button-light wsu-gbe-people-button--inline'
                        onClick={ () => { doEditor('create') } }
                        disabled={true}
                        >+ Add Existing Directory</Button>
                </ButtonTitleGroup>
            <div className="wsu-gbe-people-child-directory__add-editor">
                <div className="wsu-gbe-people-child-directory__add-editor__add-controls wsu-gbe-people-child-directory__add-editor__controls" aria-expanded={ isActiveAdd ? 'true' : 'false'  }>
                    <div className="wsu-gbe-people-child-directory__add-editor__add-controls-inner wsu-gbe-people-border-horiz--gray-light">
                        <h3>Create a Child Directory</h3>
                        <TextControl
                            placeholder="New Directory Name"
                            value={ directoryName }
                            onChange={ (value) => { setDirectoryName( value ) }}
                        />
                        <Button
                            className='wsu-gbe-people-button wsu-gbe-people-button--inline'
                            onClick={ () => { insertDirectory() } }
                            >Add Directory</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChildDirectoryAddEditor;