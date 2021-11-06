# Awesome Reading List [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated reading list synchronizing with the [Notion Database](https://www.notion.so/younho9/c0d7fc0843e7421a88dd848932b5dbfd?v=42efd3bccce24649b7818b65cd5c1e88)

![Total](https://img.shields.io/badge/Total-75-green.svg)
![Updated](https://img.shields.io/badge/Updated-2021--11--06-blue.svg)

## Contents

- [undefined](#undefined)
- [React](#React)
- [Typescript](#Typescript)
- [Guide](#Guide)
- [JavaScript](#JavaScript)
- [NodeJS](#NodeJS)
- [Component](#Component)
- [npm](#npm)
- [monorepo](#monorepo)
- [Babel](#Babel)
- [yarn](#yarn)
- [git](#git)
- [Blog](#Blog)
- [NextJS](#NextJS)
- [Vue](#Vue)
- [GitHub](#GitHub)
- [GitLab](#GitLab)
- [GraphQL](#GraphQL)
- [CSS](#CSS)
- [a18y](#a18y)
- [VSCode](#VSCode)
- [browserlist](#browserlist)
- [Inversify](#Inversify)
- [Nuxt](#Nuxt)
- [utility](#utility)
- [PWA](#PWA)
- [Mac](#Mac)

## undefined

| Link                                                                                                                                         | Created Time        | Read | Memo |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Exploring set, get and Object.defineProperty in TypeScript - Ultimate Courses™](https://ultimatecourses.com/blog/typescript-setters-getter) | 2021-10-26 09:00:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## React

| Link                                                                                                                          | Created Time        | Read               | Memo |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ | ---- |
| [React를 Vue.js보다 선호하는 이유](https://ahnheejong.name/articles/why-i-prefer-react-over-vuejs/)                           | 2021-10-24 16:12:00 | :white_check_mark: |      |
| [A Visual Guide to React Rendering - useCallback \| Alex Sidorenko](https://alexsidorenko.com/blog/react-render-usecallback/) | 2021-08-12 19:59:00 | :x:                |      |

**[⬆ Back to Index](#Contents)**

## Typescript

| Link                                                                                                                                                                                                                                                                   | Created Time        | Read               | Memo                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TypeScript: Transforming optional properties to required properties that may be undefined \| by Kevin Ring \| Terria \| Medium](https://medium.com/terria/typescript-transforming-optional-properties-to-required-properties-that-may-be-undefined-7482cb4e1585)      | 2021-10-20 00:07:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Opaque Types in TypeScript \| beraliv](https://blog.beraliv.dev/2021-05-07-opaque-type-in-typescript/#choose-the-solution)                                                                                                                                            | 2021-10-19 23:53:00 | :white_check_mark: | unique symbol을 사용하는게 최선이다.                                                                                                                                                                                                                                                                          |
| [Tidy TypeScript: Avoid traditional OOP patterns](https://fettblog.eu/tidy-typescript-avoid-traditional-oop/)                                                                                                                                                          | 2021-10-07 19:42:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Building type-safe dictionaries in Typescript \| by Dan Rumney \| Level Up Coding](https://levelup.gitconnected.com/building-type-safe-dictionaries-in-typescript-a072d750cbdf)                                                                                       | 2021-09-25 18:13:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [An Introduction to Nominal TypeScript \| by Andy Patterson \| Better Programming](https://betterprogramming.pub/nominal-typescript-eee36e9432d2#:~:text=A%20brand%2C%20or%20tag%2C%20is,%2C%20'pet'%3A%20void%20.)                                                    | 2021-09-24 09:52:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [TypeScript: Union to intersection type](https://fettblog.eu/typescript-union-to-intersection/)                                                                                                                                                                        | 2021-09-18 15:35:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Is babel still relevant for TypeScript projects ? - DEV Community](https://dev.to/mbeaudru/is-babel-still-relevant-for-typescript-projects-36a7)                                                                                                                      | 2021-09-11 21:28:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [TypeScript: Improving Object.keys](https://fettblog.eu/typescript-better-object-keys/)                                                                                                                                                                                | 2021-09-07 10:40:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [TypeScript: narrowing types via type guards and assertion functions](https://2ality.com/2020/06/type-guards-assertion-functions-typescript.html)                                                                                                                      | 2021-08-30 19:12:00 | :white_check_mark: | assert로 타입 좁히는 것이 가능하구나                                                                                                                                                                                                                                                                          |
| [7 Utility Types that Every TypeScript Developer Should Know \| by Juno Ng \| Aug, 2021 \| Medium](https://medium.com/@juno_ng/7-utility-types-that-every-typescript-developer-should-know-788fe73421f1)                                                               | 2021-08-29 12:54:00 | :white_check_mark: | `ReturnType<Type>` 한번 써봐야겠다.                                                                                                                                                                                                                                                                           |
| [typescript - Generic type extending union is not narrowed by type guard - Stack Overflow](https://stackoverflow.com/questions/60475431/generic-type-extending-union-is-not-narrowed-by-type-guard)                                                                    | 2021-08-26 19:18:00 | :white_check_mark: | 일반 변수에는 control flow type narrowing이 적용되지만 타입 변수에는 적용되지 않는다.                                                                                                                                                                                                                         |
| [TypeScript Advanced Types — Nullable Types and Type Aliases \| by John Au-Yeung \| Level Up Coding](https://levelup.gitconnected.com/typescript-advanced-types-nullable-types-and-type-aliases-847f03b08fae)                                                          | 2021-08-26 14:40:00 | :white_check_mark: | Nullable과 optional property에 대한 혼란이 있을 수 있다.                                                                                                                                                                                                                                                      |
| [TypeScript: Improving Object.keys](https://fettblog.eu/typescript-better-object-keys/)                                                                                                                                                                                | 2021-08-10 21:02:00 | :white_check_mark: | `interface ObjectConstructor` 를 생성해서 Declaration Merging을 활용하자                                                                                                                                                                                                                                      |
| [TypeScript enum을 사용하지 않는 게 좋은 이유를 Tree-shaking 관점에서 소개합니다. - LINE ENGINEERING](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/)                                                                                          | 2021-08-09 09:01:00 | :white_check_mark: | Union Types > const enum > enum                                                                                                                                                                                                                                                                               |
| [TypeScript: Documentation - Using Babel with TypeScript](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)                                                                                                                                     | 2021-08-09 08:36:00 | :white_check_mark: | Babel for transpiling, tsc for types                                                                                                                                                                                                                                                                          |
| [바벨과 타입스크립트의 아름다운 결혼 \| TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20181220)                                                                                                                                            | 2021-08-09 08:21:00 | :white_check_mark: | 더 이상, 두 개의 자바스크립트 컴파일러와 씨름할 필요가 없다. 바벨을 린터, 테스트러너, 빌드시스템, 그리고 보일러플레이트와 통합하여 프로젝트 구성을 간소화하길 바란다. 바벨과 타입스크립트 콤보는 번개처럼 빨리 컴파일 할 수 있으며, 타입 검사를 할 준비가 되었을 때만 타입 검사를 포함한 컴파일을 할 수 있다. |
| [Typescript generic to turn underscore object to camel case - Stack Overflow](https://stackoverflow.com/questions/57807009/typescript-generic-to-turn-underscore-object-to-camel-case?fbclid=IwAR2RYsG-LBbA2lTfRZaxURAsyEoQqA9eCqkRpP1s3G0Uxtxpt8UaFPbkpyk)            | 2021-08-07 21:29:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Handling Safe Destructuring in TypeScript](https://kamranicus.com/typescript-safe-destructuring-patterns/)                                                                                                                                                            | 2021-07-24 19:51:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [TypeScript 에서의 공변성과 반공변성 (strictFunctionTypes) \| by Seo Yeon, Lee \| Medium](https://iamssen.medium.com/typescript-%EC%97%90%EC%84%9C%EC%9D%98-%EA%B3%B5%EB%B3%80%EC%84%B1%EA%B3%BC-%EB%B0%98%EA%B3%B5%EB%B3%80%EC%84%B1-strictfunctiontypes-a82400e67f2) | 2021-07-16 18:10:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [타입스크립트 정리: 전통적인 OOP 패턴 피하기 \| TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20210107)                                                                                                                                    | 2021-07-16 17:14:00 | :x:                |                                                                                                                                                                                                                                                                                                               |
| [Deep property access in TypeScript - codewithstyle.info](https://codewithstyle.info/Deep-property-access-in-TypeScript/)                                                                                                                                              | 2021-07-09 07:56:00 | :x:                |                                                                                                                                                                                                                                                                                                               |

**[⬆ Back to Index](#Contents)**

## Guide

| Link                                                   | Created Time        | Read | Memo |
| ------------------------------------------------------ | ------------------- | ---- | ---- |
| [Command Line Interface Guidelines](https://clig.dev/) | 2021-10-07 12:44:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## JavaScript

| Link                                                                                                                                                                                             | Created Time        | Read               | Memo |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ------------------ | ---- |
| [Get Ready For ESM. JavaScript Modules will soon be a… \| by Sindre Sorhus \| 🦄 Sindre Sorhus’ blog](https://blog.sindresorhus.com/get-ready-for-esm-aa53530b3f77)                              | 2021-09-27 17:00:00 | :x:                |      |
| [Use a source map - Firefox Developer Tools \| MDN](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)                                                             | 2021-09-04 18:49:00 | :x:                |      |
| [The history of “typeof null”](https://2ality.com/2013/10/typeof-null.html)                                                                                                                      | 2021-08-01 16:22:00 | :x:                |      |
| [JavaScript Promises: then(f,f) vs then(f).catch(f)](https://dmitripavlutin.com/javascript-promises-then-vs-then-catch/)                                                                         | 2021-07-26 21:29:00 | :x:                |      |
| [Notion API: Getting Started with Notion's JavaScript SDK - SitePoint](https://www.sitepoint.com/notion-api-javascript-sdk/)                                                                     | 2021-07-17 10:10:00 | :x:                |      |
| [Async Getters and Setters. Is it Possible? \| by David Barral \| Trabe \| Medium](https://medium.com/trabe/async-getters-and-setters-is-it-possible-c18759b6f7e4)                               | 2021-07-16 16:16:00 | :x:                |      |
| [this \| PoiemaWeb](https://poiemaweb.com/js-this#3-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%98%B8%EC%B6%9C-%ED%8C%A8%ED%84%B4constructor-invocation-pattern)                                             | 2021-07-16 09:35:00 | :x:                |      |
| [`export default thing` is different to `export { thing as default }` - JakeArchibald.com](https://jakearchibald.com/2021/export-default-thing-vs-thing-as-default/)                             | 2021-07-13 08:36:00 | :x:                |      |
| [You Can Definitely Use Global Variables To Manage Global State In React - DEV Community](https://dev.to/yezyilomo/you-can-definitely-use-global-variables-to-manage-global-state-in-react-17l3) | 2021-07-13 08:24:00 | :x:                |      |
| [JavaScript: What is the meaning of this?](https://web.dev/javascript-this/)                                                                                                                     | 2021-07-09 08:03:00 | :white_check_mark: |      |

**[⬆ Back to Index](#Contents)**

## NodeJS

| Link                                                                                                                                                                                                                                                      | Created Time        | Read | Memo |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Building a Node.js CLI with TypeScript, packaged and distributed via Homebrew \| by Sniptt Official \| Geek Culture \| Medium](https://medium.com/geekculture/building-a-node-js-cli-with-typescript-packaged-and-distributed-via-homebrew-15ba2fadcb81) | 2021-09-26 09:51:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## Component

| Link                                                                                      | Created Time        | Read | Memo |
| ----------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Pedro Duarte — Variant-driven Components](https://ped.ro/blog/variant-driven-components) | 2021-09-14 10:50:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## npm

| Link                                                                                                                                                 | Created Time        | Read               | Memo                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Implicit transitive peer dependencies - DEV Community](https://dev.to/arcanis/implicit-transitive-peer-dependencies-ed0)                            | 2021-09-13 17:08:00 | :white_check_mark: | 종속성의 `peerDependencies`를 `peerDependencies` 또는 `dependencies` 로 명시하자. 암시적으로 종속성의 `peerDependencies`를 상속받을 수 없다. |
| [Self-Documented Makefile](https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html)                                                       | 2021-08-10 22:15:00 | :x:                |                                                                                                                                              |
| [Why I Prefer Makefiles Over package.json Scripts for Node.js Projects](https://spin.atomicobject.com/2021/03/22/makefiles-vs-package-json-scripts/) | 2021-08-10 22:00:00 | :white_check_mark: |                                                                                                                                              |

**[⬆ Back to Index](#Contents)**

## monorepo

| Link                                                                                                                                                                                                                                                                                                                                          | Created Time        | Read | Memo |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Rush로 프론트엔드 모노레포 도입기. 이 글에서는 밀당 영어 프론트엔드에서 커다란 코드 덩어리로 되어 있던… \| by Jeong Seong Dae \| 밀당 팀블로그 \| Aug, 2021 \| Medium](https://medium.com/mildang/rush%EB%A1%9C-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC-%EB%8F%84%EC%9E%85%EA%B8%B0-5da0c5bc9b30) | 2021-09-05 19:26:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## Babel

| Link                                                                                                                                 | Created Time        | Read               | Memo                                  |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ------------------ | ------------------------------------- |
| [트리 쉐이킹으로 자바스크립트 페이로드 줄이기 \| TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20180716) | 2021-09-04 21:08:00 | :x:                |                                       |
| [Transpile to ES modules with Babel](https://krasimirtsonev.com/blog/article/transpile-to-esm-with-babel)                            | 2021-09-04 19:10:00 | :white_check_mark: | `{ "loose": true, "modules": false }` |

**[⬆ Back to Index](#Contents)**

## yarn

| Link                                                                                                                                                                                                                                                                                        | Created Time        | Read | Memo |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Building a Monorepo with Yarn 2 \| Heroku](https://blog.heroku.com/building-a-monorepo-with-yarn-2)                                                                                                                                                                                        | 2021-09-04 19:13:00 | :x:  |      |
| [프로토콜 \| Yarn - 패키지 관리자](https://yarnpkg.com/features/protocols#why-is-the-link-protocol-recommended-over-aliases-for-path-mapping)                                                                                                                                               | 2021-07-23 21:11:00 | :x:  |      |
| [npm 과 yarn classic, yarn 2.0 중 어떤 것을 사용할 것인가? \| by Seo Yeon, Lee \| Jun, 2021 \| Medium](https://iamssen.medium.com/npm-%EA%B3%BC-yarn-classic-yarn-2-0-%EC%A4%91-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0-%EA%B2%83%EC%9D%B8%EA%B0%80-879ab44a3373) | 2021-07-03 22:56:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## git

| Link                                                                                                                                                                                                                  | Created Time        | Read               | Memo                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ | ------------------------------ |
| [How to Setup Monorepos with Git for JavaScript and TypeScript \| by Hieu Nguyen (Jack) \| Aug, 2021 \| Medium](https://hieunc.medium.com/how-to-setup-monorepos-with-git-for-javascript-and-typescript-d42f1294c0d2) | 2021-09-04 12:01:00 | :x:                |                                |
| [git은 폴더경로가 변경된 것을 어떻게 알 수 있을까? - Kwoncharles Blog](https://kwoncheol.me/posts/git-rename-inference)                                                                                               | 2021-08-31 00:26:00 | :white_check_mark: | 50% 이상 유사시 `edit-renamed` |
| [Git 과거의 특정 커밋 수정하기 - 뒤태지존의 끄적거림](https://homoefficio.github.io/2017/04/16/Git-%EA%B3%BC%EA%B1%B0%EC%9D%98-%ED%8A%B9%EC%A0%95-%EC%BB%A4%EB%B0%8B-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0/)           | 2021-07-16 09:33:00 | :x:                |                                |
| [[Git]Tag 추가, 변경 및 삭제하기](http://minsone.github.io/git/git-addtion-and-modified-delete-tag)                                                                                                                   | 2021-07-15 10:43:00 | :x:                |                                |
| [Conditional Git configuration - Jiayu's Blog](https://blog.jiayu.co/2019/02/conditional-git-configuration/)                                                                                                          | 2021-07-08 09:36:00 | :x:                |                                |

**[⬆ Back to Index](#Contents)**

## Blog

| Link                                                             | Created Time        | Read               | Memo |
| ---------------------------------------------------------------- | ------------------- | ------------------ | ---- |
| [Blog Posts ・ Andrew Branch](https://blog.andrewbran.ch/)       | 2021-09-04 12:01:00 | :x:                |      |
| [Lee Robinson – Developer, writer, creator.](https://leerob.io/) | 2021-08-25 08:31:00 | :white_check_mark: |      |
| [Max Böck](https://mxb.dev/)                                     | 2021-08-21 10:29:00 | :white_check_mark: |      |
| [Jonathan Briehl](https://jonathanbriehl.com/)                   | 2021-08-21 10:26:00 | :white_check_mark: |      |

**[⬆ Back to Index](#Contents)**

## NextJS

| Link                                                                                                        | Created Time        | Read | Memo |
| ----------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [How I Built my Blog using MDX, Next.js, and React](https://www.joshwcomeau.com/blog/how-i-built-my-blog/)  | 2021-09-03 08:34:00 | :x:  |      |
| [Migrating this Blog to Next.js from Gatsby \| Eyas's Blog](https://blog.eyas.sh/2021/08/gatsby-to-next-js) | 2021-08-25 08:29:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## Vue

| Link                                                                                                                                                   | Created Time        | Read | Memo |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ---- | ---- |
| [Vue.js Developers - Video Training Courses](https://vuejsdevelopers.com/)                                                                             | 2021-08-31 12:42:00 | :x:  |      |
| [25 Vue Tips You Need to Know - DEV Community](https://dev.to/michaelthiessen/25-vue-tips-you-need-to-know-2h70)                                       | 2021-07-24 17:50:00 | :x:  |      |
| [Vue.js + TypeScript 앱에서 IoC 컨테이너 사용하기 \| Aliencube](https://blog.aliencube.org/ko/2017/03/21/using-ioc-container-in-vuejs-typescript-app/) | 2021-07-19 18:33:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## GitHub

| Link                                                                                                                                  | Created Time        | Read               | Memo                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ | ---------------------- |
| [Incremental PRs: a new GitHub workflow for the Gatsby Cloud team \| Gatsby](https://www.gatsbyjs.com/blog/2020-01-08-git-workflows/) | 2021-08-14 09:13:00 | :x:                |                        |
| [GitHub OCTO \| Visualizing a codebase](https://octo.github.com/projects/repo-visualization)                                          | 2021-08-06 18:53:00 | :white_check_mark: | Visualizing a codebase |
| [[GitHub] fork repository 최신 버전으로 유지하기](https://jybaek.tistory.com/775)                                                     | 2021-07-08 09:43:00 | :x:                |                        |

**[⬆ Back to Index](#Contents)**

## GitLab

| Link                                                                                                                                | Created Time        | Read | Memo |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [npm packages in the Package Registry \| GitLab](https://docs.gitlab.com/ee/user/packages/npm_registry/#project-level-npm-endpoint) | 2021-08-07 16:46:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## GraphQL

| Link                                                                                 | Created Time        | Read | Memo |
| ------------------------------------------------------------------------------------ | ------------------- | ---- | ---- |
| [How to GraphQL - The Fullstack Tutorial for GraphQL](https://www.howtographql.com/) | 2021-08-07 15:30:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## CSS

| Link                                                                                                                                                           | Created Time        | Read | Memo |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Typewriter Animation That Handles Anything You Throw at It \| CSS-Tricks](https://css-tricks.com/typewriter-animation-that-handles-anything-you-throw-at-it/) | 2021-07-28 09:31:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## a18y

| Link                                                                                                                                   | Created Time        | Read | Memo |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Creating an accessible autocomplete experience – React Spectrum Blog](https://react-spectrum.adobe.com/blog/building-a-combobox.html) | 2021-07-28 09:30:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## VSCode

| Link                                                                                                                                                                                                            | Created Time        | Read | Memo |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Easier browser debugging with Developer Tools integration in Visual Studio Code - Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2021/07/16/easier-debugging-developer-tools-in-visual-studio-code/) | 2021-07-24 17:48:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## browserlist

| Link                                                                                       | Created Time        | Read | Memo |
| ------------------------------------------------------------------------------------------ | ------------------- | ---- | ---- |
| [Browserslist is a Good Idea \| CSS-Tricks](https://css-tricks.com/browserlist-good-idea/) | 2021-07-23 21:19:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## Inversify

| Link                                                                                          | Created Time        | Read | Memo |
| --------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Dependency injection 과 inversify, 그리고 적용해보기](https://slides.com/woongjae/inversify) | 2021-07-19 18:34:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## Nuxt

| Link                                                                                                                                           | Created Time        | Read               | Memo |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------ | ---- |
| [Going Full Static - NuxtJS](https://nuxtjs.org/blog/going-full-static#current-issues)                                                         | 2021-07-12 12:01:00 | :white_check_mark: |      |
| [Demystify Nuxtʼs Target, Mode, and Ssr Properties \| Kentico Kontent.](https://kontent.ai/blog/demystify-nuxt-target-mode-and-ssr-properties) | 2021-07-12 11:57:00 | :white_check_mark: |      |

**[⬆ Back to Index](#Contents)**

## utility

| Link                                                                          | Created Time        | Read               | Memo |
| ----------------------------------------------------------------------------- | ------------------- | ------------------ | ---- |
| [About splash-screens - Appscope](https://appsco.pe/developer/splash-screens) | 2021-07-09 14:35:00 | :white_check_mark: |      |

**[⬆ Back to Index](#Contents)**

## PWA

| Link                                                                                                                                                | Created Time        | Read | Memo |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Progressive Web App Splash Screens \| by Dave Hudson \| Medium](https://medium.com/@applification/progressive-web-app-splash-screens-80340b45d210) | 2021-07-08 17:37:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**

## Mac

| Link                                                                        | Created Time        | Read | Memo |
| --------------------------------------------------------------------------- | ------------------- | ---- | ---- |
| [Mac의 클립보드 명령어 - pbcopy & pbpaste](https://jojoldu.tistory.com/466) | 2021-07-08 12:51:00 | :x:  |      |

**[⬆ Back to Index](#Contents)**
