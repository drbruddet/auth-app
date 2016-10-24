import { createContainer } from 'meteor/react-meteor-data';

import AdminMainPage from '../pages/admin/AdminMainPage.jsx'

export default AdminMainContainer = createContainer(({params}) => {

  const currentUser = Meteor.user();

  return {
    currentUser,
  };
  
}, AdminMainPage);