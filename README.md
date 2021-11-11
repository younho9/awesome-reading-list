# Awesome Reading List [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated reading list synchronizing with the [Notion Database](https://www.notion.so/younho9/c0d7fc0843e7421a88dd848932b5dbfd?v=42efd3bccce24649b7818b65cd5c1e88)

![Total](https://img.shields.io/badge/Total-75-green.svg)
![Updated](https://img.shields.io/badge/Updated-2021--11--12-blue.svg)


## Contents

- [Typescript (22)](#Typescript)
- [React (2)](#React)
- [Guide (1)](#Guide)
- [JavaScript (10)](#JavaScript)
- [NodeJS (1)](#NodeJS)
- [Component (1)](#Component)
- [npm (3)](#npm)
- [monorepo (1)](#monorepo)
- [Babel (2)](#Babel)
- [yarn (3)](#yarn)
- [git (5)](#git)
- [Blog (4)](#Blog)
- [NextJS (2)](#NextJS)
- [Vue (3)](#Vue)
- [GitHub (3)](#GitHub)
- [GitLab (1)](#GitLab)
- [GraphQL (1)](#GraphQL)
- [CSS (1)](#CSS)
- [a18y (1)](#a18y)
- [VSCode (1)](#VSCode)
- [browserlist (1)](#browserlist)
- [Inversify (1)](#Inversify)
- [Nuxt (2)](#Nuxt)
- [utility (1)](#utility)
- [PWA (1)](#PWA)
- [Mac (1)](#Mac)

## Typescript

| Link                                                                                                                                                                                                                                                                   | Created Time                | Read               | Memo                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Exploring set, get and Object.defineProperty in TypeScript - Ultimate Courses™](https://ultimatecourses.com/blog/typescript-setters-getter)                                                                                                                           | 2021. 10. 26. 오전 12:00:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [TypeScript: Transforming optional properties to required properties that may be undefined \| by Kevin Ring \| Terria \| Medium](https://medium.com/terria/typescript-transforming-optional-properties-to-required-properties-that-may-be-undefined-7482cb4e1585)      | 2021. 10. 19. 오후 3:07:00  | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Opaque Types in TypeScript \| beraliv](https://blog.beraliv.dev/2021-05-07-opaque-type-in-typescript/#choose-the-solution)                                                                                                                                            | 2021. 10. 19. 오후 2:53:00  | :white_check_mark: | unique symbol을 사용하는게 최선이다.                                                                                                                                                                                                                                                                          |
| [Tidy TypeScript: Avoid traditional OOP patterns](https://fettblog.eu/tidy-typescript-avoid-traditional-oop/)                                                                                                                                                          | 2021. 10. 7. 오전 10:42:00  | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Building type-safe dictionaries in Typescript \| by Dan Rumney \| Level Up Coding](https://levelup.gitconnected.com/building-type-safe-dictionaries-in-typescript-a072d750cbdf)                                                                                       | 2021. 9. 25. 오전 9:13:00   | :x:                |                                                                                                                                                                                                                                                                                                               |
| [An Introduction to Nominal TypeScript \| by Andy Patterson \| Better Programming](https://betterprogramming.pub/nominal-typescript-eee36e9432d2#:~:text=A%20brand%2C%20or%20tag%2C%20is,%2C%20'pet'%3A%20void%20.)                                                    | 2021. 9. 24. 오전 12:52:00  | :x:                |                                                                                                                                                                                                                                                                                                               |
| [TypeScript: Union to intersection type](https://fettblog.eu/typescript-union-to-intersection/)                                                                                                                                                                        | 2021. 9. 18. 오전 6:35:00   | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Is babel still relevant for TypeScript projects ? - DEV Community](https://dev.to/mbeaudru/is-babel-still-relevant-for-typescript-projects-36a7)                                                                                                                      | 2021. 9. 11. 오후 12:28:00  | :x:                |                                                                                                                                                                                                                                                                                                               |
| [TypeScript: Improving Object.keys](https://fettblog.eu/typescript-better-object-keys/)                                                                                                                                                                                | 2021. 9. 7. 오전 1:40:00    | :x:                |                                                                                                                                                                                                                                                                                                               |
| [TypeScript: narrowing types via type guards and assertion functions](https://2ality.com/2020/06/type-guards-assertion-functions-typescript.html)                                                                                                                      | 2021. 8. 30. 오전 10:12:00  | :white_check_mark: | assert로 타입 좁히는 것이 가능하구나                                                                                                                                                                                                                                                                          |
| [7 Utility Types that Every TypeScript Developer Should Know \| by Juno Ng \| Aug, 2021 \| Medium](https://medium.com/@juno_ng/7-utility-types-that-every-typescript-developer-should-know-788fe73421f1)                                                               | 2021. 8. 29. 오전 3:54:00   | :white_check_mark: | `ReturnType<Type>` 한번 써봐야겠다.                                                                                                                                                                                                                                                                           |
| [typescript - Generic type extending union is not narrowed by type guard - Stack Overflow](https://stackoverflow.com/questions/60475431/generic-type-extending-union-is-not-narrowed-by-type-guard)                                                                    | 2021. 8. 26. 오전 10:18:00  | :white_check_mark: | 일반 변수에는 control flow type narrowing이 적용되지만 타입 변수에는 적용되지 않는다.                                                                                                                                                                                                                         |
| [TypeScript Advanced Types — Nullable Types and Type Aliases \| by John Au-Yeung \| Level Up Coding](https://levelup.gitconnected.com/typescript-advanced-types-nullable-types-and-type-aliases-847f03b08fae)                                                          | 2021. 8. 26. 오전 5:40:00   | :white_check_mark: | Nullable과 optional property에 대한 혼란이 있을 수 있다.                                                                                                                                                                                                                                                      |
| [TypeScript: Improving Object.keys](https://fettblog.eu/typescript-better-object-keys/)                                                                                                                                                                                | 2021. 8. 10. 오후 12:02:00  | :white_check_mark: | `interface ObjectConstructor` 를 생성해서 Declaration Merging을 활용하자                                                                                                                                                                                                                                      |
| [TypeScript enum을 사용하지 않는 게 좋은 이유를 Tree-shaking 관점에서 소개합니다. - LINE ENGINEERING](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/)                                                                                          | 2021. 8. 9. 오전 12:01:00   | :white_check_mark: | Union Types > const enum > enum                                                                                                                                                                                                                                                                               |
| [TypeScript: Documentation - Using Babel with TypeScript](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)                                                                                                                                     | 2021. 8. 8. 오후 11:36:00   | :white_check_mark: | Babel for transpiling, tsc for types                                                                                                                                                                                                                                                                          |
| [바벨과 타입스크립트의 아름다운 결혼 \| TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20181220)                                                                                                                                            | 2021. 8. 8. 오후 11:21:00   | :white_check_mark: | 더 이상, 두 개의 자바스크립트 컴파일러와 씨름할 필요가 없다. 바벨을 린터, 테스트러너, 빌드시스템, 그리고 보일러플레이트와 통합하여 프로젝트 구성을 간소화하길 바란다. 바벨과 타입스크립트 콤보는 번개처럼 빨리 컴파일 할 수 있으며, 타입 검사를 할 준비가 되었을 때만 타입 검사를 포함한 컴파일을 할 수 있다. |
| [Typescript generic to turn underscore object to camel case - Stack Overflow](https://stackoverflow.com/questions/57807009/typescript-generic-to-turn-underscore-object-to-camel-case?fbclid=IwAR2RYsG-LBbA2lTfRZaxURAsyEoQqA9eCqkRpP1s3G0Uxtxpt8UaFPbkpyk)            | 2021. 8. 7. 오후 12:29:00   | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Handling Safe Destructuring in TypeScript](https://kamranicus.com/typescript-safe-destructuring-patterns/)                                                                                                                                                            | 2021. 7. 24. 오전 10:51:00  | :x:                |                                                                                                                                                                                                                                                                                                               |
| [TypeScript 에서의 공변성과 반공변성 (strictFunctionTypes) \| by Seo Yeon, Lee \| Medium](https://iamssen.medium.com/typescript-%EC%97%90%EC%84%9C%EC%9D%98-%EA%B3%B5%EB%B3%80%EC%84%B1%EA%B3%BC-%EB%B0%98%EA%B3%B5%EB%B3%80%EC%84%B1-strictfunctiontypes-a82400e67f2) | 2021. 7. 16. 오전 9:10:00   | :x:                |                                                                                                                                                                                                                                                                                                               |
| [타입스크립트 정리: 전통적인 OOP 패턴 피하기 \| TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20210107)                                                                                                                                    | 2021. 7. 16. 오전 8:14:00   | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Deep property access in TypeScript - codewithstyle.info](https://codewithstyle.info/Deep-property-access-in-TypeScript/)                                                                                                                                              | 2021. 7. 8. 오후 10:56:00   | :x:                |                                                                                                                                                                                                                                                                                                               |

**[⬆ Back to Index](#Contents)**

## React

| Link                                                                                                                          | Created Time               | Read               | Memo |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------ | ---- |
| [React를 Vue.js보다 선호하는 이유](https://ahnheejong.name/articles/why-i-prefer-react-over-vuejs/)                           | 2021. 10. 24. 오전 7:12:00 | :white_check_mark: |      |
| [A Visual Guide to React Rendering - useCallback \| Alex Sidorenko](https://alexsidorenko.com/blog/react-render-usecallback/) | 2021. 8. 12. 오전 10:59:00 | :x:                |      |

**[⬆ Back to Index](#Contents)**

## Guide

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Command Line Interface Guidelines](https://clig.dev/) | 2021. 10. 7. 오후 12:44:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## JavaScript

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Get Ready For ESM. JavaScript Modules will soon be a… \| by Sindre Sorhus \| 🦄 Sindre Sorhus’ blog](https://blog.sindresorhus.com/get-ready-for-esm-aa53530b3f77) | 2021. 9. 27. 오후 5:00:00 | :x: |  |
| [Use a source map - Firefox Developer Tools \| MDN](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map) | 2021. 9. 4. 오후 6:49:00 | :x: |  |
| [The history of “typeof null”](https://2ality.com/2013/10/typeof-null.html) | 2021. 8. 1. 오후 4:22:00 | :x: |  |
| [JavaScript Promises: then(f,f) vs then(f).catch(f)](https://dmitripavlutin.com/javascript-promises-then-vs-then-catch/) | 2021. 7. 26. 오후 9:29:00 | :x: |  |
| [Notion API: Getting Started with Notion's JavaScript SDK - SitePoint](https://www.sitepoint.com/notion-api-javascript-sdk/) | 2021. 7. 17. 오전 10:10:00 | :x: |  |
| [Async Getters and Setters. Is it Possible? \| by David Barral \| Trabe \| Medium](https://medium.com/trabe/async-getters-and-setters-is-it-possible-c18759b6f7e4) | 2021. 7. 16. 오후 4:16:00 | :x: |  |
| [this \| PoiemaWeb](https://poiemaweb.com/js-this#3-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%98%B8%EC%B6%9C-%ED%8C%A8%ED%84%B4constructor-invocation-pattern) | 2021. 7. 16. 오전 9:35:00 | :x: |  |
| [`export default thing` is different to `export { thing as default }` - JakeArchibald.com](https://jakearchibald.com/2021/export-default-thing-vs-thing-as-default/) | 2021. 7. 13. 오전 8:36:00 | :x: |  |
| [You Can Definitely Use Global Variables To Manage Global State In React - DEV Community](https://dev.to/yezyilomo/you-can-definitely-use-global-variables-to-manage-global-state-in-react-17l3) | 2021. 7. 13. 오전 8:24:00 | :x: |  |
| [JavaScript: What is the meaning of this?](https://web.dev/javascript-this/) | 2021. 7. 9. 오전 8:03:00 | :white_check_mark: |  |

**[⬆ Back to Index](#Contents)**

## NodeJS

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Building a Node.js CLI with TypeScript, packaged and distributed via Homebrew \| by Sniptt Official \| Geek Culture \| Medium](https://medium.com/geekculture/building-a-node-js-cli-with-typescript-packaged-and-distributed-via-homebrew-15ba2fadcb81) | 2021. 9. 26. 오전 9:51:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## Component

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Pedro Duarte — Variant-driven Components](https://ped.ro/blog/variant-driven-components) | 2021. 9. 14. 오전 10:50:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## npm

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Implicit transitive peer dependencies - DEV Community](https://dev.to/arcanis/implicit-transitive-peer-dependencies-ed0) | 2021. 9. 13. 오후 5:08:00 | :white_check_mark: | 종속성의 `peerDependencies`를 `peerDependencies` 또는 `dependencies` 로 명시하자. 암시적으로 종속성의 `peerDependencies`를 상속받을 수 없다. |
| [Self-Documented Makefile](https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html) | 2021. 8. 10. 오후 10:15:00 | :x: |  |
| [Why I Prefer Makefiles Over package.json Scripts for Node.js Projects](https://spin.atomicobject.com/2021/03/22/makefiles-vs-package-json-scripts/) | 2021. 8. 10. 오후 10:00:00 | :white_check_mark: |  |

**[⬆ Back to Index](#Contents)**

## monorepo

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Rush로 프론트엔드 모노레포 도입기. 이 글에서는 밀당 영어 프론트엔드에서 커다란 코드 덩어리로 되어 있던… \| by Jeong Seong Dae \| 밀당 팀블로그 \| Aug, 2021 \| Medium](https://medium.com/mildang/rush%EB%A1%9C-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-%EB%8F%84%EC%9E%85%EA%B8%B0-5da0c5bc9b30) | 2021. 9. 5. 오후 7:26:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## Babel

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [트리 쉐이킹으로 자바스크립트 페이로드 줄이기 \| TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20180716) | 2021. 9. 4. 오후 9:08:00 | :x: |  |
| [Transpile to ES modules with Babel](https://krasimirtsonev.com/blog/article/transpile-to-esm-with-babel) | 2021. 9. 4. 오후 7:10:00 | :white_check_mark: | `{ "loose": true, "modules": false }` |

**[⬆ Back to Index](#Contents)**

## yarn

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Building a Monorepo with Yarn 2 \| Heroku](https://blog.heroku.com/building-a-monorepo-with-yarn-2) | 2021. 9. 4. 오후 7:13:00 | :x: |  |
| [프로토콜 \| Yarn - 패키지 관리자](https://yarnpkg.com/features/protocols#why-is-the-link-protocol-recommended-over-aliases-for-path-mapping) | 2021. 7. 23. 오후 9:11:00 | :x: |  |
| [npm 과 yarn classic, yarn 2.0 중 어떤 것을 사용할 것인가? \| by Seo Yeon, Lee \| Jun, 2021 \| Medium](https://iamssen.medium.com/npm-%EA%B3%BC-yarn-classic-yarn-2-0-%EC%A4%91-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0-%EA%B2%83%EC%9D%B8%EA%B0%80-879ab44a3373) | 2021. 7. 3. 오후 10:56:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## git

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [How to Setup Monorepos with Git for JavaScript and TypeScript \| by Hieu Nguyen (Jack) \| Aug, 2021 \| Medium](https://hieunc.medium.com/how-to-setup-monorepos-with-git-for-javascript-and-typescript-d42f1294c0d2) | 2021. 9. 4. 오후 12:01:00 | :x: |  |
| [git은 폴더경로가 변경된 것을 어떻게 알 수 있을까? - Kwoncharles Blog](https://kwoncheol.me/posts/git-rename-inference) | 2021. 8. 31. 오전 12:26:00 | :white_check_mark: | 50% 이상 유사시 `edit-renamed` |
| [Git 과거의 특정 커밋 수정하기 - 뒤태지존의 끄적거림](https://homoefficio.github.io/2017/04/16/Git-%EA%B3%BC%EA%B1%B0%EC%9D%98-%ED%8A%B9%EC%A0%95-%EC%BB%A4%EB%B0%8B-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0/) | 2021. 7. 16. 오전 9:33:00 | :x: |  |
| [[Git]Tag 추가, 변경 및 삭제하기](http://minsone.github.io/git/git-addtion-and-modified-delete-tag) | 2021. 7. 15. 오전 10:43:00 | :x: |  |
| [Conditional Git configuration - Jiayu's Blog](https://blog.jiayu.co/2019/02/conditional-git-configuration/) | 2021. 7. 8. 오전 9:36:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## Blog

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Blog Posts ・ Andrew Branch](https://blog.andrewbran.ch/) | 2021. 9. 4. 오후 12:01:00 | :x: |  |
| [Lee Robinson – Developer, writer, creator.](https://leerob.io/) | 2021. 8. 25. 오전 8:31:00 | :white_check_mark: |  |
| [Max Böck](https://mxb.dev/) | 2021. 8. 21. 오전 10:29:00 | :white_check_mark: |  |
| [Jonathan Briehl](https://jonathanbriehl.com/) | 2021. 8. 21. 오전 10:26:00 | :white_check_mark: |  |

**[⬆ Back to Index](#Contents)**

## NextJS

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [How I Built my Blog using MDX, Next.js, and React](https://www.joshwcomeau.com/blog/how-i-built-my-blog/) | 2021. 9. 3. 오전 8:34:00 | :x: |  |
| [Migrating this Blog to Next.js from Gatsby \| Eyas's Blog](https://blog.eyas.sh/2021/08/gatsby-to-next-js) | 2021. 8. 25. 오전 8:29:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## Vue

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Vue.js Developers - Video Training Courses](https://vuejsdevelopers.com/) | 2021. 8. 31. 오후 12:42:00 | :x: |  |
| [25 Vue Tips You Need to Know - DEV Community](https://dev.to/michaelthiessen/25-vue-tips-you-need-to-know-2h70) | 2021. 7. 24. 오후 5:50:00 | :x: |  |
| [Vue.js + TypeScript 앱에서 IoC 컨테이너 사용하기 \| Aliencube](https://blog.aliencube.org/ko/2017/03/21/using-ioc-container-in-vuejs-typescript-app/) | 2021. 7. 19. 오후 6:33:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## GitHub

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Incremental PRs: a new GitHub workflow for the Gatsby Cloud team \| Gatsby](https://www.gatsbyjs.com/blog/2020-01-08-git-workflows/) | 2021. 8. 14. 오전 9:13:00 | :x: |  |
| [GitHub OCTO \| Visualizing a codebase](https://octo.github.com/projects/repo-visualization) | 2021. 8. 6. 오후 6:53:00 | :white_check_mark: | Visualizing a codebase |
| [[GitHub] fork repository 최신 버전으로 유지하기](https://jybaek.tistory.com/775) | 2021. 7. 8. 오전 9:43:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## GitLab

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [npm packages in the Package Registry \| GitLab](https://docs.gitlab.com/ee/user/packages/npm_registry/#project-level-npm-endpoint) | 2021. 8. 7. 오후 4:46:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## GraphQL

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [How to GraphQL - The Fullstack Tutorial for GraphQL](https://www.howtographql.com/) | 2021. 8. 7. 오후 3:30:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## CSS

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Typewriter Animation That Handles Anything You Throw at It \| CSS-Tricks](https://css-tricks.com/typewriter-animation-that-handles-anything-you-throw-at-it/) | 2021. 7. 28. 오전 9:31:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## a18y

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Creating an accessible autocomplete experience – React Spectrum Blog](https://react-spectrum.adobe.com/blog/building-a-combobox.html) | 2021. 7. 28. 오전 9:30:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## VSCode

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Easier browser debugging with Developer Tools integration in Visual Studio Code - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2021/07/16/easier-debugging-developer-tools-in-visual-studio-code/) | 2021. 7. 24. 오후 5:48:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## browserlist

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Browserslist is a Good Idea \| CSS-Tricks](https://css-tricks.com/browserlist-good-idea/) | 2021. 7. 23. 오후 9:19:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## Inversify

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Dependency injection 과 inversify, 그리고 적용해보기](https://slides.com/woongjae/inversify) | 2021. 7. 19. 오후 6:34:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## Nuxt

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Going Full Static - NuxtJS](https://nuxtjs.org/blog/going-full-static#current-issues) | 2021. 7. 12. 오후 12:01:00 | :white_check_mark: |  |
| [Demystify Nuxtʼs Target, Mode, and Ssr Properties \| Kentico Kontent.](https://kontent.ai/blog/demystify-nuxt-target-mode-and-ssr-properties) | 2021. 7. 12. 오전 11:57:00 | :white_check_mark: |  |

**[⬆ Back to Index](#Contents)**

## utility

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [About splash-screens - Appscope](https://appsco.pe/developer/splash-screens) | 2021. 7. 9. 오후 2:35:00 | :white_check_mark: |  |

**[⬆ Back to Index](#Contents)**

## PWA

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Progressive Web App Splash Screens \| by Dave Hudson \| Medium](https://medium.com/@applification/progressive-web-app-splash-screens-80340b45d210) | 2021. 7. 8. 오후 5:37:00 | :x: |  |

**[⬆ Back to Index](#Contents)**

## Mac

| Link | Created Time | Read | Memo |
| ---- | ------------ | ---- | ---- |
| [Mac의 클립보드 명령어 - pbcopy & pbpaste](https://jojoldu.tistory.com/466) | 2021. 7. 8. 오후 12:51:00 | :x: |  |

**[⬆ Back to Index](#Contents)**
