(function(){var $parcel$global="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},$parcel$modules={},$parcel$inits={},parcelRequire=$parcel$global.parcelRequireff1f;null==parcelRequire&&(parcelRequire=function(r){if(r in $parcel$modules)return $parcel$modules[r].exports;if(r in $parcel$inits){var t=$parcel$inits[r];delete $parcel$inits[r];var n={id:r,exports:{}};return $parcel$modules[r]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i},parcelRequire.register=function(r,t){$parcel$inits[r]=t},$parcel$global.parcelRequireff1f=parcelRequire),parcelRequire.register("fSCrk",(function(module,exports){var listEl=document.querySelector('[data-info="list"]'),inputEl=document.querySelector('[data-info="input"]'),historyEl=document.querySelector(".history__list"),inputValue="",inputArray=[];function onInput(r){isCorrectInput(r),"."===r&&checkDots(),"factorial"===r&&checkFactorial(),inputValue=inputArray.join(""),inputEl.value=inputValue}function onSolve(){if(""!==inputValue){checkZeros();var result=eval(inputValue);inputEl.value=result,setTimeout(renderHistory(result),1e3),inputValue="",inputArray.splice(0,inputArray.length),inputArray.push(result);var resultString="".concat(result),resultArray=resultString.split("");inputArray.pop(),resultArray.map((function(r){inputArray.push(r)}))}}function isCorrectInput(r){if(1===inputArray.length&&(" * "===inputArray[0]||" / "===inputArray[0]||"% "===inputArray[0]||") "===inputArray[0]||"! "===inputArray[0]||"^2 "===inputArray[0])||"."===inputArray[0])return inputArray.pop(),void alert("Це не може бути першим символом");if(" + "!==r&&" - "!==r&&" * "!==r&&" / "!==r||" + "!==inputArray[inputArray.length-2]&&" - "!==inputArray[inputArray.length-2]&&" * "!==inputArray[inputArray.length-2]&&" / "!==inputArray[inputArray.length-2]){if("."!==r||"."!==inputArray[inputArray.length-2]){if("0"===r&&" / "===inputArray[inputArray.length-2])return inputArray.pop(),void alert("На нуль не ділимо");if(" ( "===r&&("1"===inputArray[inputArray.length-2]||"2"===inputArray[inputArray.length-2]||"3"===inputArray[inputArray.length-2]||"4"===inputArray[inputArray.length-2]||"5"===inputArray[inputArray.length-2]||"6"===inputArray[inputArray.length-2]||"7"===inputArray[inputArray.length-2]||"8"===inputArray[inputArray.length-2]||"9"===inputArray[inputArray.length-2]||"0"===inputArray[inputArray.length-2]))return inputArray.pop(),inputArray.push(" * "),void inputArray.push("(");if(" ( "===r&&(" + "===inputArray[inputArray.length-2]||" - "===inputArray[inputArray.length-2]||" * "===inputArray[inputArray.length-2]||" / "===inputArray[inputArray.length-2]||"+ "===inputArray[inputArray.length-2]||"- "===inputArray[inputArray.length-2]||"* "===inputArray[inputArray.length-2]||"/ "===inputArray[inputArray.length-2])){var t=inputArray[inputArray.length-2];return inputArray.pop(),inputArray.pop(),inputArray.push(""),inputArray.push(t),void inputArray.push("(")}if(") "===inputArray[inputArray.length-2]&&("1"===inputArray[inputArray.length-1]||"2"===inputArray[inputArray.length-1]||"3"===inputArray[inputArray.length-1]||"4"===inputArray[inputArray.length-1]||"5"===inputArray[inputArray.length-1]||"6"===inputArray[inputArray.length-1]||"7"===inputArray[inputArray.length-1]||"8"===inputArray[inputArray.length-1]||"9"===inputArray[inputArray.length-1]||"0"===inputArray[inputArray.length-1])){var n=inputArray[inputArray.length-1];return inputArray.pop(),inputArray.push("*"),inputArray.push(" "),void inputArray.push(n)}if(") "===inputArray[inputArray.length-2]&&(" + "===inputArray[inputArray.length-1]||" - "===inputArray[inputArray.length-1]||" * "===inputArray[inputArray.length-1]||" / "===inputArray[inputArray.length-1]||"+ "===inputArray[inputArray.length-1]||"- "===inputArray[inputArray.length-1]||"* "===inputArray[inputArray.length-1]||"/ "===inputArray[inputArray.length-1])){var i=inputArray[inputArray.length-1];return inputArray.pop(),inputArray.pop(),inputArray.push(")"),void inputArray.push(i)}return") "===inputArray[inputArray.length-2]&&" ("===inputArray[inputArray.length-1]?(inputArray.pop(),inputArray.push("*"),void inputArray.push(" (")):void 0}inputArray.pop()}else inputArray.pop()}function checkZeros(){var r=inputValue.split(" "),t=[];r.map((function(r){var n=r.split("");if(1!==n.length)for(;0===n.indexOf("0");)n.shift();t.push(n.join(""))})),inputValue=t.join(" ")}function checkDots(){inputValue.split(" ").map((function(r){r.split("").includes(".")&&inputArray.pop()}))}function checkFactorial(){inputValue.split(" ").map((function(r){for(var t=r.split(""),n=t.length+2,i=Number(r),p=1,u=1;u<i+1;u+=1)p*=u;for(var a=p.toString().split("");0!==t.length;)t.pop();for(var e=1;e<n;e+=1)inputArray.pop();var l=!0,y=!1,A=void 0;try{for(var o,s=a[Symbol.iterator]();!(l=(o=s.next()).done);l=!0){var h=o.value;inputArray.push(h)}}catch(r){y=!0,A=r}finally{try{l||null==s.return||s.return()}finally{if(y)throw A}}p=1,t.includes(".")&&inputArray.pop()}))}function renderHistory(r){10===historyEl.children.length&&historyEl.removeChild(historyEl.lastElementChild);var t='<li class="history__item"><span class="opacity">'.concat(inputValue,"</span>&nbsp&nbsp = &nbsp&nbsp<b>").concat(r,"</b></li>");historyEl.insertAdjacentHTML("afterbegin",t),document.querySelector(".history__item").classList.add("animate")}listEl.addEventListener("click",(function(r){var t=r.target.dataset.info;if("="!==t){if("+"===t||"-"===t||"*"===t||"/"===t)return inputArray.push(" ".concat(t," ")),void onInput(" ".concat(t," "));if("%"===t||")"===t||"^2"===t||"!"===t)return inputArray.push("".concat(t," ")),void onInput("".concat(t," "));if("("===t)return inputArray.push(" ".concat(t)),void onInput(" ".concat(t," "));if("."===t||"0"===t)return inputArray.push(t),void onInput(t);if("AC"===t)return"."===inputArray[inputArray.length-2]?(inputArray.pop(),inputArray.pop(),void onInput()):(inputArray.pop(),void onInput());if("clearInput"!==t){if("list"!==t&&"input"!==t){if("pi"===t)return inputArray.push("3.1415"),void onInput();if("x^2"===t){var n=Number(inputArray[inputArray.length-1]);return inputArray.pop(),inputArray.push("Math.pow(".concat(n,", 2)")),void onInput()}if("sqrt"===t){var i=Number(inputArray[inputArray.length-1]);return inputArray.pop(),inputArray.push("Math.sqrt(".concat(i,", 2)")),void onInput()}if("factorial"===t)return inputArray.push("!"),void onInput(t);"clearHistory"!==t?(inputArray.push(t),onInput()):historyEl.innerHTML=""}}else{for(;0!==inputArray.length;)inputArray.pop();onInput()}}else onSolve()}))})),parcelRequire("fSCrk")})();
//# sourceMappingURL=index.33513a55.js.map