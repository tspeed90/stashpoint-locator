import { getStashpoints } from './getStashpoints';
import stashpointData from './stashpointData.json';

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

describe('testing API call'),
  () => {
    it('returns a JSON object of Stashpoints'),
      () => {
        window.fetch = jest
          .fn()
          .mockImplementation(() =>
            Promise.resolve(mockResponse(200, null, stashpointData))
          );

        return getStashpoints(51.5487785, -0.0935).then(data => {
          expect(data).toEqual([
            {
              id: '275c286e2f35',
              created: '2018-03-16T01:04:41.285512Z',
              type: 'other',
              status: 'active',
              name: 'East End Logistics',
              location_name: 'Whitechapel',
              description:
                'Store your luggage in Whitechapel at East End. This logistics and postal shop is located between Whitechapel tube and Stepney Green on Mile End Road. Perfect for a visit to East London or for longer term storage during the summer. If you are a student or you need large box storage, contact CityStasher and we can arrange deals for stores over a week long. Opening Hours 10am - 6pm Every Day',
              host_id: '68985fee46b8',
              rating: 4.2,
              rating_count: 5,
              featured: false,
              latitude: 51.520576,
              longitude: -0.051382,
              address: '116 Mile End Road, London',
              postal_code: 'E1 4UN',
              country: 'GBR',
              photos: [
                'https://s3.eu-west-2.amazonaws.com/stasher/stashpoints_staging/275c286e2f35/0',
                'https://s3.eu-west-2.amazonaws.com/stasher/stashpoints_staging/275c286e2f35/1',
                'https://s3.eu-west-2.amazonaws.com/stasher/stashpoints_staging/275c286e2f35/2',
                'https://s3.eu-west-2.amazonaws.com/stasher/stashpoints_staging/275c286e2f35/3'
              ],
              photos_count: 4,
              capacity: 99,
              opening_hours: [
                {
                  day: 2,
                  open: '10:00:00',
                  close: '18:00:00'
                },
                {
                  day: 4,
                  open: '10:00:00',
                  close: '18:00:00'
                },
                {
                  day: 3,
                  open: '10:00:00',
                  close: '18:00:00'
                },
                {
                  day: 5,
                  open: '10:00:00',
                  close: '18:00:00'
                },
                {
                  day: 6,
                  open: '10:00:00',
                  close: '18:00:00'
                },
                {
                  day: 0,
                  open: '10:00:00',
                  close: '18:00:00'
                },
                {
                  day: 1,
                  open: '10:00:00',
                  close: '18:00:00'
                }
              ],
              opening_hours_exceptions: [
                {
                  type: 'closed',
                  date: '2018-03-30',
                  start_time: '00:00:00',
                  end_time: '00:00:00'
                },
                {
                  type: 'closed',
                  date: '2018-05-28',
                  start_time: '00:00:00',
                  end_time: '00:00:00'
                },
                {
                  type: 'closed',
                  date: '2018-04-02',
                  start_time: '00:00:00',
                  end_time: '00:00:00'
                },
                {
                  type: 'closed',
                  date: '2018-03-31',
                  start_time: '00:00:00',
                  end_time: '00:00:00'
                },
                {
                  type: 'closed',
                  date: '2018-04-01',
                  start_time: '00:00:00',
                  end_time: '00:00:00'
                },
                {
                  type: 'closed',
                  date: '2018-05-07',
                  start_time: '00:00:00',
                  end_time: '00:00:00'
                }
              ],
              storage_forbidden_out_of_hours: false,
              open_twentyfour_seven: false,
              open_late: true,
              pricing_structure: {
                ccy: 'GBP',
                extra_day_cost: 500,
                first_day_cost: 600
              },
              contact: {
                name: 'eastendlogistics eastendlogistics',
                email: null,
                lang: 'en',
                phone_number: '07960 999764'
              },
              views_last_30_days: 13,
              feefo_sku: '11285',
              distance: 4.290208268894612,
              walking_time: 52,
              nearest_city: {
                id: 160,
                name: 'london',
                centre: {
                  latitude: 51.5073509,
                  longitude: -0.1277583
                },
                northeast: {
                  latitude: 51.6723432,
                  longitude: 0.148271
                },
                southwest: {
                  latitude: 51.3849401,
                  longitude: -0.3514683
                }
              }
            }
          ]);
        });
      };
  };
