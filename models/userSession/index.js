import Realm from 'realm';
import RealmModel from 'react-native-realm-model';
const UserSchema {
  name: 'User',
  properties: {
    company_name: 'string',
    contact: 'string',
    created_at:'string',
    email: 'string',
    gid: 'integer',
    site_id: 'integer',
    name: 'string',
    id: 'integer',
    updated_at: 'integer'
  }
}
const UserSessionSchema {
  name: 'UserSession',
  properties: {
  current_user: {type: 'list', objectType: 'User'},
  last_login: 'date'
}
}
const realm = new Realm({
  schema: [UserSchema, UserSessionSchema]
]
});

class UserSession extends RealmModel {
  static  realm = realm;
}
