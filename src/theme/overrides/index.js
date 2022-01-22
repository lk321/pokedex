import merge from 'lodash/merge';

import Card from './Card';

export default function Overrides(theme) {
  return merge(
    Card(theme),
  );
}
