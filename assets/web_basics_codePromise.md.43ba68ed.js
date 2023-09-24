import{d as y,h as i,C as t,c as F,H as l,k as n,w as u,Q as B,o as C,a as o,t as g,p as h,m,_ as b}from"./chunks/framework.832b370e.js";import{m as p}from"./chunks/index.6bc670bd.js";const c=a=>(h("data-v-3361e19f"),a=a(),m(),a),_=c(()=>n("h2",{id:"示例",tabindex:"-1"},[o("示例 "),n("a",{class:"header-anchor",href:"#示例","aria-label":'Permalink to "示例"'},"​")],-1)),D={class:"info custom-block"},k=c(()=>n("p",{class:"custom-block-title"},"模拟请求：",-1)),A=B(`<h2 id="代码" tabindex="-1" data-v-3361e19f>代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;" data-v-3361e19f>​</a></h2><div class="info custom-block" data-v-3361e19f><p class="custom-block-title" data-v-3361e19f>一、三种状态</p><div class="language- vp-adaptive-theme" data-v-3361e19f><button title="Copy Code" class="copy" data-v-3361e19f></button><span class="lang" data-v-3361e19f></span><pre class="shiki github-dark vp-code-dark" data-v-3361e19f><code data-v-3361e19f><span class="line" data-v-3361e19f><span style="color:#e1e4e8;" data-v-3361e19f>等待中（pending）：初始状态，既没有被兑现，也没有被拒绝   常见于（网络请求，网速慢的情况下）。</span></span>
<span class="line" data-v-3361e19f><span style="color:#e1e4e8;" data-v-3361e19f>已兑现（fulfilled）：意味着操作成功完成   常见于（网络请求成功的情况下）。</span></span>
<span class="line" data-v-3361e19f><span style="color:#e1e4e8;" data-v-3361e19f>已拒绝（rejected）：意味着操作失败   常见于（网络请求失败的情况下）</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-3361e19f><code data-v-3361e19f><span class="line" data-v-3361e19f><span style="color:#24292e;" data-v-3361e19f>等待中（pending）：初始状态，既没有被兑现，也没有被拒绝   常见于（网络请求，网速慢的情况下）。</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292e;" data-v-3361e19f>已兑现（fulfilled）：意味着操作成功完成   常见于（网络请求成功的情况下）。</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292e;" data-v-3361e19f>已拒绝（rejected）：意味着操作失败   常见于（网络请求失败的情况下）</span></span></code></pre></div></div><div class="info custom-block" data-v-3361e19f><p class="custom-block-title" data-v-3361e19f>二、链式调用</p><div class="language-js vp-adaptive-theme" data-v-3361e19f><button title="Copy Code" class="copy" data-v-3361e19f></button><span class="lang" data-v-3361e19f>js</span><pre class="shiki github-dark vp-code-dark" data-v-3361e19f><code data-v-3361e19f><span class="line" data-v-3361e19f><span style="color:#79B8FF;" data-v-3361e19f>Promise</span><span style="color:#E1E4E8;" data-v-3361e19f>.</span><span style="color:#79B8FF;" data-v-3361e19f>prototype</span><span style="color:#E1E4E8;" data-v-3361e19f>.</span><span style="color:#B392F0;" data-v-3361e19f>then</span><span style="color:#E1E4E8;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>    （常见于）接口返回code</span><span style="color:#F97583;" data-v-3361e19f>==</span><span style="color:#E1E4E8;" data-v-3361e19f>200也只有接口返回状态是200才会进入.</span><span style="color:#B392F0;" data-v-3361e19f>then</span><span style="color:#E1E4E8;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f></span>
<span class="line" data-v-3361e19f><span style="color:#79B8FF;" data-v-3361e19f>Promise</span><span style="color:#E1E4E8;" data-v-3361e19f>.</span><span style="color:#79B8FF;" data-v-3361e19f>prototype</span><span style="color:#E1E4E8;" data-v-3361e19f>.</span><span style="color:#B392F0;" data-v-3361e19f>catch</span><span style="color:#E1E4E8;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>    （常见于）接口返回code</span><span style="color:#F97583;" data-v-3361e19f>!=</span><span style="color:#E1E4E8;" data-v-3361e19f>200.</span><span style="color:#B392F0;" data-v-3361e19f>catch</span><span style="color:#E1E4E8;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f></span>
<span class="line" data-v-3361e19f><span style="color:#79B8FF;" data-v-3361e19f>Promise</span><span style="color:#E1E4E8;" data-v-3361e19f>.</span><span style="color:#79B8FF;" data-v-3361e19f>prototype</span><span style="color:#E1E4E8;" data-v-3361e19f>.</span><span style="color:#B392F0;" data-v-3361e19f>finally</span><span style="color:#E1E4E8;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>    （现在比较流行做节流处理）接口返回失败和成功都会进入.</span><span style="color:#B392F0;" data-v-3361e19f>finally</span><span style="color:#E1E4E8;" data-v-3361e19f>()</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-3361e19f><code data-v-3361e19f><span class="line" data-v-3361e19f><span style="color:#005CC5;" data-v-3361e19f>Promise</span><span style="color:#24292E;" data-v-3361e19f>.</span><span style="color:#005CC5;" data-v-3361e19f>prototype</span><span style="color:#24292E;" data-v-3361e19f>.</span><span style="color:#6F42C1;" data-v-3361e19f>then</span><span style="color:#24292E;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>    （常见于）接口返回code</span><span style="color:#D73A49;" data-v-3361e19f>==</span><span style="color:#24292E;" data-v-3361e19f>200也只有接口返回状态是200才会进入.</span><span style="color:#6F42C1;" data-v-3361e19f>then</span><span style="color:#24292E;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f></span>
<span class="line" data-v-3361e19f><span style="color:#005CC5;" data-v-3361e19f>Promise</span><span style="color:#24292E;" data-v-3361e19f>.</span><span style="color:#005CC5;" data-v-3361e19f>prototype</span><span style="color:#24292E;" data-v-3361e19f>.</span><span style="color:#6F42C1;" data-v-3361e19f>catch</span><span style="color:#24292E;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>    （常见于）接口返回code</span><span style="color:#D73A49;" data-v-3361e19f>!=</span><span style="color:#24292E;" data-v-3361e19f>200.</span><span style="color:#6F42C1;" data-v-3361e19f>catch</span><span style="color:#24292E;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f></span>
<span class="line" data-v-3361e19f><span style="color:#005CC5;" data-v-3361e19f>Promise</span><span style="color:#24292E;" data-v-3361e19f>.</span><span style="color:#005CC5;" data-v-3361e19f>prototype</span><span style="color:#24292E;" data-v-3361e19f>.</span><span style="color:#6F42C1;" data-v-3361e19f>finally</span><span style="color:#24292E;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>    （现在比较流行做节流处理）接口返回失败和成功都会进入.</span><span style="color:#6F42C1;" data-v-3361e19f>finally</span><span style="color:#24292E;" data-v-3361e19f>()</span></span></code></pre></div></div><details class="details custom-block" data-v-3361e19f><summary data-v-3361e19f>源代码</summary><div class="language-js vp-adaptive-theme" data-v-3361e19f><button title="Copy Code" class="copy" data-v-3361e19f></button><span class="lang" data-v-3361e19f>js</span><pre class="shiki github-dark vp-code-dark" data-v-3361e19f><code data-v-3361e19f><span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>接口请求示范</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>&lt;</span><span style="color:#79B8FF;" data-v-3361e19f>a-button</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#B392F0;" data-v-3361e19f>type</span><span style="color:#F97583;" data-v-3361e19f>=</span><span style="color:#9ECBFF;" data-v-3361e19f>&quot;primary&quot;</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#FDAEB7;font-style:italic;" data-v-3361e19f>:loading=&quot;disabled&quot;</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#FDAEB7;font-style:italic;" data-v-3361e19f>@click=&quot;newButton&quot;&gt;{{</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#B392F0;" data-v-3361e19f>disabled</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#FDAEB7;font-style:italic;" data-v-3361e19f>?</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#9ECBFF;" data-v-3361e19f>&#39;等待请求中...&#39;</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#FDAEB7;font-style:italic;" data-v-3361e19f>:</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#9ECBFF;" data-v-3361e19f>&#39;模拟请求&#39;</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#FDAEB7;font-style:italic;" data-v-3361e19f>}}&lt;/a-button&gt;</span></span>
<span class="line" data-v-3361e19f></span>
<span class="line" data-v-3361e19f><span style="color:#B392F0;" data-v-3361e19f>function</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#FDAEB7;font-style:italic;" data-v-3361e19f>newButton()</span><span style="color:#E1E4E8;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>    </span><span style="color:#6A737D;" data-v-3361e19f>// 开启阀门，只有按钮事件执行完毕才会继续执行</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>    disabled.value </span><span style="color:#F97583;" data-v-3361e19f>=</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#79B8FF;" data-v-3361e19f>true</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>    </span><span style="color:#B392F0;" data-v-3361e19f>getDataQuery</span><span style="color:#E1E4E8;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>        .</span><span style="color:#B392F0;" data-v-3361e19f>then</span><span style="color:#E1E4E8;" data-v-3361e19f>(</span><span style="color:#FFAB70;" data-v-3361e19f>res</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#F97583;" data-v-3361e19f>=&gt;</span><span style="color:#E1E4E8;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>            ElMessage.</span><span style="color:#B392F0;" data-v-3361e19f>success</span><span style="color:#E1E4E8;" data-v-3361e19f>(res </span><span style="color:#F97583;" data-v-3361e19f>as</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#79B8FF;" data-v-3361e19f>string</span><span style="color:#E1E4E8;" data-v-3361e19f>)</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>        })</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>        .</span><span style="color:#B392F0;" data-v-3361e19f>catch</span><span style="color:#E1E4E8;" data-v-3361e19f>(() </span><span style="color:#F97583;" data-v-3361e19f>=&gt;</span><span style="color:#E1E4E8;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>            ElMessage.</span><span style="color:#B392F0;" data-v-3361e19f>error</span><span style="color:#E1E4E8;" data-v-3361e19f>(</span><span style="color:#9ECBFF;" data-v-3361e19f>&#39;接口请求失败&#39;</span><span style="color:#E1E4E8;" data-v-3361e19f>)</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>        })</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>        .</span><span style="color:#B392F0;" data-v-3361e19f>finally</span><span style="color:#E1E4E8;" data-v-3361e19f>(() </span><span style="color:#F97583;" data-v-3361e19f>=&gt;</span><span style="color:#E1E4E8;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>            disabled.value </span><span style="color:#F97583;" data-v-3361e19f>=</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#79B8FF;" data-v-3361e19f>false</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>        })</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>}</span></span>
<span class="line" data-v-3361e19f></span>
<span class="line" data-v-3361e19f><span style="color:#B392F0;" data-v-3361e19f>function</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#FDAEB7;font-style:italic;" data-v-3361e19f>getDataQuery()</span><span style="color:#E1E4E8;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>    return </span><span style="color:#F97583;" data-v-3361e19f>new</span><span style="color:#E1E4E8;" data-v-3361e19f> </span><span style="color:#79B8FF;" data-v-3361e19f>Promise</span><span style="color:#E1E4E8;" data-v-3361e19f>((</span><span style="color:#FFAB70;" data-v-3361e19f>resolve</span><span style="color:#E1E4E8;" data-v-3361e19f>, </span><span style="color:#FFAB70;" data-v-3361e19f>reject</span><span style="color:#E1E4E8;" data-v-3361e19f>) </span><span style="color:#F97583;" data-v-3361e19f>=&gt;</span><span style="color:#E1E4E8;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>        </span><span style="color:#B392F0;" data-v-3361e19f>setTimeout</span><span style="color:#E1E4E8;" data-v-3361e19f>(() </span><span style="color:#F97583;" data-v-3361e19f>=&gt;</span><span style="color:#E1E4E8;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>            </span><span style="color:#B392F0;" data-v-3361e19f>resolve</span><span style="color:#E1E4E8;" data-v-3361e19f>(</span><span style="color:#9ECBFF;" data-v-3361e19f>&#39;接口请求成功&#39;</span><span style="color:#E1E4E8;" data-v-3361e19f>)</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>        }, </span><span style="color:#79B8FF;" data-v-3361e19f>2000</span><span style="color:#E1E4E8;" data-v-3361e19f>)</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>    })</span></span>
<span class="line" data-v-3361e19f><span style="color:#E1E4E8;" data-v-3361e19f>}</span></span></code></pre><pre class="shiki github-light vp-code-light" data-v-3361e19f><code data-v-3361e19f><span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>接口请求示范</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>&lt;</span><span style="color:#005CC5;" data-v-3361e19f>a-button</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#6F42C1;" data-v-3361e19f>type</span><span style="color:#D73A49;" data-v-3361e19f>=</span><span style="color:#032F62;" data-v-3361e19f>&quot;primary&quot;</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#B31D28;font-style:italic;" data-v-3361e19f>:loading=&quot;disabled&quot;</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#B31D28;font-style:italic;" data-v-3361e19f>@click=&quot;newButton&quot;&gt;{{</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#6F42C1;" data-v-3361e19f>disabled</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#B31D28;font-style:italic;" data-v-3361e19f>?</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#032F62;" data-v-3361e19f>&#39;等待请求中...&#39;</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#B31D28;font-style:italic;" data-v-3361e19f>:</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#032F62;" data-v-3361e19f>&#39;模拟请求&#39;</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#B31D28;font-style:italic;" data-v-3361e19f>}}&lt;/a-button&gt;</span></span>
<span class="line" data-v-3361e19f></span>
<span class="line" data-v-3361e19f><span style="color:#6F42C1;" data-v-3361e19f>function</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#B31D28;font-style:italic;" data-v-3361e19f>newButton()</span><span style="color:#24292E;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>    </span><span style="color:#6A737D;" data-v-3361e19f>// 开启阀门，只有按钮事件执行完毕才会继续执行</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>    disabled.value </span><span style="color:#D73A49;" data-v-3361e19f>=</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#005CC5;" data-v-3361e19f>true</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>    </span><span style="color:#6F42C1;" data-v-3361e19f>getDataQuery</span><span style="color:#24292E;" data-v-3361e19f>()</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>        .</span><span style="color:#6F42C1;" data-v-3361e19f>then</span><span style="color:#24292E;" data-v-3361e19f>(</span><span style="color:#E36209;" data-v-3361e19f>res</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#D73A49;" data-v-3361e19f>=&gt;</span><span style="color:#24292E;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>            ElMessage.</span><span style="color:#6F42C1;" data-v-3361e19f>success</span><span style="color:#24292E;" data-v-3361e19f>(res </span><span style="color:#D73A49;" data-v-3361e19f>as</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#005CC5;" data-v-3361e19f>string</span><span style="color:#24292E;" data-v-3361e19f>)</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>        })</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>        .</span><span style="color:#6F42C1;" data-v-3361e19f>catch</span><span style="color:#24292E;" data-v-3361e19f>(() </span><span style="color:#D73A49;" data-v-3361e19f>=&gt;</span><span style="color:#24292E;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>            ElMessage.</span><span style="color:#6F42C1;" data-v-3361e19f>error</span><span style="color:#24292E;" data-v-3361e19f>(</span><span style="color:#032F62;" data-v-3361e19f>&#39;接口请求失败&#39;</span><span style="color:#24292E;" data-v-3361e19f>)</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>        })</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>        .</span><span style="color:#6F42C1;" data-v-3361e19f>finally</span><span style="color:#24292E;" data-v-3361e19f>(() </span><span style="color:#D73A49;" data-v-3361e19f>=&gt;</span><span style="color:#24292E;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>            disabled.value </span><span style="color:#D73A49;" data-v-3361e19f>=</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#005CC5;" data-v-3361e19f>false</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>        })</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>}</span></span>
<span class="line" data-v-3361e19f></span>
<span class="line" data-v-3361e19f><span style="color:#6F42C1;" data-v-3361e19f>function</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#B31D28;font-style:italic;" data-v-3361e19f>getDataQuery()</span><span style="color:#24292E;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>    return </span><span style="color:#D73A49;" data-v-3361e19f>new</span><span style="color:#24292E;" data-v-3361e19f> </span><span style="color:#005CC5;" data-v-3361e19f>Promise</span><span style="color:#24292E;" data-v-3361e19f>((</span><span style="color:#E36209;" data-v-3361e19f>resolve</span><span style="color:#24292E;" data-v-3361e19f>, </span><span style="color:#E36209;" data-v-3361e19f>reject</span><span style="color:#24292E;" data-v-3361e19f>) </span><span style="color:#D73A49;" data-v-3361e19f>=&gt;</span><span style="color:#24292E;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>        </span><span style="color:#6F42C1;" data-v-3361e19f>setTimeout</span><span style="color:#24292E;" data-v-3361e19f>(() </span><span style="color:#D73A49;" data-v-3361e19f>=&gt;</span><span style="color:#24292E;" data-v-3361e19f> {</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>            </span><span style="color:#6F42C1;" data-v-3361e19f>resolve</span><span style="color:#24292E;" data-v-3361e19f>(</span><span style="color:#032F62;" data-v-3361e19f>&#39;接口请求成功&#39;</span><span style="color:#24292E;" data-v-3361e19f>)</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>        }, </span><span style="color:#005CC5;" data-v-3361e19f>2000</span><span style="color:#24292E;" data-v-3361e19f>)</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>    })</span></span>
<span class="line" data-v-3361e19f><span style="color:#24292E;" data-v-3361e19f>}</span></span></code></pre></div></details>`,4),x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/basics/codePromise.md","filePath":"web/basics/codePromise.md"}'),P={name:"web/basics/codePromise.md"},q=y({...P,setup(a){const s=i(!1);function d(){s.value=!0,f().then(e=>{p.success(e)}).catch(()=>{p.error("接口请求失败")}).finally(()=>{s.value=!1})}function f(){return new Promise((e,v)=>{setTimeout(()=>{e("接口请求成功")},2e3)})}return(e,v)=>{const r=t("c-title"),E=t("a-button");return C(),F("div",null,[l(r,{title:"Promise理解"}),_,n("div",D,[k,l(E,{type:"primary",loading:s.value,onClick:d},{default:u(()=>[o(g(s.value?"等待请求中...":"模拟请求"),1)]),_:1},8,["loading"])]),A])}}});const Q=b(q,[["__scopeId","data-v-3361e19f"]]);export{x as __pageData,Q as default};