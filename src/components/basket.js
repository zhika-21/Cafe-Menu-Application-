const Basket = ({order}) => {
  const {title, price, count, id} = order
  return (
    <aside>
      <h3>Your Order</h3>
      <div>
        {order.length === 0 &&
          <div> Basket is empty</div>}
        {order.map(el =>
        (<div style={{background: "lightblue"}} key={id}><h4>{el.title}</h4>
          <h4>{el.count * el.price}</h4>
          <h4> qty: {el.count}</h4>
        </div>
        ))}
      </div>
    </aside >
  )
}
export default Basket

