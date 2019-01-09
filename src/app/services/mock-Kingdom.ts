import {Kingdom} from '../_models/kingdom.model';

export const kingdomMock: Kingdom = {
        'id': 213,
        'name': 'My Kingdom',
        'user_id': 22,
        'buildings': [
          {
            'id': 123,
            'type': 'townhall',
            'level': 1,
            'hp': 100,
            'started_at': 1231232312,
            'finished_at': 7652146122
          }
        ],
        'resources': [
          {
            'type': 'food',
            'amount': 223,
            'generation': 0
          }
        ],
        'troops': [
          {
            'id': 123,
            'level': 1,
            'hp': 100,
            'attack': 50,
            'defence': 20,
            'started_at': 1231232312,
            'finished_at': 7652146122
          }
        ],
        'location': {
          'x': 12,
          'y': 24
        }
      };
