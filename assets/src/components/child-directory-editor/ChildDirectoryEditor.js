import React, { useState, useEffect } from "@wordpress/element";

import { getChildDirectories } from '../../utilities/utilities';
import {
    ChildDirectoryList, 
    ChildDirectoryAddEditor 
} from "../components";

import './_style.scss';

const ChildDirectoryEditor = ( props ) => {

    let {
        directory,
        childDirectories,
        setChildDirectories
    } = props



    const updateChildDirectories = () => {

        getChildDirectories( directory.id, setChildDirectories );

    }

    useEffect( () => {

        updateChildDirectories();
        
    }, [] );

    console.log( childDirectories );

    return (
        <div className="wsu-cmp-child-directory-editor">
            <ChildDirectoryAddEditor  directory={directory} onAdd={ () => { updateChildDirectories() } } />
            <ChildDirectoryList childDirectories={childDirectories} />
        </div>
    )

}

export default ChildDirectoryEditor;