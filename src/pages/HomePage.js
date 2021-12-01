import React, { Component } from "react";
import CategoryItem from "../components/CategoryItem";
import NetfilxLogo from "../assets/netflix.png"
import AmazonLogo from "../assets/amazon.png"
import GoogleLogo from "../assets/google.png"
import NikeLogo from "../assets/nike.png"
import FacebookLogo from "../assets/facebook.png"
import EbayLogo from "../assets/ebay.png"
import WalmartLogo from "../assets/wal.png"
import MoreLogo from "../assets/more.png"
import CartLogo from "../assets/cart.png"
import ShipLogo from "../assets/shipping.png"
import PayLogo from "../assets/payment.png"
import "../assets/homepage.css"
import { findAllByText } from "@testing-library/dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {/* TODO Search Bar */}
        
        <div className = "companies-first"> 
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {AmazonLogo} title = "Amazon" />
          </div>
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {NetfilxLogo} title = "Netflix"/>
          </div>
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {GoogleLogo} title = "Google"/>
          </div>
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {NikeLogo} title = "Nike"/> 
          </div>
        </div>
        <div className = "companies-second"> 
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {FacebookLogo} title = "Facebook"/>
          </div>
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {EbayLogo} title = "Ebay"/>
          </div>
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {WalmartLogo} title = "Walmart"/>
          </div>
          <div className = "column">
            
            <CategoryItem className = "Card" logoImage = {MoreLogo} title = "More"/>
          </div>

          <div className = "categories"> 
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {CartLogo} title = "Shopping"/>
          </div>
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {PayLogo} title = "Payments"/>
          </div>
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {ShipLogo} title = "Shipping"/>
          </div>
          <div className = "column">
            <CategoryItem className = "Card" logoImage = {MoreLogo} title = "More"/>
          </div>
          </div>
          
        </div>
        
        {/* TODO List of tutorial cards */}
      </div>
    );
  }
}
