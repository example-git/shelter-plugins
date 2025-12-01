const {
  plugin: { store },
  ui: { TextBox, TextArea, Text, SwitchItem },
} = shelter;

export default () => (
  <>
    <Text>OpenAI Key</Text>
    <TextBox
      placeholder="sk-..."
      value={store.openaiKey}
      onInput={(value) => {
        store.openaiKey = value;
      }}
    />

    <Text>Model</Text>
    <TextBox
      placeholder="gpt-3.5-turbo"
      value={store.model || "gpt-3.5-turbo"}
      onInput={(value) => {
        store.model = value;
      }}
    />

    <SwitchItem
      value={store.defaultEnabled ?? false}
      onChange={(v) => {
        store.defaultEnabled = v;
      }}
    >
      Start enabled
    </SwitchItem>

    <Text>History Count</Text>
    <TextBox
      type="number"
      min={1}
      max={50}
      placeholder="10"
      value={store.historyCount || 10}
      onInput={(value) => {
        const parsed = parseInt(value, 10);
        if (!Number.isNaN(parsed)) store.historyCount = parsed;
      }}
    />

    <Text>Debounce (ms)</Text>
    <TextBox
      type="number"
      min={50}
      max={2000}
      placeholder="200"
      value={store.debounceMs || 200}
      onInput={(value) => {
        const parsed = parseInt(value, 10);
        if (!Number.isNaN(parsed)) store.debounceMs = parsed;
      }}
    />

    <Text>Preset Prompt</Text>
    <TextArea
      placeholder="Context or instructions to prepend to chat"
      value={store.prompt || ""}
      onInput={(value) => {
        store.prompt = value;
      }}
    />

    <Text>Character Presets (JSON array)</Text>
    <TextArea
      placeholder='[{"name":"Pirate","system":"Always speak like a pirate."}]'
      value={store.characterPresets || ""}
      onInput={(value) => {
        store.characterPresets = value;
      }}
    />

    <Text>Selected Character</Text>
    <TextBox
      placeholder="Pirate"
      value={store.selectedCharacter || ""}
      onInput={(value) => {
        store.selectedCharacter = value;
      }}
    />
  </>
);
