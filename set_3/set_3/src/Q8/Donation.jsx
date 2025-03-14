/*

Given an array of objects representing people who donated money to the NGO. Each object
consists of: id, name, amount. Build a React component that takes the data as props and shows
the total donation collected on the DOM. Output should be in the
format: Total Donation Collected: _amount_

Data:
const DonationData = [
 {
id: 1,
 name: 'Nitin',
 Donation: 7800,
 },
 {
 id: 2,
 name: 'Mehak',
 Donation: 9500,
 },
 {
 id: 3,
 name: 'Mehul',
 Donation: 65000,
 },
 {
 id: 4,
 name: 'Nina',
 Donation: 560,
 },
]
*/

function Donation({ DonationData }) {
  const totalDonation=DonationData.reduce((sum,donation) => (sum+donation.Donation),0);
  return <> <h2>Total Donation Collected: {totalDonation} </h2></>;
}
export default Donation;
