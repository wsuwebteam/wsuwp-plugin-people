/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/components/button-title-group/ButtonTitleGroup.js":
/*!**********************************************************************!*\
  !*** ./assets/src/components/button-title-group/ButtonTitleGroup.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/button-title-group/_style.scss");


const ButtonTitleGroup = props => {
  let {
    title = '',
    level = '2'
  } = props;
  const HeadingTag = `h${level}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people__button-title-group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadingTag, null, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people__button-title-group__buttons"
  }, props.children));
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonTitleGroup);

/***/ }),

/***/ "./assets/src/components/child-directory-add-editor/ChildDirectoryAddEditor.js":
/*!*************************************************************************************!*\
  !*** ./assets/src/components/child-directory-add-editor/ChildDirectoryAddEditor.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/utilities */ "./assets/src/utilities/utilities.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./assets/src/components/components.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/child-directory-add-editor/_style.scss");






const ChildDirectoryAddEditor = props => {
  const [directoryName, setDirectoryName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isActiveCreate, setIsActiveCreate] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isActiveAdd, setIsActiveAdd] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let {
    isEditing = false,
    onAdd,
    directory
  } = props;
  const doEditor = action => {
    switch (action) {
      case 'add':
        setIsActiveAdd(!isActiveAdd);
        setIsActiveCreate(false);
        break;
      case 'create':
        setIsActiveAdd(false);
        setIsActiveCreate(!isActiveCreate);
        break;
      case 'close':
        setIsActiveAdd(false);
        setIsActiveCreate(false);
        break;
    }
  };
  const insertDirectory = () => {
    doEditor('close');
    (0,_utilities_utilities__WEBPACK_IMPORTED_MODULE_1__.addDirectory)(directory.id, directoryName, onAdd);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_3__.ButtonTitleGroup, {
    title: "Subdirectories"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "wsu-gbe-people-button-light wsu-gbe-people-button--inline",
    onClick: () => {
      doEditor('add');
    }
  }, "Create a Directory"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "wsu-gbe-people-button-light wsu-gbe-people-button--inline",
    onClick: () => {
      doEditor('create');
    },
    disabled: true
  }, "+ Add Existing Directory")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people-child-directory__add-editor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people-child-directory__add-editor__add-controls wsu-gbe-people-child-directory__add-editor__controls",
    "aria-expanded": isActiveAdd ? 'true' : 'false'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people-child-directory__add-editor__add-controls-inner wsu-gbe-people-border-horiz--gray-light"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Create a Child Directory"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    placeholder: "New Directory Name",
    value: directoryName,
    onChange: value => {
      setDirectoryName(value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "wsu-gbe-people-button wsu-gbe-people-button--inline",
    onClick: () => {
      insertDirectory();
    }
  }, "Add Directory")))));
};
/* harmony default export */ __webpack_exports__["default"] = (ChildDirectoryAddEditor);

/***/ }),

/***/ "./assets/src/components/child-directory-card/ChildDirectoryCard.js":
/*!**************************************************************************!*\
  !*** ./assets/src/components/child-directory-card/ChildDirectoryCard.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/child-directory-card/_style.scss");



const ChildDirectoryCard = props => {
  var _window$wsuPeopleData;
  let {
    title = '',
    id = false,
    peopleIDs = []
  } = props;
  let adminUrl = (_window$wsuPeopleData = window.wsuPeopleData.adminUrl) !== null && _window$wsuPeopleData !== void 0 ? _window$wsuPeopleData : '#';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wsu-cpm-child-directory-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "wsu-cpm-child-directory-card__title"
  }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wsu-cpm-child-directory-card__count"
  }, "People In Directory: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, peopleIDs.length)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "wsu-cpm-child-directory-card__edit",
    href: `${adminUrl}/post.php?post=${id}&action=edit`
  }, "Edit Directory"));
};
/* harmony default export */ __webpack_exports__["default"] = (ChildDirectoryCard);

/***/ }),

/***/ "./assets/src/components/child-directory-editor/ChildDirectoryEditor.js":
/*!******************************************************************************!*\
  !*** ./assets/src/components/child-directory-editor/ChildDirectoryEditor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/utilities */ "./assets/src/utilities/utilities.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./assets/src/components/components.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/child-directory-editor/_style.scss");





const ChildDirectoryEditor = props => {
  let {
    directory,
    childDirectories,
    setChildDirectories
  } = props;
  const updateChildDirectories = () => {
    (0,_utilities_utilities__WEBPACK_IMPORTED_MODULE_1__.getChildDirectories)(directory.id, setChildDirectories);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateChildDirectories();
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-cmp-child-directory-editor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.ChildDirectoryAddEditor, {
    directory: directory,
    onAdd: () => {
      updateChildDirectories();
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.ChildDirectoryList, {
    childDirectories: childDirectories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_2__.HelperText, null, "*People total does not included inhereted directories"));
};
/* harmony default export */ __webpack_exports__["default"] = (ChildDirectoryEditor);

/***/ }),

/***/ "./assets/src/components/child-directory-list/ChildDirectoryList.js":
/*!**************************************************************************!*\
  !*** ./assets/src/components/child-directory-list/ChildDirectoryList.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./assets/src/components/components.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/child-directory-list/_style.scss");



const ChildDirectoryList = props => {
  let {
    childDirectories
  } = props;
  let peopleArray = Array.isArray(childDirectories) ? childDirectories : [];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "wsu-cmp-child-directory-list"
  }, childDirectories.map(directory => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.ChildDirectoryCard, {
      ...directory
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ChildDirectoryList);

/***/ }),

/***/ "./assets/src/components/collapse-form/CollapseForm.js":
/*!*************************************************************!*\
  !*** ./assets/src/components/collapse-form/CollapseForm.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/collapse-form/_style.scss");


const CollapseForm = props => {
  let {
    isActive = false
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people__collapse-form",
    "aria-expanded": isActive ? 'true' : 'false'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people__collapse-form__inner-wrapper"
  }, props.children));
};
/* harmony default export */ __webpack_exports__["default"] = (CollapseForm);

/***/ }),

/***/ "./assets/src/components/components.js":
/*!*********************************************!*\
  !*** ./assets/src/components/components.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonTitleGroup: function() { return /* reexport safe */ _button_title_group_ButtonTitleGroup__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   ChildDirectoryAddEditor: function() { return /* reexport safe */ _child_directory_add_editor_ChildDirectoryAddEditor__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   ChildDirectoryCard: function() { return /* reexport safe */ _child_directory_card_ChildDirectoryCard__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   ChildDirectoryEditor: function() { return /* reexport safe */ _child_directory_editor_ChildDirectoryEditor__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   ChildDirectoryList: function() { return /* reexport safe */ _child_directory_list_ChildDirectoryList__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   CollapseForm: function() { return /* reexport safe */ _collapse_form_CollapseForm__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   DirectoryPath: function() { return /* reexport safe */ _directory_path_DirectoryPath__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   HelperText: function() { return /* reexport safe */ _helper_text_HelperText__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   PeopleAddEditor: function() { return /* reexport safe */ _people_add_editor_PeopleAddEditor__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   PeopleAddEditorAdvanced: function() { return /* reexport safe */ _people_add_editor_advanced_PeopleAddEditorAdvanced__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   PeopleDirectoryEditor: function() { return /* reexport safe */ _people_directory_editor_PeopleDirectoryEditor__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   PeopleList: function() { return /* reexport safe */ _people_list_PeopleList__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   PersonCard: function() { return /* reexport safe */ _person_card_PersonCard__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   PersonSearchResult: function() { return /* reexport safe */ _person_search_result_PersonSearchResult__WEBPACK_IMPORTED_MODULE_6__["default"]; }
/* harmony export */ });
/* harmony import */ var _directory_path_DirectoryPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory-path/DirectoryPath */ "./assets/src/components/directory-path/DirectoryPath.js");
/* harmony import */ var _people_directory_editor_PeopleDirectoryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./people-directory-editor/PeopleDirectoryEditor */ "./assets/src/components/people-directory-editor/PeopleDirectoryEditor.js");
/* harmony import */ var _people_add_editor_PeopleAddEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people-add-editor/PeopleAddEditor */ "./assets/src/components/people-add-editor/PeopleAddEditor.js");
/* harmony import */ var _people_add_editor_advanced_PeopleAddEditorAdvanced__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people-add-editor-advanced/PeopleAddEditorAdvanced */ "./assets/src/components/people-add-editor-advanced/PeopleAddEditorAdvanced.js");
/* harmony import */ var _person_card_PersonCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person-card/PersonCard */ "./assets/src/components/person-card/PersonCard.js");
/* harmony import */ var _people_list_PeopleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people-list/PeopleList */ "./assets/src/components/people-list/PeopleList.js");
/* harmony import */ var _person_search_result_PersonSearchResult__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person-search-result/PersonSearchResult */ "./assets/src/components/person-search-result/PersonSearchResult.js");
/* harmony import */ var _child_directory_editor_ChildDirectoryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./child-directory-editor/ChildDirectoryEditor */ "./assets/src/components/child-directory-editor/ChildDirectoryEditor.js");
/* harmony import */ var _child_directory_list_ChildDirectoryList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./child-directory-list/ChildDirectoryList */ "./assets/src/components/child-directory-list/ChildDirectoryList.js");
/* harmony import */ var _child_directory_card_ChildDirectoryCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./child-directory-card/ChildDirectoryCard */ "./assets/src/components/child-directory-card/ChildDirectoryCard.js");
/* harmony import */ var _child_directory_add_editor_ChildDirectoryAddEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./child-directory-add-editor/ChildDirectoryAddEditor */ "./assets/src/components/child-directory-add-editor/ChildDirectoryAddEditor.js");
/* harmony import */ var _helper_text_HelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helper-text/HelperText */ "./assets/src/components/helper-text/HelperText.js");
/* harmony import */ var _button_title_group_ButtonTitleGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button-title-group/ButtonTitleGroup */ "./assets/src/components/button-title-group/ButtonTitleGroup.js");
/* harmony import */ var _collapse_form_CollapseForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collapse-form/CollapseForm */ "./assets/src/components/collapse-form/CollapseForm.js");
















/***/ }),

/***/ "./assets/src/components/directory-path/DirectoryPath.js":
/*!***************************************************************!*\
  !*** ./assets/src/components/directory-path/DirectoryPath.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/directory-path/_style.scss");


const DirectoryPathItem = props => {
  var _window$wsuPeopleData;
  let {
    title = '',
    post_id = ''
  } = props;
  let adminUrl = (_window$wsuPeopleData = window.wsuPeopleData.adminUrl) !== null && _window$wsuPeopleData !== void 0 ? _window$wsuPeopleData : '#';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: `${adminUrl}/post.php?post=${post_id}&action=edit`
  }, title));
};
const DirectoryPath = props => {
  let {
    directoryPath = [],
    directory
  } = props;
  let hasDirectory = directoryPath.length ? true : false;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hasDirectory && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "wsu-gbe-people__directory-path"
  }, directoryPath.map(directory => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DirectoryPathItem, {
      ...directory
    });
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, directory.directoryTitle)));
};
/* harmony default export */ __webpack_exports__["default"] = (DirectoryPath);

/***/ }),

/***/ "./assets/src/components/helper-text/HelperText.js":
/*!*********************************************************!*\
  !*** ./assets/src/components/helper-text/HelperText.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/helper-text/_style.scss");


const HelperText = props => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-cpm-helper-text wsu-gbe-people-font-size--xsmall wsu-gbe-people-font-color--gray-light"
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (HelperText);

/***/ }),

/***/ "./assets/src/components/people-add-editor-advanced/PeopleAddEditorAdvanced.js":
/*!*************************************************************************************!*\
  !*** ./assets/src/components/people-add-editor-advanced/PeopleAddEditorAdvanced.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/utilities */ "./assets/src/utilities/utilities.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/people-add-editor-advanced/_style.scss");





const PeopleAddEditorAdvanced = props => {
  const [taxonomy, setTaxonomy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [taxonomyList, setTaxonomyList] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [termList, setTermList] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [term, setTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  let {
    isActive,
    setInactive,
    addPeopleIDs
  } = props;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilities_utilities__WEBPACK_IMPORTED_MODULE_2__.getTaxonomies)(setTaxonomyList);
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilities_utilities__WEBPACK_IMPORTED_MODULE_2__.getTaxonomyTerms)(taxonomy, setTermList);
  }, [taxonomy]);
  let defaultSelect = [{
    label: 'Select',
    value: ''
  }];
  let taxonomyOptions = defaultSelect.concat(taxonomyList);
  let termOptions = defaultSelect.concat(termList);
  let expanded = isActive ? 'true' : 'false';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-cpm-people-add-editor-advanced",
    "aria-expanded": expanded
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-cpm-people-add-editor-advanced__inner"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Taxonomy",
    value: taxonomy,
    options: taxonomyOptions,
    onChange: value => setTaxonomy(value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Term",
    value: term,
    options: termOptions,
    onChange: value => {
      setTerm(value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "wsu-gbe-people-button wsu-gbe-people-button--inline",
    onClick: () => {
      (0,_utilities_utilities__WEBPACK_IMPORTED_MODULE_2__.getPeopleIDsFromTaxonomy)(taxonomy, term, addPeopleIDs);
      setInactive(false);
    }
  }, "Import People")));
};
/* harmony default export */ __webpack_exports__["default"] = (PeopleAddEditorAdvanced);

/***/ }),

/***/ "./assets/src/components/people-add-editor/PeopleAddEditor.js":
/*!********************************************************************!*\
  !*** ./assets/src/components/people-add-editor/PeopleAddEditor.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./assets/src/components/components.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities_people__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/people */ "./assets/src/utilities/people.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/people-add-editor/_style.scss");







const PeopleAddEditor = props => {
  const [personName, setPersonName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [searchResults, setSearchResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [useAdvanced, setUseAdvanced] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isActiveAdd, setIsActiveAdd] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isActiveImport, setIsActiveImport] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const clearResults = () => {
    setSearchResults([]);
    setPersonName('');
  };
  let {
    directory,
    peopleIDs,
    addPeopleIDs
  } = props;
  const doSearch = value => {
    if (value.length > 2) {
      (0,_utilities_people__WEBPACK_IMPORTED_MODULE_3__.searchPeople)(value, setSearchResults);
    } else {
      setSearchResults([]);
    }
  };
  let hasResults = Array.isArray(searchResults) && searchResults.length ? true : false;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.ButtonTitleGroup, {
    title: "People"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "wsu-gbe-people-button-light wsu-gbe-people-button--inline",
    onClick: () => {
      setIsActiveAdd(!isActiveAdd);
      setIsActiveImport(false);
    }
  }, "+ Add People"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "wsu-gbe-people-button-light wsu-gbe-people-button--inline",
    onClick: () => {
      setIsActiveAdd(false);
      setIsActiveImport(!isActiveImport);
    }
  }, "Advanced Import")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.CollapseForm, {
    isActive: isActiveAdd
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Search for People to Add",
    placeholder: "Name",
    value: personName,
    onChange: value => {
      setPersonName(value);
      doSearch(value);
    }
  }), hasResults && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "wsu-gbe-people__search-results"
  }, searchResults.map(result => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.PersonSearchResult, {
      ...result,
      addPerson: value => {
        addPeopleIDs([value]);
        clearResults();
      }
    });
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.CollapseForm, {
    isActive: isActiveImport
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.PeopleAddEditorAdvanced, {
    ...props,
    isActive: useAdvanced,
    setInactive: () => {
      setIsActiveImport(false);
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (PeopleAddEditor);

/***/ }),

/***/ "./assets/src/components/people-directory-editor/PeopleDirectoryEditor.js":
/*!********************************************************************************!*\
  !*** ./assets/src/components/people-directory-editor/PeopleDirectoryEditor.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./assets/src/components/components.js");
/* harmony import */ var _utilities_people__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/people */ "./assets/src/utilities/people.js");
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/utilities */ "./assets/src/utilities/utilities.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/people-directory-editor/_style.scss");






const PeopleDirectoryEditor = props => {
  const [people, setPeople] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let {
    directory,
    peopleIDs,
    setPeopleIDs
  } = props;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilities_people__WEBPACK_IMPORTED_MODULE_2__.getPeople)(directory.id, peopleIDs, setPeople);
    // get child directories and set them to childDirectories
  }, []);
  const addPeopleIDs = newIDs => {
    let updatedPeopleIDs = (0,_utilities_utilities__WEBPACK_IMPORTED_MODULE_3__.addIDs)(peopleIDs, newIDs);
    updatePeopleIDs(updatedPeopleIDs);
  };
  const removePeopleIDs = remIDs => {
    let updatedPeopleIDs = (0,_utilities_utilities__WEBPACK_IMPORTED_MODULE_3__.removeIDs)(peopleIDs, remIDs);
    updatePeopleIDs(updatedPeopleIDs);
  };
  const updatePeopleIDs = updatedPeopleIDs => {
    setPeopleIDs(updatedPeopleIDs);
    (0,_utilities_people__WEBPACK_IMPORTED_MODULE_2__.getPeople)(directory.id, updatedPeopleIDs, setPeople);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wsu-cmp-people-directory-editor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.PeopleAddEditor, {
    addPeopleIDs: addPeopleIDs
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.PeopleList, {
    people: people,
    removePeopleIDs: removePeopleIDs
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (PeopleDirectoryEditor);

/***/ }),

/***/ "./assets/src/components/people-list/PeopleList.js":
/*!*********************************************************!*\
  !*** ./assets/src/components/people-list/PeopleList.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./assets/src/components/components.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/people-list/_style.scss");



const PeopleList = props => {
  let {
    people,
    removePeopleIDs
  } = props;
  let peopleArray = Array.isArray(people) ? people : [];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "wsu-cmp-people-list"
  }, people.map(person => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components__WEBPACK_IMPORTED_MODULE_1__.PersonCard, {
      ...person,
      removePerson: value => {
        removePeopleIDs([value]);
      }
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (PeopleList);

/***/ }),

/***/ "./assets/src/components/person-card/PersonCard.js":
/*!*********************************************************!*\
  !*** ./assets/src/components/person-card/PersonCard.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/person-card/_style.scss");



const PersonCard = props => {
  var _window$wsuPeopleData;
  let {
    name = '',
    post_id = false,
    directoryID = false,
    title = [],
    removePerson,
    email = '',
    photo_sizes = {}
  } = props;
  let positionTitle = title.length ? title[0] : '';
  let adminUrl = (_window$wsuPeopleData = window.wsuPeopleData.adminUrl) !== null && _window$wsuPeopleData !== void 0 ? _window$wsuPeopleData : '#';
  let imageUrl = photo_sizes && photo_sizes.hasOwnProperty('thumbnail') ? photo_sizes.thumbnail : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wsu-gbe-people-editor__person-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people-editor__person-card__button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    "aria-label": "Remove Person",
    onClick: () => {
      removePerson(post_id);
    }
  }, "Remove X")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people-editor__person-card__image"
  }, imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageUrl
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "wsu-gbe-people-editor__person-card__name"
  }, name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people-editor__person-card__title"
  }, positionTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people-editor__person-card__email"
  }, email), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "wsu-gbe-people-editor__person-card__edit",
    href: `${adminUrl}/post.php?post=${post_id}&action=edit`
  }, "Edit Profile"));
};
/* harmony default export */ __webpack_exports__["default"] = (PersonCard);

/***/ }),

/***/ "./assets/src/components/person-search-result/PersonSearchResult.js":
/*!**************************************************************************!*\
  !*** ./assets/src/components/person-search-result/PersonSearchResult.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_style.scss */ "./assets/src/components/person-search-result/_style.scss");



const PersonSearchResult = props => {
  let {
    name = '',
    post_id = false,
    directoryID = false,
    title = [],
    removePerson,
    email = '',
    addPerson
  } = props;
  let positionTitle = title.length ? title[0] : '';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "wsu-gbe-people-editor__person-search-card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => {
      addPerson(post_id);
    }
  }, name, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wsu-gbe-people-editor__person-search-card__title"
  }, title)));
};
/* harmony default export */ __webpack_exports__["default"] = (PersonSearchResult);

/***/ }),

/***/ "./assets/src/utilities/addDirectory.js":
/*!**********************************************!*\
  !*** ./assets/src/utilities/addDirectory.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);


const addDirectory = (directoryID, directoryName, callback) => {
  let data = {
    directory_id: directoryID,
    title: directoryName
  };
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/directory/api/v1/add', data)
  }).then(response => {
    callback(response.response);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (addDirectory);

/***/ }),

/***/ "./assets/src/utilities/addIDs.js":
/*!****************************************!*\
  !*** ./assets/src/utilities/addIDs.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./assets/src/utilities/utilities.js");

const addIDs = (currentIDs, addIDs) => {
  let updatedPeopleIDs = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.deDupArray)(currentIDs.concat(addIDs));
  return updatedPeopleIDs;
};
/* harmony default export */ __webpack_exports__["default"] = (addIDs);

/***/ }),

/***/ "./assets/src/utilities/deDupArray.js":
/*!********************************************!*\
  !*** ./assets/src/utilities/deDupArray.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const deDupArray = array => {
  console.log(array);
  let uniqueArray = array.filter((c, index) => {
    return array.indexOf(c) === index;
  });
  console.log(uniqueArray);
  return uniqueArray;
};
/* harmony default export */ __webpack_exports__["default"] = (deDupArray);

/***/ }),

/***/ "./assets/src/utilities/directory.js":
/*!*******************************************!*\
  !*** ./assets/src/utilities/directory.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDirectory: function() { return /* binding */ getDirectory; },
/* harmony export */   getDirectoryPeopleIDs: function() { return /* binding */ getDirectoryPeopleIDs; },
/* harmony export */   updateChildDirectoriesMeta: function() { return /* binding */ updateChildDirectoriesMeta; },
/* harmony export */   updateDirectoryPeople: function() { return /* binding */ updateDirectoryPeople; }
/* harmony export */ });
const getDirectory = () => {
  let directory = {
    directoryTitle: wp.data.select("core/editor").getEditedPostAttribute('title'),
    editLink: false,
    id: wp.data.select("core/editor").getCurrentPostId()
  };
  return directory;
};
const getDirectoryPeopleIDs = directory => {
  if ('peopleIDs' in directory) {
    if (Array.isArray(directory.peopleIDs)) {
      return directory.peopleIDs;
    }
    return [];
  }
  return [];
};
const updateDirectoryPeople = (directory, peopleIDs) => {
  if ('peopleIDs' in directory && Array.isArray(peopleIDs)) {
    directory.peopleIDs = peopleIDs;
  }
  return directory;
};
const updateChildDirectoriesMeta = childDirectories => {
  let idString = Array.isArray(childDirectories) ? childDirectories.join(',') : '';
  wp.data.dispatch('core/editor').editPost({
    meta: {
      wsu_child_directories: idString
    }
  });
};


/***/ }),

/***/ "./assets/src/utilities/getChildDirectories.js":
/*!*****************************************************!*\
  !*** ./assets/src/utilities/getChildDirectories.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);


const getChildDirectories = (directoryID, callback) => {
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(`/peopleapi/v1/directory/children/${directoryID}`)
  }).then(response => {
    callback(response);
  });
  return [];
};
/* harmony default export */ __webpack_exports__["default"] = (getChildDirectories);

/***/ }),

/***/ "./assets/src/utilities/getDirectoryPath.js":
/*!**************************************************!*\
  !*** ./assets/src/utilities/getDirectoryPath.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);


const getDirectoryPath = (directoryID, callback) => {
  let data = {
    directory: directoryID
  };
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/peopleapi/v1/editor/directory/path', data)
  }).then(response => {
    callback(response);
  });
  return [];
};
/* harmony default export */ __webpack_exports__["default"] = (getDirectoryPath);

/***/ }),

/***/ "./assets/src/utilities/getPeopleIDsFromTaxonomy.js":
/*!**********************************************************!*\
  !*** ./assets/src/utilities/getPeopleIDsFromTaxonomy.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);


const getPeopleIDsFromTaxonomy = (taxonomy, term, callback) => {
  let data = {
    taxonomy,
    term,
    format: 'id'
  };
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/directory/api/v1/people/tax-query', data)
  }).then(response => {
    callback(response.response);
  });
  return [];
};
/* harmony default export */ __webpack_exports__["default"] = (getPeopleIDsFromTaxonomy);

/***/ }),

/***/ "./assets/src/utilities/getTaxonomies.js":
/*!***********************************************!*\
  !*** ./assets/src/utilities/getTaxonomies.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);


const getTaxonomies = callback => {
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: '/directory/api/v1/taxonomy/get'
  }).then(response => {
    callback(response.response);
  });
  return [];
};
/* harmony default export */ __webpack_exports__["default"] = (getTaxonomies);

/***/ }),

/***/ "./assets/src/utilities/getTaxonomyTerms.js":
/*!**************************************************!*\
  !*** ./assets/src/utilities/getTaxonomyTerms.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);


const getTaxonomyTerms = (taxonomy, callback) => {
  let data = {
    taxonomy
  };
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/directory/api/v1/terms/get', data)
  }).then(response => {
    callback(response.response);
  });
  return [];
};
/* harmony default export */ __webpack_exports__["default"] = (getTaxonomyTerms);

/***/ }),

/***/ "./assets/src/utilities/people.js":
/*!****************************************!*\
  !*** ./assets/src/utilities/people.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPeople: function() { return /* binding */ getPeople; },
/* harmony export */   searchPeople: function() { return /* binding */ searchPeople; },
/* harmony export */   updatePeopleMeta: function() { return /* binding */ updatePeopleMeta; }
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);


const getPeople = (directoryID, peopleIDs, callback, fields = ['name']) => {
  peopleIDs = Array.isArray(peopleIDs) ? peopleIDs.join(',') : '';
  if (peopleIDs) {
    let data = {
      ids: peopleIDs,
      directory: directoryID,
      fields: fields.join(',')
    };
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/peopleapi/v1/people', data)
    }).then(response => {
      callback(response);
    });
  } else {
    callback([]);
  }
};
const searchPeople = (term, callback) => {
  let data = {
    search: term
  };
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)('/peopleapi/v1/people', data)
  }).then(response => {
    callback(response);
  });
};

/*const getPeopleIDs = () => {

    let meta = wp.data.select('core/editor').getEditedPostAttribute('meta');
    let peopleMeta = ( meta.hasOwnProperty('wsu_people') ) ? meta.wsu_people.split(',') : [];

    var filtered = peopleMeta.filter(Boolean);

    return filtered;

}

const getPeopleFromDirectory = ( directory, callback) => {

}

const getPeopleFromDirectories = ( directories, callback ) => {

}*/

const updatePeopleMeta = peopleIDs => {
  let idString = Array.isArray(peopleIDs) ? peopleIDs.join(',') : '';
  wp.data.dispatch('core/editor').editPost({
    meta: {
      wsu_people: idString
    }
  });
};


/***/ }),

/***/ "./assets/src/utilities/removeIDs.js":
/*!*******************************************!*\
  !*** ./assets/src/utilities/removeIDs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const removeIDs = (currentIDs, removeIDs) => {
  let updatedIDs = currentIDs.filter(function (el) {
    return !removeIDs.includes(el);
  });
  return updatedIDs;
};
/* harmony default export */ __webpack_exports__["default"] = (removeIDs);

/***/ }),

/***/ "./assets/src/utilities/utilities.js":
/*!*******************************************!*\
  !*** ./assets/src/utilities/utilities.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDirectory: function() { return /* reexport safe */ _addDirectory__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   addIDs: function() { return /* reexport safe */ _addIDs__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   deDupArray: function() { return /* reexport safe */ _deDupArray__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   getChildDirectories: function() { return /* reexport safe */ _getChildDirectories__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   getDirectoryPath: function() { return /* reexport safe */ _getDirectoryPath__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   getPeopleIDsFromTaxonomy: function() { return /* reexport safe */ _getPeopleIDsFromTaxonomy__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   getTaxonomies: function() { return /* reexport safe */ _getTaxonomies__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   getTaxonomyTerms: function() { return /* reexport safe */ _getTaxonomyTerms__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   removeIDs: function() { return /* reexport safe */ _removeIDs__WEBPACK_IMPORTED_MODULE_2__["default"]; }
/* harmony export */ });
/* harmony import */ var _deDupArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deDupArray */ "./assets/src/utilities/deDupArray.js");
/* harmony import */ var _addIDs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addIDs */ "./assets/src/utilities/addIDs.js");
/* harmony import */ var _removeIDs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeIDs */ "./assets/src/utilities/removeIDs.js");
/* harmony import */ var _getChildDirectories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getChildDirectories */ "./assets/src/utilities/getChildDirectories.js");
/* harmony import */ var _addDirectory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addDirectory */ "./assets/src/utilities/addDirectory.js");
/* harmony import */ var _getTaxonomies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getTaxonomies */ "./assets/src/utilities/getTaxonomies.js");
/* harmony import */ var _getTaxonomyTerms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getTaxonomyTerms */ "./assets/src/utilities/getTaxonomyTerms.js");
/* harmony import */ var _getPeopleIDsFromTaxonomy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getPeopleIDsFromTaxonomy */ "./assets/src/utilities/getPeopleIDsFromTaxonomy.js");
/* harmony import */ var _getDirectoryPath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getDirectoryPath */ "./assets/src/utilities/getDirectoryPath.js");










/***/ }),

/***/ "./blocks/wsu-directory/editor/block.js":
/*!**********************************************!*\
  !*** ./blocks/wsu-directory/editor/block.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/wsu-directory/editor/edit.js");
const {
  registerBlockType
} = wp.blocks;

registerBlockType("wsuwp/wsu-directory", {
  title: "WSU Directory",
  icon: "menu",
  apiVersion: 2,
  category: "text",
  attributes: {
    peopleIDs: {
      type: "array",
      default: []
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./blocks/wsu-directory/editor/edit.js":
/*!*********************************************!*\
  !*** ./blocks/wsu-directory/editor/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_src_components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/src/components/components */ "./assets/src/components/components.js");
/* harmony import */ var _assets_src_utilities_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/src/utilities/utilities */ "./assets/src/utilities/utilities.js");
/* harmony import */ var _assets_src_utilities_people__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/src/utilities/people */ "./assets/src/utilities/people.js");
/* harmony import */ var _assets_src_utilities_directory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/src/utilities/directory */ "./assets/src/utilities/directory.js");






const edit = props => {
  let {
    className,
    isSelected,
    attributes,
    setAttributes
  } = props;

  // Set inital state of directory
  const [directory, updateDirectory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_assets_src_utilities_directory__WEBPACK_IMPORTED_MODULE_4__.getDirectory)());
  const [childDirectories, setChildDirectories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [directoryPath, setDirectoryPath] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_assets_src_utilities_utilities__WEBPACK_IMPORTED_MODULE_2__.getDirectoryPath)(directory.id, setDirectoryPath);
  }, [directory]);
  const setPeopleIDs = profileIDs => {
    setAttributes({
      peopleIDs: profileIDs
    });
    (0,_assets_src_utilities_people__WEBPACK_IMPORTED_MODULE_3__.updatePeopleMeta)(profileIDs);
  };
  console.log(directory);
  console.log(directoryPath);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wsu-gbe-people-editor"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_components_components__WEBPACK_IMPORTED_MODULE_1__.DirectoryPath, {
    directory: directory,
    directoryPath: directoryPath
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_components_components__WEBPACK_IMPORTED_MODULE_1__.ChildDirectoryEditor, {
    directory: directory,
    childDirectories: childDirectories,
    setChildDirectories: setChildDirectories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_src_components_components__WEBPACK_IMPORTED_MODULE_1__.PeopleDirectoryEditor, {
    directory: directory,
    peopleIDs: attributes.peopleIDs,
    setPeopleIDs: setPeopleIDs
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

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

/***/ }),

/***/ "./assets/src/components/button-title-group/_style.scss":
/*!**************************************************************!*\
  !*** ./assets/src/components/button-title-group/_style.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/child-directory-add-editor/_style.scss":
/*!**********************************************************************!*\
  !*** ./assets/src/components/child-directory-add-editor/_style.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/child-directory-card/_style.scss":
/*!****************************************************************!*\
  !*** ./assets/src/components/child-directory-card/_style.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/child-directory-editor/_style.scss":
/*!******************************************************************!*\
  !*** ./assets/src/components/child-directory-editor/_style.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/child-directory-list/_style.scss":
/*!****************************************************************!*\
  !*** ./assets/src/components/child-directory-list/_style.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/collapse-form/_style.scss":
/*!*********************************************************!*\
  !*** ./assets/src/components/collapse-form/_style.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/directory-path/_style.scss":
/*!**********************************************************!*\
  !*** ./assets/src/components/directory-path/_style.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/helper-text/_style.scss":
/*!*******************************************************!*\
  !*** ./assets/src/components/helper-text/_style.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/people-add-editor-advanced/_style.scss":
/*!**********************************************************************!*\
  !*** ./assets/src/components/people-add-editor-advanced/_style.scss ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/people-add-editor/_style.scss":
/*!*************************************************************!*\
  !*** ./assets/src/components/people-add-editor/_style.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/people-directory-editor/_style.scss":
/*!*******************************************************************!*\
  !*** ./assets/src/components/people-directory-editor/_style.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/people-list/_style.scss":
/*!*******************************************************!*\
  !*** ./assets/src/components/people-list/_style.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/person-card/_style.scss":
/*!*******************************************************!*\
  !*** ./assets/src/components/person-card/_style.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/components/person-search-result/_style.scss":
/*!****************************************************************!*\
  !*** ./assets/src/components/person-search-result/_style.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/scss/editor.scss":
/*!*************************************!*\
  !*** ./assets/src/scss/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

module.exports = window["wp"]["url"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************!*\
  !*** ./assets/src/editor.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/editor.scss */ "./assets/src/scss/editor.scss");
/* harmony import */ var _blocks_wsu_directory_editor_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/wsu-directory/editor/block */ "./blocks/wsu-directory/editor/block.js");


}();
/******/ })()
;
//# sourceMappingURL=editor.js.map