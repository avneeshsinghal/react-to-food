import React, { Component } from 'react';
import {Table} from 'reactstrap';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { orderMenuItem } from '../actions/menuActions';

class ItemTable extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    onCreateItem = (name,quantity,created_till_now) => {
         return ({
             name:name,
                created_till_now:created_till_now,
                quantity:quantity
            })

    }

    onDeleteClick = (_id,name,quantity,created_till_now,e) => {
        this.props.orderMenuItem(_id,this.onCreateItem(name,quantity,created_till_now));
    }


  render() {
    const {items} = this.props.item;
    var i=1;
    return (
        <Container>
        <Table>
        <thead>
           <tr> 
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Created Till Now</th>
              <th>Predicted</th>
              <th>Date</th>
              <th>Time</th><th>Done</th>
           </tr>
        </thead>
        <tbody>
        {items.map((
            {
                name,
                quantity,
                date,
                _id,
                created_till_now,
                predicted
            }) => (
           
           <tr key={_id}>
             <td>{i++}</td>
             <td>{name}</td>
             <td>{quantity}</td>
             <td>{created_till_now}</td>
             <td>{predicted}</td>
             <td>{date.split('T')[0]}</td>
             <td>
                 {date.split('T')[1].split('.')[0]}
             </td>
             <td>
             <TransitionGroup className="item-table">
             <CSSTransition key= {_id} timeout={500} classNames="fade">
                 <Button
                 className="remove-btn"
                 color="danger"
                 size="sm"
                 onClick ={(e) =>
                     this.onDeleteClick(_id,name,quantity,created_till_now,e)}
                 >Done
                 </Button>
             </CSSTransition>
         </TransitionGroup>
             </td>
           </tr>  
        )
        )}
        </tbody>
      </Table>
      </Container>
    );
  }
}
ItemTable.propTypes = {
    getItems: PropTypes.func.isRequired,
    orderMenuItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps,
    { getItems, orderMenuItem })(ItemTable);
