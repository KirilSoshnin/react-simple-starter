import React from "react";
import SampleData from "./SampleData";
import ErrorBoundary from "./ErrorBoundary";
import GlobalContext from "./GlobalContext";
import Modal from "./Modal";

class ExampleClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      text: "Loading...",
      showModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  componentDidMount() {
    SampleData()
      .then(data => {
        this.setState({
          text: data.defaultState,
          loading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { text, loading, showModal } = this.state;

    if (loading) {
      return <span>{text}</span>;
    }

    return (
      <>
        <p>{text}</p>
        <GlobalContext.Consumer>
          {([{ removeText, addText }]) => (
            <>
              <button
                onClick={() =>
                  this.setState({
                    text: ""
                  })
                }
              >
                {removeText}
              </button>

              <button
                onClick={() =>
                  this.setState({
                    text: "Modfied State Class"
                  })
                }
              >
                {addText}
              </button>
              <button onClick={this.toggleModal}>Show Modal</button>

              {showModal ? (
                <Modal>
                  <div>Some fictional modal</div>
                  <button onClick={this.toggleModal}>Close</button>
                </Modal>
              ) : null}
            </>
          )}
        </GlobalContext.Consumer>
      </>
    );
  }
}

export default function ExampleClassWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <ExampleClass {...props} />
    </ErrorBoundary>
  );
}
