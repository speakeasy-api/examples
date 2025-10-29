<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>F1 Race API</title>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset("/vendor/scribe/css/theme-default.style.css") }}" media="screen">
    <link rel="stylesheet" href="{{ asset("/vendor/scribe/css/theme-default.print.css") }}" media="print">

    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>

    <link rel="stylesheet"
          href="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/obsidian.min.css">
    <script src="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/highlight.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jets/0.14.1/jets.min.js"></script>

    <style id="language-style">
        /* starts out as display none and is replaced with js later  */
                    body .content .bash-example code { display: none; }
                    body .content .javascript-example code { display: none; }
            </style>

    <script>
        var tryItOutBaseUrl = "http://localhost";
        var useCsrf = Boolean();
        var csrfUrl = "/sanctum/csrf-cookie";
    </script>
    <script src="{{ asset("/vendor/scribe/js/tryitout-5.5.0.js") }}"></script>

    <script src="{{ asset("/vendor/scribe/js/theme-default-5.5.0.js") }}"></script>

</head>

<body data-languages="[&quot;bash&quot;,&quot;javascript&quot;]">

<a href="#" id="nav-button">
    <span>
        MENU
        <img src="{{ asset("/vendor/scribe/images/navbar.png") }}" alt="navbar-image"/>
    </span>
</a>
<div class="tocify-wrapper">
    
            <div class="lang-selector">
                                            <button type="button" class="lang-button" data-language-name="bash">bash</button>
                                            <button type="button" class="lang-button" data-language-name="javascript">javascript</button>
                    </div>
    
    <div class="search">
        <input type="text" class="search" id="input-search" placeholder="Search">
    </div>

    <div id="toc">
                    <ul id="tocify-header-introduction" class="tocify-header">
                <li class="tocify-item level-1" data-unique="introduction">
                    <a href="#introduction">Introduction</a>
                </li>
                            </ul>
                    <ul id="tocify-header-authenticating-requests" class="tocify-header">
                <li class="tocify-item level-1" data-unique="authenticating-requests">
                    <a href="#authenticating-requests">Authenticating requests</a>
                </li>
                            </ul>
                    <ul id="tocify-header-endpoints" class="tocify-header">
                <li class="tocify-item level-1" data-unique="endpoints">
                    <a href="#endpoints">Endpoints</a>
                </li>
                                    <ul id="tocify-subheader-endpoints" class="tocify-subheader">
                                                    <li class="tocify-item level-2" data-unique="endpoints-GETapi-health">
                                <a href="#endpoints-GETapi-health">GET api/health</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-drivers">
                                <a href="#endpoints-GETapi-drivers">Display a listing of the resource.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-drivers--id-">
                                <a href="#endpoints-GETapi-drivers--id-">Display the specified resource.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-circuits">
                                <a href="#endpoints-GETapi-circuits">Display a listing of the resource.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-circuits--id-">
                                <a href="#endpoints-GETapi-circuits--id-">Display the specified resource.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-races">
                                <a href="#endpoints-GETapi-races">Display a listing of the resource.</a>
                            </li>
                                                                                <li class="tocify-item level-2" data-unique="endpoints-GETapi-races--id-">
                                <a href="#endpoints-GETapi-races--id-">Display the specified resource.</a>
                            </li>
                                                                        </ul>
                            </ul>
            </div>

    <ul class="toc-footer" id="toc-footer">
                    <li style="padding-bottom: 5px;"><a href="{{ route("scribe.postman") }}">View Postman collection</a></li>
                            <li style="padding-bottom: 5px;"><a href="{{ route("scribe.openapi") }}">View OpenAPI spec</a></li>
                <li><a href="http://github.com/knuckleswtf/scribe">Documentation powered by Scribe ✍</a></li>
    </ul>

    <ul class="toc-footer" id="last-updated">
        <li>Last updated: November 3, 2025</li>
    </ul>
</div>

<div class="page-wrapper">
    <div class="dark-box"></div>
    <div class="content">
        <h1 id="introduction">Introduction</h1>
<p>API for managing Formula 1 races, drivers, and circuits</p>
<aside>
    <strong>Base URL</strong>: <code>http://localhost</code>
</aside>
<pre><code>Welcome to the F1 Race API documentation!
This documentation aims to provide all the information you need to work with our API.</code></pre>

        <h1 id="authenticating-requests">Authenticating requests</h1>
<p>This API is not authenticated.</p>

        <h1 id="endpoints">Endpoints</h1>

    

                                <h2 id="endpoints-GETapi-health">GET api/health</h2>

<p>
</p>



<span id="example-requests-GETapi-health">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/health" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/health"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-health">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;status&quot;: &quot;healthy&quot;,
    &quot;version&quot;: &quot;unversioned&quot;,
    &quot;timestamp&quot;: &quot;2025-11-03T10:55:55+00:00&quot;
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-health" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-health"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-health"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-health" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-health">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-health" data-method="GET"
      data-path="api/health"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-health', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-health"
                    onclick="tryItOut('GETapi-health');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-health"
                    onclick="cancelTryOut('GETapi-health');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-health"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/health</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-health"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-health"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-drivers">Display a listing of the resource.</h2>

<p>
</p>



<span id="example-requests-GETapi-drivers">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/drivers" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/drivers"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-drivers">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;data&quot;: [
        {
            &quot;id&quot;: 1,
            &quot;name&quot;: &quot;Max Verstappen&quot;,
            &quot;code&quot;: &quot;VER&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 2,
            &quot;name&quot;: &quot;Sergio Perez&quot;,
            &quot;code&quot;: &quot;PER&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 3,
            &quot;name&quot;: &quot;Lewis Hamilton&quot;,
            &quot;code&quot;: &quot;HAM&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 4,
            &quot;name&quot;: &quot;George Russell&quot;,
            &quot;code&quot;: &quot;RUS&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 5,
            &quot;name&quot;: &quot;Charles Leclerc&quot;,
            &quot;code&quot;: &quot;LEC&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 6,
            &quot;name&quot;: &quot;Carlos Sainz&quot;,
            &quot;code&quot;: &quot;SAI&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 7,
            &quot;name&quot;: &quot;Lando Norris&quot;,
            &quot;code&quot;: &quot;NOR&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 8,
            &quot;name&quot;: &quot;Oscar Piastri&quot;,
            &quot;code&quot;: &quot;PIA&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 9,
            &quot;name&quot;: &quot;Fernando Alonso&quot;,
            &quot;code&quot;: &quot;ALO&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 10,
            &quot;name&quot;: &quot;Lance Stroll&quot;,
            &quot;code&quot;: &quot;STR&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        }
    ],
    &quot;meta&quot;: {
        &quot;count&quot;: 10
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-drivers" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-drivers"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-drivers"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-drivers" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-drivers">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-drivers" data-method="GET"
      data-path="api/drivers"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-drivers', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-drivers"
                    onclick="tryItOut('GETapi-drivers');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-drivers"
                    onclick="cancelTryOut('GETapi-drivers');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-drivers"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/drivers</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-drivers"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-drivers"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-drivers--id-">Display the specified resource.</h2>

<p>
</p>



<span id="example-requests-GETapi-drivers--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/drivers/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/drivers/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-drivers--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;name&quot;: &quot;Max Verstappen&quot;,
        &quot;code&quot;: &quot;VER&quot;,
        &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
        &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-drivers--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-drivers--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-drivers--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-drivers--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-drivers--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-drivers--id-" data-method="GET"
      data-path="api/drivers/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-drivers--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-drivers--id-"
                    onclick="tryItOut('GETapi-drivers--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-drivers--id-"
                    onclick="cancelTryOut('GETapi-drivers--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-drivers--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/drivers/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-drivers--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-drivers--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-drivers--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the driver. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-circuits">Display a listing of the resource.</h2>

<p>
</p>



<span id="example-requests-GETapi-circuits">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/circuits" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/circuits"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-circuits">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;data&quot;: [
        {
            &quot;id&quot;: 1,
            &quot;name&quot;: &quot;Monaco Grand Prix&quot;,
            &quot;location&quot;: &quot;Monte Carlo, Monaco&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 2,
            &quot;name&quot;: &quot;British Grand Prix&quot;,
            &quot;location&quot;: &quot;Silverstone, United Kingdom&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 3,
            &quot;name&quot;: &quot;Italian Grand Prix&quot;,
            &quot;location&quot;: &quot;Monza, Italy&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 4,
            &quot;name&quot;: &quot;Belgian Grand Prix&quot;,
            &quot;location&quot;: &quot;Spa-Francorchamps, Belgium&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 5,
            &quot;name&quot;: &quot;Japanese Grand Prix&quot;,
            &quot;location&quot;: &quot;Suzuka, Japan&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 6,
            &quot;name&quot;: &quot;Singapore Grand Prix&quot;,
            &quot;location&quot;: &quot;Marina Bay, Singapore&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 7,
            &quot;name&quot;: &quot;Abu Dhabi Grand Prix&quot;,
            &quot;location&quot;: &quot;Yas Marina, UAE&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 8,
            &quot;name&quot;: &quot;Brazilian Grand Prix&quot;,
            &quot;location&quot;: &quot;Interlagos, Brazil&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 9,
            &quot;name&quot;: &quot;Australian Grand Prix&quot;,
            &quot;location&quot;: &quot;Melbourne, Australia&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        },
        {
            &quot;id&quot;: 10,
            &quot;name&quot;: &quot;Spanish Grand Prix&quot;,
            &quot;location&quot;: &quot;Barcelona, Spain&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
        }
    ],
    &quot;meta&quot;: {
        &quot;count&quot;: 10
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-circuits" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-circuits"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-circuits"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-circuits" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-circuits">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-circuits" data-method="GET"
      data-path="api/circuits"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-circuits', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-circuits"
                    onclick="tryItOut('GETapi-circuits');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-circuits"
                    onclick="cancelTryOut('GETapi-circuits');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-circuits"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/circuits</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-circuits"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-circuits"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-circuits--id-">Display the specified resource.</h2>

<p>
</p>



<span id="example-requests-GETapi-circuits--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/circuits/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/circuits/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-circuits--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;name&quot;: &quot;Monaco Grand Prix&quot;,
        &quot;location&quot;: &quot;Monte Carlo, Monaco&quot;,
        &quot;created_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;,
        &quot;updated_at&quot;: &quot;2025-10-29T17:21:39.000000Z&quot;
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-circuits--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-circuits--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-circuits--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-circuits--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-circuits--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-circuits--id-" data-method="GET"
      data-path="api/circuits/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-circuits--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-circuits--id-"
                    onclick="tryItOut('GETapi-circuits--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-circuits--id-"
                    onclick="cancelTryOut('GETapi-circuits--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-circuits--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/circuits/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-circuits--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-circuits--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-circuits--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the circuit. Example: <code>1</code></p>
            </div>
                    </form>

                    <h2 id="endpoints-GETapi-races">Display a listing of the resource.</h2>

<p>
</p>



<span id="example-requests-GETapi-races">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/races" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/races"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-races">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;data&quot;: [
        {
            &quot;id&quot;: 1,
            &quot;name&quot;: &quot;2024 Monaco Grand Prix&quot;,
            &quot;race_date&quot;: &quot;2024-05-26&quot;,
            &quot;season&quot;: &quot;2024&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
            &quot;links&quot;: {
                &quot;self&quot;: &quot;http://localhost/api/races/1&quot;,
                &quot;circuit&quot;: &quot;http://localhost/api/circuits/1&quot;,
                &quot;drivers&quot;: &quot;http://localhost/api/drivers?race=1&quot;
            }
        },
        {
            &quot;id&quot;: 2,
            &quot;name&quot;: &quot;2024 British Grand Prix&quot;,
            &quot;race_date&quot;: &quot;2024-07-07&quot;,
            &quot;season&quot;: &quot;2024&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
            &quot;links&quot;: {
                &quot;self&quot;: &quot;http://localhost/api/races/2&quot;,
                &quot;circuit&quot;: &quot;http://localhost/api/circuits/2&quot;,
                &quot;drivers&quot;: &quot;http://localhost/api/drivers?race=2&quot;
            }
        },
        {
            &quot;id&quot;: 3,
            &quot;name&quot;: &quot;2024 Italian Grand Prix&quot;,
            &quot;race_date&quot;: &quot;2024-09-01&quot;,
            &quot;season&quot;: &quot;2024&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
            &quot;links&quot;: {
                &quot;self&quot;: &quot;http://localhost/api/races/3&quot;,
                &quot;circuit&quot;: &quot;http://localhost/api/circuits/3&quot;,
                &quot;drivers&quot;: &quot;http://localhost/api/drivers?race=3&quot;
            }
        },
        {
            &quot;id&quot;: 4,
            &quot;name&quot;: &quot;2024 Belgian Grand Prix&quot;,
            &quot;race_date&quot;: &quot;2024-07-28&quot;,
            &quot;season&quot;: &quot;2024&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
            &quot;links&quot;: {
                &quot;self&quot;: &quot;http://localhost/api/races/4&quot;,
                &quot;circuit&quot;: &quot;http://localhost/api/circuits/4&quot;,
                &quot;drivers&quot;: &quot;http://localhost/api/drivers?race=4&quot;
            }
        },
        {
            &quot;id&quot;: 5,
            &quot;name&quot;: &quot;2024 Japanese Grand Prix&quot;,
            &quot;race_date&quot;: &quot;2024-04-07&quot;,
            &quot;season&quot;: &quot;2024&quot;,
            &quot;created_at&quot;: &quot;2025-10-29T17:21:40+00:00&quot;,
            &quot;updated_at&quot;: &quot;2025-10-29T17:21:40+00:00&quot;,
            &quot;links&quot;: {
                &quot;self&quot;: &quot;http://localhost/api/races/5&quot;,
                &quot;circuit&quot;: &quot;http://localhost/api/circuits/5&quot;,
                &quot;drivers&quot;: &quot;http://localhost/api/drivers?race=5&quot;
            }
        }
    ],
    &quot;meta&quot;: {
        &quot;count&quot;: 5
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-races" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-races"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-races"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-races" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-races">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-races" data-method="GET"
      data-path="api/races"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-races', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-races"
                    onclick="tryItOut('GETapi-races');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-races"
                    onclick="cancelTryOut('GETapi-races');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-races"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/races</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-races"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-races"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        </form>

                    <h2 id="endpoints-GETapi-races--id-">Display the specified resource.</h2>

<p>
</p>



<span id="example-requests-GETapi-races--id-">
<blockquote>Example request:</blockquote>


<div class="bash-example">
    <pre><code class="language-bash">curl --request GET \
    --get "http://localhost/api/races/1" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"</code></pre></div>


<div class="javascript-example">
    <pre><code class="language-javascript">const url = new URL(
    "http://localhost/api/races/1"
);

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
}).then(response =&gt; response.json());</code></pre></div>

</span>

<span id="example-responses-GETapi-races--id-">
            <blockquote>
            <p>Example response (200):</p>
        </blockquote>
                <details class="annotation">
            <summary style="cursor: pointer;">
                <small onclick="textContent = parentElement.parentElement.open ? 'Show headers' : 'Hide headers'">Show headers</small>
            </summary>
            <pre><code class="language-http">cache-control: no-cache, private
content-type: application/json
access-control-allow-origin: *
 </code></pre></details>         <pre>

<code class="language-json" style="max-height: 300px;">{
    &quot;data&quot;: {
        &quot;id&quot;: 1,
        &quot;name&quot;: &quot;2024 Monaco Grand Prix&quot;,
        &quot;race_date&quot;: &quot;2024-05-26&quot;,
        &quot;season&quot;: &quot;2024&quot;,
        &quot;created_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
        &quot;updated_at&quot;: &quot;2025-10-29T17:21:39+00:00&quot;,
        &quot;links&quot;: {
            &quot;self&quot;: &quot;http://localhost/api/races/1&quot;,
            &quot;circuit&quot;: &quot;http://localhost/api/circuits/1&quot;,
            &quot;drivers&quot;: &quot;http://localhost/api/drivers?race=1&quot;
        }
    }
}</code>
 </pre>
    </span>
<span id="execution-results-GETapi-races--id-" hidden>
    <blockquote>Received response<span
                id="execution-response-status-GETapi-races--id-"></span>:
    </blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-races--id-"
      data-empty-response-text="<Empty response>" style="max-height: 400px;"></code></pre>
</span>
<span id="execution-error-GETapi-races--id-" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-races--id-">

Tip: Check that you&#039;re properly connected to the network.
If you&#039;re a maintainer of ths API, verify that your API is running and you&#039;ve enabled CORS.
You can check the Dev Tools console for debugging information.</code></pre>
</span>
<form id="form-GETapi-races--id-" data-method="GET"
      data-path="api/races/{id}"
      data-authed="0"
      data-hasfiles="0"
      data-isarraybody="0"
      autocomplete="off"
      onsubmit="event.preventDefault(); executeTryOut('GETapi-races--id-', this);">
    <h3>
        Request&nbsp;&nbsp;&nbsp;
                    <button type="button"
                    style="background-color: #8fbcd4; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-tryout-GETapi-races--id-"
                    onclick="tryItOut('GETapi-races--id-');">Try it out ⚡
            </button>
            <button type="button"
                    style="background-color: #c97a7e; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-canceltryout-GETapi-races--id-"
                    onclick="cancelTryOut('GETapi-races--id-');" hidden>Cancel 🛑
            </button>&nbsp;&nbsp;
            <button type="submit"
                    style="background-color: #6ac174; padding: 5px 10px; border-radius: 5px; border-width: thin;"
                    id="btn-executetryout-GETapi-races--id-"
                    data-initial-text="Send Request 💥"
                    data-loading-text="⏱ Sending..."
                    hidden>Send Request 💥
            </button>
            </h3>
            <p>
            <small class="badge badge-green">GET</small>
            <b><code>api/races/{id}</code></b>
        </p>
                <h4 class="fancy-heading-panel"><b>Headers</b></h4>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Content-Type</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Content-Type"                data-endpoint="GETapi-races--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                                <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>Accept</code></b>&nbsp;&nbsp;
&nbsp;
 &nbsp;
 &nbsp;
                <input type="text" style="display: none"
                              name="Accept"                data-endpoint="GETapi-races--id-"
               value="application/json"
               data-component="header">
    <br>
<p>Example: <code>application/json</code></p>
            </div>
                        <h4 class="fancy-heading-panel"><b>URL Parameters</b></h4>
                    <div style="padding-left: 28px; clear: unset;">
                <b style="line-height: 2;"><code>id</code></b>&nbsp;&nbsp;
<small>integer</small>&nbsp;
 &nbsp;
 &nbsp;
                <input type="number" style="display: none"
               step="any"               name="id"                data-endpoint="GETapi-races--id-"
               value="1"
               data-component="url">
    <br>
<p>The ID of the race. Example: <code>1</code></p>
            </div>
                    </form>

            

        
    </div>
    <div class="dark-box">
                    <div class="lang-selector">
                                                        <button type="button" class="lang-button" data-language-name="bash">bash</button>
                                                        <button type="button" class="lang-button" data-language-name="javascript">javascript</button>
                            </div>
            </div>
</div>
</body>
</html>
