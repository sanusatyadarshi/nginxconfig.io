(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[888],{1888:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>u});var o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{class:"column "+(e.half?"is-half":"is-full")+" is-full-mobile is-full-tablet",on:{copied:e.copied}},[r("h3",{domProps:{innerHTML:e._s(e.name)}}),r("pre",[r("code",{staticClass:"language-docker",domProps:{innerHTML:e._s(e.conf)}})])])},t=[],i=(r(7158),r(3098));const s={name:"DockerPrism",props:{name:String,conf:String,half:Boolean},mounted(){(0,i.um)(`Highlighting ${this.$props.name}...`),window.Prism.highlightAllUnder(this.$el)},methods:{copied(e){this.$emit("copied",e.detail.text)}}},l=s;var a=r(1001),c=(0,a.Z)(l,o,t,!1,null,null,null);const u=c.exports},7158:()=>{(function(e){var n=/\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,r=/(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g,(function(){return n})),o=/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,t=/--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g,(function(){return o})),i={pattern:RegExp(o),greedy:!0},s={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function l(e,n){return e=e.replace(/<OPT>/g,(function(){return t})).replace(/<SP>/g,(function(){return r})),RegExp(e,n)}e.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:l(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source,"i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[i,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:l(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source,"i"),lookbehind:!0,greedy:!0},{pattern:l(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source,"i"),lookbehind:!0,greedy:!0},{pattern:l(/(^ONBUILD<SP>)\w+/.source,"i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:s,string:i,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:s},e.languages.dockerfile=e.languages.docker})(Prism)}}]);