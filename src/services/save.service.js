class SaveServiceClass {
  SAVE_NAME = 'SAVE_NAME';

  GAME_NAME = 'GAME_NAME'

  getSave() {
    return JSON.parse(localStorage.getItem(this.SAVE_NAME));
  }

  setSave(data) {
    localStorage.setItem(this.SAVE_NAME, JSON.stringify(data));
  }
}

export const SaveService = new SaveServiceClass();