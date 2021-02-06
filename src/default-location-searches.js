import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-stockholm',
    predictionPlace: {
      address: 'Stockholm, Sweden',
      bounds: new LatLngBounds(
        new LatLng(59.3293, 18.0686),
        new LatLng(60.3293, 17.0686)
      ),
    },
  },
  {
    id: 'default-goteborg',
    predictionPlace: {
      address: 'Göteborg, Sweden',
      bounds: new LatLngBounds(
        new LatLng(57.7089, 11.9746),
        new LatLng(58.7089, 10.9746)
      ),
    },
  },
  {
    id: 'default-malmo',
    predictionPlace: {
      address: 'Malmö, Sweden',
      bounds: new LatLngBounds(
        new LatLng(55.5791, 13.0109),
        new LatLng(56.5791, 12.0109)
      ),
    },
  },
  {
    id: 'default-uppsala',
    predictionPlace: {
      address: 'Uppsala, Sweden',
      bounds: new LatLngBounds(
        new LatLng(59.8586, 17.6389),
        new LatLng(60.8586, 16.6389)
      ),
    },
  },
];
