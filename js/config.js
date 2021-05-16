const BASE_URL = 'http://localhost:8018';

const API_URL = BASE_URL+'/api/v1.0';

const ACCOUNT_SAVE = API_URL + '/account_controller/account/save';
const ACCOUNT_FIND_ALL = API_URL+'/account_controller/account/findAll?';
const ACCOUNT_ADD_ACCOUNT_TO_GROUP = API_URL+'/account_controller/account/add_account_to_group/';
const ACCOUNT_REMOVE_ACCOUNT_TO_GROUP = API_URL+'/account_controller/account/remouve_account_to_group/';
const GROUP_SAVE = API_URL+'/account_controller/group/save';
const GROUP_FIND_ALL = API_URL+'/account_controller/group/find_all';
const GROUP_DELETE_BY_ID__DELETE = API_URL+'/account_controller/group/delete/';

const ACCEPT_ALL = API_URL+'/account_controller/success';


/*================= Account controller =============================*/
const UTILISATEUR_SAVE__POST = API_URL + '/user_controller/user_save';
const UTILISATEUR_FIND_ALL__PAGEABLE__GET = API_URL + '/user_controller/user_find_all?';
const UTILISATEUR_ADD_ROLE__GET = API_URL + '/user_controller/utilisateur_add_role?';
const UTILISATEUR_REMOVE_ROLE__GET = API_URL + '/user_controller/utilisateur_remove_role?';
const UTILISATEUR_LOCK_OR_UNLOCK__GET = API_URL + '/user_controller/utilisateur_lock_and_unlock_user?';
const UTILISATEUR_RESET_PASSWORD_FOR_ADMIN__POST = API_URL + '/user_controller/reset_password';
const AUTHORIZATION_FIND_ALL__GET = API_URL + '/user_controller/authorisation_find_all';
