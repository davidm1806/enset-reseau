//const BASE_URL = 'http://localhost:8018';
const BASE_URL = 'http://88.198.209.182:8080/rencontre-enset';

const API_URL = BASE_URL+'/api/v1.0';

const ACCOUNT_SAVE = API_URL + '/account_controller/account/save';
const ACCOUNT_FIND_ALL = API_URL+'/account_controller/account/find_all?';
const ACCOUNT_ADD_ACCOUNT_TO_GROUP = API_URL+'/account_controller/account/add_account_to_group/';
const ACCOUNT_REMOVE_ACCOUNT_TO_GROUP = API_URL+'/account_controller/account/remouve_account_to_group/';
const ACCOUNT_FIND_BY_ID = API_URL+'/account_controller/account/find_by_id/';
const GROUP_SAVE = API_URL+'/account_controller/group/save';
const GROUP_FIND_ALL = API_URL+'/account_controller/group/find_all';
const GROUP_DELETE_BY_ID__DELETE = API_URL+'/account_controller/group/delete/';
const GROUP_FIND_BY_TYPE = API_URL+'/account_controller/group/find_by_type/';
const GROUP_FIND_BY_ACCOUNT__GET = API_URL+'/account_controller/group/find_by_account_id/';

const LOGIN = BASE_URL+'/login';


const ACCEPT_ALL = API_URL+'/account_controller/success';


/*================= Account controller =============================*/
const UTILISATEUR_SAVE__POST = API_URL + '/user_controller/user_save';
const UTILISATEUR_FIND_ALL__PAGEABLE__GET = API_URL + '/user_controller/user_find_all?';
const UTILISATEUR_ADD_ROLE__GET = API_URL + '/user_controller/utilisateur_add_role?';
const UTILISATEUR_REMOVE_ROLE__GET = API_URL + '/user_controller/utilisateur_remove_role?';
const UTILISATEUR_LOCK_OR_UNLOCK__GET = API_URL + '/user_controller/utilisateur_lock_and_unlock_user?';
const UTILISATEUR_RESET_PASSWORD_FOR_ADMIN__POST = API_URL + '/user_controller/reset_password';
const AUTHORIZATION_FIND_ALL__GET = API_URL + '/user_controller/authorisation_find_all';




const GROUP_TYPE = {
    ENSET: 'ENSET',
    DEPARTEMENT: 'DEPARTEMENT',
    PROMOTION: 'PROMOTION',
    AUTRE: 'AUTRE',
};



function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


function isAuthenticate() {
    return parseJwt(getCookie('Authorization'));
}


function parseJwt (token) {
    if(!token)
        return;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function logout() {
    document.cookie = `Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    location.href='index.html';
}

function getCookie2(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function isAdmin(roles) {
    if(!roles)
        return;

    return roles.indexOf('ADMIN') > -1;
}




