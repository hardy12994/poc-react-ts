
import React from "react";

interface State {
    username: string;
    password: string;
}

class ChildForm extends React.Component<{}, State> {
    constructor(props : any) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

        onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const formData = new FormData(e.target as HTMLFormElement);
        const formDataObject: Record<string, any> = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        alert(`Username is ${this.state.username} & Password is ${this.state.password} `)
    }

    onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        this.setState({ ...this.state, [target.id]: target.value })
    }

    override render () {
        return (
        <form onSubmit={this.onSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.onChangeHandler}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
            />

            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default ChildForm;