// /**
//  * @internal
//  * A class that keeps track of all the viewer states.
//  */
// export class State {
//   private _environmentInitialized: boolean;
//   private _isModelLoaded: boolean;
//   private _mayOutputSelectionChanged: boolean;
//   private _isConfigurationLoaded: boolean;
//   private _previousSelection: Array<string>;
//
//   /**
//    * @ignore
//    */
//   constructor() {
//     this._environmentInitialized = false;
//     this._isModelLoaded = false;
//     this._mayOutputSelectionChanged = true;
//     this._isConfigurationLoaded = false;
//     this._previousSelection = [];
//   }
//
//   /**
//   * Get environmentInitialised state
//   *  */
//   get environmentInitialized(): boolean {
//     return this._environmentInitialized;
//   }
//
//   /**
//   * Set environmentInitialised state
//   *  */
//   set environmentInitialized(aValue: boolean) {
//     this._environmentInitialized = aValue;
//   }
//
//   /**
//   * Get isModelLoaded state
//   *  */
//   get isModelLoaded(): boolean {
//     return this._isModelLoaded;
//   }
//
//   /**
//   * Set isModelLoaded state
//   *  */
//   set isModelLoaded(aValue: boolean) {
//     if ( aValue === false) {
//       this.previousSelection = [];
//     }
//     this._isModelLoaded = aValue;
//   }
//
//   /**
//   * Get mayOutputSelectionChanged state
//   *  */
//   get mayOutputSelectionChanged(): boolean {
//     return this._mayOutputSelectionChanged;
//   }
//
//   /**
//   * Set mayOutputSelectionChanged state
//   *  */
//   set mayOutputSelectionChanged(aValue: boolean) {
//     this._mayOutputSelectionChanged = aValue;
//   }
//
//   /**
//   * Set configurationLoaded state
//   *  */
//   get isConfigurationLoaded(): boolean {
//     return this._isConfigurationLoaded;
//   }
//
//   /**
//    * Set configurationLoaded state
//    *
//    * Can only be set to true.
//    */
//   set isConfigurationLoaded(value: boolean) {
//     if (!value) { return; } // This can not be set to false.
//     this._isConfigurationLoaded = value;
//   }
//
//   /**
//    * Get the previous selection
//    *  */
//   get previousSelection(): Array<string> {
//     return this._previousSelection;
//   }
//
//   /**
//    * Set the previous selection
//    *  */
//   set previousSelection(aValue: Array<string>) {
//     this._previousSelection = aValue;
//   }
// }
