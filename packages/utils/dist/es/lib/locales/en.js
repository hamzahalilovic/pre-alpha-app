"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var strings = {
  en: (_en = {
    cancelButton: "Cancel",
    nextButton: "Next",
    signInButton: "Sign In",
    declineButton: "Decline",
    approveButton: "Approve",
    accountButton: "Creating account",
    backButton: "Back",
    verifyButton: "Verify",
    confirmButton: "Confirm",
    loginButton: "Login",
    logoutButton: "Logout",
    registerButton: "Register",
    loginLink: "Login",

    /* Create account */
    invalidEntry: "Value is required",
    invalidPhoneNumber: "Invalid or existing phone number",
    invalidRegion: "Select region code",
    invalidEmail: "Invalid or existing email",
    usernameExists: "Invalid username.",
    usernameError: "Username is too short (under {{length}} characters)",
    usernameError2: "Spaces are not allowed in the username",
    invalidPassword: "Password confirmation failed",
    passwordQuality: "Password conditions failed",
    createAccountTitle: "Create an account",
    firstNamePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    usernamePlaceholder: "Username",
    emailPlaceholder: "Email",
    emailPrompt: "This email will be used for two-step verification.",
    phoneNumberPlaceholder: "Phone Number",
    phoneNumberPlaceholder2: "555_555_555",
    phonePrompt: "This number will be used for two-step verification.",
    passwordPlaceholder: "Password",
    confirmPlaceholder: "Confirm Password",
    existingAccount: "Have an account?",
    acceptTerms: "Please approve terms of use to continue.",
    finalizeText: "This process may take a few seconds",
    noThanks: "No thanks",

    /* Landing page */
    loginWelcomeMessage: "My Prifina",
    loginLandingPage: "Login to access your personal data cloud.",
    welcomeMessage: "Hello",
    landingPage: "We are a team working on the future of personal applications. That's why we created this personal cloud environment that will help you implement your boldest ideas while allowing individuals to keep their data.",
    landingPageInfo: "Fill in the form on the right",

    /* Terms & conditions */
    termsTitle: "Prifina's Terms of Use",
    termsLastUpdated: "Last updated: October, 2020",
    agreeementTitle: "Agreement",
    agreementText: "By using or visiting any of Prifina’s websites, or any of our products, software, or applications, you signify your agreement to these Terms.",
    serviceTitle: "The Service",
    serviceText: "Some of the things you can do through the Service are listed below.",
    accountsTitle: "Accounts",
    accountsText: "To access Prifina’s Services, you will need to create an account (“Account”).",
    dataTitle: "Your Data",
    dataText: "Your data is fully under your control. Only you can access your data and your data profiles. Third parties can access your data only with your permission.",
    materialsTitle: "Third Party Materials",
    materialsText: "Certain portions of the Service may include, display, or make available content, data, information, applications, or materials from third parties (“Third-Party Materials”).",

    /* Phone verification */
    codeDigitsError: "Only numbers are allowed",
    codeLengthError: "The code must be six digits long",
    verificationTitle: "Setup your two-step verification method",
    phoneVerificationTitle: "Setup your phone verification",
    phoneVerificationText: "Please provide your email address and phone number in order to keep your account secure",
    phoneVerificatioSent: "Phone number verification code was sent.",
    codePropmt: "Enter the code here",
    codeMissing: "Didn't receive the code?",
    sendAgainLinkText: "Click here.",
    invalidCode: "Incorrect code, please enter the correct code.",
    verifySUpportLink: "Still didn't receive the code",

    /* Email verification */
    emailVerificationTitle: "Setup email verification",
    emailVerificationText: "Please provide your email address and phone number to keep your account secure",
    emailMissing: "Didn't receive the code?",
    emailVerificatioSent: "Email verification code was sent.",

    /* Decline dialog */
    declineTitle: "Decline Prifina’s Terms of Use?",
    declineText: "By declining Prifina's Terms of Use you will not be able to use the Prifina application.",

    /* Login */
    loginPage: "Login to your account",
    invalidLogin: "Incorrect username or password.",
    forgotUsername: "Forgot username?",
    forgotPassword: "Forgot password?",
    createAccount: "Create account",
    confirmTitle: "Secure login",
    authConfirmTitle: "Enter authentication code",
    authConfirmationText: "We've sent you the authentication code. Please enter it below to login.",
    confirmationCodeSent: "Authentication code was sent to your vefified phone number.",

    /* Logout dialog */
    logoutTitle: "Are you sure you want to sign out?",
    logoutText: "You are also logged out from your personal cloud and any local data apps open in this browser.",

    /* Recover Username */
    recoverUsernameTitle: "Recover username",
    recoverUsernameText1: "Enter your phone number. We will send you a confirmation code to recover your username.",
    recoverUsernameText2: "If a user account with that phone number exists, we have sent a username to that number.",
    useEmail: "Do you want to use your email adress?",

    /* Reset Password */
    resetPasswordTitle: "Reset password code",
    resetPasswordText: "Enter your username. We will send you a confirmation code to reset your password.",
    resetPasswordText2: "Please check your phone or email for your verification code. Your code is six digits long. Complete the fields below to reset your password.",
    resetPasswordText3: "Your password has been reset. Please login with your new password.",
    sentCodeText: "We have sent you a code to your phone number and email address to reset your password.",
    newPassword: "New password",
    confirmNewPassword: "Confirm new password",
    doneButton: "Done",
    codeMissing2: "Did not receive your code?",
    sendAgainLinkText2: "Click here to resend.",
    forgotUsername2: "Forgot your username?",

    /* App Market */
    dataOnYourSide: "Data on your side",
    appMarketText: "Free your data from its silos and utilize it in different apps and widgets. Like a key, your data can unlock valuable experiences and insights. By using your data directly, you capture the value and open a new market of apps.",
    category: "Category",
    categorySubText: "This section features all the widgets which require user-held data",
    widgetsDirectory: "Widgets Directory",
    widget: "Widget",
    reportBug: "Report bug",
    support: "Support",
    view: "View",
    widgetDetails: "Widget Details",
    dataRequirements: "Data requirements",
    userHeld: "User Held",
    dataTypes: "Data types",
    deviceSupport: "Device Support",
    languages: "Languages",
    ageAppropriate: "Age Appropriate",
    features: "Features",
    userHeldText: " Some products on Prifina are powered by ‘user-held’ data which they pull from your data cloud, if the data is not available in your cloud they can’t run. Select from sources below to add the data",
    userDashHeld: "User-held",
    userDashGenerated: "User-generated",
    "public": "Public",
    addHealthData: "Add health data to your cloud",
    addViewingData: "Add viewing data to your cloud",
    selectAvailableData: "Select from available sources to add",
    noneNeeded: "None needed",
    connect: "Connect",
    dataSourceModalText1: "When and how often we can request your data from third party services depends on how they are set up internally.",
    dataSourceModalText2: "Prifina will find the optimal way to connect on your behalf to provide you with the best possible experience.",
    dataSourceModalAlertText: "Your data never leaves your cloud. Prifina never shares your data",
    install: "Install",

    /* App Studio */
    accountDetails: "Account Details",
    developerAgreement: "Developer Agreement",
    welcomeBack: "Welcome back",
    welcomeBackText: "We noticed you are currently logged into Prifina as",
    loginCardTitle: "Great News!",
    loginCardText: "Because you have an existing individual Prifina account, you can use it to log in, and  we’ll connect it to your new developer account.",
    continueAs: "Continue as",
    notYou: "Not you?",
    developerAccount: "Developer Account",
    publisherAccounts: "Publisher Accounts",
    publisherAccountsText: "Lore issue dolor sit met, ConnectEDU advising elite, used do also tempe incident UT",
    applyToPublishApps: "Apply to publish apps",
    dashboard: "Dashboard",
    projects: "Projects",
    resources: "Resources",
    dataModel: "Data Model",
    soon: "Soon",
    createYourFirstProject: "Create your first project",
    dashboardText: "Done with your local build and ready to plug into the power of Prifina? Create a project to get started",
    newProject: "New Project",
    createProject: "Create Project",
    projectType: "Project Type"
  }, _defineProperty(_en, "widget", "Widget"), _defineProperty(_en, "application", "Application"), _defineProperty(_en, "app", "App"), _defineProperty(_en, "prifinaAppId", "Prifina app ID"), _defineProperty(_en, "prifinaAppIdText", "This unique identifer is needed to connect your application to  prifina."), _defineProperty(_en, "copyAndAddToYourBuild", "Copy it and add it to your build."), _defineProperty(_en, "projectName", "Project Name"), _defineProperty(_en, "appId", "App ID"), _defineProperty(_en, "name", "Name"), _defineProperty(_en, "type", "Type"), _defineProperty(_en, "progress", "Progress"), _defineProperty(_en, "actions", "Actions"), _defineProperty(_en, "publishing", "Publishing"), _defineProperty(_en, "submit", "Submit"), _defineProperty(_en, "showing", "Showing"), _defineProperty(_en, "itemsTotal", "items total"), _defineProperty(_en, "keyResources", "Key resources"), _defineProperty(_en, "resourcesText", "Resources and utilities to help you build for Prifina"), _defineProperty(_en, "prifinaDocs", "Prifina Docs"), _defineProperty(_en, "prfinaDocsButton", "Prifina docs"), _defineProperty(_en, "appStarter", "App Starter"), _defineProperty(_en, "zendesk", "Zendesk"), _defineProperty(_en, "ledSlack", "LED Slack"), _defineProperty(_en, "cardText", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu."), _defineProperty(_en, "sandboxTesting", "Sandbox testing"), _defineProperty(_en, "buildAssets", "Build assets"), _defineProperty(_en, "noApps", "No apps..."), _defineProperty(_en, "launchSandbox", "Launch Sandbox"), _defineProperty(_en, "buildAssets", "Build Assets"), _defineProperty(_en, "uploads", "Uploads"), _defineProperty(_en, "sandboxTestingText", "Finished your local build? See how your application will behave on our platform using our Sandbox enviroment."), _defineProperty(_en, "launchSandboxSession", "Launch Sandbox session"), _defineProperty(_en, "copyYourAppId", "Copy your app ID"), _defineProperty(_en, "addToLocalBuild", "Add it to your local build"), _defineProperty(_en, "getRemoteLink", "Get a remote link for your repo"), _defineProperty(_en, "fillOutForm", "Fill out the form and launch the Sandbox"), _defineProperty(_en, "readMoreGuide", "Read a more detailed guide in the"), _defineProperty(_en, "remoteLink", "Remote Link"), _defineProperty(_en, "dataUsage", "Data Usage"), _defineProperty(_en, "buildFiles", "Build Files"), _defineProperty(_en, "dataUsageText", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt"), _defineProperty(_en, "publicApi", "Public API"), _defineProperty(_en, "prifinaUserCloud", "Prifina User Cloud"), _defineProperty(_en, "noData", "No Data"), _defineProperty(_en, "chooseToAddSources", "Choose to add you your data sources"), _defineProperty(_en, "dataConectorResults", "Prifina data connectors results..."), _defineProperty(_en, "noDataText", "A no data project does not pull any data from any source."), _defineProperty(_en, "learnMoreHere", "Learn more here."), _defineProperty(_en, "dataSourcesUsed", "Data sources used in your project"), _defineProperty(_en, "saveButton", "Save"), _defineProperty(_en, "pressEditToAddDetails", "Press edit to add more details about data usage"), _defineProperty(_en, "addYourComment", "Add your comment..."), _defineProperty(_en, "selectSources", "Search and select data sources"), _defineProperty(_en, "dataSourcesYouAdd", "Data sources you add will show up here"), _defineProperty(_en, "buildFilesText", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt"), _defineProperty(_en, "fullSpecHere", "Full spec here"), _defineProperty(_en, "dataConnector", "Data connector"), _defineProperty(_en, "dataConnectorContains", "This Data connector contains"), _defineProperty(_en, "functions", "functions."), _defineProperty(_en, "prfinaDataConnector", "Prifina Data Connector"), _defineProperty(_en, "tellUsWhatDataYourAppUses", "Tell us what data your app uses from"), _defineProperty(_en, "publicApiAdress", "Public API address"), _defineProperty(_en, "listDataAttributesUsed", "List data attributes used in your project"), _defineProperty(_en, "title", "Title"), _defineProperty(_en, "createAppStudioAccount", "Create App Studio account"), _defineProperty(_en, "redirectNecessary", "Redirect necessary"), _defineProperty(_en, "accountCreationText", "To get access to Prifina’s Developer Console and its features  you will need to create a seperate account. But don’t worry, the process is quick and easy and you can use your existing Prifina account to get setup."), _defineProperty(_en, "appStudioDisclaimer", "Disclaimer message or T&C’s if required Console and its features  you will need to create a seperate account. But don’t worry, the process is quick and easy and you can use your existing Prifina account to get setup."), _defineProperty(_en, "dataCloudHomeHeading", "Bring all your data into Data Cloud"), _defineProperty(_en, "dataCloudHomeText", "Your Data Cloud is the heart of your Personal Data Engine. By bringing your data into your personal data cloud, you can activate it in different apps in your Prifina account."), _defineProperty(_en, "learnMore", "Learn More"), _defineProperty(_en, "connectDataSources", "Connect data sources"), _defineProperty(_en, "connectingDataSources", "Connecting your data sources to activate this data in apps"), _defineProperty(_en, "uploadData", "Upload your data"), _defineProperty(_en, "uploadFileText", "You can upload one file at a time"), _defineProperty(_en, "dragAndDropText", "Drag and drop your files here or"), _defineProperty(_en, "clickToBrowse", "click to browse"), _defineProperty(_en, "notMoreThan500", "Not more than 500 mb"), _defineProperty(_en, "availableSources", "Available Sources"), _defineProperty(_en, "connectedSources", "Connected Sources"), _defineProperty(_en, "availableDataSources", "Available data sources"), _defineProperty(_en, "selectAvailableDataSourcesText", "Select from available data sources to add data to your Data cloud"), _defineProperty(_en, "addSource", "Add Source"), _defineProperty(_en, "connectionPreferences", "Connection Preferences"), _defineProperty(_en, "syncWithCloud", "Sync with your cloud:"), _defineProperty(_en, "disconnect", "Disconnect"), _defineProperty(_en, "dailyRecommended", "Daily (recommended)"), _en)
};

var _default = _objectSpread({}, strings);

exports["default"] = _default;