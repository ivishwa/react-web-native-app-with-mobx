import mobx, {observable, computed} from 'mobx';

export class UserSession {
    @observable loading = false;
    @observable id;
    @observable name ="noname";

    constructor() {
        mobx.autorun(() => console.log(this.report));
    }

    @computed get is_logged_in() {
        return this.id === null;
    }

    login(name, password) {
      this.loading = true;
      if(password==="secret") {
        setTimeout(() => {
          console.log("current : ", this.name,"new = ",name)
          this.name=name;
          this.id = 123;
          this.loading = false;
        },1500);
      }
    }
}

const current_session = new UserSession();
export default current_session;
