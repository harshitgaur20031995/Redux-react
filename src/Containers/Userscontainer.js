import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers, loginUser } from "../Redux/Users/Usersactions";

function Userscontainer({ userdata, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(userdata);
  return userdata.loading ? (
    <h2>loading</h2>
  ) : userdata.error ? (
    <h2>{userdata.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userdata &&
          userdata.users &&
          userdata.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userdata: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userscontainer);
