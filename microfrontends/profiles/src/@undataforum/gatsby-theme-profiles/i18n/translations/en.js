import defaults from '@undataforum/gatsby-theme-profiles/src/i18n/translations/en';
import merge from 'deepmerge';

// Shadow default localizations.
const en = merge(defaults, {
  'profiles.title': 'Shadowed Profiles',
  'profiles.description':
    'Profiles of United Nations World Data Forum speakers, contributors, programme committee members and organizers.',
});

export default en;
