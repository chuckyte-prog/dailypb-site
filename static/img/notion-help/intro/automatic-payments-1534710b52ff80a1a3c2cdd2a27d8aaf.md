# Automatic Payments

![image.png](Automatic%20Payments/image.png)

When using Automatic Payments with Stripe for your Event, players must pay through Stripe's secure payment platform to sign up. 

The platform accepts all credit cards and supports various payment methods, including Link, Apple Pay, Google Pay, and more. 

# Payments Required to Sign Up

With Automatic Payments and Tracking set up, players will need to have successfully completed the payment transaction in order for them to be signed up to the Session. This means no more chasing down players for payment. 

Once a payment is made, the word “Paid” is displayed next to the players name in the Attendees Popup.

# Automatic Refunds

## Before the Refund Deadline

If a player cancels their attendance to a Session via DailyPB before the Refund Deadline the system will automatically issue them a refund. The refund will automatically be credited to the same method they used to pay for the session. It can take up to 5-10 days for the refund to appear on their bank statements. 

## After the Refund Deadline

If a player wishes to cancel after the Refund Deadline, the system will not issue the player a refund. However, the player can request a refund from the host. The host can issue a player a refund at any time. 

<aside>
💡

Note that the 24 hour refund policy is stated before each player signs up.

</aside>

## Amount of the Refund

Refunds are credited for the full amount the player paid, minus the Stripe and DailyPB fees.

[More info on Refunds](Refunds%201914710b52ff80bdbabbee18babea2d5.md)

# Cost to Use Automatic Payments

Players cover all Stripe processing fees (2.9% + $0.30) and DailyPB service fees (5% with $.50 minimum), which are added on top of your session price. You always keep 100% of the fee you set. There are no subscriptions or hidden costs for hosts—using DailyPB as a host is completely free.

For example if you, as the host, set the Event Fee to $20 the player will pay $21.94 in order to sign up.  (The following images show the what the player sees before signing up.)

![Sign up screen shows the price plus “fees.” Players can click in info icon to view a breakdown of the pricing.](Automatic%20Payments/image%201.png)

Sign up screen shows the price plus “fees.” Players can click in info icon to view a breakdown of the pricing.

![The pricing breakdown that is available to view through the info icon on every session.](Automatic%20Payments/image%202.png)

The pricing breakdown that is available to view through the info icon on every session.

# Manually Adding Players

Only a Host can add a player without paying for that player at the time of sign up. In this case, after the Host signs up the player, there will a “Paid” button next to the players name which anyone can click on to pay for that player.

If another User (not a Host) adds a player manually to a Session, they will need to pay for that player in order for the Sign up to go through. 

# Marking Players as Paid (Comps & Host Signups)

Even when using Automatic Payments, Hosts have the ability to manually mark players as **Paid**. This is useful in a few common cases:

- **Host Signups**: If you add yourself to your own session, you can mark your spot as paid without needing to go through checkout.
- **Comped Spots**: If you want to give a player a free entry (such as a friend, special guest, volunteer, or a credit from a past session), you can mark them as paid directly in the attendee list.

When you use this option, DailyPB updates the player’s status to “Paid” and removes the payment button. No Stripe transaction is created, no money is collected or transferred, and no additional fees are collected—this is simply a tool for Hosts to keep the roster clean and accurate.

# 5 Minutes Expiration for Checkout Sessions

With Stripe payments, a player’s spot in a session is secured only once the payment is successfully completed. To provide a fair chance for everyone, DailyPB allows each player 5 minutes to finish checkout. If they don’t complete it within this time, they’ll need to sign up again.

When only one spot remains in a session, others will see it marked as full. However, a visible indicator will be present letting others know one spot can possibly open up within 5 minutes.  This ensures the player in checkout has a fair chance to complete their signup, and if they don’t, the spot opens up for the next user. 

<aside>
💡

99% of all users check out in 2 minutes or less. 

</aside>

If there are two users trying to sign up at the same time, the one who confirms their sign up first will be sent to pay. At that time, the second User will see their Signup screen showing they can sign up for the Waitlist (no refresh or re-typing in their info needed). If the first user does not complete their payment within 5 minutes or they back out of the Stripe Checkout Session, DailyPB will check the Waitlist to automatically bump the first user there. 

When two users attempt to sign up for a session simultaneously, the first user to confirm their sign-up will be directed to the payment process. Meanwhile, the second user will automatically see an option to join the waitlist, without needing to refresh the page or re-enter their information.

If the first user fails to complete their payment within 5 minutes or exits the Stripe Checkout session, DailyPB will automatically check the waitlist and bump the next user into the open spot.

# FAQ

***Why did my bank account get a deduction from DailyPB?*** 

This usually happens when you initiate refunds to players on funds that have already been deposited into your bank account. 

If the money you earned from someone signing up to your session was already deposited into your bank account (currently this happens automatically each week) then the refund will be pulled from the same bank account. 

*What are the fees for using Automatic Tracking?*

All fees are paid by the Player. For example, if the Host Fee is $20, then the total fees are $1.93 and $21.93 will be charged to the Player. Players can click on the info button by the pricing before signing up to see the breakdown.

![image.png](Automatic%20Payments/image%203.png)

*How do I pay the DailyPB fees?*

You, the Host, don’t pay any DailyPB fees when using Automatic Payments. The fees are paid by the player signing up. 

*I have Automatic Payments enabled on my Session, but there is someone Attending that hasn’t paid. How is this possible?*

There are few ways in which this is possible. 

1. They came from the Waitlist
If someone was on the Waitlist and then got bumped up to the Session. In this case the Signup would not need to pay to join the Waitlist. When bumped, they will show as an unpaid Attendee. (DailyPB will automatically send them an email and text letting them know they’ve been bumped and will need to pay).
2. If they were added manually by a Host
Any Host can add a Signup without paying for them. This necessary feature allows Hosts to sign up other players on their behalf. 
3. They were added before Automatic Payments were enabled.
If there was a time when Automatic Payments was not enabled on a Session, then someone could sign up without paying first. After a Host enabled Automatic Payments, it will show that the Signup did not yet pay.
4. The Host signed up themselves.
Hosts can sign up themselves without paying, just like they can sign up other without paying. However, the Host can click on “Mark as Paid” on their own name, or anyone else’s.