# Awesome Reading List [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Creating your own Awesome Reading List sync with [Notion Database](https://younho9.notion.site/af6ccfde2f1e4824a4bea2ac1a053eff)!

## Demo

- [younho9/awesome-reading-list.md](https://gist.github.com/younho9/287da0b33fc7d5b5848944f90f3600b7)

## Usage

1. [Use this template](https://github.com/younho9/awesome-reading-list/generate).

2. Duplicate [this Notion database template](https://younho9.notion.site/af6ccfde2f1e4824a4bea2ac1a053eff?v=d613bedd8d44463d8fcde32a6f88114f).

3. [Create a Notion API integration & Get Token](https://developers.notion.com/docs#step-1-create-an-integration).

![create integration](https://files.readme.io/2ec137d-093ad49-create-integration.gif)

4. [Share a database with your integration & Get Database ID](https://developers.notion.com/docs#step-2-share-a-database-with-your-integration).

![share-database-with-integration](https://files.readme.io/0a267dd-share-database-with-integration.gif)

```
https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...
                                  |--------- Database ID --------|
```

5. [Create Gist file](https://gist.github.com/) named `awesome-reading-list.md` & Get Gist ID.

```
https://gist.github.com/username/287da0b33fc7d5b5848944f90f3600b7
                                 |----------- Gist ID ----------|
```

6. Generate a new [Personal access token](https://github.com/settings/tokens/). Only the gist scope is needed.

7. Go to repository > settings > secrets, add secrets `NOTION_API_TOKEN` , `NOTION_DATABASE_ID` , `GIST_TOKEN` , `GIST_ID`

![add secrets](https://user-images.githubusercontent.com/48426991/141656216-a71788b0-cf4a-4c48-bf77-e02f19b1e7c4.png)

8. Your awesome reading list will be updated [at 00:00 AM (UTC) on everyday](./.github/workflows/narkdown.yml#L5). Or you can trigger action manually.

9. Add your reading list to Notion database. You can use extensions like [Notion Web Clipper](https://chrome.google.com/webstore/detail/notion-web-clipper/knheggckgoiihginacbkhaalnibhilkk) or [Save to Notion](https://chrome.google.com/webstore/detail/save-to-notion/ldmmifpegigmeammaeckplhnjbbpccmm).

## Related

- [@narkdown/query-in-action](https://github.com/narkdown/query-in-action)
- [@narkdown/render-with-cjs](https://github.com/narkdown/query-in-action)
- [actions/github-script](https://github.com/actions/github-script)
- [exuanbo/actions-deploy-gist](https://github.com/exuanbo/actions-deploy-gist)

## License

[MIT](LICENSE)
