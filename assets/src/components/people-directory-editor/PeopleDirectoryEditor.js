
import React, { useState, useEffect } from "@wordpress/element";

import { 
    PeopleAddEditor,
    PeopleList
} from "../components";

import { getPeople } from "../../utilities/people";

import { addIDs, removeIDs } from '../../utilities/utilities';

import './_style.scss';


const PeopleDirectoryEditor = ( props ) => {

    const [people, setPeople] = useState([]);

    let {
        directory,
        peopleIDs,
        setPeopleIDs,
    } = props;

    useEffect( () => {
        getPeople( directory.id, peopleIDs, setPeople );
        // get child directories and set them to childDirectories
      }, [] );

    const addPeopleIDs = ( newIDs ) => {
        let updatedPeopleIDs = addIDs( peopleIDs, newIDs );
        updatePeopleIDs( updatedPeopleIDs );
    }

    const removePeopleIDs = ( remIDs ) => {
        let updatedPeopleIDs = removeIDs( peopleIDs, remIDs );
        updatePeopleIDs( updatedPeopleIDs );  
    }

    const updatePeopleIDs = ( updatedPeopleIDs ) => {

        setPeopleIDs( updatedPeopleIDs );
        getPeople( directory.id, updatedPeopleIDs, setPeople );

    } 

    return (
        <div class="wsu-cmp-people-directory-editor">
            <PeopleAddEditor
                addPeopleIDs={ addPeopleIDs }
                />
            <PeopleList 
                people={ people }
                removePeopleIDs={ removePeopleIDs }
                />
        </div>
    );

}

export default PeopleDirectoryEditor;