(function(exports) {

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion

//#region solid-js/web
var require_web = __commonJS({ "solid-js/web"(exports, module) {
	module.exports = shelter.solidWeb;
} });

//#endregion
//#region plugins/canned-responses/index.jsx
var import_web = __toESM(require_web(), 1);
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
var import_web$3 = __toESM(require_web(), 1);
var import_web$4 = __toESM(require_web(), 1);
var import_web$5 = __toESM(require_web(), 1);
var import_web$6 = __toESM(require_web(), 1);
var import_web$7 = __toESM(require_web(), 1);
var import_web$8 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<div class="pr-2"><div class="add-response"></div><!#><!/></div>`, 6), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<div class="buttons-container"><!#><!/><!#><!/></div>`, 6), _tmpl$3 = /*#__PURE__*/ (0, import_web.template)(`<div class="response"><div class="header"><!#><!/><div class="buttons"></div></div><!#><!/></div>`, 10), _tmpl$4 = /*#__PURE__*/ (0, import_web.template)(`<div class="send-popout"><div class="header"><h3>Canned Responses</h3><!#><!/></div><div class="body"></div></div>`, 10), _tmpl$5 = /*#__PURE__*/ (0, import_web.template)(`<div></div>`, 2), _tmpl$6 = /*#__PURE__*/ (0, import_web.template)(`<div class="no-responses"><h4>No canned responses</h4><p>Click the "Manage" button to add some.</p></div>`, 6), _tmpl$7 = /*#__PURE__*/ (0, import_web.template)(`<div id="canned-responses"><button><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22" height="22" fill="currentColor"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path></svg></div></button></div>`, 10);
const { observeDom, ui: { injectCss, Button, openModal, ModalRoot, ModalHeader, ModalBody, ModalFooter, ModalSizes, ButtonColors, ButtonSizes, TextArea, TextBox, niceScrollbarsClass, showToast }, plugin: { store }, util: { getFiber } } = shelter;
if (!store.responses) store.responses = [];
let closeManagementModal = null;
const managementModal = () => (0, import_web$8.createComponent)(ModalRoot, {
	get size() {
		return ModalSizes.MEDIUM;
	},
	get children() {
		return [
			(0, import_web$8.createComponent)(ModalHeader, {
				close: () => closeManagementModal(),
				children: "Canned Responses"
			}),
			(0, import_web$8.createComponent)(ModalBody, { get children() {
				const _el$ = (0, import_web$5.getNextElement)(_tmpl$), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, [_el$4, _co$] = (0, import_web$6.getNextMarker)(_el$3.nextSibling);
				(0, import_web$7.insert)(_el$2, (0, import_web$8.createComponent)(Button, {
					onClick: () => {
						store.responses.push({
							id: Math.random().toString(36).substring(7),
							name: "New Response",
							content: ""
						});
					},
					grow: true,
					style: { width: "100%" },
					children: "Add Response"
				}));
				(0, import_web$7.insert)(_el$, () => store.responses.map((response) => (() => {
					const _el$0 = (0, import_web$5.getNextElement)(_tmpl$3), _el$1 = _el$0.firstChild, _el$11 = _el$1.firstChild, [_el$12, _co$4] = (0, import_web$6.getNextMarker)(_el$11.nextSibling), _el$10 = _el$12.nextSibling, _el$13 = _el$1.nextSibling, [_el$14, _co$5] = (0, import_web$6.getNextMarker)(_el$13.nextSibling);
					(0, import_web$7.insert)(_el$1, (0, import_web$8.createComponent)(TextBox, {
						get value() {
							return response.name;
						},
						placeholder: "Response name",
						onInput: (value) => {
							const index = store.responses.findIndex(({ id }) => id === response.id);
							store.responses[index].name = value;
						}
					}), _el$12, _co$4);
					(0, import_web$7.insert)(_el$10, (0, import_web$8.createComponent)(Button, {
						get color() {
							return ButtonColors.RED;
						},
						get size() {
							return ButtonSizes.MEDIUM;
						},
						onClick: () => {
							store.responses.splice(store.responses.findIndex(({ id }) => id === response.id), 1);
							store.responses = [...store.responses];
						},
						children: "Delete"
					}));
					(0, import_web$7.insert)(_el$0, (0, import_web$8.createComponent)(TextArea, {
						get value() {
							return response.content;
						},
						placeholder: "Message content",
						onInput: (value) => {
							const index = store.responses.findIndex(({ id }) => id === response.id);
							store.responses[index].content = value;
						}
					}), _el$14, _co$5);
					return _el$0;
				})()), _el$4, _co$);
				return _el$;
			} }),
			(0, import_web$8.createComponent)(ModalFooter, { get children() {
				const _el$5 = (0, import_web$5.getNextElement)(_tmpl$2), _el$6 = _el$5.firstChild, [_el$7, _co$2] = (0, import_web$6.getNextMarker)(_el$6.nextSibling), _el$8 = _el$7.nextSibling, [_el$9, _co$3] = (0, import_web$6.getNextMarker)(_el$8.nextSibling);
				(0, import_web$7.insert)(_el$5, (0, import_web$8.createComponent)(Button, {
					onClick: () => {
						navigator.clipboard.writeText(JSON.stringify(store.responses));
						showToast({
							title: "Exported",
							content: "Canned responses copied to clipboard",
							duration: 3e3
						});
					},
					grow: true,
					children: "Export"
				}), _el$7, _co$2);
				(0, import_web$7.insert)(_el$5, (0, import_web$8.createComponent)(Button, {
					onClick: async () => {
						const text = await navigator.clipboard.readText();
						store.responses = JSON.parse(text);
					},
					grow: true,
					children: "Import"
				}), _el$9, _co$3);
				return _el$5;
			} })
		];
	}
});
const appendTextToMessagebar = (text) => {
	const elem = document.querySelector("[class*=\"slateContainer\"]");
	const fiber = getFiber(elem);
	const editor = fiber.child.pendingProps.editor;
	editor.insertText(text);
};
let sendingPopup = null;
let popupButton = null;
const toggleSendingPopup = () => {
	if (sendingPopup) {
		sendingPopup.remove();
		sendingPopup = null;
		return;
	}
	const popupButtonPosition = popupButton.getBoundingClientRect();
	sendingPopup = document.body.appendChild((() => {
		const _el$15 = (0, import_web$5.getNextElement)(_tmpl$4), _el$16 = _el$15.firstChild, _el$17 = _el$16.firstChild, _el$18 = _el$17.nextSibling, [_el$19, _co$6] = (0, import_web$6.getNextMarker)(_el$18.nextSibling), _el$20 = _el$16.nextSibling;
		_el$15.style.setProperty("width", "300px");
		(0, import_web$7.insert)(_el$16, (0, import_web$8.createComponent)(Button, {
			onClick: () => {
				toggleSendingPopup();
				closeManagementModal = openModal((p) => managementModal());
			},
			children: "Manage"
		}), _el$19, _co$6);
		(0, import_web$7.insert)(_el$20, (() => {
			const _c$ = (0, import_web$4.memo)(() => store.responses.length > 0);
			return () => _c$() ? (() => {
				const _el$21 = (0, import_web$5.getNextElement)(_tmpl$5);
				_el$21.style.setProperty("display", "grid");
				_el$21.style.setProperty("gap", ".5rem");
				(0, import_web$7.insert)(_el$21, () => store.responses.map((response) => (0, import_web$8.createComponent)(Button, {
					get size() {
						return ButtonSizes.MEDIUM;
					},
					get color() {
						return ButtonColors.SECONDARY;
					},
					style: { width: "100%" },
					grow: true,
					onClick: () => {
						console.log(response.content);
						appendTextToMessagebar(response.content);
						toggleSendingPopup();
					},
					get children() {
						return response.name;
					}
				})));
				(0, import_web$3.effect)(() => _el$21.className = `${niceScrollbarsClass()} send-responses`);
				return _el$21;
			})() : (0, import_web$5.getNextElement)(_tmpl$6);
		})());
		(0, import_web$3.effect)((_p$) => {
			const _v$ = `${popupButtonPosition.top + (popupButtonPosition.height + 18)}px`, _v$2 = `${popupButtonPosition.left + popupButtonPosition.width / 2}px`, _v$3 = `translate(-50%, calc(-100% - ${popupButtonPosition.height + 18}px))`;
			_v$ !== _p$._v$ && _el$15.style.setProperty("top", _p$._v$ = _v$);
			_v$2 !== _p$._v$2 && _el$15.style.setProperty("left", _p$._v$2 = _v$2);
			_v$3 !== _p$._v$3 && _el$15.style.setProperty("transform", _p$._v$3 = _v$3);
			return _p$;
		}, {
			_v$: undefined,
			_v$2: undefined,
			_v$3: undefined
		});
		return _el$15;
	})());
	const closeOnOutsideClick = (e) => {
		if (sendingPopup?.contains(e.target)) return;
		sendingPopup?.remove();
		sendingPopup = null;
		document.removeEventListener("click", closeOnOutsideClick);
	};
	document.addEventListener("click", closeOnOutsideClick);
};
let unobserve = null;
function onLoad() {
	injectCss(`
.buttons-container {
  display: flex;
  gap: .5rem;
}

  .send-responses {
    max-height: 200px;
    overflow-y: auto;
  }
.response .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .25rem;
}

.response {
  margin-bottom: .5rem;
}

.add-response {
  margin-bottom: .75rem;
}

.send-popout {
	  background: var(--modal-background);
	color: var(--text-normal);
	border-radius: 4px;
	padding: var(--spacing-16);
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 1000;
	box-shadow: var(--elevation-stroke),var(--elevation-high);
}

.send-popout .header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.send-popout .header h3 {
	font-size: 1.1rem;
	font-weight: 600;
}

.send-popout .body {
	margin-top: var(--spacing-16);
}

.no-responses {
	text-align: center;
}

.no-responses h4 {
	font-size: 1.06rem;
	font-weight: 600;
}

.no-responses p {
	margin-top: 0;
	color: var(--text-muted);
}

.pr-2 {
  padding-right: .5rem;
}
`);
	unobserve = observeDom("[class^=\"channelTextArea\"] [class^=\"buttons\"]", (node) => {
		if (document.querySelector("#canned-responses")) return;
		const secondLastChild = node.lastChild.previousSibling;
		popupButton = node.insertBefore((() => {
			const _el$23 = (0, import_web$5.getNextElement)(_tmpl$7), _el$24 = _el$23.firstChild, _el$25 = _el$24.firstChild;
			_el$24.$$click = toggleSendingPopup;
			(0, import_web$3.effect)((_p$) => {
				const _v$4 = secondLastChild.className, _v$5 = secondLastChild.firstChild.className, _v$6 = secondLastChild.firstChild.firstChild.className;
				_v$4 !== _p$._v$4 && (_el$23.className = _p$._v$4 = _v$4);
				_v$5 !== _p$._v$5 && (_el$24.className = _p$._v$5 = _v$5);
				_v$6 !== _p$._v$6 && (_el$25.className = _p$._v$6 = _v$6);
				return _p$;
			}, {
				_v$4: undefined,
				_v$5: undefined,
				_v$6: undefined
			});
			(0, import_web$2.runHydrationEvents)();
			return _el$23;
		})(), node.firstChild);
	});
}
function onUnload() {
	unobserve();
	sendingPopup?.remove();
}
(0, import_web$1.delegateEvents)(["click"]);

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
return exports;
})({});