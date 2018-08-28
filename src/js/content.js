$ = require("jQuery");

$(() => {
  let a = `
<li id="_to" class="_showDescription chatInput__to" role="button" aria-label="To：相手に呼びかけることができます" style="display: list-item;">
<span class="chatInput__iconContainer">
  <svg viewBox="0 0 10 10" width="16" height="16" class="chatInput__icon">
    <use fill-rule="evenodd" xlink:href="#icon_mention"></use>
  </svg>
</span>
</li>
`

  $("#_chatSendTool").append($(a));
  console.log($("#_chatSendTool").length)
});