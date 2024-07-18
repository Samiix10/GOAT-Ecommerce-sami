import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./CheckOut.css";
import { useParams } from "react-router-dom";
const CheckOut = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const [radioValue, setRadioValue] = useState();
  const [Address, setAddress] = useState("");
  function HandlingAddress() {
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        ...user,
        address: document.getElementById("address").value,
      })
    );
  }
  function HandlingSubbmet() {
    if (!radioValue) {
      toast.error("please select payment method");
      return;
    } else if (!user.address) {
      toast.error("please enter your address");
      return;
    } else {
      if (user.Orders) {
        const order = user.Orders;
        toast.success("your order will be delivered soon via cash");
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({
            ...user,
            Orders: [...order, user.UserCart],
            UserCart: null,
          })
        );
        localStorage.removeItem("cartData");
      } else {
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ ...user, Orders: [user.UserCart], UserCart: null })
        );
        toast.success("your order will be delivered soon via cash");
        localStorage.removeItem("cartData");
      }
      setTimeout(() => {
        window.location.href = "/";
      }, 300);
    }
  }
  useEffect(() => {
    if (user.address) {
      setAddress(user.address);
    } else {
      setAddress(null);
    }
  }, []);
  return (
    <>
      <div className="CheckOustSection py-5">
        <div className="CheckOustContainer container pt-5">
          <div className="CheckOutContent pt-4">
            <div className="checkOutBox text-center">
              <h2>confirm your order</h2>
              <div className="orderInfoAndAction">
                <div className="d-flex justify-content-between">
                  <p>total items : </p>
                  <p>{user.UserCart?.length}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>total price : </p>
                  <p>
                    ${" "}
                    {user.UserCart?.reduce(
                      (acc, cur) =>
                        acc +
                        (cur.price -
                          ((cur.discountPercentage / 100) * cur.price).toFixed(
                            2
                          )) *
                          cur.quantity,
                      0
                    ).toFixed(2)}
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center justify-content-between">
                  <p>shapping address</p>
                  {Address ? (
                    <p>{Address}</p>
                  ) : (
                    <>
                      <textarea
                        className="form-control"
                        name="your address"
                        id="address"
                        placeholder="Enter Your Address"
                        cols={40}
                      ></textarea>
                      <button
                        className="btn btn-success"
                        onClick={() => HandlingAddress()}
                      >
                        Save
                      </button>
                    </>
                  )}
                </div>
                <div className="paymentOptions">
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <h3>payment options : </h3>
                    <input
                      type="checkbox"
                      name="payment"
                      id="cash"
                      onClick={() =>
                        setRadioValue(document.getElementById("cash").checked)
                      }
                    />
                    <label
                      className="fs-2"
                      htmlFor="cash"
                      onClick={() =>
                        setRadioValue(document.getElementById("cash").checked)
                      }
                    >
                      cash on delivery
                    </label>
                  </div>
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    {user.UserCart ? (
                      <button
                        className="btn btn-outline-success"
                        onClick={() => HandlingSubbmet()}
                      >
                        confirm order
                      </button>
                    ) : (
                      <button className="btn btn-success" disabled>
                        no orders for now
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CheckOutForOneOrder = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const [radioValue, setRadioValue] = useState();
  const [Address, setAddress] = useState("");
  function HandlingAddress() {
    localStorage.setItem(
      "loggedUser",
      JSON.stringify({
        ...user,
        address: document.getElementById("address").value,
      })
    );
    setAddress(document.getElementById("address").value)
  }
  function HandlingSubbmet() {
    if (!radioValue) {
      toast.error("please select payment method");
      return;
    } else if (!user.address) {
      toast.error("please enter your address");
      return;
    } else {
      if (user.Orders) {
        const order = user.Orders;
        toast.success("your order will be delivered soon via cash");
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({
            ...user,
            Orders: [...order, item],
            
          })
        );
        
      } else {
        localStorage.setItem(
          "loggedUser",
          JSON.stringify({ ...user, Orders: [item] })
        );
        toast.success("your order will be delivered soon via cash");
        
      }
      setTimeout(() => {
        window.location.href = "/";
      }, 300);
    }
  }
  useEffect(() => {
    if (user.address) {
      setAddress(user.address);
    } else {
      setAddress(null);
    }
  }, []);
  return (
    <>
      <div className="CheckOustSection py-5">
        <div className="CheckOustContainer container pt-5">
          <div className="CheckOutContent pt-4">
            <div className="checkOutBox text-center">
              <h2>confirm your order</h2>
              <div className="orderInfoAndAction">
                <div className="d-flex justify-content-between">
                  <p>total items : </p>
                  <p>1</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>total price : </p>
                  <p>
                    ${" "}
                    {(item?.price - ((item?.discountPercentage / 100) * item?.price)).toFixed(2)}
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center justify-content-between">
                  <p>shapping address</p>
                  {Address ? (
                    <p>{Address}</p>
                  ) : (
                    <>
                      <textarea
                        className="form-control"
                        name="your address"
                        id="address"
                        placeholder="Enter Your Address"
                        cols={40}
                      ></textarea>
                      <button
                        className="btn btn-success"
                        onClick={() => HandlingAddress()}
                      >
                        Save
                      </button>
                    </>
                  )}
                </div>
                <div className="paymentOptions">
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <h3>payment options : </h3>
                    <input
                      type="checkbox"
                      name="payment"
                      id="cash"
                      onClick={() =>
                        setRadioValue(document.getElementById("cash").checked)
                      }
                    />
                    <label
                      className="fs-2"
                      htmlFor="cash"
                      onClick={() =>
                        setRadioValue(document.getElementById("cash").checked)
                      }
                    >
                      cash on delivery
                    </label>
                  </div>
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => HandlingSubbmet()}
                    >
                      confirm order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

export { CheckOutForOneOrder };
