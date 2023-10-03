import './_style.scss';

import { useState, useEffect } from '@wordpress/element';
import AddDirectory from '../add-directory/AddDirectory';
import Directories from '../directories/Directories';
import getDirectories from '../../utilities/getDirectories';
import { TextControl } from '@wordpress/components';
import DirectoryPeople from '../directory-people/DirectoryPeople';
import AddPeople from '../add-people/AddPeople';
import updatePeopleMeta from '../../utilities/updatePeopleMeta';
import { getPeople } from '../../utilities/people';
import { getPeopleIdsFromDirectories } from '../../utilities/people';





const PeopleEditor = ( props ) => {

    let {
        post_id,
        onChange,
        directories,
    } = props;

    let meta = wp.data.select('core/editor').getEditedPostAttribute('meta');
    let peopleMeta = ( meta.hasOwnProperty('wsu_people') ) ? meta.wsu_people.split(',') : [];

    const [localPeople, setLocalPeople] = useState([]);
    const [childPeople, setChildPeople] = useState([]);
    const [peopleIDs, setPeopleIDs]     = useState(peopleMeta);
    const [remotePeopleIDs, setRemotePeopleIDs] = useState( getPeopleIdsFromDirectories( directories ) );

    console.log( childPeople );

    useEffect( () => {

        getPeople( peopleIDs, setLocalPeople );
        getPeople( remotePeopleIDs, setChildPeople );

    }, [] );

    useEffect( () => {

        getPeople( remotePeopleIDs, setChildPeople );

    }, [remotePeopleIDs] );

    useEffect( () => {

        setRemotePeopleIDs( getPeopleIdsFromDirectories( directories ) );

    }, [directories] );



    const onAdd = ( value ) => {

        peopleIDs.push( value );

        updatePeopleMeta( peopleIDs.join(',') );

        setPeopleIDs( peopleIDs );

        getPeople( peopleIDs, setLocalPeople );
    }

    

    let peopleProps = {
        peopleIDs,
        onAdd,
    }


    return (
        <>
        <h2>People</h2>
        <div className="wsu-gb-people-people-editor">
            <AddPeople { ...props } { ...peopleProps } />
            <DirectoryPeople { ...props } people={localPeople} />
            <DirectoryPeople { ...props } people={childPeople} />
        </div>
        </>
    );
}

export default PeopleEditor;