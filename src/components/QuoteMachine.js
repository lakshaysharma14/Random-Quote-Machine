import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ( {SelectedQuote,assignNewQuoteIndex}) =>(
    <Card>
        
        <CardContent>
        {
            <Typography id="text">
                {SelectedQuote.quote} --> <span id="author">{SelectedQuote.author}</span> 
            </Typography>
        }
        </CardContent>
        
        <CardActions>
            
            <Button id="new-quote" size="medium" onClick={assignNewQuoteIndex}>Get new Quote</Button>
            
            <IconButton  id="tweet-quote"
            target="_blank"
            href={encodeURI(`https://twitter.com/intent/tweet?text=${SelectedQuote.quote}&hashtags=thewebdevcoach`)}>
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        
        </CardActions>    
    
    </Card>  
          
);

export default QuoteMachine;

