
// const PositiveMessage = () => 
//   <p>Możesz obejrzeć film, Zapraszamy</p>;

// const NegativeMessage = () => 
//   <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat</p>;


const ValidationMessage =  ( props ) =>{
    const { txt } = props
return (
  <p>{ txt }</p>
 )
}
const OrderForm = (props) => {
  const {submit, isConfirmed, change} = props;
  return(
  <form onSubmit={submit}>
  <input type="checkbox" id="age" 
  onChange={change}
  checked={isConfirmed}/>
  <label htmlFor="age">Mam co najmniej 16 lata</label>
  <br/>
  <button type="submit">Kup bilet</button>
  </form>
  )
}

class TicketShop extends React.Component {
  
state = {
  isConfirmed: false,
  isFormSubmited: false,
}

handleCheckboxChange = () => {
  this.setState({
    isConfirmed: !this.state.isConfirmed,
    isFormSubmited: false,
  })
}
 
handleFormSubmit = (e) => {
  e.preventDefault()
  if(!this.state.isFormSubmited){
  this.setState({
    isFormSubmited: true
  })
  }
}

displayMessage = () => {
  if(this.state.isFormSubmited){

  if (this.state.isConfirmed) {
    return <ValidationMessage txt="Możesz obejrzeć film, Zapraszamy"/>
  } else {
    return <ValidationMessage tst="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat"/>
  }

  } else {return null}
}

  render() {

    const { isConfirmed } = this.state

    // console.log(this.state.isConfirmed)
    return (
      <>
      <h1>Kup bilet na horror roku!</h1>
      <OrderForm 
      change={this.handleCheckboxChange} 
      submit={this.handleFormSubmit}
      checked={isConfirmed}
      />
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<TicketShop/>,
 document.getElementById('root'))