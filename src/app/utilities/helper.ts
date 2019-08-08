/**
 * @internal
 * A helper class with many utilities.
 */
export class Helper {

  /**
   * Returns a deep copied object.
   */
  public deepCopyObject(aObject: object): object {
    const clone = {};
    const keys = Object.keys(aObject);
    // Loop through all keys of an object.
    for ( const key of keys) {
      if ( aObject[key] != null && typeof(aObject[key]) === 'object') {
        // Recursively deepcopy variable if its an object.
        clone[key] = this.deepCopyObject(aObject[key]);
      } else {
        clone[key] = aObject[key];
      }
    }
    return clone;
  }

  /**
   * Returns a deep merge object from two objects.
   */
  public deepMergeObject(aTarget: object, aSource: object): object {
    // create a output object from target with no reference.
    const output = Object.assign({}, aTarget);
    // checks if both target and source are an object.
    if (this.isObject(aTarget) && this.isObject(aSource)) {
      // Loop through all keys of the source object to copy them
      Object.keys(aSource).forEach(key => {
        // Check if the value of a key in source is an object.
        if (this.isObject(aSource[key])) {
          // if it doesnt exist in the target we can directly copy and assign it to the output.
          if (!(key in aTarget)) {
            Object.assign(output, { [key]: aSource[key] });
          } else {
            // else we need to deep merge the that object as well.
            output[key] = this.deepMergeObject(aTarget[key], aSource[key]);
          }
        } else {
          Object.assign(output, { [key]: aSource[key] });
        }
      });
    }
    return output;
  }

  /**
   * Returns a object where the key and value is swapped.
   */
  public reverseObjectKeyVal(obj: object): object {
    const ret = {};
    // Loop through each key of an object.
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // set a reversed key / val on the return object.
        ret[obj[key]] = key;
      }
    }
    return ret;
  }

  /**
   * Checks if item is an object
   */
  private isObject(aItem: any): boolean {
    return (aItem && typeof aItem === 'object' && !Array.isArray(aItem));
  }

  /**
   * Checks if two arrays are equal. Does not check nested arrays!
   *
   * You can check two arrays non strict. When doing this the array gets sorted and then compared.
   */
  public isEqualArray(aTarget: Array<any>, aSource: Array<any>, aStrict: boolean = true) {
    // If either is undefined, return true if both are undefined, else return false.
    if (!aTarget || !aSource) {
      return aTarget === aSource;
    }

    // If its not a strict check (order doesnt matter) the array will be sorted.
    if (!aStrict) {
      aTarget = aTarget.sort();
      aSource = aSource.sort();
    }

    // If the length of each array is the same it checks if the contents are the same.
    if (aTarget.length === aSource.length) {
      for (let i = 0; i < aTarget.length; i++) {
        if (aTarget[i] !== aSource[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }

}
