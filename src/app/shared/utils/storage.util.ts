export default class UtlStorage {
    static get<T>(key: string, parse?): T | any {
        return parse ? JSON.parse(sessionStorage.getItem(key)) as T : sessionStorage.getItem(key);
    }

    static set(key: string, data: any, stringify?) {
        sessionStorage.setItem(key, stringify ? JSON.stringify(data) : data);
    }

    static delete(key: string) {
        sessionStorage.removeItem(key);
    }

    static clear() {
        sessionStorage.clear();
    }
}
