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
//#region plugins/gpt/settings.jsx
var import_web$7 = __toESM(require_web(), 1);
var import_web$8 = __toESM(require_web(), 1);
const { plugin: { store: store$1 }, ui: { TextBox, TextArea, Text, SwitchItem } } = shelter;
var settings_default = () => [
	(0, import_web$8.createComponent)(Text, { children: "OpenAI Key" }),
	(0, import_web$8.createComponent)(TextBox, {
		placeholder: "sk-...",
		get value() {
			return store$1.openaiKey;
		},
		onInput: (value) => {
			store$1.openaiKey = value;
		}
	}),
	(0, import_web$8.createComponent)(Text, { children: "Model" }),
	(0, import_web$8.createComponent)(TextBox, {
		placeholder: "gpt-3.5-turbo",
		get value() {
			return store$1.model || "gpt-3.5-turbo";
		},
		onInput: (value) => {
			store$1.model = value;
		}
	}),
	(0, import_web$8.createComponent)(SwitchItem, {
		get value() {
			return store$1.defaultEnabled ?? false;
		},
		onChange: (v) => {
			store$1.defaultEnabled = v;
		},
		children: "Start enabled"
	}),
	(0, import_web$8.createComponent)(Text, { children: "History Count" }),
	(0, import_web$8.createComponent)(TextBox, {
		type: "number",
		min: 1,
		max: 50,
		placeholder: "10",
		get value() {
			return store$1.historyCount || 10;
		},
		onInput: (value) => {
			const parsed = parseInt(value, 10);
			if (!Number.isNaN(parsed)) store$1.historyCount = parsed;
		}
	}),
	(0, import_web$8.createComponent)(Text, { children: "Debounce (ms)" }),
	(0, import_web$8.createComponent)(TextBox, {
		type: "number",
		min: 50,
		max: 2e3,
		placeholder: "200",
		get value() {
			return store$1.debounceMs || 200;
		},
		onInput: (value) => {
			const parsed = parseInt(value, 10);
			if (!Number.isNaN(parsed)) store$1.debounceMs = parsed;
		}
	}),
	(0, import_web$8.createComponent)(Text, { children: "Preset Prompt" }),
	(0, import_web$8.createComponent)(TextArea, {
		placeholder: "Context or instructions to prepend to chat",
		get value() {
			return store$1.prompt || "";
		},
		onInput: (value) => {
			store$1.prompt = value;
		}
	}),
	(0, import_web$8.createComponent)(Text, { children: "Character Presets (JSON array)" }),
	(0, import_web$8.createComponent)(TextArea, {
		placeholder: "[{\"name\":\"Pirate\",\"system\":\"Always speak like a pirate.\"}]",
		get value() {
			return store$1.characterPresets || "";
		},
		onInput: (value) => {
			store$1.characterPresets = value;
		}
	}),
	(0, import_web$8.createComponent)(Text, { children: "Selected Character" }),
	(0, import_web$8.createComponent)(TextBox, {
		placeholder: "Pirate",
		get value() {
			return store$1.selectedCharacter || "";
		},
		onInput: (value) => {
			store$1.selectedCharacter = value;
		}
	})
];

//#endregion
//#region plugins/gpt/index.jsx
var import_web = __toESM(require_web(), 1);
var import_web$1 = __toESM(require_web(), 1);
var import_web$2 = __toESM(require_web(), 1);
var import_web$3 = __toESM(require_web(), 1);
var import_web$4 = __toESM(require_web(), 1);
var import_web$5 = __toESM(require_web(), 1);
var import_web$6 = __toESM(require_web(), 1);
const _tmpl$ = /*#__PURE__*/ (0, import_web.template)(`<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="loading-indicator" fill="white"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"></animateTransform></path></svg>`, 8), _tmpl$2 = /*#__PURE__*/ (0, import_web.template)(`<div id="gpt-toggle"><button><div><svg viewBox="0 0 315.8 320" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"><path d="m294.9 131c7.3-21.8 4.8-45.7-6.9-65.5-17.5-30.4-52.6-46-86.8-38.7-15.2-17.2-37.1-26.9-60.1-26.8-35 0-66.1 22.5-76.9 55.8-22.5 4.6-41.9 18.7-53.3 38.7-17.6 30.3-13.6 68.5 9.9 94.5-7.3 21.8-4.8 45.7 6.9 65.5 17.5 30.4 52.6 46 86.8 38.7 15.2 17.2 37.2 27 60.1 26.8 35.1 0 66.2-22.5 76.9-55.9 22.5-4.6 41.9-18.7 53.3-38.7 17.6-30.3 13.5-68.5-9.9-94.5zm-120.3 168.1c-14 0-27.6-4.9-38.4-13.9.5-.3 1.3-.7 1.9-1.1l63.7-36.8c3.3-1.9 5.3-5.3 5.2-9.1v-89.8l26.9 15.6c.3.1.5.4.5.7v74.4c0 33.1-26.8 59.9-59.9 60zm-128.8-55c-7-12.1-9.6-26.4-7.2-40.2.5.3 1.3.8 1.9 1.1l63.7 36.8c3.2 1.9 7.2 1.9 10.5 0l77.8-44.9v31.1c0 .3-.1.6-.4.8l-64.4 37.2c-28.7 16.5-65.3 6.7-81.9-21.9zm-16.8-139.1c7-12.2 18-21.5 31.2-26.3v2.2 73.6c0 3.7 2 7.2 5.2 9.1l77.8 44.9-26.9 15.6c-.3.2-.6.2-.9 0l-64.4-37.2c-28.6-16.6-38.5-53.2-22-81.9zm221.3 51.5-77.8-44.9 26.9-15.5c.3-.2.6-.2.9 0l64.4 37.2c28.7 16.6 38.5 53.3 21.9 81.9-7 12.1-18 21.4-31.2 26.3v-75.8c0-3.7-2-7.2-5.2-9.1zm26.8-40.3c-.5-.3-1.3-.8-1.9-1.1l-63.7-36.8c-3.2-1.9-7.2-1.9-10.5 0l-77.8 44.9v-31.1c0-.3.1-.6.4-.8l64.4-37.2c28.7-16.5 65.4-6.7 81.9 22 7 12.1 9.5 26.3 7.1 40.1zm-168.5 55.4-26.9-15.6c-.3-.1-.5-.4-.5-.7v-74.4c0-33.1 26.9-60 60-59.9 14 0 27.6 4.9 38.3 13.9-.5.3-1.3.7-1.9 1.1l-63.7 36.8c-3.3 1.8-5.3 5.3-5.2 9.1v89.8s0 0 0 0zm14.6-31.5 34.7-20 34.7 20v40l-34.6 20-34.7-20v-40z"></path></svg></div></button></div>`, 10);
const { observeDom, ui: { injectCss, ReactiveRoot }, plugin: { store }, util: { getFiber } } = shelter;
let popupButton = null;
let unobserveButtons = null;
let unobserveMessages = null;
let processing = false;
let pending = false;
let debounceTimer = null;
const MODEL_CHECK_TTL = 6e5;
const getMessageHistory = () => {
	const messageElements = document.querySelectorAll("div[class^=\"message-\"]");
	const messages = [...messageElements].map((message) => ({
		username: message.querySelector("h3 > span > span")?.textContent,
		message: message.querySelector("div > div > div")?.textContent || ""
	}));
	return messages.reduce((acc, message) => {
		if (message.username) acc.push(message);
else if (acc.length) acc[acc.length - 1].message += `\n${message.message}`;
		return acc;
	}, []);
};
const loadingIndicator = () => (0, import_web$6.getNextElement)(_tmpl$);
const appendTextToMessagebar = (text) => {
	const elem = document.querySelector("[class*=\"slateContainer\"]");
	if (!elem) return;
	const fiber = getFiber(elem);
	const editor = fiber.child.pendingProps.editor;
	editor.insertText(text);
};
const setEnabled = (value) => {
	store.enabled = !!value;
	popupButton?.classList.toggle("on", store.enabled);
	popupButton?.classList.toggle("off", !store.enabled);
	popupButton?.querySelector("button")?.setAttribute("aria-pressed", store.enabled ? "true" : "false");
	if (store.enabled) startMessageObserver();
else stopMessageObserver();
};
const parseCharacterPresets = () => {
	if (!store.characterPresets) return [];
	try {
		const parsed = JSON.parse(store.characterPresets);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
};
const getSelectedCharacter = () => {
	const presets = parseCharacterPresets();
	if (!presets.length) return null;
	if (store.selectedCharacter) return presets.find((p) => p.name && typeof p.name === "string" && p.name.toLowerCase() === store.selectedCharacter.toLowerCase()) || null;
	return presets[0];
};
const ensureModelAvailable = async (model) => {
	if (!store.openaiKey) return false;
	const now = Date.now();
	if (store.modelStatus && store.modelStatus.model === model && now - (store.modelStatus.ts || 0) < MODEL_CHECK_TTL) return store.modelStatus.ok;
	try {
		const res = await fetch(`https://api.openai.com/v1/models/${model}`, { headers: { Authorization: `Bearer ${store.openaiKey}` } });
		const ok = res.ok;
		store.modelStatus = {
			model,
			ok,
			ts: now
		};
		return ok;
	} catch (err) {
		console.error("[gpt plugin] model availability check failed", err);
		store.modelStatus = {
			model,
			ok: false,
			ts: now
		};
		return false;
	}
};
const sendToApi = async () => {
	if (!store.enabled) return;
	const model = store.model || "gpt-3.5-turbo";
	const prompt = store.prompt || "";
	const historyCount = store.historyCount || 10;
	if (!store.openaiKey) return;
	const modelOk = await ensureModelAvailable(model);
	if (!modelOk) {
		console.warn("[gpt plugin] Model not available or API key invalid; skipping send");
		return;
	}
	const myUsername = document.querySelector("[class^=nameTag] > div")?.textContent || "User";
	const character = getSelectedCharacter();
	const characterPrompt = character ? `You are roleplaying as "${character.name}". ${character.system || ""} ${character.style || ""}` : "";
	const messages = [
		...prompt ? [{
			role: "system",
			content: prompt
		}] : [],
		...characterPrompt ? [{
			role: "system",
			content: characterPrompt
		}] : [],
		...getMessageHistory().slice(-historyCount).map((message) => ({
			role: "user",
			content: `${message.username}: ${message.message}`
		})),
		{
			role: "system",
			content: `Rewrite user messages as "${myUsername}" speaking in-character as ${character?.name || "the chosen persona"}, keeping the same meaning but reflecting the persona.`
		}
	];
	const messageBar = document.querySelector("[class*=\"slateContainer\"]");
	const loadingIndicatorElem = messageBar ? document.body.appendChild(loadingIndicator()) : null;
	if (loadingIndicatorElem && messageBar) {
		const { x, y } = messageBar.getBoundingClientRect();
		loadingIndicatorElem.style.position = "absolute";
		loadingIndicatorElem.style.left = `${x}px`;
		loadingIndicatorElem.style.top = `${y + 12}px`;
		loadingIndicatorElem.style.zIndex = 1e3;
	}
	try {
		const res = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${store.openaiKey}`
			},
			body: JSON.stringify({
				model,
				messages
			})
		}).then((r) => r.json());
		const response = res.choices?.[0]?.message?.content;
		if (response) appendTextToMessagebar(response.replace(/^(?=.{0,49}:)([\w\s-]+?[^ ]):/, "").trim());
	} catch (err) {
		console.error("[gpt plugin] failed to contact API", err);
	} finally {
		loadingIndicatorElem?.remove();
	}
};
const scheduleSend = () => {
	if (!store.enabled) return;
	clearTimeout(debounceTimer);
	debounceTimer = setTimeout(() => triggerSend(), store.debounceMs || 200);
};
const triggerSend = () => {
	if (!store.enabled) return;
	if (processing) {
		pending = true;
		return;
	}
	processing = true;
	sendToApi().finally(() => {
		processing = false;
		if (pending) {
			pending = false;
			triggerSend();
		}
	});
};
const startMessageObserver = () => {
	if (unobserveMessages) return;
	unobserveMessages = observeDom("[class^=\"message-\"]:not([data-gpt-observed])", (node) => {
		node.dataset.gptObserved = "1";
		if (!store.enabled) return;
		scheduleSend();
	});
};
const stopMessageObserver = () => {
	unobserveMessages?.();
	unobserveMessages = null;
};
function onLoad() {
	store.enabled = store.enabled ?? store.defaultEnabled ?? false;
	store.model = store.model || "gpt-3.5-turbo";
	store.prompt = store.prompt || "";
	store.historyCount = store.historyCount || 10;
	store.debounceMs = store.debounceMs || 200;
	store.characterPresets = store.characterPresets || JSON.stringify([{
		name: "Pirate",
		system: "Always speak like a pirate, with nautical slang.",
		style: "Be jovial and mischievous."
	}, {
		name: "Sherlock",
		system: "Reply like Sherlock Holmes, precise, deductive, slightly aloof.",
		style: "Use British English spelling."
	}], null, 2);
	store.selectedCharacter = store.selectedCharacter || "Pirate";
	injectCss(`
  .gpt-toggle {
    transition: filter .15s ease, opacity .15s ease;
  }

  .gpt-toggle button {
    transition: box-shadow .15s ease, opacity .15s ease, color .15s ease;
  }

  .gpt-toggle.on button {
    color: var(--text-normal);
    box-shadow: 0 0 0 2px rgba(88, 166, 255, .45);
    filter: drop-shadow(0 0 8px rgba(88, 166, 255, .45));
  }

  .gpt-toggle.on svg {
    color: var(--brand-500);
  }

  .gpt-toggle.off button {
    opacity: .65;
  }

  .gpt-toggle.off svg {
    color: var(--text-muted);
  }

  .gpt-toggle button:focus-visible {
    outline: 2px solid var(--brand-500);
    outline-offset: 2px;
  }
  `);
	unobserveButtons = observeDom("[class^=\"channelTextArea\"] [class^=\"buttons\"]", (node) => {
		if (document.querySelector("#gpt-toggle")) return;
		if (!node || !node.lastChild) return;
		const secondLastChild = node.lastChild?.previousSibling || node.lastChild || node.firstChild;
		if (!secondLastChild || !secondLastChild.firstChild) return;
		popupButton = node.insertBefore((0, import_web$2.createComponent)(ReactiveRoot, { get children() {
			const _el$2 = (0, import_web$6.getNextElement)(_tmpl$2), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild;
			_el$3.$$click = () => {
				const next = !store.enabled;
				setEnabled(next);
				if (next) triggerSend();
			};
			(0, import_web$4.effect)((_p$) => {
				const _v$ = `${secondLastChild.className} gpt-toggle ${store.enabled ? "on" : "off"}`, _v$2 = secondLastChild.firstChild.className, _v$3 = store.enabled, _v$4 = store.enabled ? "GPT auto-generation is enabled" : "GPT auto-generation is disabled", _v$5 = secondLastChild.firstChild.firstChild.className;
				_v$ !== _p$._v$ && (_el$2.className = _p$._v$ = _v$);
				_v$2 !== _p$._v$2 && (_el$3.className = _p$._v$2 = _v$2);
				_v$3 !== _p$._v$3 && (0, import_web$3.setAttribute)(_el$3, "aria-pressed", _p$._v$3 = _v$3);
				_v$4 !== _p$._v$4 && (0, import_web$3.setAttribute)(_el$3, "title", _p$._v$4 = _v$4);
				_v$5 !== _p$._v$5 && (_el$4.className = _p$._v$5 = _v$5);
				return _p$;
			}, {
				_v$: undefined,
				_v$2: undefined,
				_v$3: undefined,
				_v$4: undefined,
				_v$5: undefined
			});
			(0, import_web$5.runHydrationEvents)();
			return _el$2;
		} }), node.firstChild);
		setEnabled(store.enabled);
	});
	startMessageObserver();
}
function onUnload() {
	unobserveButtons?.();
	stopMessageObserver();
	popupButton?.remove();
}
(0, import_web$1.delegateEvents)(["click"]);

//#endregion
exports.onLoad = onLoad
exports.onUnload = onUnload
exports.settings = settings_default
return exports;
})({});