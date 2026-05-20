# Guidebook PDF → JSON Preparation Workflow

This project **does not read PDFs at runtime**. Convert each deck guidebook PDF offline into JSON files under `data/guidebooks/`.

## Target format

Use `data/guidebooks/guidebook.schema.json` as the canonical JSON shape.

Each card entry must include:
- `deckId`
- `cardId`
- `cardName`
- `uprightKeywords`
- `uprightOriginalGuidebookText`
- `reversedKeywords`
- `reversedOriginalGuidebookText`
- `notes` (optional)

## Files to prepare for two custom decks

1. `data/guidebooks/<deck-one>.guidebook.json`
2. `data/guidebooks/<deck-two>.guidebook.json`

You can start from:
- `data/guidebooks/mystic-arcana.guidebook.json` (sample data)
- `data/guidebooks/starlight-visions.guidebook.template.json` (template)

## Conversion steps

1. Extract text from each PDF using your preferred offline tool.
2. Normalize card names and map them to stable `cardId` values (kebab-case recommended).
3. Split each card write-up into upright and reversed sections.
4. Create concise keyword arrays for upright/reversed.
5. Fill optional `notes` with editor remarks, caveats, or interpretation hints.
6. Validate against `guidebook.schema.json` before committing.

## Mapping guidance

- Keep `deckId` identical for every card in a file.
- Keep `cardId` stable over time; do not use display text as an id.
- Preserve original guidebook wording in the `...OriginalGuidebookText` fields.
- Add transformation metadata to file-level `source` when needed (e.g., extraction tool + date).

## Future Supabase compatibility

This JSON structure is intentionally row-friendly:
- one card entry = one row candidate
- compound key candidate: (`deckId`, `cardId`)
- optional `notes` can map to nullable text columns

This allows straightforward import into a future `guidebook_entries` table without changing the app runtime flow.
