import{_ as s,C as d,c as e,H as n,Q as t,o as p}from"./chunks/framework.3deaef37.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/basics/codeSafety.md","filePath":"web/basics/codeSafety.md"}'),l={name:"web/basics/codeSafety.md"},c=t(`<blockquote data-v-d7b93574><p data-v-d7b93574>核心使用了前端js库CryptoJS</p></blockquote><h2 id="流程" tabindex="-1" data-v-d7b93574>流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;" data-v-d7b93574>​</a></h2><div class="info custom-block" data-v-d7b93574><p class="custom-block-title" data-v-d7b93574>一、前端加密场景有哪些？</p><div class="language- vp-adaptive-theme" data-v-d7b93574><button title="Copy Code" class="copy" data-v-d7b93574></button><span class="lang" data-v-d7b93574></span><pre class="shiki github-dark vp-code-dark" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>1.请求接口</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>2.路由跳转携带参数</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>1.请求接口</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>2.路由跳转携带参数</span></span></code></pre></div></div><div class="info custom-block" data-v-d7b93574><p class="custom-block-title" data-v-d7b93574>二、常用加密方式</p><div class="language- vp-adaptive-theme" data-v-d7b93574><button title="Copy Code" class="copy" data-v-d7b93574></button><span class="lang" data-v-d7b93574></span><pre class="shiki github-dark vp-code-dark" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>1.base64</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>2.Sha256</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>3.AES</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>1.base64</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>2.Sha256</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>3.AES</span></span></code></pre></div></div><div class="info custom-block" data-v-d7b93574><p class="custom-block-title" data-v-d7b93574>三、Base64使用场景</p><p data-v-d7b93574>浏览器url地址栏 <img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare001.png" class="show-img" data-v-d7b93574></p><p data-v-d7b93574>区别&amp;缺陷 <img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare002.png" class="show-img" data-v-d7b93574></p><div class="language- vp-adaptive-theme" data-v-d7b93574><button title="Copy Code" class="copy" data-v-d7b93574></button><span class="lang" data-v-d7b93574></span><pre class="shiki github-dark vp-code-dark" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>Base64优缺点(Base64本质是一种编码方式，而非加密方式)</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>优点</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>1.使用简单，javascript语言支持</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>2.对称性加密（加密之后可以解密）</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>缺点</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>1.加解密会改变基础类型（Number 变成String），仅支持ASCII</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>2.编码后的大小会比原文件大小大1/3</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>3.加密单一，内容相同的密文加密解密对一样的</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>4.会造成文件体积增加，影响文件的加载速度</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>5.兼容性的问题，ie8以前的浏览器不支持</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>Base64优缺点(Base64本质是一种编码方式，而非加密方式)</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>优点</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>1.使用简单，javascript语言支持</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>2.对称性加密（加密之后可以解密）</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>缺点</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>1.加解密会改变基础类型（Number 变成String），仅支持ASCII</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>2.编码后的大小会比原文件大小大1/3</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>3.加密单一，内容相同的密文加密解密对一样的</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>4.会造成文件体积增加，影响文件的加载速度</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>5.兼容性的问题，ie8以前的浏览器不支持</span></span></code></pre></div></div><div class="info custom-block" data-v-d7b93574><p class="custom-block-title" data-v-d7b93574>四、Sha256简介</p><div class="language- vp-adaptive-theme" data-v-d7b93574><button title="Copy Code" class="copy" data-v-d7b93574></button><span class="lang" data-v-d7b93574></span><pre class="shiki github-dark vp-code-dark" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>1.比较流行，也是最强的加密函数之一</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>2.非对称性加密（加密之后，无法通过密文解密）</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>3.应用场景：比特币等加密货币</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>1.比较流行，也是最强的加密函数之一</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>2.非对称性加密（加密之后，无法通过密文解密）</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>3.应用场景：比特币等加密货币</span></span></code></pre></div><p data-v-d7b93574>加密、解密过程演示 <img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare003.png" class="show-img" data-v-d7b93574></p></div><div class="info custom-block" data-v-d7b93574><p class="custom-block-title" data-v-d7b93574>五、AES简介</p><p data-v-d7b93574>加密、解密过程演示 <img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare004.png" class="show-img" data-v-d7b93574></p><div class="language- vp-adaptive-theme" data-v-d7b93574><button title="Copy Code" class="copy" data-v-d7b93574></button><span class="lang" data-v-d7b93574></span><pre class="shiki github-dark vp-code-dark" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>前端加密步骤</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>1.获取当前时间戳</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>2.拼接密钥字符串（eg：token + 时间戳）</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>3.哈希算法对拼接后的字符串进行哈希</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>借助sha256生成非对称性加密</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>生成结果64位</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>4.取哈希结果前32位生成完整的密钥（utf8格式）</span></span>
<span class="line" data-v-d7b93574><span style="color:#e1e4e8;" data-v-d7b93574>5.使用前端js库CryptoJS生成密文</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-d7b93574><code data-v-d7b93574><span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>前端加密步骤</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>1.获取当前时间戳</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>2.拼接密钥字符串（eg：token + 时间戳）</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>3.哈希算法对拼接后的字符串进行哈希</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>借助sha256生成非对称性加密</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>生成结果64位</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>4.取哈希结果前32位生成完整的密钥（utf8格式）</span></span>
<span class="line" data-v-d7b93574><span style="color:#24292e;" data-v-d7b93574>5.使用前端js库CryptoJS生成密文</span></span></code></pre></div></div><div class="info custom-block" data-v-d7b93574><p class="custom-block-title" data-v-d7b93574>六、如何加密</p><img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare006.png" class="show-img" data-v-d7b93574></div><div class="info custom-block" data-v-d7b93574><p class="custom-block-title" data-v-d7b93574>七、如何解密</p><img src="http://www.jwblog.cn/images/pc/code/share/encryptionShare007.png" class="show-img" data-v-d7b93574></div>`,9);function o(b,v,i,r,y,h){const a=d("c-title");return p(),e("div",null,[n(a,{title:"前端加密安全"}),c])}const m=s(l,[["render",o],["__scopeId","data-v-d7b93574"]]);export{u as __pageData,m as default};
