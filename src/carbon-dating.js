const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  if (typeof sampleActivity !== 'string' || +sampleActivity > 15 
  || +sampleActivity <= 0 || isNaN(parseFloat(sampleActivity)) || !sampleActivity) {
    return false;
  }
  sampleActivity = parseFloat(sampleActivity);
  return Math.ceil((Math.log2(MODERN_ACTIVITY) - Math.log2(sampleActivity)) * HALF_LIFE_PERIOD * 1.000214);
};
