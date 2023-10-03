import React, { useState, useEffect } from "@wordpress/element";

const edit = (props) => {

  const [directory, updateDirectory] = useState([]);
  const [directories, updateDirectories] = useState([]);

  return (
    '<div>directory</div>'
  )
}

export default edit;

/*import React, { useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import { InnerBlocks, InspectorControls, useBlockProps, InspectorAdvancedControls, } from "@wordpress/block-editor";
import {
  TextControl,
  SelectControl,
  BaseControl,
  ToggleControl,
  PanelBody,
} from "@wordpress/components";

import DirectoryEditor from "../../../assets/src/components/directory-editor/DirectoryEditor";
import PeopleList from './components/people-list/PeopleList';
import getDirectories from "../../../assets/src/utilities/getDirectories";
import getDirectory from "../../../assets/src/utilities/getDirectory";
import PeopleEditor from "../../../assets/src/components/people-editor/PeopleEditor";
import { getDirectoryPeople, getChildDirectoryPeople } from "../../../assets/src/utilities/directoryPeople";

import "./_style.scss";


const edit = (props) => {

  const { className, attributes, setAttributes } = props;

  const [directory, setDirectory] = useState(false);
  const [directories, setDirectories] = useState(false);

  const blockProps = useBlockProps({
    className: "wsu-directory",
    style: {},
  });

  const post_id = wp.data.select("core/editor").getCurrentPostId();

  let postProps = {
    post_id
  }

  let directoryProps = {
    directories,
    directory,
  }


    useEffect( () => {

        getDirectories( post_id, setDirectories );
        getDirectory( post_id, setDirectory );

    }, [] );

  return (
    <>
      <InspectorControls>
        <PanelBody title="General" initialOpen={true}>
        </PanelBody>
      </InspectorControls>
      <InspectorAdvancedControls>
	</InspectorAdvancedControls>
      <div {...blockProps}>
        <DirectoryEditor
            {...postProps}
            {...directoryProps}
            setDirectories={ ( directories ) => { setDirectories( directories ) } } 
            />
        <PeopleEditor 
            {...postProps}
            {...directoryProps}
            onChange={ () => { getDirectory( post_id, setDirectory ) } }
            />
      </div>
    </>
  );
};

export default edit;*/
