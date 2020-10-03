export class AppConfig {
    
    public static APP_DEFAULT_IDIOMA = 'en'; // es o en

    public static WEB_SERVER_ID = 'quantum-back-end';
    public static WEB_SERVER_AUTHORIZATION = 'Basic cXVhbnR1bS1mcm9udC1lbmQ6cXVhbnR1bS1mcm9udC1lbmQ=';
    public static WEB_SERVER_API = 'http://localhost:62000';
    
    public static WEB_CLIENT_ID = 'quantum-front-end';
    public static WEB_CLIENT_GRANT_TYPE = 'password';
    public static WEB_CLIENT_EMPRESA = 'Quantum Project 2020 for Greip Company';
    public static WEB_CLIENT_NAME = 'Quantum Front End';
    public static WEB_CLIENT_ITEM_PER_PAGE = 5;
    public static WEB_CLIENT_VERSION = AppConfig.WEB_CLIENT_NAME + ' v1.0';
    public static WEB_CLIENT_DEFAULT_PAGE = '/';
    public static WEB_CLIENT_DEFAULT_PAGE_ERROR = '/error';

    public static URL_GET_TOKEN = `${AppConfig.WEB_SERVER_API}/oauth/token`;

    public static DB_TIPO_OPERATION_READ = 'R'; //Operacion para traer registros de la db
    public static DB_TIPO_OPERATION_READ_DATA = 'RD'; //Operacion para traer registros de la db no devuelve header
    public static DB_TIPO_OPERATION_READ_FORM = 'RF'; //Operacion para traer lo necesario para cargar un formulario
    public static DB_TIPO_OPERATION_CREATE = 'C'; //Operacion para permite crear un registro en la db
    public static DB_TIPO_OPERATION_UPDATE = 'U'; //Operacion para actualizar un registro en la db
    public static DB_TIPO_OPERATION_DELETE = 'D'; //Operacion para eliminar un registro de la db

    public static DB_COOMODIN_LIKE = '%%'; //Operacion para eliminar un registro de la db

    public static DB_RESPONSE_OK = 'PE'; //Operacion para eliminar un registro de la db

    public static WEB_CLIENT_MSG_SEVERITY_INFO = 'info';
    public static WEB_CLIENT_MSG_SEVERITY_WARN = 'warn';
    public static WEB_CLIENT_MSG_SEVERITY_ERROR = 'error';
    public static WEB_CLIENT_MSG_SEVERITY_SUCCESS = 'success';

    
}

