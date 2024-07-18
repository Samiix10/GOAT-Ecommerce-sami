import { useRecoilState } from "recoil";
import CartItems from "../../componants/RecoilAtoms/cart.Atom";
import "./CartSection.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Cart = () => {
  const [Cart, setCart] = useRecoilState(CartItems);
  function aditAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  function DeletItemFromCart(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  function gotoTop() {
    window.scrollTo(0, 0);
  }
  function deleteItem(id) {
    const NewCart = DeletItemFromCart(
      Cart,
      Cart.findIndex((item) => item.id === id)
    );
    setCart(NewCart);
    localStorage.setItem("cartData" , JSON.stringify(NewCart))
    toast.success("item deleted successfully");
  }
  useEffect(() => {
    gotoTop();
  }, []);
  return (
    <>
      <div className="CartSectionMain py-5">
        <div className="CartSectionContainer pt-5 container-xxl">
          <table className="table table-hover w-100">
            <thead>
              <tr>
                <th className="d-none d-md-table-cell ">imge</th>
                <th>Product</th>
                <th className="d-none d-md-table-cell ">Quantity</th>
                <th className="d-none d-md-table-cell ">Price</th>
                <th className="d-none d-md-table-cell ">Dis</th>
                <th className="d-none d-md-table-cell ">Total Price</th>
                <th className="d-none d-md-table-cell ">Action</th>
              </tr>
            </thead>
            <tbody>
              { Cart.length> 0 ?
                Cart.map((item, index) => (
                <tr key={index}>
                  <td className="d-none d-md-table-cell">
                    <span className="ItemThub mx-auto ">
                      <Link to={`/Get-Prodact-Details/${item.id}`}>
                        <img src={item.thumbnail} alt="" />
                      </Link>
                    </span>
                  </td>
                  <td className="ItemTitle text-center">
                    <span className="ItemThub mx-auto d-block d-md-none">
                      <Link to={`/Get-Prodact-Details/${item.id}`}>
                        <img src={item.thumbnail} alt="" />
                      </Link>
                    </span>
                    {item.title}
                    <div className="actionContainer w-100 d-flex align-content-center justify-content-center gap-5 flex-wrap d-md-none my-1">
                      <button
                        className="Plus"
                        onClick={() => {
                          const New = aditAtIndex(Cart, index, {
                            ...item,
                            quantity: Cart[index].quantity + 1,
                          });
                          setCart(New);
                          localStorage.setItem("cartData", JSON.stringify(New));
                        }}
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="minus"
                        onClick={() => {
                          if (item.quantity === 1) {
                            deleteItem(item.id);
                          } else {
                            const New = aditAtIndex(Cart, index, {
                              ...item,
                              quantity: Cart[index].quantity - 1,
                            });
                            setCart(New);
                            localStorage.setItem(
                              "cartData",
                              JSON.stringify(New)
                            );
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div className="ManyIfo d-flex align-items-center justify-content-between d-md-none my-2">
                      <span className="fs-4">${item.price?.toFixed(2)}</span>
                      <span className="fs-4">
                        {item.discountPercentage.toFixed(2)}%
                      </span>
                      <span className="fs-4">
                        $
                        {(
                          (item.price -
                            (
                              (item.discountPercentage / 100) *
                              item.price
                            ).toFixed(2)) *
                          item.quantity
                        ).toFixed(2)}
                      </span>
                    </div>
                    <button
                      className="btn btn-outline-danger d-block d-md-none mx-auto"
                      onClick={() => deleteItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                  <td className=" text-center d-none d-md-table-cell">
                    <div className="actionContainer w-100 d-flex align-content-center justify-content-between flex-wrap">
                      <button
                        className="Plus"
                        onClick={() => {
                          const New = aditAtIndex(Cart, index, {
                            ...item,
                            quantity: Cart[index].quantity + 1,
                          });
                          setCart(New);
                          localStorage.setItem("cartData", JSON.stringify(New));
                        }}
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="minus"
                        onClick={() => {
                          if (item.quantity === 1) {
                            deleteItem(item.id);
                          } else {
                            const New = aditAtIndex(Cart, index, {
                              ...item,
                              quantity: Cart[index].quantity - 1,
                            });
                            setCart(New);
                            localStorage.setItem(
                              "cartData",
                              JSON.stringify(New)
                            );
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td className="Price text-center d-none d-md-table-cell">
                    {" "}
                    <span className="fs-4">${item.price?.toFixed(2)}</span>
                  </td>
                  <td className="Disper text-center d-none d-md-table-cell">
                    <span className="fs-4">
                      {item.discountPercentage.toFixed(2)}%
                    </span>
                  </td>
                  <td className="PriceAFter text-center d-none d-md-table-cell">
                    <span className="fs-4">
                      $
                      {(
                        (item.price -
                          (
                            (item.discountPercentage / 100) *
                            item.price
                          ).toFixed(2)) *
                        item.quantity
                      ).toFixed(2)}
                    </span>
                  </td>
                  <td className="text-center d-none d-md-table-cell">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
                )) : (
                  <tr>
                    <td colSpan="7" className="text-center text-uppercase fs-4">
                      Your cart is empty
                    </td>
                  </tr>
                )
            }
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan="6"
                  className="text-right fs-4 fw-bold d-none d-md-table-cell "
                >
                  Total
                </td>
                <td className="PriceTotal text-center d-none d-md-table-cell fs-4 fw-bold">
                  $
                  {Cart.reduce(
                    (acc, cur) =>
                      acc +
                      (cur.price -
                        ((cur.discountPercentage / 100) * cur.price).toFixed(
                          2
                        )) *
                        cur.quantity,
                    0
                  ).toFixed(2)}
                </td>
                <td className="d-table-cell d-md-none">
                  <div className="total d-flex w-100 align-items-center justify-content-between">
                    <span className="fs-4 fw-bold">Total</span>
                    <span className="text-center fs-4 fw-bold">
                      $
                      {Cart.reduce(
                        (acc, cur) =>
                          acc +
                          (cur.price -
                            (
                              (cur.discountPercentage / 100) *
                              cur.price
                            ).toFixed(2)) *
                            cur.quantity,
                        0
                      ).toFixed(2)}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="7" className="text-center d-none d-md-table-cell">
                  <Link to="/checkout">
                    <button className="btn btn-success">Checkout</button>
                  </Link>
                </td>
                <td className="text-center d-table-cell d-md-none">
                  <Link to="/checkout">
                    <button className="btn btn-success">
                      {" "}
                      <Link to={"/checkOut"}>Checkout</Link>
                    </button>
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
