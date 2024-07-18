import { useEffect, useState } from "react";
import "./UserPage.css";
import { useRecoilState, useRecoilValue } from "recoil";
import User from "../../componants/RecoilAtoms/User.Atom";

const UserPage = () => {
  const [Address, setAddress] = useState("");
  const [note, setNote] = useState();
  const user = useRecoilValue(User);
  let users = []
  if (localStorage.getItem("Users")) {
    users = JSON.parse(localStorage.getItem("Users"))
  }
 function editeUser(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  function HandlingAddress() {
    const contactuser =  users.find(
        (e) => e.username === user.username && e.password === user.password
      );
     const NewUser = editeUser(users, users.indexOf(contactuser), {
        ...user,
        address: document.getElementById("address").value})
    localStorage.setItem(
      "loggedUser",
      JSON.stringify( {
        ...user,
        address: document.getElementById("address").value})
    );
    localStorage.setItem(
      "Users",
      JSON.stringify(NewUser)
    );

    setAddress(document.getElementById("address").value);
  }
  function HandlingUpdateAddress() {
    const contactuser =  users.find(
        (e) => e.username === user.username && e.password === user.password
      );
     const NewUser = editeUser(users, users.indexOf(contactuser), {
        ...user,
        address:null})
    localStorage.setItem(
      "loggedUser",
      JSON.stringify(NewUser)
    );
     localStorage.setItem(
      "Users",
      JSON.stringify(NewUser)
    );
    setAddress(null);
  }
  function HandlingNote() {
     const contactuser =  users.find(
        (e) => e.username === user.username && e.password === user.password
      );
     const NewUser = editeUser(users, users.indexOf(contactuser), {
        ...user,
        notesForDelivery: document.getElementById("Note").value})
    localStorage.setItem(
      "loggedUser",
      JSON.stringify( {
        ...user,
        notesForDelivery: document.getElementById("Note").value})
    );
     localStorage.setItem(
      "Users",
      JSON.stringify(NewUser)
    );
    setNote(document.getElementById("Note").value);
  }
  function HandlingUpdateNote() {
    const contactuser =  users.find(
        (e) => e.username === user.username && e.password === user.password
      );
    const NewUser = editeUser(users, users.indexOf(contactuser), {
      ...user,
      notesForDelivery: null
    })
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
      ...user,
      notesForDelivery: null
    })
    );
     localStorage.setItem(
      "Users",
      JSON.stringify(NewUser)
    );
    setNote(null);
  }
  useEffect(() => {
    if (user.address) {
      setAddress(user.address);
    } else {
      setAddress(null);
    }
    if (user.notesForDelivery) {
      setNote(user.notesForDelivery);
    } else {
      setNote(null);
    }
  }, []);
  return (
    <div className="user-Page-Section py-5">
      <div className="UserPageContainer container pt-5">
        <div className="UserPageContent pt-4 w-100">
          <div className="UserBoxData">
            <h2 className="text-capitalize">your profile :</h2>
            <div className="UserINfo text-center d-flex flex-column gap-2">
              <h3 className="text-capitalize">
                {user.firstName + " " + user.lastName}
              </h3>
              <div className="UserPhoneData d-flex align-items-center gap-3 justify-content-center">
                <h4>Phone Number :</h4>
                <p className="m-0 p-0">{user.phone}</p>
              </div>
              <div className="UserEmailData d-flex align-items-center gap-3 justify-content-center">
                <h4>Email Address :</h4>
                <p className="m-0 p-0">{user.email}</p>
              </div>
              <div className="UserAddressData  flex-column d-flex align-items-center gap-3 justify-content-center">
                <div className="AddressField">
                  <h4>Address :</h4>
                  {Address ? (
                    <p>{Address}</p>
                  ) : (
                    <textarea
                      className="form-control"
                      name="your address"
                      id="address"
                      placeholder="Enter Your Address"
                      cols={40}
                    ></textarea>
                  )}
                </div>
                {Address ? (
                  <button
                    className="btn btn-success"
                    onClick={() => HandlingUpdateAddress()}
                  >
                    update
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => HandlingAddress()}
                  >
                    Save
                  </button>
                )}
              </div>
              <div className="UserAddressDataNote  flex-column d-flex align-items-center gap-3 justify-content-center">
                <div className="NoteField">
                  <h4>Notes For Delivery :</h4>
                  {note ? (
                    <p>{note}</p>
                  ) : (
                    <textarea
                      className="form-control"
                      name="your address"
                      id="Note"
                      placeholder="Enter Your Notes"
                      cols={40}
                    ></textarea>
                  )}
                </div>
                {note ? (
                  <button
                    className="btn btn-success"
                    onClick={() => HandlingUpdateNote()}
                  >
                    update
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => HandlingNote()}
                  >
                    Save
                  </button>
                )}
              </div>
              <div className="UserCartData d-flex align-items-center gap-3 justify-content-center">
                <h3>in Your Cart :</h3>
                <span className="fs-3">{   user.UserCart ? user.UserCart?.length : "0"} Items</span>
                <span className="fs-3">
                  Total Price:{" "}
                  { user.UserCart? user.UserCart.reduce(
                    (acc, cur) =>
                      acc +
                      (cur.price -
                        ((cur.discountPercentage / 100) * cur.price).toFixed(
                          2
                        )) *
                        cur.quantity,
                    0
                  ).toFixed(2) : "0"}
                </span>
              </div>
              <div className="UserOrderData d-flex align-items-center gap-3 justify-content-center">
                <h3>Your Order History :</h3>
                <span className="fs-3">
                  {user.Orders ? user.Orders.length : "no orders yet"}
                </span>
              </div>
              <div className="UserLikedData d-flex align-items-center gap-3 justify-content-center">
                <h3>in your Liked List :</h3>
                <span className="fs-3">{user?.userLiked?.length} Items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
