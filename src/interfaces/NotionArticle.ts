import { PropertyValueMap } from '@notionhq/client/build/src/api-endpoints';
import * as NotionTypes from '@notionhq/client/build/src/api-types';

export default interface NotionArticle extends PropertyValueMap {
  'Category': NotionTypes.SelectPropertyValue;
  'Title': NotionTypes.TitlePropertyValue;
  'URL': NotionTypes.URLPropertyValue;
  'Created Time': NotionTypes.CreatedTimePropertyValue;
  'Read': NotionTypes.CheckboxPropertyValue;
  'Memo': NotionTypes.RichTextPropertyValue;
}
