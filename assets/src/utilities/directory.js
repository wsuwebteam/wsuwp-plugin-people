
const getDirectory = () => {

    let directory = {
        directoryTitle: wp.data.select("core/editor").getEditedPostAttribute( 'title' ),
        editLink: false,
        id: wp.data.select("core/editor").getCurrentPostId(),
    }

    return directory;

}

const getDirectoryPeopleIDs = ( directory ) => {

    if ( 'peopleIDs' in directory ) {

        if ( Array.isArray( directory.peopleIDs ) ) {

            return directory.peopleIDs;

        }

        return [];

    }

    return [];

}

const updateDirectoryPeople = ( directory, peopleIDs ) => {

    if ( 'peopleIDs' in directory && Array.isArray( peopleIDs ) ) {

        directory.peopleIDs = peopleIDs;

    }

    return directory;

}

const updateChildDirectoriesMeta = ( childDirectories ) => {

    let idString = Array.isArray( childDirectories ) ? childDirectories.join(',') : '';

    wp.data.dispatch('core/editor').editPost({ meta: { wsu_child_directories: idString } });

}


export { getDirectory, getDirectoryPeopleIDs, updateDirectoryPeople, updateChildDirectoriesMeta }