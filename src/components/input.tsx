import React from "react";

interface State {
  name: string;
}

class Input extends React.Component<{}, State> {
    constructor(props : any) {
        super(props);
        this.state = {
          name: '',
        };

    }

    onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        this.setState({ ...this.state, [target.id]: target.value })
    }

    override render () {
        return (
        <div>
          <p>Hello, {this.state.name}</p>
          <input id="name" onChange={this.onChangeHandler} placeholder="Enter your name" />
        </div>
        )
    }
}

export default Input;