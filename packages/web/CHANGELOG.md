# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0-rc.40](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.39...v3.0.0-rc.40) (2023-01-06)

**Note:** Version bump only for package @serenity-js/web





# [3.0.0-rc.39](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.38...v3.0.0-rc.39) (2023-01-05)


### Bug Fixes

* **core:** simplified AsyncOperation events ([ac1a88f](https://github.com/serenity-js/serenity-js/commit/ac1a88f95560b5f163ac3f2302f4274f4bf99455))
* **core:** simplified internal AsyncOperation events to separate service name from task description ([0162d28](https://github.com/serenity-js/serenity-js/commit/0162d287c84a4ab716e5e655cfc2b816ba89f394))


### Features

* **playwright-test:** support for Photographer and automated screenshots upon activity failure ([c5527ca](https://github.com/serenity-js/serenity-js/commit/c5527caee65cb89014ea9cb28b949cf45d7463a3))





# [3.0.0-rc.38](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.37...v3.0.0-rc.38) (2022-12-28)

**Note:** Version bump only for package @serenity-js/web





# [3.0.0-rc.37](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.36...v3.0.0-rc.37) (2022-12-18)


### Bug Fixes

* **web:** support for setting cookies using async or partially async data ([ec8a65d](https://github.com/serenity-js/serenity-js/commit/ec8a65d9e3c1e2eb311d14eb32f1de9e26b5879b)), closes [#1421](https://github.com/serenity-js/serenity-js/issues/1421)





# [3.0.0-rc.36](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.35...v3.0.0-rc.36) (2022-11-28)

**Note:** Version bump only for package @serenity-js/web





# [3.0.0-rc.35](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.34...v3.0.0-rc.35) (2022-11-25)


### Bug Fixes

* **web:** marked PageElement methods returning a MetaQuestion ([6f78186](https://github.com/serenity-js/serenity-js/commit/6f78186c8c11c603ec447f89007009ea75e80b89))





# [3.0.0-rc.34](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.33...v3.0.0-rc.34) (2022-11-21)

**Note:** Version bump only for package @serenity-js/web





# [3.0.0-rc.33](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.32...v3.0.0-rc.33) (2022-11-07)


### Bug Fixes

* **core:** allow proxying `location` and `description` fields by `QuestionAdapter` ([6761685](https://github.com/serenity-js/serenity-js/commit/6761685d0cd0f775088d514c3eefbaff4431faa1)), closes [#1344](https://github.com/serenity-js/serenity-js/issues/1344)





# [3.0.0-rc.32](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.31...v3.0.0-rc.32) (2022-10-12)

**Note:** Version bump only for package @serenity-js/web





# [3.0.0-rc.31](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.30...v3.0.0-rc.31) (2022-10-07)


### Features

* **web:** accept Answerable as argument of ExecuteScript.from(sourceUrl) ([0b06703](https://github.com/serenity-js/serenity-js/commit/0b06703cd832bf64dbb2636ef955ecba7b8b430c))





# [3.0.0-rc.30](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.29...v3.0.0-rc.30) (2022-10-05)


### Bug Fixes

* **web:** all web modules now correctly support handling iframe context for the current page ([bcb8672](https://github.com/serenity-js/serenity-js/commit/bcb86722dfcaa023613e63fb8bd2e14d6d546efd)), closes [#1310](https://github.com/serenity-js/serenity-js/issues/1310)
* **web:** corrected interaction to Clear to avoid issues with elements that have no value attribute ([37ae809](https://github.com/serenity-js/serenity-js/commit/37ae8092a36091db528024b99695905982ef8284)), closes [#1306](https://github.com/serenity-js/serenity-js/issues/1306)
* **web:** interaction to Clear now supports "contenteditable" elements ([d090458](https://github.com/serenity-js/serenity-js/commit/d090458845c23af59561d74421c16160ccc4ff64)), closes [#1306](https://github.com/serenity-js/serenity-js/issues/1306)


### Features

* **web:** interaction to Clear works with "contenteditable" elements across all the web tools ([c53b00d](https://github.com/serenity-js/serenity-js/commit/c53b00dac512977c00e5eadc101e281997f8e0de)), closes [#1306](https://github.com/serenity-js/serenity-js/issues/1306)





# [3.0.0-rc.29](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.28...v3.0.0-rc.29) (2022-10-01)

**Note:** Version bump only for package @serenity-js/web





# [3.0.0-rc.28](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.27...v3.0.0-rc.28) (2022-09-30)


### Bug Fixes

* **core:** activity is now able to detect invocation location on Node 14 ([41f4776](https://github.com/serenity-js/serenity-js/commit/41f4776736620bc32d474d9b66f69c742f8eca96)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
* **playwright:** corrected not(isPresent()) for PlaywrightPageElement ([0693b2f](https://github.com/serenity-js/serenity-js/commit/0693b2f2666a8de327c990c72ecf42fc3d7da498)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)
* **web:** question about Text.of(element) now trims newline and space characters ([c68bbe9](https://github.com/serenity-js/serenity-js/commit/c68bbe9bed082c84538983dd6233e684190c3c43))


### Features

* **playwright-test:** improved Playwright Test reports ([6c6b537](https://github.com/serenity-js/serenity-js/commit/6c6b5379dfc324a4fb75d758daa7782109f1c5ab)), closes [#1240](https://github.com/serenity-js/serenity-js/issues/1240)


### Reverts

* **web:** reverted the change to Text that would make it automatically trim the retrieved text ([f5a47b7](https://github.com/serenity-js/serenity-js/commit/f5a47b7e9e0be26522522b5a6647b24ffad6bee8))





# [3.0.0-rc.27](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.26...v3.0.0-rc.27) (2022-08-26)

**Note:** Version bump only for package @serenity-js/web





# [3.0.0-rc.26](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.25...v3.0.0-rc.26) (2022-08-15)

**Note:** Version bump only for package @serenity-js/web





# [3.0.0-rc.25](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.24...v3.0.0-rc.25) (2022-08-15)


### Bug Fixes

* **core:** extracted common TypeScript configuration ([0108370](https://github.com/serenity-js/serenity-js/commit/0108370a6a7ebb4bcd71773482801d29f5660268))
* **deps:** updated TinyTypes to 1.19.0 ([f6d53e4](https://github.com/serenity-js/serenity-js/commit/f6d53e4dbbfcb81139bd888ac11441b6344e47f5))
* **web:** simplified isClickable so that it doesn't include visibility check ([33ad47e](https://github.com/serenity-js/serenity-js/commit/33ad47e448e73a26f337371fcc6f5566845b4c93))





# [3.0.0-rc.24](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.23...v3.0.0-rc.24) (2022-07-23)


### Bug Fixes

* **web:** simplified the implementation of isClickable and isEnabled ([142eb86](https://github.com/serenity-js/serenity-js/commit/142eb861d95e08df7717e9fffc57153a62c88f66)), closes [#1255](https://github.com/serenity-js/serenity-js/issues/1255)


### Features

* **web:** PageElement-releated expectations now also check if the element is present ([de4610c](https://github.com/serenity-js/serenity-js/commit/de4610c3199f7130fd56d2d6799a328cbd7540a2)), closes [#1255](https://github.com/serenity-js/serenity-js/issues/1255)





# [3.0.0-rc.23](https://github.com/serenity-js/serenity-js/compare/v2.33.10...v3.0.0-rc.23) (2022-07-19)


### Bug Fixes

* **node:** support for Node 18 ([73212bc](https://github.com/serenity-js/serenity-js/commit/73212bc9deb1998d871b0720a6b437687b3ceddc)), closes [#1243](https://github.com/serenity-js/serenity-js/issues/1243)



# [3.0.0-rc.22](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.21...v3.0.0-rc.22) (2022-07-15)



# [3.0.0-rc.21](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.20...v3.0.0-rc.21) (2022-07-11)



# [3.0.0-rc.20](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.19...v3.0.0-rc.20) (2022-07-11)


### Bug Fixes

* **protractor:** isVisible check for ProtractorPageElement returns false for non-existent elements ([e64eee3](https://github.com/serenity-js/serenity-js/commit/e64eee377af32909f25e7c1d88f45a484abb1514)), closes [#1236](https://github.com/serenity-js/serenity-js/issues/1236)
* **web:** improved JavaScript dialog-related error handling when taking screenshots ([3cd1149](https://github.com/serenity-js/serenity-js/commit/3cd1149ed74df95da17f1054cd4da93b095a4eed)), closes [puppeteer/puppeteer#2481](https://github.com/puppeteer/puppeteer/issues/2481) [#1156](https://github.com/serenity-js/serenity-js/issues/1156)
* **web:** renamed PagesContext to BrowsingSession to make the name more descriptive ([6b4e998](https://github.com/serenity-js/serenity-js/commit/6b4e9984d80f8f349f367e59bd0e615cd01703ec)), closes [#1236](https://github.com/serenity-js/serenity-js/issues/1236)


### Features

* **core:** interactions to Wait.for and Wait.until are now browser-independent ([d115142](https://github.com/serenity-js/serenity-js/commit/d1151427bed96c1ebd0d1dcc4159c6aeedc605de)), closes [#1035](https://github.com/serenity-js/serenity-js/issues/1035) [#1236](https://github.com/serenity-js/serenity-js/issues/1236)
* **playwright:** configurable navigation waitUntil timeout ([2458fcb](https://github.com/serenity-js/serenity-js/commit/2458fcb22c946da41ab59cb21ac0d4cc48012da7)), closes [#1236](https://github.com/serenity-js/serenity-js/issues/1236)
* **playwright:** initial support for Playwright ([87e88a1](https://github.com/serenity-js/serenity-js/commit/87e88a16cdc06477ed25eb83f9597fd370fdc109)), closes [#493](https://github.com/serenity-js/serenity-js/issues/493) [#563](https://github.com/serenity-js/serenity-js/issues/563) [#911](https://github.com/serenity-js/serenity-js/issues/911)
* **playwright:** interaction to Select option(s) from a <select /> dropdown ([009041d](https://github.com/serenity-js/serenity-js/commit/009041d83e22ddf3fef14670e0e5fd6d11cdfc73)), closes [#1236](https://github.com/serenity-js/serenity-js/issues/1236)
* **playwright:** support for isVisible, plus consistent visibility checks across the board ([2c5c929](https://github.com/serenity-js/serenity-js/commit/2c5c929802f894f9fe59438a01f08b1b7bec3318)), closes [#1236](https://github.com/serenity-js/serenity-js/issues/1236)
* **playwright:** support for working with frames ([89d4621](https://github.com/serenity-js/serenity-js/commit/89d46212073a342fe812a3ad2638a2ad0c39b620)), closes [#1236](https://github.com/serenity-js/serenity-js/issues/1236)
* **web:** introduced PagesContext and implemented PlaywrightPage ([0045a72](https://github.com/serenity-js/serenity-js/commit/0045a726d540871333f644928218aed00bcd372c)), closes [#1236](https://github.com/serenity-js/serenity-js/issues/1236)
* **web:** new portable APIs to handle ModalDialog windows ([c94d0ec](https://github.com/serenity-js/serenity-js/commit/c94d0ec43d2bc8aa39f8824f5d0f1e1cbcf137a1)), closes [#1236](https://github.com/serenity-js/serenity-js/issues/1236) [#805](https://github.com/serenity-js/serenity-js/issues/805) [#1156](https://github.com/serenity-js/serenity-js/issues/1156)
* **web:** standardised support for deep CSS selectors across the Web integration modules ([e9e3f28](https://github.com/serenity-js/serenity-js/commit/e9e3f281191fc5c891841b6c8aab41213da3b0f5)), closes [#1238](https://github.com/serenity-js/serenity-js/issues/1238)



# [3.0.0-rc.19](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.18...v3.0.0-rc.19) (2022-06-11)



# [3.0.0-rc.18](https://github.com/serenity-js/serenity-js/compare/v2.33.9...v3.0.0-rc.18) (2022-06-06)


### Bug Fixes

* **deps:** updated tiny-types ([f1951cf](https://github.com/serenity-js/serenity-js/commit/f1951cf753df3807b5778d116f8e8bc3f24830a7))
* **deps:** updated tiny-types to 1.18.2 ([83a651c](https://github.com/serenity-js/serenity-js/commit/83a651c4c2f3f8dbaabcdacba94c720efdff45dd))



# [3.0.0-rc.17](https://github.com/serenity-js/serenity-js/compare/v2.33.8...v3.0.0-rc.17) (2022-06-02)



# [3.0.0-rc.16](https://github.com/serenity-js/serenity-js/compare/v2.33.6...v3.0.0-rc.16) (2022-04-15)



# [3.0.0-rc.15](https://github.com/serenity-js/serenity-js/compare/v2.33.5...v3.0.0-rc.15) (2022-04-10)


### Bug Fixes

* **web:** corrected an inefficient regular expression in By selector description generator ([1b537d2](https://github.com/serenity-js/serenity-js/commit/1b537d2de02f89760237816fc726f5e11c2bee0c))
* **web:** replaced legacy PromiseLike return types with native Promise types ([436b3cb](https://github.com/serenity-js/serenity-js/commit/436b3cba1793f63008a56633cc93669736155ce6))



# [3.0.0-rc.14](https://github.com/serenity-js/serenity-js/compare/v2.33.3...v3.0.0-rc.14) (2022-03-28)


### Bug Fixes

* **web:** auto-generated descriptions of nested PageElements are easier to read ([5a51d91](https://github.com/serenity-js/serenity-js/commit/5a51d91f0abb1c32814c219a44da51d52df77f87))
* **web:** corrected return types of question about Selected page elements ([b32f280](https://github.com/serenity-js/serenity-js/commit/b32f2809b018d6791a37fd80a226ca16a822b9b6))


### Features

* **web:** Attribute.called(name).of(pageElement) returns a QuestionAdapter ([e220665](https://github.com/serenity-js/serenity-js/commit/e220665de37f15d4cfc8ad570bfa7b804d71335b))
* **web:** CssClasses.of(pageElement) returns a QuestionAdapter ([0942887](https://github.com/serenity-js/serenity-js/commit/0942887eb8e726dce3b8d64a7f9162ec782e61b7))
* **web:** Value.of(pageElement) returns a QuestionAdapter ([c45b483](https://github.com/serenity-js/serenity-js/commit/c45b483be071d297dc41e6b098a03f5697d53050))



# [3.0.0-rc.13](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.12...v3.0.0-rc.13) (2022-03-02)


### Features

* **web:** combined Frame and PageElement so they can be Switch-ed to ([1b7ab7c](https://github.com/serenity-js/serenity-js/commit/1b7ab7c828034a14ba801cbfa97acc203fd55adf)), closes [#82](https://github.com/serenity-js/serenity-js/issues/82) [#227](https://github.com/serenity-js/serenity-js/issues/227) [#233](https://github.com/serenity-js/serenity-js/issues/233) [#365](https://github.com/serenity-js/serenity-js/issues/365)



# [3.0.0-rc.12](https://github.com/serenity-js/serenity-js/compare/v2.33.2...v3.0.0-rc.12) (2022-02-23)



# [3.0.0-rc.11](https://github.com/serenity-js/serenity-js/compare/v2.33.1...v3.0.0-rc.11) (2022-02-13)


### Bug Fixes

* **web:** made the constructor of BrowseTheWeb protected, since it's an abstract class ([dbfbed0](https://github.com/serenity-js/serenity-js/commit/dbfbed02923bc1c589e588429c163ffbc7b13a34))


### Features

* **web:** support for working with frames and an interaction to Switch.to(frameOrPage) ([ef73ef2](https://github.com/serenity-js/serenity-js/commit/ef73ef273f8a17e48d396d5ef03f6b761b136c9a)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)



# [3.0.0-rc.10](https://github.com/serenity-js/serenity-js/compare/v2.33.0...v3.0.0-rc.10) (2022-02-03)



# [3.0.0-rc.9](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.8...v3.0.0-rc.9) (2022-02-01)



# [3.0.0-rc.8](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.7...v3.0.0-rc.8) (2022-01-28)



# [3.0.0-rc.7](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.6...v3.0.0-rc.7) (2022-01-28)


### Features

* **assertions:** isPresent works with any Optional ([cea75dc](https://github.com/serenity-js/serenity-js/commit/cea75dc1c728e45e06a87aaf9c1573a237334285)), closes [#1103](https://github.com/serenity-js/serenity-js/issues/1103)
* **core:** `f` and `d` question description formatters ([c9f3fad](https://github.com/serenity-js/serenity-js/commit/c9f3fadd86ec0196f2cdbf76d9628bbef0a3fcba))
* **core:** replaced `Adapter` with `QuestionAdapter` and introduced `Optional` ([8d84ad3](https://github.com/serenity-js/serenity-js/commit/8d84ad3863e3c726533d0f21934fb1e2fa8b3022)), closes [#1103](https://github.com/serenity-js/serenity-js/issues/1103)
* **core:** support for Optional chaining, expectation isPresent, refactored Expectations ([1841ee5](https://github.com/serenity-js/serenity-js/commit/1841ee5fc48cfa403ddc53358f75764d9a010c21)), closes [#1099](https://github.com/serenity-js/serenity-js/issues/1099) [#1099](https://github.com/serenity-js/serenity-js/issues/1099) [#1103](https://github.com/serenity-js/serenity-js/issues/1103)



# [3.0.0-rc.6](https://github.com/serenity-js/serenity-js/compare/v2.32.7...v3.0.0-rc.6) (2022-01-10)



# [3.0.0-rc.5](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.4...v3.0.0-rc.5) (2022-01-07)


### Features

* **web:** support for advanced PageElement locator patterns ([c1ff8b7](https://github.com/serenity-js/serenity-js/commit/c1ff8b7539ebc1da8f79ea2b6d17bb01c42f443d)), closes [#1084](https://github.com/serenity-js/serenity-js/issues/1084)



# [3.0.0-rc.4](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.3...v3.0.0-rc.4) (2021-12-30)


### Features

* **web:** ElementExpectation makes it easier to define custom PageElement-related Expectations ([92ebf7d](https://github.com/serenity-js/serenity-js/commit/92ebf7db720d0fe88ddbe17b9958fa993b1fd02e))
* **web:** Text.ofAll accepts mapped PageElements ([5314246](https://github.com/serenity-js/serenity-js/commit/5314246305fa3f62446d5ec718f36354152be68d))



# [3.0.0-rc.3](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.2...v3.0.0-rc.3) (2021-12-29)


### Bug Fixes

* **core:** refactored Mappable so that it's easier to implement filters ([176e0cd](https://github.com/serenity-js/serenity-js/commit/176e0cd0303d63271477b2b7a8e7b0572dda99a0)), closes [#1074](https://github.com/serenity-js/serenity-js/issues/1074)
* **deps:** updated tiny-types to 1.17.0 ([3187051](https://github.com/serenity-js/serenity-js/commit/3187051594158b4b450c82e851e417fd2ed21652))
* **web:** corrected synchronisation in Web questions and interactions ([c3a0ad1](https://github.com/serenity-js/serenity-js/commit/c3a0ad16de311e71d7e82e4f463baa0ca6b18863))
* **web:** Photographer skips taking a screenshot if the Window is closed (DevTools protocol) ([b682577](https://github.com/serenity-js/serenity-js/commit/b682577ad649046fc1a4cd61a7315e11d60dcf32))
* **web:** refactored Selector and NativeElementLocator classes to simplify the implementation ([f0c8f11](https://github.com/serenity-js/serenity-js/commit/f0c8f113433958877d36f13d0bc7f355ea68d280))
* **web:** simplified the selectors ([b167e42](https://github.com/serenity-js/serenity-js/commit/b167e422eb66556845c31d5847b9fd33b707c764)), closes [#1074](https://github.com/serenity-js/serenity-js/issues/1074)


### Features

* **core:** new implementation of List.where filters ([45b3c80](https://github.com/serenity-js/serenity-js/commit/45b3c8080ca467ac6362e5217e7899ca36a04cdc)), closes [#1074](https://github.com/serenity-js/serenity-js/issues/1074)
* **web:** isVisible checks if the element is in viewport and not hidden behind other elements ([429040f](https://github.com/serenity-js/serenity-js/commit/429040fb32b04cd4bc7524100635203fd8128eb6))
* **web:** new PageElement retrieval model based on Selectors ([48bd94f](https://github.com/serenity-js/serenity-js/commit/48bd94f3c29707b66dcf81a7522f7529b6f9fcfb))
* **web:** re-introduced PageElements.where DSL and universal By selectors ([39fe0a1](https://github.com/serenity-js/serenity-js/commit/39fe0a10edf7f652e93911159e4a4689c36d6876)), closes [#1081](https://github.com/serenity-js/serenity-js/issues/1081)



# [3.0.0-rc.2](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.1...v3.0.0-rc.2) (2021-12-09)



# [3.0.0-rc.1](https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.0...v3.0.0-rc.1) (2021-12-09)



# [3.0.0-rc.0](https://github.com/serenity-js/serenity-js/compare/v2.32.5...v3.0.0-rc.0) (2021-12-08)


### Bug Fixes

* **core:** 3.0 RC ([469d54e](https://github.com/serenity-js/serenity-js/commit/469d54e4f81ef430566b93852e3174826f8ef672)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **core:** renamed "Model" type to "Adapter" to better reflect its purpose ([b4ea7a1](https://github.com/serenity-js/serenity-js/commit/b4ea7a100fac2c896990bf15cbc906de641196b8)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** added missing export ([c5ffc0a](https://github.com/serenity-js/serenity-js/commit/c5ffc0a83905c99ea0020577503170c427fdb9f2)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **webdriverio:** separated UIElement.hoverOver from UIElement.scrollIntoView ([cf4ca2c](https://github.com/serenity-js/serenity-js/commit/cf4ca2c531e0f90f9a27917e322359c13bfbc6e6))
* **web:** ensure all Web interactions extend the same base class ([b358c0b](https://github.com/serenity-js/serenity-js/commit/b358c0b67c1de11af63e1e2142d3613692769cd6))
* **web:** fixed the interaction to Select ([10b7b74](https://github.com/serenity-js/serenity-js/commit/10b7b7446743b5866a1b458577ea7d2e11bf5a8f))
* **web:** optimised PhotoTakingStrategy ([085b7f7](https://github.com/serenity-js/serenity-js/commit/085b7f716033b22207af47edac58c896f46af62d))
* **web:** removed incorrect export ([ebf80c0](https://github.com/serenity-js/serenity-js/commit/ebf80c019af4db2a847e4b98599bce02b8acef23))
* **web:** removed incorrect import ([90cb025](https://github.com/serenity-js/serenity-js/commit/90cb0251a00a7bff098376110dcec2f9f2c5d5c0))
* **web:** removed window-specific APIs from BrowseTheWeb that got replaced by Page ([918f447](https://github.com/serenity-js/serenity-js/commit/918f447c1d8f326fbf5730f1aa61108045556212)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** renamed Element and associated classes to PageElement to avoid name conflicts ([1e4204b](https://github.com/serenity-js/serenity-js/commit/1e4204b5507469e6574c87a6d84454e39e8a813e))
* **web:** renamed PageElementList to PageElements to improve readability ([a9903a7](https://github.com/serenity-js/serenity-js/commit/a9903a7389b00106ef94d2bdb9f86a7fd04be541)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** standardised getters across PageElement implementations ([336472b](https://github.com/serenity-js/serenity-js/commit/336472b1a6882412f6a88483e51266909a1d51d0))
* **web:** wordsmithing of interface names ([5a1e76a](https://github.com/serenity-js/serenity-js/commit/5a1e76a9c162370e17238fcccc9f08e109d543c3))


### Features

* **core:** question.about produces "props" that proxy the methods of the underlying model ([f771872](https://github.com/serenity-js/serenity-js/commit/f771872c56b487e404002c3800fc8f3baaed804f))
* **protractor:** compatibility with @serenity-js/web ([9df4db2](https://github.com/serenity-js/serenity-js/commit/9df4db27a6e0ae62bf0d0e679a170d4865041043)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** a common way to run the tests for all the web adapters ([c7e584a](https://github.com/serenity-js/serenity-js/commit/c7e584a9bf288ebc7781affdb720097527e8ed3a))
* **web:** added Page.viewportSize and Page.setViewportSize methods ([4cabbe2](https://github.com/serenity-js/serenity-js/commit/4cabbe21a7fbac3457c6a6ea3d4442a62c3f1f3c))
* **web:** all Screenplay APIs migrated from @serenity-js/webdriverio to @serenity-js/web ([7b6b95d](https://github.com/serenity-js/serenity-js/commit/7b6b95dc255446c29ae213ba2a1d142d426d16c8))
* **webdriverio:** support for native WebdriverIO services ([8d5ad22](https://github.com/serenity-js/serenity-js/commit/8d5ad22594cdb2ebddedc58a30259ca8430e360c))
* **web:** interaction to set a Cookie ([c056439](https://github.com/serenity-js/serenity-js/commit/c056439746a8f57c3edd937b8862f2babb70e94e)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** introduced UIElementQuestion to help ensure no NPEs in UI-related questions ([fe29121](https://github.com/serenity-js/serenity-js/commit/fe29121118d630e9fbd73dca85496e20948e26e0))
* **web:** migrated Photographer from @serenity-js/protractor to @serenity-js/web ([4506dac](https://github.com/serenity-js/serenity-js/commit/4506dacebdf955c32c4eff17bf9982c8e45e2925)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** ModalDialog available for both Protractor and WebdriverIO adapters ([ef3c566](https://github.com/serenity-js/serenity-js/commit/ef3c566aed12b52aa22c54058992d369172b8597)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** new module @serenity-js/web to provide Web-related Screenplay Pattern APIs ([bead861](https://github.com/serenity-js/serenity-js/commit/bead8612af1a5c99b775e680a3904f44d0281cf9))
* **web:** page provides an abstraction around browser window ([2e70a3b](https://github.com/serenity-js/serenity-js/commit/2e70a3b6af2e8cc49255820e8a1aaffcc71b76a8))
* **web:** Page.url() and Page.title() replace Website.url() and Website.title() ([49fe009](https://github.com/serenity-js/serenity-js/commit/49fe0094422ab53ec67d4ba303f80c33e382eebd)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** removed Target in favour of PageElement ([69496c4](https://github.com/serenity-js/serenity-js/commit/69496c47c4a1ec7b92e7ab6c83da1559e926f28e)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** support for switching browsing context ([a73a635](https://github.com/serenity-js/serenity-js/commit/a73a635f93183d67229acde78e74526564008869)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)
* **web:** support for working with cookies ([39cde6d](https://github.com/serenity-js/serenity-js/commit/39cde6de7a36d27a8b1c596493efbec94900af6b)), closes [#805](https://github.com/serenity-js/serenity-js/issues/805)


### BREAKING CHANGES

* **core:** Introduced @serenity-js/web - a shared library for Serenity/JS Web integration
modules such as @serenity-js/protractor and @serenity-js/webdriverio. Dropped support for Node 12.
