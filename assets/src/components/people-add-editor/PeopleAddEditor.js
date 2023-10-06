import { PersonSearchResult } from "../components";
import { TextControl, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { searchPeople } from "../../utilities/people";
import { 
    PeopleAddEditorAdvanced,
    ButtonTitleGroup,
    CollapseForm
} from '../components';

import './_style.scss';



const PeopleAddEditor = ( props ) => {

    const [personName, setPersonName]       = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [useAdvanced, setUseAdvanced] = useState(false);
    const [isActiveAdd, setIsActiveAdd] = useState( false );
    const [isActiveImport, setIsActiveImport] = useState( false );

    const clearResults = () => {
        setSearchResults([]);
        setPersonName('');
    }

    let {
        directory,
        peopleIDs,
        addPeopleIDs
    } = props;

    const doSearch = ( value ) => {

        if ( value.length > 2 ) {

            searchPeople( value, setSearchResults )

        } else {
            setSearchResults( [] )
        }

    }

    let hasResults = Array.isArray( searchResults ) && searchResults.length ? true : false;

    return (
        <div>
            <ButtonTitleGroup title="People">
                <Button
                    className='wsu-gbe-people-button-light wsu-gbe-people-button--inline'
                    onClick={ () => { setIsActiveAdd( ! isActiveAdd ); setIsActiveImport( false ) } }
                    >+ Add People</Button>
                <Button
                    className='wsu-gbe-people-button-light wsu-gbe-people-button--inline'
                    onClick={ () => { setIsActiveAdd( false ); setIsActiveImport( ! isActiveImport ) } }
                    >Advanced Import</Button>
            </ButtonTitleGroup>
            <CollapseForm isActive={ isActiveAdd }>
                    <div>
                        <TextControl
                            label='Search for People to Add'
                            placeholder="Name"
                            value={ personName }
                            onChange={ (value) => { setPersonName( value ); doSearch( value ) }}
                        />
                        { hasResults && <ul className="wsu-gbe-people__search-results">
                            {searchResults.map( ( result ) => { return ( <PersonSearchResult {...result } addPerson={ (value) => { addPeopleIDs( [value] ); clearResults() } }  />) } ) }
                            </ul> }
                    </div>
            </CollapseForm>
            <CollapseForm  isActive={ isActiveImport }>
                <PeopleAddEditorAdvanced { ...props } isActive={ useAdvanced } setInactive={() => {setIsActiveImport(false) } } />
            </CollapseForm>

        </div>
    );

}

export default PeopleAddEditor;