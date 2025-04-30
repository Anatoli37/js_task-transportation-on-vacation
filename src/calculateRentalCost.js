/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let prise = days * 40;

  if (days >= 7) {
    prise -= 50;
  } else if (days >= 3) {
    prise -= 20;
  }

  return prise;
}

module.exports = calculateRentalCost;
