function Submit(props) {
  return (
    <div>
      <h1>Thanks for your submission!</h1>
      <br/>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your protein: </td>
            <td><b>{props.summary.patty}</b></td>
          </tr>
          <tr>
            <td>Number of patties: </td>
            <td><b>{props.summary.amount}</b></td>
          </tr>
          <tr>
            <td>Patty cooked level: </td>
            <td><b>{props.summary.doneness}</b></td>
          </tr>
          <tr>
            <td>The topping you chose: </td>
            <td><b>{props.summary.topping}</b></td>
          </tr>
          <tr>
            <td>Extra cheese: </td>
            <td><b>{props.summary.cheese}</b></td>
          </tr>
          <tr>
            <td>The bun type: </td>
            <td><b>{props.summary.bun}</b></td>
          </tr>
          <tr>
            <td>Sauces: </td>
            <td><b>{props.summary.sauce}</b></td>
          </tr>
          <tr>
            <td>Anything extra: </td>
            <td><b>"{props.summary.extra !== "" ? props.summary.extra : "Nothing"}"</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Submit;