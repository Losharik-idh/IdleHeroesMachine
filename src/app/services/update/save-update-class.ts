import * as Scrolls from '../../globals/scrolls';
import * as Orbs from '../../globals/orbs';
import * as ArenaTokens from '../../globals/arenaTokens';
import { ScrollDataGroup } from '../../globals/interfaces';

export class SaveUpdateClass {

  public updateScrollSaveData(save) {
    return this.updateSaveData(save, Scrolls.MONTHLY_SCROLLS_DATA, 'scrolls');
  }

  public updateOrbSaveData(save) {
    return this.updateSaveData(save, Orbs.MONTHLY_ORBS_DATA, 'orbs');
  }

  public updateArenaTokenSaveData(save) {
    return this.updateSaveData(save, ArenaTokens.MONTHLY_ARENA_TOKENS_DATA, 'arenaTokens');
  }

  public updateSaveData(save, dataGroup, amountKey) {
    const HANDLE_LIST = new Set();
    const SAVEDATA = [];
    // Create list of current save keys
    Object.values(dataGroup).forEach((groupData: ScrollDataGroup) => {
      groupData.subdata.forEach((data) => {
        SAVEDATA.push(data);
        HANDLE_LIST.add(data.handle);
      });
    });

    // Delete removed keys from save file.
    Object.keys(save).forEach((key) => {
      if (!HANDLE_LIST.has(key)) {
        delete save[key];
      }
    });

    // Update saveKeys to new value;
    Object.keys(save).forEach((key) => {
      save[key] = SAVEDATA.find((data) => {
        return data.handle === key;
      })[amountKey];
    });
    return save;
  }





}
