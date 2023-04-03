@addWishlist
Feature: Add Items on the Wishlist

Scenario:
Given The user logins into the app
And The user goes to the page shopping
When The user puts the items "43,40,42" into the wishlist
Then The size of the array "43,40,42"  must be equals to the message of wishlist span

