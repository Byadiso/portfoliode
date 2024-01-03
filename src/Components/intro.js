import React ,{Component }from 'react';
import {Grid, Cell,} from 'react-mdl';

class intro extends Component {
    render(){
    return (
       
        <Grid>
        <Cell col= {12}>
        <h4>{this.props.name}</h4>   
        <hr style={{borderTop: '3px solid #0F2027', width: '70%'}}/>
            <h6>{this.props.careerTitle}</h6>
        <hr style={{borderTop:'3px solid #0F2027', width: '70%'}}/>
            <p>{this.props.careerIntro}</p>
            <h5> Address</h5>
            <p>{this.props.address}</p>
            <h5> Phone</h5>
            <p>{this.props.tel}</p>
            <h5> Email</h5>
            <p>{this.props.email}</p>

        </Cell>
    </Grid>
        )
    }

}

export default intro
