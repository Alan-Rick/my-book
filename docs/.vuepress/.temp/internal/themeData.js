export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"计算机基础\",\"children\":[{\"text\":\"计算机网络\",\"link\":\"/computer/basic/network/\"},{\"text\":\"操作系统\",\"link\":\"/computer/basic/os/\"},{\"text\":\"计算机组成原理\",\"link\":\"/computer/basic/composition/\"},{\"text\":\"编译原理\",\"link\":\"/computer/basic/compile/\"}]},{\"text\":\"计算机编程\",\"children\":[{\"text\":\"python编程\",\"link\":\"/computer/coding/python/\"},{\"text\":\"java编程\",\"link\":\"/computer/coding/java/\"},{\"text\":\"js编程\",\"link\":\"/computer/coding/javascript/\"},{\"text\":\"node编程\",\"link\":\"/computer/coding/node/\"},{\"text\":\"go编程\",\"link\":\"/computer/coding/go/\"}]},{\"text\":\"数据库学习\",\"children\":[{\"text\":\"MySQL\",\"link\":\"/database/mysql/\"},{\"text\":\"Redis\",\"link\":\"/database/redis/\"},{\"text\":\"MongoDB\",\"link\":\"/database/mongodb/\"},{\"text\":\"SQLite\",\"link\":\"/database/sqlite/\"}]},{\"text\":\"大数据学习\",\"children\":[{\"text\":\"Kafka\",\"link\":\"/bigdata/kafka/\"},{\"text\":\"Spark\",\"link\":\"/bigdata/spark/\"},{\"text\":\"Handoop\",\"link\":\"/bigdata/handoop/\"}]},{\"text\":\"网站动态\",\"link\":\"/other/weblog.md\"},{\"text\":\"关于我们\",\"link\":\"/other/about.md\"},{\"text\":\"Github\",\"link\":\"https://github.com/Alan-Rick/my-book\"}],\"sidebar\":{\"/computer/basic/network/\":[{\"text\":\"一、前言\",\"collapsible\":true,\"children\":[{\"text\":\"前言\",\"collapsible\":true,\"children\":[\"/computer/basic/network/substract.md\"]},{\"text\":\"基础\",\"collapsible\":true,\"children\":[\"/computer/basic/network/basic.md\"]}]},{\"text\":\"二、基础\",\"collapsible\":true,\"children\":[\"/guide/a.html\"]}],\"/\":[]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
