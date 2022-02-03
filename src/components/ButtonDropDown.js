import React from 'react';
import { ButtonDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem, NavItem, UncontrolledDropdown } from 'reactstrap';

export default class ButtonDropDown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        let items = this.props.items ? this.props.items.map(item => {
            return (
                // <Link to={item.ref} key={item.ref}>
                <DropdownItem  tag="a" href={item.ref} key={item.ref} dir="rtl" className="btn btn-outline-success">{item.name}</DropdownItem>
                // </Link>
            );
        }) : null;
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                {/* {
                    items ? <DropdownToggle  caret className="btn-outline-success"/> :
                        null
                } */}

                {/*                 
                <Link to={this.props.text.ref}>
                    <Button id="caret" className="btn btn-outline-success">{this.props.text.name}</Button>
                </Link> */}
                <UncontrolledDropdown setActiveFromChild>

                    <DropdownToggle tag="a" className="btn btn-outline-success" caret>
                        {this.props.text.name+" "}
                    </DropdownToggle>
                    <DropdownMenu dir='rtl'>
                        {items}
                    </DropdownMenu>
                </UncontrolledDropdown>
            </ButtonDropdown>
        );
    }
}