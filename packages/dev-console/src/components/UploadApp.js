import React, { useState } from "react";

import { Storage as S3Storage } from "aws-amplify";

import { Box, Button, Text, Input } from "@blend-ui/core";
import config from "../config";
import { useFormFields } from "@prifina-apps/utils";

import PropTypes from "prop-types";
import { ConsoleLogger } from "@aws-amplify/core";

//import { useFormFields } from "../lib/formFields";
/*
const userRegion = config.cognito.IDENTITY_POOL_ID.split(":")[0];

S3Storage.configure({
  AWSS3: {
    bucket: config.S3.bucket + "-" + userRegion,
    region: userRegion,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    //identityPoolId: config.cognito.USER_IDENTITY_POOL_ID,
  },
});
console.log(S3Storage);
*/
const UploadApp = props => {
  const [uploaded, setUploaded] = useState("");
  console.log("PROPS ", props);

  const [appFields, handleChange] = useFormFields({
    version: "",
  });
  window.LOG_LEVEL = "DEBUG";

  const uploadFile = async e => {
    try {
      const file = e.target.files[0];

      console.log("Upload ", file);
      // check project appId is same as selected file
      // remove apps when private upload works
      const s3Key = "apps/uploaded/" + props.row.id + ".zip";

      //window.LOG_LEVEL = "DEBUG";
      //let metaData={ "alt-name": file.name };
      // amplify fails with multipart uploads... limit <5M
      //identityId?: string, // id of another user, if `level: protected`
      //const currentCredentials = await Auth.currentCredentials();
      //console.log("CREDS ", currentCredentials);

        const userRegion = config.cognito.USER_IDENTITY_POOL_ID.split(":")[0];


      

      //const _currentSession = await Auth.currentSession();
      //const currentCredentials = await cognitoCredentials(_currentSession);
      const currentCredentials = JSON.parse(
        localStorage.getItem("PrifinaClientCredentials"),
      );

      // const s3path = `https://prifina-apps-${config.prifinaAccountId}.s3.amazonaws.com`;

      console.log("CREDS ", currentCredentials);
      S3Storage.configure({
        bucket: `prifina-data-${config.prifinaAccountId}-${config.main_region}`,
        region: userRegion,
        /*
        identityId: currentCredentials.identityId,
        credentials: () => {
          return Promise.resolve(currentCredentials);
        },
        */
      });

      const s3Status = await S3Storage.put(s3Key, file, {
        //bucket: `prifina-user-${config.prifinaAccountId}-${config.main_region}`,
        //region: userRegion,
        /*
        bucket: "prifina-user-352681697435-eu-west-1",
        region: "eu-west-1",
        credentials: () => {
          return Promise.resolve(currentCredentials);
        }, */
        level: "public", // private doesn't work

        metadata: { created: new Date().toISOString(), "alt-name": file.name },
        progressCallback(progress) {
          //console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setUploaded(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
        customPrefix: {
          // private: "apps/",
        },
      });
      props.close(true, appFields.version);

      console.log(s3Status);
    } catch (e) {
      console.log("OOPS ", e);
    }
  };






  const headers = {
    "content-type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDQ0MzcyNTksImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NremQzdnljaTFicDMwMXoxNGI3NzV0MG8vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzVhNmMxNTMtMmQxNS00ZjE2LWE4OTgtMTgyYTBlYzliY2I5IiwianRpIjoiY2t6ZnpoaHdpMTZhYTAxejIweWZmZms5YiJ9.f3nj1nk7m7mwEKx9PMafsbG9balRtuRl91bV8BBbqKceoS3C-HELxFpbbn4Y4zQL5I_7eI0uheeXaiM0vDkXyOXA11Y_wBgQBD4eYyQwtEB5SsO7p7ZgVXqw3lK7h4ojP2QW1LbgbX1RLK_4wqRz7ItK1HT5ve5SGuUiiBaQJY2nBK5ElMwJiS4cSzHwb3K7c9vOsIO92XLlDsyUR7A2ABGcovITaQ6jTY4Udh6hvjIqQk4hhfOthmAST_Mpb4bIzqkMVs8EEPWh_9z8WnSf-PS35B4Wh9xOLXrLSL58CLV4QZodVV3Tor3BOS93SpJnF14tFJ1XC6X9zyty7gqTLj6dxGzTK9ru501I4wgc3W4lVtdDciLy4Qe5_j9kkQdMnJb2PbmV24SOsNyTgOb5n0yQFcCSy_DGAf4CWyrXzzrPIM5VrbL_dOe2Hcui1O7xKf74CuQYJRDt08MtJXgPEFDdpfidr7riBqu6DB_7L2RcsrerOsiy3GSr_9eY2I9x-Pv8NMBeNsrKS_M-j1n0PbwamgQKHYXrGMQf1LXNHRyiLAtHYI0GTL-6Xx0wNfiqUc_GXvsd0LWqAtfFClIThFpJAER-rOcXCn7eaRY2Gnoi7JiCx_xw0qbxQ1CFZlPB_Xgzhj-xG7oRPucXsmXlzeAxTg-rUsj_zZkrHX2D3iY"
  };
  let axios = require('axios')

  // const [file, setFile] = useState()

  // function handleChangeInput(event) {
  //   setFile(event.target.files[0])
  //   handleSubmit
  // }
  async function handleSubmit(event) {
    console.log(appFields.version)
    event.preventDefault()
    const url = 'https://api-eu-west-2.graphcms.com/v2/ckzd3vyci1bp301z14b775t0o/master';
    const formData = new FormData();
    const File2 = new File([event.target.files[0]],`${props.row.id}.zip`, {type: event.target.files[0].type})
    File2.version = +(appFields.version)
    formData.append('fileUpload', File2);
    // console.log(file)
    // console.log(formData)
    // formData.append('fileName', file.name);
    const config = {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDQ0MzcyNTksImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NremQzdnljaTFicDMwMXoxNGI3NzV0MG8vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzVhNmMxNTMtMmQxNS00ZjE2LWE4OTgtMTgyYTBlYzliY2I5IiwianRpIjoiY2t6ZnpoaHdpMTZhYTAxejIweWZmZms5YiJ9.f3nj1nk7m7mwEKx9PMafsbG9balRtuRl91bV8BBbqKceoS3C-HELxFpbbn4Y4zQL5I_7eI0uheeXaiM0vDkXyOXA11Y_wBgQBD4eYyQwtEB5SsO7p7ZgVXqw3lK7h4ojP2QW1LbgbX1RLK_4wqRz7ItK1HT5ve5SGuUiiBaQJY2nBK5ElMwJiS4cSzHwb3K7c9vOsIO92XLlDsyUR7A2ABGcovITaQ6jTY4Udh6hvjIqQk4hhfOthmAST_Mpb4bIzqkMVs8EEPWh_9z8WnSf-PS35B4Wh9xOLXrLSL58CLV4QZodVV3Tor3BOS93SpJnF14tFJ1XC6X9zyty7gqTLj6dxGzTK9ru501I4wgc3W4lVtdDciLy4Qe5_j9kkQdMnJb2PbmV24SOsNyTgOb5n0yQFcCSy_DGAf4CWyrXzzrPIM5VrbL_dOe2Hcui1O7xKf74CuQYJRDt08MtJXgPEFDdpfidr7riBqu6DB_7L2RcsrerOsiy3GSr_9eY2I9x-Pv8NMBeNsrKS_M-j1n0PbwamgQKHYXrGMQf1LXNHRyiLAtHYI0GTL-6Xx0wNfiqUc_GXvsd0LWqAtfFClIThFpJAER-rOcXCn7eaRY2Gnoi7JiCx_xw0qbxQ1CFZlPB_Xgzhj-xG7oRPucXsmXlzeAxTg-rUsj_zZkrHX2D3iY`,
        // 'content-type': 'multipart/form-data',
      },
    };
    
    await axios.post(url+"/upload", formData, config).then(async (response) => {
      console.log(response.data);
      const connectPackage = {
        "operationName":"connectPackage",
        "query": `
        mutation connectPackage($id: ID, $id1: ID, $version: Float) {
          updateApp(data: {version: $version, package: {connect: {id: $id}}}, where: {id: $id1}) {
            id
          }
        }`,
        "variables": {"id": response.data.id, "id1": props.row.id, "version": +(appFields.version)}
      }
      // const renamePackage = {
      //   "operationName":"renamePackage",
      //   "query": `
      //   mutation renamePackage($id: ID, $name: String) {
      //     updateAsset(data: {fileName: $name}, where: {id: $id}) {
      //       id
      //     }
      //   }`,
      //   "variables": {"id": response.data.id, "name": props.row.id+".zip"}
      // }
      const response1 = await axios({
        url: url,
        method: 'post',
        headers: headers,
        data: connectPackage
      });
      // const response2 = await axios({
      //   url: url,
      //   method: 'post',
      //   headers: headers,
      //   data: renamePackage
      // });
      console.log(response1)
    });
    

    

  }

  return (
    <>
      <Box mt={20} mb={10}>
        <Text>Upload zip file {props.row.id}.zip</Text>
      </Box>
      <Box width={"150px"} m={10}>
        <Input
          placeholder={"Version"}
          id={"version"}
          name={"version"}
          onChange={handleChange}
        />
      </Box>
      <Button
        id={"file_upload"}
        name={"file_upload"}
        accept={".zip"}
        onChange={handleSubmit}
        variation={"file"}
      >
        Upload file
      </Button>
      <Text ml={20}>{uploaded}</Text>
      <Box mt={20} mb={10}>
        <Button onClick={props.close}>Back</Button>
      </Box>
    </>
  );
};

UploadApp.propTypes = {
  row: PropTypes.instanceOf(Array),
  close: PropTypes.func,
};

UploadApp.displayName = "UploadApp";
export default UploadApp;

/*
const s3Status = await S3Storage.put(s3Key, JSON.stringify(_schema), {
    level: "public",
    contentType: "application/json",
    cacheControl: "",
    expires: parseInt(Date.now() / 1000),
    metadata: { created: new Date().toISOString() },
  });
  console.log(s3Status);

<input
                disabled={importDisabled}
                style={{ display: "none" }}
                type="file"
                accept=".json, .graphql"
                id="file_upload"
                name="file_upload"
                onChange={(e) => _importFile(e)}
              />
              <Button
                disabled={importDisabled}
                variation={"file"}
                input="file_upload"
              >
                {I18n.get("Import Data Model")}
              </Button>


const result = await Storage.put('test.txt', 'Private Content', {
    level: 'private',
    contentType: 'text/plain'
});

Storage.put('test.txt', 'File content', {
    progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
  },
});

*/
