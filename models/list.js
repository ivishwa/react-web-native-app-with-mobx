import {observable, computed} from 'mobx'

let index = 0

class ObservableListStore {
  @observable list = []

  add(item) {
    this.list.push({title: item, key:    index++});
  }

  remove(item) {
    this.list = this.list.filter((l) => {
      return l.title !== item
    })
  }
  @computed get size() {
    return this.list.length;
  }
}


const observableListStore = new ObservableListStore()
export default observableListStore
