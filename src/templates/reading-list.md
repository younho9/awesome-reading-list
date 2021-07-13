# Reading List

<% if (count) { -%>
![Total](https://img.shields.io/badge/Total-<%= count %>-green.svg)
<% } -%>
<% if (date) { -%>
![Updated](https://img.shields.io/badge/Updated-<%= date %>-blue.svg)
<% } -%>

| Category | Link | Created Time | Read | Memo |
| -------- | ---- | ------------ | --------- | ---- |
<% readingList.forEach(function(item) { -%>
<%- `| ${item.Category ?? ''} | [${item.Title ?? ''}](${item.URL ?? ''}) | ${item['Created Time'] ?? ''} | ${item['Read'] ?? ''} | ${item.Memo ?? ''} |` %>
<% })%>
