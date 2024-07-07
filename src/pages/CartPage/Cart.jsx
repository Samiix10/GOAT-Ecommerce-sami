import { useRecoilState } from "recoil";
import CartItems from "../../componants/RecoilAtoms/cart.Atom";

const Cart = () => {
  const [Cart, setCart] = useRecoilState(CartItems);
  function aditAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  function DeletItemFromCart(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  function deleteItem(id) {
    setCart(
      DeletItemFromCart(
        Cart,
        Cart.findIndex((item) => item.id === id)
      )
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Cart.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <button
                onClick={() =>
                  setCart(
                    aditAtIndex(Cart, index, {
                      ...item,
                      quantity: Cart[index].quantity + 1,
                    })
                  )
                }
              >
                +
              </button>
              {item.quantity}
              <button
                onClick={() => {
                  if (item.quantity === 1) {
                    deleteItem(item.id);
                  } else {
                    setCart(
                      aditAtIndex(Cart, index, {
                        ...item,
                        quantity: Cart[index].quantity - 1,
                      })
                    );
                  }
                }}
              >
                -
              </button>
            </td>
            <td>{item.value}</td>
            <td>{item.value * item.quantity}</td>
            <td>
              <button onClick={() => deleteItem(item.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
