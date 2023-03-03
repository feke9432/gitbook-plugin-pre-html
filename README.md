添加样式模块

## block pre 

添加 html 标签以及样式。

md 文件中这样加
```
{% pre "font-size: 2em; font-weight: 700;", name="div" %}
test
{% endpre %}
```

会被编译成：
```
`<dev style='font-size: 2em; font-weight: 700;'>test</dev>`
```

## 其他配置

```json
"pluginsConfig": {
    "pre-html": {
      "hidePoweredBy": true,  // 删除页面中的 power by gitbook
      "file-link": true // 将首页链接后加 index.html ./ => ./index.html
    }
	}
```