import React from 'react';
import Form from './components/Form';
import TopNavBar from './components/TopNavBar';
import LabeledInput from './components/LabeledInput';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopNavBar />
        <Form title="Personal Details">
          <LabeledInput id="first-name" label="First Name" type="text" />
          <LabeledInput id="last-name" label="Last Name" type="text" />
          <LabeledInput id="email" label="Email" type="email" />
          <LabeledInput id="phone-number" label="Phone Number" type="tel" />
        </Form>
      </div>
    );
  }
}

export default App;
