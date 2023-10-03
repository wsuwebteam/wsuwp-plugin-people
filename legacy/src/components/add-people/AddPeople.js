import './_style.scss';
import SearchResultPerson from '../search-result-person/searchResultPerson';
import { useState, useEffect } from '@wordpress/element';
import createDirectory from '../../utilities/createDirectory';
import searchPeople from '../../utilities/searchPeople';
import { TextControl, Button } from '@wordpress/components';
import updatePeopleMeta from '../../utilities/updatePeopleMeta';


const AddPeople = ( props ) => {

    let {
        isEditing = false,
        onAdd,
        post_id,
        people,
    } = props;

    const [personName, setPersonName] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const doSearch = () => {

        if ( personName.length > 3 ) {

            searchPeople( personName, updateSearchResults )

        }

    }

    const updateSearchResults = ( response ) => {

        if ( Array.isArray( response ) && response.length > 0 ) {

            setSearchResults( response );

        } else {

            setSearchResults( [] );
        }

    }

    const clearResults = () => {
        setSearchResults([]);
        setPersonName('');
    }


    return (
        <div className="wsu-gb-people__people-search">
            <div className="wsu-gb-people__people-search-input">
                <TextControl
                    placeholder="Search for People"
                    value={ personName }
                    onChange={ (value) => { setPersonName( value ); doSearch() }}
                />
                <ul>
                    {searchResults.map( ( result ) => { return ( <SearchResultPerson {...result } onClick={ (value) => { onAdd( value ); clearResults() } }  />) } ) }
                </ul>
            </div>
        </div>
    );
}

export default AddPeople;