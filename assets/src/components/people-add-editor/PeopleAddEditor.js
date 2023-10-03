import { PersonSearchResult } from "../components";
import { TextControl, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { searchPeople } from "../../utilities/people";
import { PeopleAddEditorAdvanced } from '../components';



const PeopleAddEditor = ( props ) => {

    const [personName, setPersonName]       = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const clearResults = () => {
        setSearchResults([]);
        setPersonName('');
    }

    let {
        directory,
        peopleIDs,
        addPeopleIDs
    } = props;

    const doSearch = () => {

        if ( personName.length > 3 ) {

            searchPeople( personName, setSearchResults )

        }

    }

    let hasResults = Array.isArray( searchResults ) && searchResults.length ? true : false;

    return (
        <div>
            <div>
                <div>
                    <TextControl
                        placeholder="Search for People"
                        value={ personName }
                        onChange={ (value) => { setPersonName( value ); doSearch() }}
                    />
                </div>
                { hasResults && <ul>
                    {searchResults.map( ( result ) => { return ( <PersonSearchResult {...result } addPerson={ (value) => { addPeopleIDs( [value] ); clearResults() } }  />) } ) }
                </ul> }
            </div>
            <div>
                <PeopleAddEditorAdvanced { ...props } />
            </div>
        </div>
    );

}

export default PeopleAddEditor;