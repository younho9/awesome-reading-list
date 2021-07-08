import * as NotionTypes from '@notionhq/client/build/src/api-types';
import { utcToZonedTime, format } from 'date-fns-tz';

import { TIME_ZONE as timeZone } from '../constants';

const richText = (
  value: NotionTypes.TitlePropertyValue | NotionTypes.RichTextPropertyValue,
) =>
  value.type === 'title'
    ? value.title.map(({ plain_text }) => plain_text).join('')
    : value.rich_text.map(({ plain_text }) => plain_text).join('');

const number = ({ number }: NotionTypes.NumberPropertyValue) => number;

const select = ({ select }: NotionTypes.SelectPropertyValue) =>
  `\`${select.name}\``;

const multiSelect = ({ multi_select }: NotionTypes.MultiSelectPropertyValue) =>
  multi_select.map(({ name }) => `\`${name}\``).join(', ');

const date = ({ date }: NotionTypes.DatePropertyValue) => date.start;

const formula = ({ formula }: NotionTypes.FormulaPropertyValue) => formula;

const rollup = ({ rollup }: NotionTypes.RollupPropertyValue) => rollup;

const people = ({ people }: NotionTypes.PeoplePropertyValue) => people;

const files = ({ files }: NotionTypes.FilesPropertyValue) => files;

const checkbox = ({ checkbox }: NotionTypes.CheckboxPropertyValue) => checkbox;

const url = ({ url }: NotionTypes.URLPropertyValue) => url;

const email = ({ email }: NotionTypes.EmailPropertyValue) => email;

const phoneNumber = ({ phone_number }: NotionTypes.PhoneNumberPropertyValue) =>
  phone_number;

const time = (
  value:
    | NotionTypes.CreatedTimePropertyValue
    | NotionTypes.LastEditedTimePropertyValue,
) =>
  value.type === 'created_time'
    ? format(
        utcToZonedTime(new Date(value.created_time), timeZone),
        'yyyy-MM-dd HH:mm:ss',
        { timeZone },
      )
    : format(
        utcToZonedTime(new Date(value.last_edited_time), timeZone),
        'yyyy-MM-dd HH:mm:ss',
        { timeZone },
      );

const user = (
  value:
    | NotionTypes.CreatedByPropertyValue
    | NotionTypes.LastEditedByPropertyValue,
) => (value.type === 'created_by' ? value.created_by : value.last_edited_by);

const property = (value: NotionTypes.PropertyValue) => {
  switch (value.type) {
    case 'title':
      return richText(value);
    case 'rich_text':
      return richText(value);
    case 'number':
      return number(value);
    case 'select':
      return select(value);
    case 'multi_select':
      return multiSelect(value);
    case 'date':
      return date(value);
    case 'formula':
      return formula(value);
    case 'rollup':
      return rollup(value);
    case 'people':
      return people(value);
    case 'files':
      return files(value);
    case 'checkbox':
      return checkbox(value);
    case 'url':
      return url(value);
    case 'email':
      return email(value);
    case 'phone_number':
      return phoneNumber(value);
    case 'created_time':
      return time(value);
    case 'created_by':
      return user(value);
    case 'last_edited_time':
      return time(value);
    case 'last_edited_by':
      return user(value);
    default:
      throw new Error(`Unexpected property value`);
  }
};

export default property;
