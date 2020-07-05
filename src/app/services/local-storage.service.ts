import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  activeKeys: any[] = [];
  activeKey: string;

  constructor() {}

  /**
   * Init a storage instance that is recallable
   * @param activeKey is the key to save it by
   * @example
   *    // In your constructor
   *    constructor (private localStorage: LocalStorageService) {
   *      this.userStorage = this.localStorage.init('user');
   *    }
   *
   *    // Then you can use it like this
   *    myMethod() {
   *      this.userStorage.set({
   *        username: 'test',
   *        otherfield: true
   *      })
   *
   *      // Then you can call it like this
   *      this.userStorage.get()
   *    }
   */
  init(activeKey: string) {
    this.activeKey = 'timestamp-' + activeKey;

    const keyIndex = this.activeKeys.findIndex(item => {
      return item.activeKey === this.activeKey;
    });

    // save each of the keys in an array
    if (keyIndex === -1) {
      const localStorageInstance = {
        activeKey: this.activeKey,
        set: this.set,
        get: this.get,
        remove: this.remove,
      };

      this.activeKeys.push(localStorageInstance);

      return this.activeKeys[this.activeKeys.length - 1];
    } else {
      return this.activeKeys[keyIndex];
    }
  }

  /**
   * Takes in data, figures out if its an object/array and stringify it to save in localstorage
   * If its a string it just sets it to localstorage as is with the key as is
   * @param data any data you wanna save in localstorage
   */
  set(data: any) {
    if (!this.activeKey) return null;

    let dataString: string = '';

    if (data !== null && typeof data === 'object') {
      dataString = JSON.stringify(data);
    } else {
      dataString = data;
    }

    localStorage.setItem(this.activeKey, dataString);

    return true;
  }

  /**
   * Get a dataString from localstorage by key
   */
  get() {
    if (!this.activeKey) return null;

    // Get data
    let dataString: any = localStorage.getItem(this.activeKey);
    let isArray = dataString && dataString[0] === '[' && dataString[dataString.length - 1] === ']';
    let isObject = dataString && dataString[0] === '{' && dataString[dataString.length - 1] === '}';

    // Handle all types
    if (isArray || isObject) {
      return JSON.parse(dataString);
    } else if (dataString === null + '' || dataString === null) {
      return null;
    } else if (dataString === undefined + '' || dataString === undefined) {
      return undefined;
    } else if (dataString === Infinity + '' || dataString === Infinity) {
      return Infinity;
    } else if (!isNaN(dataString)) {
      return parseInt(dataString);
    } else {
      return dataString;
    }
  }

  /**
   * Delete item in localstorage by key
   */
  remove() {
    if (!this.activeKey) return null;

    localStorage.removeItem(this.activeKey);

    return true;
  }

  /**
   * Remove active keys
   */

  destroyAll() {
    localStorage.clear();
    this.activeKeys = [];
  }
}
