import Realm from 'realm';
import RealmModel from 'react-native-realm-model';

const realm = new Realm({
  schema: [
    name : 'UserSession',
    properties: {
        
    }
  ]
});
class UserSession extends RealmModel {

}
