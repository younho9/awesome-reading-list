# Awesome Reading List [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated reading list synchronizing with the [Notion Database](https://www.notion.so/younho9/c0d7fc0843e7421a88dd848932b5dbfd?v=42efd3bccce24649b7818b65cd5c1e88)

<% if (count) { -%>
![Total](https://img.shields.io/badge/Total-<%= count %>-green.svg)
<% } -%>
<%- -%>
<% if (date) { -%>
![Updated](https://img.shields.io/badge/Updated-<%= date %>-blue.svg)
<% } -%>

<% if (categories && categories.length) { -%>

## Contents

<% categories.forEach(function(category, index) { -%>
<%- `- [${category ? category : 'Uncategorized'} (${categorizedLists[index].length})](#${category ? category : 'Uncategorized'})` %>
<% })-%>
<%- -%>
<% categories.forEach(function(category, index) { -%>

<%- `## ${category ? category : 'Uncategorized'}` %>

<%- `| Link | Created Time | Read | Memo |` %>
<%- `| ---- | ------------ | ---- | ---- |` %>
<% categorizedLists[index].forEach(function(item) { -%>
<%- `| [${item.Title || ''}](${item.URL || ''}) | ${item['Created Time'] || ''} | ${item['Read'] || ''} | ${item.Memo || ''} |` %>
<% })%>
**[⬆ Back to Index](#Contents)**
<% }) -%>
<% } -%>
