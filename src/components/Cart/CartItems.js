const CartItems = () => {
    const cartElements = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        },
    ];

    const totalPrice = cartElements.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
     <table className=".card">
        <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
     </table>
  );
};

export default CartItems;
