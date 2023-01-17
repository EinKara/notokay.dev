

import React, { Component } from "react";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// CSS
import './css/site-extensions.css'

// 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

// Checkout Stuff
import CheckoutForm from './forms/checkoutForm'

import HeaderBox from "./elements/HeaderBox";

const stripe = loadStripe("pk_test_51MNFbeAflGfRDIduvYrPxDswSctYoyAyJzX43Miqg5tw1i3cLqey8u1UlLNlT7uKPeFc9IZPXMOerjw1oD4vIomo00gQboUOIj");

export default class Donate extends Component {
    render() {
        
        const options = {
            // passing the client secret obtained from the server
            clientSecret: "{{CLIENT_SECRET}}",
            // Fully customizable with appearance API.
            appearance: {/*...*/},
        };
        return (
            <div className="Page">
                <HeaderBox title="Donate" subtitle="Send me money" />
                
                <div className="Body">
                    
                </div>
            </div>
        )
    }
}