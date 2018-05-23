// var React = require('../public/react.development.js');
// var ReactDOM = require('../public/react-dom.development.js');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formOne: false,
			formTwo: false,
			formThree: false,
			reviewAll: false,
			formStorage1: {},
			formStorage2: {},
			formStorage3: {}
		}
	}


	storeInputValuesForm1(obj) {
		this.setState ({
			formStorage1: obj
		}, () => console.log('FORM STORAGE 1', this.state.formStorage1))
	}

	handleFormOne() {
		this.setState ({
			formOne: true
		})
	}

	storeInputValuesForm2(obj) {
		this.setState ({
			formStorage2: obj
		}, () => console.log('FORM STORAGE 2', this.state.formStorage2))
	}

	handleFormTwo() {
		this.setState ({
			formTwo: true,
			formOne: false
		})
	}

	storeInputValuesForm3(obj) {
		this.setState ({
			formStorage3: obj
		}, () => console.log('FORM STORAGE 3', this.state.formStorage3))
	}

	handleFormThree() {
		this.setState ({
			formThree: true,
			formTwo: false
		})
	}

	handleReviewSummary() {
		this.setState ({
			reviewAll: true,
			formThree: false
		})
	}

	renderFormOne() {
		if (this.state.formOne) {
			return <FormOne handleFormTwo={this.handleFormTwo.bind(this)} storeInputValuesForm1={this.storeInputValuesForm1.bind(this)}/>
		}
	}

	renderFormTwo() {
		if (this.state.formTwo) {
			return <FormTwo handleFormThree={this.handleFormThree.bind(this)} storeInputValuesForm2={this.storeInputValuesForm2.bind(this)}/>
		}
	}

	renderFormThree() {
		if (this.state.formThree) {
			return <FormThree handleReviewSummary={this.handleReviewSummary.bind(this)} storeInputValuesForm3={this.storeInputValuesForm3.bind(this)}/>
		}
	}

	renderDataSummary() {
		if (this.state.reviewAll) {
			return <DataSummary formStorage1={this.state.formStorage1} formStorage2={this.state.formStorage2} formStorage3={this.state.formStorage3}/>
		}
	}


	render() {
		return (
			<div> 
				<button className="btn btn-success mb-2" onClick={this.handleFormOne.bind(this)}>Checkout</button>

				<div>
						{
							this.renderFormOne()
						}
				</div>

				<div>
						{
							this.renderFormTwo()
						}
				</div>

				<div>
					{
						this.renderFormThree()
					}
				</div>

				<div>
					{
						this.renderDataSummary()
					}
				</div>

			</div>
		)
	}
}

class FormOne extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}
	}

	firstNameOnChange(e) {
		// console.log('this is fname ', e.target.value)
		this.setState ({
			firstName: e.target.value
		}, () => console.log(this.state))
	}

	lastNameOnChange(e) {
		// console.log('this is lname ', e.target.value)
		this.setState ({
			lastName: e.target.value
		})
	}

	emailOnChange(e) {
		// console.log('this is email ', e.target.value)
		this.setState ({
			email: e.target.value
		})
	}

	passwordOnChange(e) {
		// console.log('this is pass ', e.target.value)
		this.setState ({
			password: e.target.value
		})
	}

	handleFormOneClick() {
		// console.log('hello')
		// console.log(this.state)
		this.props.handleFormTwo();

		this.props.storeInputValuesForm1(this.state);
	}

	render() {
		return(
			<div>
				<label>First Name</label>
				<input type="text" id="fname" name="firstname" placeholder="Input your first name" onChange={(event) => this.firstNameOnChange(event)}/>

				<label>Last Name</label>
				<input type="text" id="lname" name="lastname" placeholder="Input your last name" onChange={(event) => this.lastNameOnChange(event)}/>

				<label>Email</label>
				<input type="text" id="email" name="email" placeholder="Input your email" onChange={(event) => this.emailOnChange(event)}/>

				<label>Password</label>
				<input type="password" id="password" name="password" placeholder="Input intended password" onChange={(event) => this.passwordOnChange(this)}/>

				<button className="btn btn-primary btn-block mt-2" id="step-two" onClick={() => this.handleFormOneClick()}>Step 2</button>
			</div>
		)
	}
}


class FormTwo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address1: '',
			address2: '',
			city: '',
			state: '',
			zipCode: '',
			phone: ''
		}
	}

	addressOneOnChange(e) {
		this.setState ({
			address1: e.target.value
		})
	}

	addressTwoOnChange(e) {
		this.setState ({
			address2: e.target.value
		})
	}

	cityOnChange(e) {
		this.setState ({
			city: e.target.value
		})
	}

	stateOnChange(e) {
		this.setState ({
			state: e.target.value
		})
	}

	zipCodeOnChange(e) {
		this.setState ({
			zipcode: e.target.value
		})
	}

	phoneOnChange(e) {
		this.setState ({
			phone: e.target.value
		})
	}
	
	handleFormTwoClick() {
		this.props.handleFormThree();

		this.props.storeInputValuesForm2(this.state);
	}

	render() {
		return(
			<div>
				<label>Address 1</label>
				<input type="text" id="address" name="address" placeholder="address, street, PO" onChange={(e) => this.addressOneOnChange(e)}/>

				<label>Address 2</label>
				<input type="text" id="address" name="address" placeholder="line 2" onChange={(e) => this.addressTwoOnChange(e)}/>

				<label>City</label>
				<input type="text" id="city" name="city" placeholder="Input your city" onChange={(e) => this.cityOnChange(e)}/>

				<label>State</label>
				<input type="text" id="state" name="state" placeholder="Input state" onChange={(e) => this.stateOnChange(e)}/>

				<label>Zip Code</label>
				<input type="text" id="zipcode" name="zipcode" placeholder="Input zipcode" onChange={(e) => this.zipCodeOnChange(e)}/>

				<label>Phone</label>
				<input type="text" id="phone" name="phone" placeholder="Input phone number" onChange={(e) => this.phoneOnChange(e)}/>
				<button className="btn btn-primary btn-block mt-2" onClick={this.handleFormTwoClick.bind(this)}>Step 3</button>
			</div>
		);
	}
}


class FormThree extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			creditCardNumber: '',
			expireDate: '',
			cvv: '',
			billingZipCode: ''
		}
	}

	creditCardNumberOnChange(e) {
		this.setState ({
			creditCardNumber: e.target.value
		})
	}

	expireDateOnChange(e) {
		this.setState ({
			expireDate: e.target.value
		})
	}

	cvvOnChange(e) {
		this.setState ({
			cvv: e.target.value
		})
	}

	billingZipCodeOnChange(e) {
		this.setState ({
			billingZipCode: e.target.value
		})
	}

	handleFormThreeClick() {
		this.props.handleReviewSummary();

		this.props.storeInputValuesForm3(this.state);
	}

	render() {
		return(
			<div>
				<label>Credit Card Number</label>
				<input type="text" id="credit-card" name="credit-card" placeholder="Input your credit card #"/>

				<label>Expire Date</label>
				<input type="text" id="expire-date" name="expire-date" placeholder="Input expire date"/>

				<label>CVV</label>
				<input type="text" id="cvv" name="cvv" placeholder="Input your cvv"/>

				<label>Billing Zip Code</label>
				<input type="text" id="billing-zip-code" name="billing-zip-code" placeholder="Input billing zip code"/>

				<button className="btn btn-primary btn-block mt-2" onClick={this.handleFormThreeClick.bind(this)}>Review Checkout</button>
			</div>

		);
	}
}


class DataSummary extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		console.log('LOOK HERE', this.props.formStorage)
		return(
			<div>
				<div>Review Account</div>
				<div>First Name</div>
					{this.props.formStorage1.firstName}
				<div>Last Name</div>
					{this.props.formStorage1.lastName}
				<div>Email</div>
					{this.props.formStorage1.email}
				<div>Password</div>
					{this.props.formStorage1.password}

				<div>----------------------------</div>

				<div>Shipping Information</div>
				<div>Address 1</div>
					{this.props.formStorage2.address1}
				<div>Address 2</div>
					{this.props.formStorage2.address2}
				<div>City</div>
					{this.props.formStorage2.city}
				<div>State</div>
					{this.props.formStorage2.state}
				<div>Zip Code</div>
					{this.props.formStorage2.zipcode}
				<div>Phone</div>
					{this.props.formStorage2.phone}

				<div>----------------------------</div>

				<div>Credit Card Information</div>
				<div>Credit Card Number</div>
					{this.props.formStorage2.creditCardNumber}
				<div>Expire Date</div>
					{this.props.formStorage2.expireDate}
				<div>CVV</div>
					{this.props.formStorage2.cvv}
				<div>Billing Zip Code</div>
					{this.props.formStorage2.billingZipCode}

				<button className="btn btn-dark btn-block mt-2">Purchase</button>
			</div>

		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
