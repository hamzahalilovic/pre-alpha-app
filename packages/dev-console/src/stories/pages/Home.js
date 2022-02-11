/* global localStorage */

import React, { useEffect, useState, useRef, useCallback } from "react";

import { Box, Flex, Text, Button, Image, Link, useTheme, Radio, RadioGroup } from "@blend-ui/core";

import { Tabs, Tab, TabList, TabPanel, TabPanelList } from "@blend-ui/tabs";
import moment from 'moment'

import {
  useAppContext,
  useIsMountedRef,
  listAppsQuery, //getAppsQuery
  addAppVersionMutation, //
  getPrifinaUserQuery,
  updateUserProfileMutation,
  useUserMenu,
  withUsermenu,
  i18n,
  createClient,
} from "@prifina-apps/utils";

i18n.init();

//import { useAppContext } from "../lib/contextLib";
// import { API as GRAPHQL, Auth } from "aws-amplify";
// import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";

import { useHistory } from "react-router-dom";

import { StyledBox } from "../../components/DefaultBackground";

import UploadApp from "../../components/UploadApp";

import PropTypes from "prop-types";
import { DevConsoleSidebar } from "../../components/components";

import dashboardBanner from "../../assets/dashboard-banner.png";

import docs from "../../assets/docs.png";
import starterResources from "../../assets/starterResources.png";
import slackResources from "../../assets/slackResources.png";
import zendeskResources from "../../assets/zendeskResources.png";

import * as C from "../../components/components";
import { DevConsoleLogo } from "../../components/DevConsoleLogo";

import CreateProjectModal from "../components/CreateProjectModal";

import Table from "../../components/Table";
import BlendIcon from "@blend-ui/icons/dist/esm/BlendIcon";

import mdiPowerPlug from "@iconify/icons-mdi/power-plug";
import mdiZipBoxOutline from "@iconify/icons-mdi/zip-box-outline";
import mdiArrowLeft from "@iconify/icons-mdi/arrow-left";
import bxsInfoCircle from "@iconify/icons-bx/bxs-info-circle";
import baselineWeb from "@iconify/icons-mdi/table";

//sidebar icons
import viewDashboard from "@iconify/icons-mdi/view-dashboard";
import mdiWidget from "@iconify/icons-mdi/widgets";
import mdiBookOpenVariant from "@iconify/icons-mdi/book-open-variant";
import hazardSymbol from "@iconify/icons-mdi/warning";
import successTick from "@iconify/icons-mdi/tick-circle";

import bxsEdit from "@iconify/icons-bx/bx-edit-alt";

import {
  AddRemoveDataSources,
  ControlAddedDataSources,
  DataSourceForm,
  ApiForm,
} from "../../components/helper";

// Create a default prop getter
const defaultPropGetter = () => ({});

// const Content = ({
//   Component,

//   initials,
//   notificationCount,
//   updateNotificationHandler,
//   appSyncClient,
//   activeUser,

//   ...props
// }) => {
//   const userMenu = useUserMenu();
//   console.log(
//     "USERMENU DEV APP INIT  ",
//     { ...props },

//     initials,
//     notificationCount,
//     typeof updateNotificationHandler,
//     appSyncClient,
//     activeUser,
//   );

//   userMenu.setClientHandler(appSyncClient);
//   userMenu.setActiveUser(activeUser);
//   useEffect(() => {
//     userMenu.show({
//       initials: initials,
//       effect: { hover: { width: 42 } },
//       notifications: notificationCount,
//       RecentApps: [],
//       PrifinaGraphQLHandler: GRAPHQL,
//       prifinaID: activeUser.uuid,
//     });
//   }, []);

//   updateNotificationHandler(userMenu.onUpdate);

//   return <Component data={props.data} currentUser={props.currentUser} />;
// };

// Content.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   initials: PropTypes.string,
//   notificationCount: PropTypes.number,
//   updateNotificationHandler: PropTypes.func,
//   appSyncClient: PropTypes.instanceOf(Object),
//   activeUser: PropTypes.instanceOf(Object),
//   currentUser: PropTypes.instanceOf(Object),
//   data: PropTypes.instanceOf(Array),
// };

const Main = ({
  // data,
  currentUser,
}) => {
  const history = useHistory();

  const { colors } = useTheme();
  const [file, setFile] = useState()
  const [saved, setSaved] = useState(false)

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const url = 'https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master/upload';
    const formData = new FormData();
    formData.append('fileUpload', file);
    console.log(file)
    console.log(formData)
    // formData.append('fileName', file.name);
    const config = {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDQ0MzcyNTksImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NremQzdnljaTFicDMwMXoxNGI3NzV0MG8vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzVhNmMxNTMtMmQxNS00ZjE2LWE4OTgtMTgyYTBlYzliY2I5IiwianRpIjoiY2t6ZnpoaHdpMTZhYTAxejIweWZmZms5YiJ9.f3nj1nk7m7mwEKx9PMafsbG9balRtuRl91bV8BBbqKceoS3C-HELxFpbbn4Y4zQL5I_7eI0uheeXaiM0vDkXyOXA11Y_wBgQBD4eYyQwtEB5SsO7p7ZgVXqw3lK7h4ojP2QW1LbgbX1RLK_4wqRz7ItK1HT5ve5SGuUiiBaQJY2nBK5ElMwJiS4cSzHwb3K7c9vOsIO92XLlDsyUR7A2ABGcovITaQ6jTY4Udh6hvjIqQk4hhfOthmAST_Mpb4bIzqkMVs8EEPWh_9z8WnSf-PS35B4Wh9xOLXrLSL58CLV4QZodVV3Tor3BOS93SpJnF14tFJ1XC6X9zyty7gqTLj6dxGzTK9ru501I4wgc3W4lVtdDciLy4Qe5_j9kkQdMnJb2PbmV24SOsNyTgOb5n0yQFcCSy_DGAf4CWyrXzzrPIM5VrbL_dOe2Hcui1O7xKf74CuQYJRDt08MtJXgPEFDdpfidr7riBqu6DB_7L2RcsrerOsiy3GSr_9eY2I9x-Pv8NMBeNsrKS_M-j1n0PbwamgQKHYXrGMQf1LXNHRyiLAtHYI0GTL-6Xx0wNfiqUc_GXvsd0LWqAtfFClIThFpJAER-rOcXCn7eaRY2Gnoi7JiCx_xw0qbxQ1CFZlPB_Xgzhj-xG7oRPucXsmXlzeAxTg-rUsj_zZkrHX2D3iY`,
        // 'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  const [value, setValue] = React.useState('1')


  const versionStatus = [
    "init",
    "received",
    "review",
    "review",
    "review",
    "published",
  ];

  const [data, setData] = useState([])

  // let data = [  ];

  const saveChanges = async() => {


    const updateAppDetails = {
      "operationName":"updateAppDetails",
      "query": `
      mutation updateAppDetails($appType: AppType, $id: ID, $name: String) {
        updateApp(data: {name: $name, appType: $appType}, where: {id: $id}) {
          id
        }
      }`,
      "variables": {"id": allValues.id, "name": allValues.newName, "appType": allValues.newType}
    }
    const response = await axios({
      url: "https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master",
      method: 'post',
      headers: headers,
      data: updateAppDetails
    });
    console.log(response)
    if (response.status===200){
      setAllValues({
        ...allValues,
        name: allValues.newName,
        type: allValues.newType
      });
      setSaved(true)
    }

  }

  const warning = () => {
    if (allValues.name!==allValues.newName||allValues.type!==allValues.newType){
      return (
        <Flex>
          <Text>Unsaved Changes</Text>
          <BlendIcon size="18px" iconify={hazardSymbol} className="icon" color="orange" />
          <Button onClick={saveChanges} isLoading={true}>Save Changes</Button>
        </Flex>
        
      )
    } else if (saved){
      {console.log("Testing")}

      return (
      <Flex>
          <Text>Recent Changes Saved</Text>
          <BlendIcon size="18px" iconify={successTick} className="icon" color="green" />
          <Button disabled colorStyle="red">Save Changes</Button>
        </Flex>
      )
    } else {
      return (
        <Flex>
          <Text>No Unsaved Changes</Text>
          <Button disabled colorStyle="red">Save Changes</Button>
      </Flex>
      )
    }
  }

  const buttons = () => {
    console.log(allValues)
    if (allValues.newType==="App"){
      return (
        <Flex flexDirection="row" >
        <Radio
          fontSize="10px"
          value="1"
          onClick={()=>{setAllValues({...allValues,newType: "Widget"})}}
        >
          {i18n.__("widget")}
        </Radio>
        <Radio
          checked
          fontSize="10px"
          value="2"
          onClick={()=>{setAllValues({...allValues,newType: "App"})}}
        >
          {i18n.__("app")}
        </Radio>
        </Flex>
        
      )

    } else if (allValues.newType==="Widget"){
      return (
        <Flex flexDirection="row" >
        <Radio
          checked
          fontSize="10px"
          value="1"
          onClick={()=>{setAllValues({...allValues,newType: "Widget"})}}
        >
          {i18n.__("widget")}
        </Radio>
        <Radio
          fontSize="10px"
          value="2"
          onClick={()=>{setAllValues({...allValues,newType: "App"})}}
        >
          {i18n.__("app")}
        </Radio>
        </Flex>
      )
      }
  }


  const handleNameChange = (event) => setAllValues({
    ...allValues,
    // title: widgets.current[w].title,
    newName: event.target.value
  });



  const fetchApps = async e => {
    try {    

      // await newAppVersionMutation(API, appFields.appId, currentUser.prifinaID, {
      //   name: appFields.name,
      //   title: appFields.title,
      //   identity: currentUser.identity,
      //   identityPool: currentUser.identityPool,
      //   //version: appFields.version,
      // });
      const repsonse = await axios({
        url: "https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master",
        method: 'post',
        headers: headers,
        data: getAppsQuery
      });
      console.log(repsonse)
      setData(repsonse.data.data.apps)
      
      
      return(
        data.length > 0 && (
        <Table columns={Columns} data={data} />
        )
      )

      // history.push("/");
    } catch (e) {
      console.log("error ", e);
    }


  };



  const axios = require("axios");

  const headers = {
    "content-type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDQ0MzcyNTksImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NremQzdnljaTFicDMwMXoxNGI3NzV0MG8vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzVhNmMxNTMtMmQxNS00ZjE2LWE4OTgtMTgyYTBlYzliY2I5IiwianRpIjoiY2t6ZnpoaHdpMTZhYTAxejIweWZmZms5YiJ9.f3nj1nk7m7mwEKx9PMafsbG9balRtuRl91bV8BBbqKceoS3C-HELxFpbbn4Y4zQL5I_7eI0uheeXaiM0vDkXyOXA11Y_wBgQBD4eYyQwtEB5SsO7p7ZgVXqw3lK7h4ojP2QW1LbgbX1RLK_4wqRz7ItK1HT5ve5SGuUiiBaQJY2nBK5ElMwJiS4cSzHwb3K7c9vOsIO92XLlDsyUR7A2ABGcovITaQ6jTY4Udh6hvjIqQk4hhfOthmAST_Mpb4bIzqkMVs8EEPWh_9z8WnSf-PS35B4Wh9xOLXrLSL58CLV4QZodVV3Tor3BOS93SpJnF14tFJ1XC6X9zyty7gqTLj6dxGzTK9ru501I4wgc3W4lVtdDciLy4Qe5_j9kkQdMnJb2PbmV24SOsNyTgOb5n0yQFcCSy_DGAf4CWyrXzzrPIM5VrbL_dOe2Hcui1O7xKf74CuQYJRDt08MtJXgPEFDdpfidr7riBqu6DB_7L2RcsrerOsiy3GSr_9eY2I9x-Pv8NMBeNsrKS_M-j1n0PbwamgQKHYXrGMQf1LXNHRyiLAtHYI0GTL-6Xx0wNfiqUc_GXvsd0LWqAtfFClIThFpJAER-rOcXCn7eaRY2Gnoi7JiCx_xw0qbxQ1CFZlPB_Xgzhj-xG7oRPucXsmXlzeAxTg-rUsj_zZkrHX2D3iY"
  };
  const getAppsQuery = {
    "operationName":"getApps",
    "query": `
    query getApps {
      apps {
        id
        appId
        appType
        title
        name
        appStatus
        version
        updatedAt
      }
    }`,
  "variables": ""}
  // let data = [
  //   {
  //     "color": "purple",
  //     "type": "minivan",
  //     "registration": new Date('2017-01-03'),
  //     "capacity": 7
  //   },
  //   {
  //     "color": "red",
  //     "type": "station wagon",
  //     "registration": new Date('2018-03-03'),
  //     "capacity": 5
  //   }
  // ]

  

  const appTypes = ["Widget", "App"];

  const [allValues, setAllValues] = useState({
    name: "",
    id: "",
    type: "",
    newName: "",
    newType: ""
  });

  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: e => {},
    };
  };

  const Columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: props => {
        return (
          <Text
            onClick={() => {
              setStep(3);
              setSaved(false)
              setAllValues({
                ...allValues,
                // title: widgets.current[w].title,
                name: props.cell.value,
                newName: props.cell.value,
                id: props.row.values.id,
                type: props.row.values.appType,
                newType: props.row.values.appType
              });

            }}
          >
            {props.cell.value}
          </Text>
        );
      },
    },
    {
      Header: "App ID",
      accessor: "appId",
      Cell: props => {
        return <Text>{props.cell.value}</Text>;
      },
    },
    {
      Header: "Type",
      accessor: "appType",
      /*className: "appType",*/
      // Cell: cellProp => appTypes[cellProp.row.values.appType],
    },

    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Status",
      accessor: "appStatus",
      /*className: "status",*/
      // Cell: cellProp => versionStatus[cellProp.row.values.status],
    },
    {
      Header: "Version",
      accessor: "version",
      /*className: "version",*/
    },
    {
      Header: "Modified",
      accessor: "updatedAt",
      className: "date",
      Cell: props => {
        return <Text>{moment(props.cell.value).toDate().toUTCString()}</Text>;
      },
    },
    {
      Header: "ID",
      accessor: "id"
    },
    {
      Header: () => null, // No header
      id: "sendApp", // It needs an ID
      Cell: cellProp => {
        return (
          <Button
            size="xs"
            onClick={e => {
              console.log(cellProp.row.values);
              sendClick(cellProp.row.values);
            }}
          >
            {i18n.__("submit")}
          </Button>
          // <form onSubmit={handleSubmit}>
          // <input type="file" onChange={handleChange}/>
          // <button type="submit">Upload</button>
          // </form>
        );
      },
    },
  ];

  const [upload, setUpload] = useState(false);
  const selectedRow = useRef({});

  const sendClick = row => {
    selectedRow.current = row;
    setUpload(true);
  };

  const closeClick = (fileUploaded = false, version) => {
    if (fileUploaded) {
      // addAppVersionMutation(GRAPHQL, {
      //   id: selectedRow.current.id,
      //   nextVersion: version,
      //   status: 1, //received
      // }).then(res => {
        setUpload(false);
      // });
    } else {
      setUpload(false);
    }

  };

  const [activeTab, setActiveTab] = useState(0);

  const tabClick = (e, tab) => {
    console.log("Click", e);
    console.log("TAB", tab);
    setActiveTab(tab);
  };

  const [activeTab2, setActiveTab2] = useState(0);

  const tabClick2 = (e, tab) => {
    console.log("Click", e);
    console.log("TAB", tab);
    setActiveTab2(tab);
  };

  const [activeTab3, setActiveTab3] = useState(0);

  const tabClick3 = (e, tab) => {
    console.log("Click", e);
    console.log("TAB", tab);
    setActiveTab3(tab);
  };

  const [dataSource, setDataSource] = useState([]);
  const [apiData, setApiData] = useState([]);

  console.log("CLOUD DATA", dataSource);
  console.log("API DATA", apiData);

  let addedDataSources = dataSource
    .concat(apiData)
    .filter(key => key.isAdded == true);
  console.log("ADDED DATA", addedDataSources);

  const [addedDataSources2, setAddedDataSources2] = useState([]);

  const [editControled, setEditControled] = useState(false);

  ///Prifina user cloud

  const addDataSource = (text, func, url) => {
    const newSourceData = [...dataSource, { text, func, url }];
    setDataSource(newSourceData);
  };

  const removeDataSource = index => {
    const newSourceData = [...dataSource];
    newSourceData.splice(index, 1);
    setDataSource(newSourceData);
  };

  const completeDataSource = index => {
    const newSourceData = [...dataSource];
    newSourceData[index].isAdded = true;
    setDataSource(newSourceData);
  };

  //////API

  const addApiSource = text => {
    const newSourceData = [...apiData, { text }];
    setApiData(newSourceData);
  };

  const removeApiSource = index => {
    const newSourceData = [...apiData];
    newSourceData.splice(index, 1);
    setApiData(newSourceData);
  };

  const completeApiSource = index => {
    const newSourceData = [...apiData];
    newSourceData[index].isAdded = true;
    setApiData(newSourceData);
  };

  ////common data sources

  const uncompleteDataSource = index => {
    const newSourceData = [...addedDataSources];
    newSourceData[index].isAdded = false;
    setAddedDataSources2(newSourceData);
  };

  const [step, setStep] = useState(3);

  switch (step) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    default:
  }

  const [projectDialogOpen, setProjectDialogOpen] = useState(false);

  console.log("projectdialog", projectDialogOpen);

  const onDialogClose = e => {
    setProjectDialogOpen(false);
    e.preventDefault();
  };



  const onDialogClick = async e => {
    ///...further logic on adding data source data
    setProjectDialogOpen(false);

    e.preventDefault();
  };

  const items = [
    {
      id: 0,
      label: i18n.__("dashboard"),
      icon: viewDashboard,
      onClick: () => {
        setStep(0);
      },
    },
    {
      id: 1,
      label: i18n.__("projects"),
      icon: mdiWidget,
      onClick: () => {
        setStep(2);
      },
    },
    {
      id: 2,
      label: i18n.__("resources"),
      icon: mdiBookOpenVariant
    },
  ];

  useEffect(()=>{
    switch (step){
      case 2:
        fetchApps();
        break;

    }
    

  },[step, upload])

  useEffect(()=>{
    console.log(allValues)
    if (allValues.name!==allValues.newName||allValues.type!==allValues.newType){
      return console.log("true")
    } else {
      return console.log("false")
    }
    

  },[allValues.newName])

  return (
    <React.Fragment>
      
      <DevConsoleSidebar items={items} />
      <C.NavbarContainer bg="baseWhite">
        <DevConsoleLogo className="appStudio" />
      </C.NavbarContainer>
      <StyledBox>
        <Flex
          width="100vw"
          height="100vh"
          paddingLeft="286px"
          bg="white"
          flexDirection="column"
        >
          {step === 0 && (
            <>
              {projectDialogOpen && (
                <CreateProjectModal
                  onClose={onDialogClose}
                  onButtonClick={onDialogClick}
                  isOpen={projectDialogOpen}
                />
              )}
              <Flex flexDirection="column" alignItems="center" mt="42px">
                <Image src={dashboardBanner} style={{ position: "relative" }} />
                <Flex
                  textAlign="center"
                  width="506px"
                  height="196px"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  position="absolute"
                  top="243px"
                >
                  <Text fontSize="xl">{i18n.__("createYourFirstProject")}</Text>
                  <Text color={colors.baseMuted} fontSize={20}>
                    {i18n.__("dashboardText")}
                  </Text>
                  <Button
                    size="sm"
                    onClick={() => {
                      setProjectDialogOpen(true);
                    }}
                  >
                    {i18n.__("newProject")}
                    {/* <BlendIcon iconify={bxsPlusCircle} size="12px" paddingLeft="10px" /> */}
                  </Button>
                </Flex>
              </Flex>
              <Box paddingLeft="62px" paddingTop="100px">
                <Text color="textPrimary" fontSize="xl">
                  {i18n.__("keyResources")}
                </Text>
                <Text color="baseMuted" fontSize="md" paddingTop="8px">
                  {i18n.__("resourcesText")}
                </Text>
                <Flex paddingTop="35px">
                  <Box paddingRight="42px">
                    <C.ResourceCard
                      src={docs}
                      title={i18n.__("prifinaDocs")}
                      description={i18n.__("cardText")}
                    />
                  </Box>
                  <Box paddingRight="42px">
                    <C.ResourceCard
                      src={starterResources}
                      title={i18n.__("appStarter")}
                      description={i18n.__("cardText")}
                    />
                  </Box>
                  <Box paddingRight="42px">
                    <C.ResourceCard
                      src={zendeskResources}
                      title={i18n.__("zendesk")}
                      description={i18n.__("cardText")}
                    />
                  </Box>
                  <Box>
                    <C.ResourceCard
                      src={slackResources}
                      title={i18n.__("ledSlack")}
                      description={i18n.__("cardText")}
                    />
                  </Box>
                </Flex>
              </Box>
            </>
          )}
          {/* PROJECTS */}
          {step === 2 && (
            <>
              {projectDialogOpen && (
                <CreateProjectModal
                  onClose={onDialogClose}
                  onButtonClick={onDialogClick}
                  // isOpen={projectDialogOpen}
                />
              )}
              <Flex paddingTop="48px" paddingLeft="65px">
                <Flex
                  bg="baseMuted"
                  flexDirection="column"
                  borderRadius="10px"
                  padding="16px"
                >
                  {upload && (
                    <UploadApp row={selectedRow.current} close={closeClick} />
                  )}
                  {!upload && (
                    <>
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        marginBottom="40px"
                      >
                        <Text textStyle="h3">{i18n.__("projects")}</Text>
                        <Button
                          onClick={() => {
                            setProjectDialogOpen(true);
                          }}
                        >
                          {i18n.__("newProject")}
                        </Button>
                      </Flex>
                      <div className="tableWrap">
                        {data.length === 0 && (
                          <div
                            style={{
                              //same as table
                              width: 1000,
                            }}
                          >
                            <Text m={2}>{i18n.__("noApps")}</Text>
                          </div>
                        )}
                        {/* {
                          fetchApps()
                        } */}
                        {data.length > 0 && (
                          <Table columns={Columns} data={data} />
                        )}
                      </div>
                    </>
                  )}
                </Flex>
              </Flex>
            </>
          )}
          {step === 3 && (
            <>
              <Flex flexDirection="column">
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  paddingLeft="22px"
                  paddingRight="24px"
                  height="64px"
                  bg="baseMuted"
                >
                  <Flex alignItems="center">
                    <BlendIcon
                      iconify={mdiArrowLeft}
                      width="24px"
                      onClick={() => {
                        setStep(2);
                      }}
                    />
                    <Text ml="16px">{allValues.name}</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Button mr="17px">{i18n.__("launchSandbox")}</Button>
                    <BlendIcon
                      iconify={bxsInfoCircle}
                      width="13px"
                      color={colors.baseMuted}
                    />
                  </Flex>
                </Flex>
                <Flex bg="brandAccent" height="95px" />
                <div
                  style={{
                    overflow: "hidden",
                    paddingTop: 38,
                    paddingLeft: 65,
                    paddingRight: 30,
                  }}
                >
                  <Tabs
                    activeTab={activeTab}
                    onClick={tabClick}
                    variant={"line"}
                  >
                    <TabList>
                      <Tab
                        style={{
                          height: 37,
                          justifyContent: "center",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      >
                        <Flex alignItems="center">
                          <BlendIcon iconify={mdiPowerPlug} />
                          <Text ml="8px">{i18n.__("sandboxTesting")}</Text>
                        </Flex>
                      </Tab>
                      <Tab
                        style={{
                          height: 37,
                          justifyContent: "center",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      >
                        <Flex alignItems="center">
                          <BlendIcon iconify={baselineWeb} />
                          <Text ml="8px">{i18n.__("buildAssets")}</Text>
                        </Flex>
                      </Tab>
                      <Tab
                        style={{
                          height: 37,
                          justifyContent: "center",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      >
                        <Flex alignItems="center">
                          <BlendIcon iconify={mdiZipBoxOutline} />
                          <Text ml="8px">{i18n.__("uploads")}</Text>
                        </Flex>
                      </Tab>
                    </TabList>
                    <TabPanelList>
                      <TabPanel>
                        <div
                          style={{
                            overflow: "auto",
                            background: colors.baseMuted,
                            borderRadius: 10,
                          }}
                        >
                          <Flex
                            ml="41px"
                            flexDirection="column"
                            paddingTop="30px"
                          >
                            <Text color="textPrimary" fontSize="xl">
                              {i18n.__("sandboxTesting")}
                            </Text>
                            <Box mt="21px" width="493px" mb="49px">
                              <Text color="textPrimary">
                                {i18n.__("sandboxTestingText")}
                              </Text>
                            </Box>
                          </Flex>

                          <Flex
                            style={{
                              border: "1px solid #3F3A4F",
                              width: 999,
                              borderTopRightRadius: 10,
                              borderTopLeftRadius: 10,
                              borderBottom: 0,
                              marginRight: 16,
                              marginLeft: 16,
                              paddingLeft: 32,
                              paddingRight: 34,
                              position: "relative",
                            }}
                            flexDirection="column"
                          >
                            <Text color="textPrimary" mt="35px">
                              {i18n.__("launchSandboxSession")}
                            </Text>
                            <Flex
                              alt="cards"
                              flexDirection="column"
                              style={{
                                position: "absolute",
                                right: 84,
                                top: -28,
                              }}
                            >
                              <Flex
                                width="403px"
                                height="35px"
                                bg="brandAccent"
                                borderRadius="5px"
                                alignItems="center"
                                mb="4px"
                              >
                                <Text ml="16px" mr="18px" fontSize="xs">
                                  1
                                </Text>
                                <Text fontSize="xs">
                                  {i18n.__("copyYourAppId")}
                                </Text>
                              </Flex>
                              <Flex
                                width="403px"
                                height="35px"
                                bg="brandAccent"
                                borderRadius="5px"
                                alignItems="center"
                                mb="4px"
                              >
                                <Text ml="16px" mr="18px" fontSize="xs">
                                  2
                                </Text>
                                <Text fontSize="xs">
                                  {i18n.__("addToLocalBuild")}
                                </Text>
                              </Flex>
                              <Flex
                                width="403px"
                                height="35px"
                                bg="brandAccent"
                                borderRadius="5px"
                                alignItems="center"
                                mb="4px"
                              >
                                <Text ml="16px" mr="18px" fontSize="xs">
                                  3
                                </Text>
                                <Text fontSize="xs">
                                  {i18n.__("getRemoteLink")}
                                </Text>
                              </Flex>
                              <Flex
                                width="403px"
                                height="35px"
                                bg="brandAccent"
                                borderRadius="5px"
                                alignItems="center"
                              >
                                <Text ml="16px" mr="18px" fontSize="xs">
                                  4
                                </Text>
                                <Text fontSize="xs">
                                  {i18n.__("fillOutForm")}
                                </Text>
                              </Flex>
                              <Flex alignItems="baseline">
                                <Text
                                  mt="11px"
                                  color="textPrimary"
                                  fontSize="xs"
                                  mr="2px"
                                >
                                  {i18n.__("readMoreGuide")}
                                </Text>
                                <Button variation="link">
                                  {i18n.__("prfinaDocsButton")}
                                </Button>
                              </Flex>
                            </Flex>
                            <Flex mt="42px" alignItems="center" mb="19px">
                              <Text color="textPrimary" fontSize="xs" mr="8px">
                                {i18n.__("appId")}
                              </Text>
                              <BlendIcon
                                iconify={bxsInfoCircle}
                                width="13px"
                                color={colors.baseMuted}
                              />
                            </Flex>
                            <C.StyledInput value={allValues.id} disabled />
                            <Flex
                              justifyContent="space-between"
                              mt="43px"
                              width="748px"
                            >
                              <Flex flexDirection="column">
                                <Text mb="16px" fontSize="xs">
                                  {i18n.__("projectName")}
                                </Text>
                                <C.StyledInput value={allValues.newName} onChange={handleNameChange}/>
                              </Flex>
                              <Flex flexDirection="column">
                                <Text mb="16px" fontSize="xs">
                                  {i18n.__("remoteLink")}
                                </Text>
                                {buttons()}
                                <Flex flexDirection="column">
                                  {warning()}
                                
                                </Flex>

                              </Flex>
                            </Flex>
                            <Flex
                              justifyContent="space-between"
                              mt="43px"
                              width="748px"
                            >
                              <Flex flexDirection="column">
                                <Text mb="16px" fontSize="xs">
                                  {i18n.__("projectName")}
                                </Text>
                                <C.StyledInput placeholder={allValues.name} />
                              </Flex>
                              <Flex flexDirection="column">
                                <Text mb="16px" fontSize="xs">
                                  {i18n.__("remoteLink")}
                                </Text>
                                <C.StyledInput
                                  placeholder={i18n.__("remoteLink")}
                                />
                              </Flex>
                            </Flex>
                            <Flex position="absolute" right="32px" bottom="0px">
                              <Button size="sm">
                                {i18n.__("launchSandbox")}
                              </Button>
                            </Flex>
                          </Flex>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        {/* SECOND TABS */}
                        <div style={{ overflow: "hidden" }}>
                          <Tabs
                            activeTab={activeTab2}
                            onClick={tabClick2}
                            style={{ height: "100%" }}
                            variant={"line"}
                          >
                            <TabList>
                              <Tab>
                                <Text>{i18n.__("dataUsage")}</Text>
                              </Tab>
                              <Tab>
                                <Text>{i18n.__("buildFiles")}</Text>
                              </Tab>
                            </TabList>
                            <TabPanelList style={{ backgroundColor: null }}>
                              <TabPanel
                                style={{
                                  height: "100vh",
                                  paddingBottom: "50px",
                                  overflow: "auto",
                                }}
                              >
                                <div style={{ overflow: "auto" }}>
                                  <Text textStyle="h3" mb="15px">
                                    {i18n.__("dataUsage")}
                                  </Text>
                                  <Box width="470px">
                                    <Text textStyle="h6" mb="15px">
                                      {i18n.__("dataUsageText")}
                                    </Text>
                                  </Box>
                                  {/* THIRD TABS */}
                                  <div
                                    style={{
                                      overflow: "hidden",
                                      background: colors.baseMuted,
                                      paddingTop: 16,
                                      paddingBottom: 16,
                                      paddingLeft: 40,
                                      paddingRight: 40,
                                      borderRadius: 10,
                                    }}
                                  >
                                    <Tabs
                                      activeTab={activeTab3}
                                      onClick={tabClick3}
                                      style={{ height: "100%" }}
                                      variant={"line"}
                                    >
                                      <TabList>
                                        <Tab>
                                          <Text>{i18n.__("publicApi")}</Text>
                                        </Tab>
                                        <Tab>
                                          <Text>
                                            {i18n.__("prifinaUserCloud")}
                                          </Text>
                                        </Tab>
                                        <Tab>
                                          <Text>{i18n.__("noData")}</Text>
                                        </Tab>
                                      </TabList>
                                      <TabPanelList
                                        style={{ backgroundColor: null }}
                                      >
                                        <TabPanel
                                          style={{
                                            height: "100vh",
                                            paddingBottom: "50px",
                                            overflow: "auto",
                                          }}
                                        >
                                          <div style={{ overflow: "auto" }}>
                                            <Flex>
                                              <ApiForm addApi={addApiSource} />
                                            </Flex>

                                            {/* Box with state change */}
                                            <Flex>
                                              {apiData.length > 0 && (
                                                <Flex
                                                  width="100%"
                                                  flexDirection="column"
                                                  padding="10px"
                                                  style={{
                                                    marginTop: 15,
                                                    borderRadius: 10,
                                                  }}
                                                >
                                                  <Text
                                                    textStyle="h6"
                                                    mb="10px"
                                                  >
                                                    {i18n.__(
                                                      "chooseToAddSources",
                                                    )}
                                                  </Text>
                                                  <Flex>
                                                    <Flex flexDirection="column">
                                                      {apiData.map(
                                                        (event, index) => (
                                                          <AddRemoveDataSources
                                                            key={index}
                                                            index={index}
                                                            dataSource={event}
                                                            removeDataSource={
                                                              removeApiSource
                                                            }
                                                            completeDataSource={
                                                              completeApiSource
                                                            }
                                                          />
                                                        ),
                                                      )}
                                                    </Flex>
                                                  </Flex>
                                                </Flex>
                                              )}
                                            </Flex>
                                          </div>
                                        </TabPanel>
                                        <TabPanel>
                                          <div style={{ overflow: "auto" }}>
                                            <Flex>
                                              <DataSourceForm
                                                addDataSource={addDataSource}
                                                // addFunctions={addFunction}
                                              />
                                            </Flex>
                                            {/* Box with state change */}
                                            <Flex>
                                              {dataSource.length > 0 && (
                                                <Flex
                                                  width="100%"
                                                  flexDirection="column"
                                                  padding="10px"
                                                  style={{
                                                    backgroundColor:
                                                      colors.baseMuted,
                                                    marginTop: 15,
                                                    borderRadius: 10,
                                                  }}
                                                >
                                                  <Text
                                                    textStyle="h6"
                                                    mt="10px"
                                                    mb="10px"
                                                  >
                                                    {i18n.__(
                                                      "dataConectorResults",
                                                    )}
                                                  </Text>

                                                  <Flex>
                                                    <Flex flexDirection="column">
                                                      {dataSource.map(
                                                        (event, index) => (
                                                          <>
                                                            <AddRemoveDataSources
                                                              key={index}
                                                              index={index}
                                                              dataSource={event}
                                                              removeDataSource={
                                                                removeDataSource
                                                              }
                                                              completeDataSource={
                                                                completeDataSource
                                                              }
                                                            />
                                                            <div>
                                                              {event.functions}
                                                            </div>
                                                          </>
                                                        ),
                                                      )}
                                                    </Flex>
                                                  </Flex>
                                                </Flex>
                                              )}
                                            </Flex>
                                          </div>
                                        </TabPanel>
                                        <TabPanel>
                                          <div style={{ overflow: "auto" }}>
                                            <Flex>
                                              <Box
                                                width="426px"
                                                height="76px"
                                                borderRadius="6px"
                                                paddingLeft="10px"
                                                bg={colors.baseLinkHover}
                                                style={{
                                                  border: `2px solid ${colors.baseLink}`,
                                                }}
                                              >
                                                <Text>
                                                  {i18n.__("noDataText")}
                                                </Text>
                                                <Link>
                                                  {i18n.__("learnMoreHere")}
                                                </Link>
                                              </Box>
                                              <Flex ml="10px">
                                                {/* <CheckboxStateful /> */}
                                              </Flex>
                                            </Flex>
                                          </div>
                                        </TabPanel>
                                      </TabPanelList>
                                    </Tabs>
                                  </div>
                                  <Flex
                                    flexDirection="column"
                                    width="100%"
                                    justifyContent="center"
                                    padding="15px"
                                    paddingLeft="40px"
                                    paddingRight="40px"
                                    style={{
                                      backgroundColor: colors.baseMuted,
                                      marginTop: 15,
                                      borderRadius: 10,
                                    }}
                                  >
                                    {addedDataSources.length > 0 ? (
                                      <>
                                        <Flex justifyContent="space-between">
                                          <Text textStyle="h6" mb="10px">
                                            {i18n.__("dataSourcesUsed")}
                                          </Text>
                                          {!editControled ? (
                                            <>
                                              <button
                                                style={{
                                                  position: "absolute",
                                                  right: 45,
                                                  width: 40,
                                                  height: 40,
                                                  border: 0,
                                                  background: "transparent",
                                                }}
                                                onClick={() => {
                                                  setEditControled(true);
                                                }}
                                              >
                                                <BlendIcon iconify={bxsEdit} />
                                              </button>
                                            </>
                                          ) : (
                                            <Flex>
                                              <Button
                                                variation="outline"
                                                onClick={() => {
                                                  setEditControled(false);
                                                }}
                                                size="xs"
                                              >
                                                {i18n.__("cancelButton")}
                                              </Button>
                                              <Button
                                                onClick={() => {
                                                  setEditControled(false);
                                                }}
                                                size="xs"
                                                ml="5px"
                                              >
                                                {i18n.__("saveButton")}
                                              </Button>
                                            </Flex>
                                          )}
                                        </Flex>
                                        <Flex
                                          width="100%"
                                          flexDirection="column"
                                          style={{
                                            backgroundColor: colors.baseMuted,
                                            marginTop: 15,
                                            borderRadius: 10,
                                          }}
                                        >
                                          <Flex>
                                            <Flex
                                              flexDirection="column"
                                              justifyContent="center"
                                            >
                                              {addedDataSources.map(
                                                (event, index) => (
                                                  <ControlAddedDataSources
                                                    key={index}
                                                    index={index}
                                                    dataSource={event}
                                                    uncompleteDataSource={
                                                      uncompleteDataSource
                                                    }
                                                    editControled={
                                                      editControled
                                                    }
                                                  />
                                                ),
                                              )}
                                            </Flex>
                                          </Flex>
                                          <Flex
                                            flexDirection="column"
                                            alignSelf="flex-start"
                                            mt="20px"
                                          >
                                            <Text mb="10px">
                                              {!editControled
                                                ? i18n.__(
                                                    "pressEditToAddDetails",
                                                  )
                                                : i18n.__("addYourComment")}
                                            </Text>
                                            <textarea
                                              style={{
                                                resize: "none",
                                                width: 750,
                                                height: 100,
                                              }}
                                              disabled={
                                                !editControled ? true : false
                                              }
                                            />
                                          </Flex>
                                        </Flex>
                                      </>
                                    ) : (
                                      <Flex
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                      >
                                        <Flex justifyContent="space-between">
                                          <Text textStyle="h6" mb="10px">
                                            {i18n.__("dataSourcesUsed")}
                                          </Text>
                                        </Flex>
                                        <Flex
                                          width="100%"
                                          flexDirection="column"
                                          alignItems="center"
                                          justifyContent="center"
                                          style={{
                                            border: "1px dashed white",
                                            marginTop: 15,
                                            borderRadius: 10,
                                          }}
                                        >
                                          <Text textStyle="h6" mt="10px">
                                            {i18n.__("selectSources")}
                                          </Text>
                                          <Text textStyle="h6" mt="10px">
                                            {i18n.__("dataSourcesYouAdd")}
                                          </Text>
                                        </Flex>
                                      </Flex>
                                    )}
                                  </Flex>
                                </div>
                              </TabPanel>
                              <TabPanel>
                                <div style={{ overflow: "auto" }}>
                                  <Text textStyle="h3" mb="15px">
                                    {i18n.__("buildFiles")}
                                  </Text>
                                  <Box width="470px">
                                    <Text textStyle="h6" mb="15px">
                                      {i18n.__("buildFilesText")}
                                    </Text>
                                  </Box>
                                </div>
                              </TabPanel>
                              <TabPanel>{/* Work panel 3 */}</TabPanel>
                            </TabPanelList>
                          </Tabs>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <Text mb="16px" color="textPriamry" fontSize="xs">
                          {/* In progress...*/}
                        </Text>
                      </TabPanel>
                    </TabPanelList>
                  </Tabs>
                </div>
              </Flex>
            </>
          )}
        </Flex>
      </StyledBox>
    </React.Fragment>
  );
};

Main.propTypes = {
  data: PropTypes.instanceOf(Array),
  currentUser: PropTypes.instanceOf(Object),
  cell: PropTypes.instanceOf(Array),
  row: PropTypes.instanceOf(Array),
};

const Home = props => {
  //   const history = useHistory();
  //   const {
  //     userAuth,
  //     currentUser,
  //     isAuthenticated,
  //     mobileApp,
  //     APIConfig,
  //     AUTHConfig,
  //   } = useAppContext();

  //   console.log("HOME ", currentUser);

  //   const [initClient, setInitClient] = useState(false);

  //   const isMountedRef = useIsMountedRef();
  //   const apps = useRef([]);
  //   const componentProps = useRef({});
  //   const activeUser = useRef({});
  //   const notificationCount = useRef(0);
  //   let AppComponent = Main;

  //   const xcreateClient = (endpoint, region) => {
  //     Auth.currentCredentials().then(c => {
  //       console.log("DEV USER CLIENT ", c);
  //     });
  //     const client = new AWSAppSyncClient({
  //       url: endpoint,
  //       region: region,
  //       auth: {
  //         type: AUTH_TYPE.AWS_IAM,
  //         credentials: () => Auth.currentCredentials(),
  //       },

  //       disableOffline: true,
  //     });
  //     return client;
  //   };

  //   const updateNotification = useCallback(handler => {
  //     //notificationHandler.current = handler;
  //   }, []);

  //   useEffect(() => {
  //     async function fetchData() {
  //       if (isMountedRef.current) {
  //         const currentPrifinaUser = await getPrifinaUserQuery(
  //           GRAPHQL,
  //           currentUser.prifinaID,
  //         );
  //         console.log("CURRENT USER ", currentPrifinaUser);
  //         let appProfile = JSON.parse(
  //           currentPrifinaUser.data.getPrifinaUser.appProfile,
  //         );
  //         console.log("CURRENT USER ", appProfile, appProfile.initials);

  //         let clientEndpoint = "";
  //         let clientRegion = "";

  //         if (!appProfile.hasOwnProperty("endpoint")) {
  //           const defaultProfileUpdate = await updateUserProfileMutation(
  //             GRAPHQL,
  //             currentUser.prifinaID,
  //           );
  //           console.log("PROFILE UPDATE ", defaultProfileUpdate);
  //           appProfile = JSON.parse(
  //             defaultProfileUpdate.data.updateUserProfile.appProfile,
  //           );
  //         }
  //         clientEndpoint = appProfile.endpoint;
  //         clientRegion = appProfile.region;

  //         //const client = createClient(clientEndpoint, clientRegion);
  //         const _currentSession = await Auth.currentSession();
  //         const client = await createClient(
  //           clientEndpoint,
  //           clientRegion,
  //           _currentSession,
  //         );

  //         activeUser.current = {
  //           name: appProfile.name,
  //           uuid: currentUser.prifinaID,
  //           endpoint: clientEndpoint,
  //           region: clientRegion,
  //           dataConnectors: currentPrifinaUser.data.getPrifinaUser.dataSources
  //             ? JSON.parse(currentPrifinaUser.data.getPrifinaUser.dataSources)
  //             : {},
  //         };

  //         const prifinaApps = await listAppsQuery(GRAPHQL, {
  //           filter: { prifinaId: { eq: currentUser.prifinaID } },
  //         });
  //         console.log("APPS ", prifinaApps.data);
  //         apps.current = prifinaApps.data.listApps.items;

  //         console.log("APPS ", prifinaApps.data);
  //         componentProps.current = {
  //           data: apps.current,
  //           currentUser: currentUser,
  //         };

  //         //console.log("CURRENT SETTINGS 2", client);
  //         componentProps.current.GraphQLClient = GRAPHQL;
  //         componentProps.current.appSyncClient = client;
  //         componentProps.current.prifinaID = currentUser.prifinaID;
  //         componentProps.current.initials = appProfile.initials;
  //         componentProps.current.updateNotificationHandler = updateNotification;
  //         componentProps.current.activeUser = activeUser.current;

  //         console.log("COMPONENT ", componentProps);
  //         setInitClient(true);
  //       }
  //       return null;
  //     }

  //     fetchData();
  //   }, [isMountedRef.current]);

  return (
    <>
      {/* {initClient && (
        <Content Component={AppComponent} {...componentProps.current} />
      )}
      {!initClient && (
        <div>Home {isAuthenticated ? "Authenticated" : "Unauthenticated"} </div>
      )} */}
      <Main />
    </>
  );
};

Home.displayName = "Home";

export default Home;
// export default withUsermenu()(Home);
