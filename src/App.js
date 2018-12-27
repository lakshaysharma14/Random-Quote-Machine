import React, { Component } from 'react'; 
import {random} from 'lodash';
import QuoteMachine from './components/QuoteMachine.js';
import 'typeface-roboto';
import Grid from '@material-ui/core';
import {withStyles} from '@material-ui/core';


const styles =
{
  container: 
  {
    alignItems:'center',
    diplay:'flex',
    height:'100vh'
  }
}

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      quote:[],
      selectedquoteIndex:null
    }
    this.selectQuoteIndex=this.selectQuoteIndex.bind(this);
  }
//----------------------------------------------------------------------------------------------
  componentDidMount()
  {
      fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
      .then(data => data.json())
      .then(quotedata =>this.setState({quote:quotedata} ,this.assignNewQuoteIndex))
  }
//--------------------------------------------------------------------------------------
  selectQuoteIndex()
  {
    if(!this.state.quote.length)
    {
      console.log("Quote Length Empty");
      return;
    }
    return random(0 ,this.state.quote.length-1);
  }

  assignNewQuoteIndex = () =>
  {
    this.setState({ selectedquoteIndex:this.selectQuoteIndex() });
  }

  get SelectedQuote()
  {
      if(!this.state.quote.length || !Number.isInteger(this.state.selectedquoteIndex) )
      {
        console.log("Quote Length Undefined or Index Returned not an Integer");
        return;
      }
      return this.state.quote[this.state.selectedquoteIndex];
  }
//-----------------------------------------------------------------------------------------
  render() 
  {
    console.log(this.state.selectedquoteIndex);
    return (
      <Grid className ={this.props.classes.container} id="quote-box" justify="center" container>
          <Grid xs={11} ls={8} item>
          <h1>Random Quote Machine</h1>
          <br />
          {
            this.SelectedQuote ?<QuoteMachine SelectedQuote={this.SelectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
            :"Null"
          }
            </Grid>
          
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
